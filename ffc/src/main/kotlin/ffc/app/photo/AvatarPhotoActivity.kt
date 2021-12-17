package ffc.app.photo

import android.app.Activity
import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.view.MenuItem
import android.view.View
import com.sembozdemir.permissionskt.askPermissions
import com.sembozdemir.permissionskt.handlePermissionsResult
import ffc.android.load
import ffc.android.onClick
import ffc.android.sceneTransition
import ffc.app.FamilyFolderActivity
import ffc.app.R
import ffc.app.dev
import ffc.app.util.alert.handle
import ffc.app.util.alert.toast
import kotlinx.android.synthetic.main.photo_action_bar.choosePhoto
import kotlinx.android.synthetic.main.photo_action_bar.takePhoto
import kotlinx.android.synthetic.main.photo_avatar_activity.avatarView
import me.piruin.phototaker.PhotoSize
import me.piruin.phototaker.PhotoTaker
import me.piruin.phototaker.PhotoTakerListener
import org.jetbrains.anko.dip
import org.jetbrains.anko.indeterminateProgressDialog
import org.jetbrains.anko.intentFor

class AvatarPhotoActivity : FamilyFolderActivity() {

    private val photoTaker by lazy {
        PhotoTaker(this, PhotoSize(dip(1024), dip(1024))).apply {
            setListener(object : PhotoTakerListener {
                override fun onFinish(intent: Intent) {
                    photoUri = UriPhoto(intent.data!!)
                    avatarView.load(intent.data!!)
                }

                override fun onCancel(action: Int) {}

                override fun onError(action: Int) {}
            })
        }
    }

    private var previousPhotoUrl: UrlPhoto? = null
    var photoUri: Photo? = null

    private val storage: PhotoStorage
        get() = org!!.photoStorageFor(intent.photoType)

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.photo_avatar_activity)

        supportActionBar?.setDisplayHomeAsUpEnabled(true)

        intent.data?.let {
            previousPhotoUrl = UrlPhoto(it.toString())
            avatarView.load(it)
        }

        takePhoto.onClick {
            askPermissions(android.Manifest.permission.WRITE_EXTERNAL_STORAGE) {
                onGranted {
                    photoTaker.captureImage()
                }
            }
        }
        choosePhoto.onClick {
            askPermissions(android.Manifest.permission.WRITE_EXTERNAL_STORAGE) {
                onGranted {
                    photoTaker.pickImage()
                }
            }
        }
    }

    override fun onRequestPermissionsResult(requestCode: Int, permissions: Array<out String>, grantResults: IntArray) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults)
        handlePermissionsResult(requestCode, permissions, grantResults)
    }

    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.onActivityResult(requestCode, resultCode, data)
        photoTaker.onActivityResult(requestCode, resultCode, data)
    }

    override fun onOptionsItemSelected(item: MenuItem): Boolean {
        when (item?.itemId) {
            android.R.id.home -> {
                if (photoUri == null) finish()
                photoUri?.let { photo -> upload(photo) }
            }
        }
        return super.onOptionsItemSelected(item)
    }

    private fun upload(photo: Photo) {
        val dialog = indeterminateProgressDialog("บันทึกภาพถ่าย").apply { show() }
        storage.save(photo.uri) {
            onComplete {
                delete(previousPhotoUrl)
                dialog.dismiss()
                setResult(Activity.RESULT_OK, Intent().apply { data = it })
                finish()
            }
            onFail {
                handle(it)
            }
        }
    }

    private fun delete(photo: Photo?) {
        photo?.let { photo ->
            storage.delete(photo.uri) {
                onComplete { dev { toast("Deleted ${photo.uri}") } }
                onFail { handle(it) }
            }
        }
    }
}

fun Activity.startAvatarPhotoActivity(
    type: PhotoType,
    url: String? = null,
    avatarView: View? = null,
    requestCode: Int = REQUEST_TAKE_PHOTO
) {
    val intent = intentFor<AvatarPhotoActivity>()
    intent.photoType = type
    url?.let { intent.data = Uri.parse(it) }
    val bundle = if (avatarView == null)
        sceneTransition()
    else
        sceneTransition(avatarView to getString(R.string.transition_photo))
    startActivityForResult(intent, requestCode, bundle)
}
