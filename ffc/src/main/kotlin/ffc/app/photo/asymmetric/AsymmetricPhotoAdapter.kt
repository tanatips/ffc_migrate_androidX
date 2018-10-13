package ffc.app.photo.asymmetric

import android.app.Activity
import android.graphics.Color
import android.graphics.drawable.ColorDrawable
import android.net.Uri
import android.support.v7.widget.RecyclerView
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import com.felipecsl.asymmetricgridview.AGVRecyclerViewAdapter
import com.felipecsl.asymmetricgridview.AsymmetricItem
import com.felipecsl.asymmetricgridview.AsymmetricRecyclerView
import com.felipecsl.asymmetricgridview.AsymmetricRecyclerViewAdapter
import ffc.android.SpacesItemDecoration
import ffc.android.load
import ffc.android.onClick
import ffc.android.onLongClick
import ffc.android.sceneTransition
import ffc.app.R
import ffc.app.photo.asymmetric.item.PairImageMapper
import ffc.app.photo.asymmetric.item.SingleImageMapper
import ffc.app.photo.asymmetric.item.TrippleImageMapper
import ffc.app.photo.asymmetric.item.itemMapperFor
import ffc.app.photo.viewPhoto
import ffc.app.util.AdapterClickListener
import org.jetbrains.anko.dip

internal class AsymmetricPhotoAdapter(
    private val items: List<ItemImage>,
    private val onPhotoClickDsl: AdapterClickListener<Uri>.() -> Unit = {}
) : AGVRecyclerViewAdapter<ViewHolder>() {

    private val listener = AdapterClickListener<Uri>().apply(onPhotoClickDsl)
    private val maxDisplay = 4
    private val displayItem: Int = if (items.size >= maxDisplay) maxDisplay else items.size

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val view = LayoutInflater.from(parent.context).inflate(R.layout.photo_item, parent, false)
        return ViewHolder(view, listener)
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        holder.bind(items, position, displayItem, items.size)
    }

    override fun getItemCount(): Int {
        return displayItem
    }

    override fun getItem(position: Int): AsymmetricItem {
        return items[position]
    }
}

internal class ViewHolder(view: View, val listener: AdapterClickListener<Uri>) : RecyclerView.ViewHolder(view) {

    private val imageView: ImageView = itemView.findViewById(R.id.mImageView)
    private val textView: TextView = itemView.findViewById(R.id.tvCount)

    fun bind(item: List<ItemImage>, position: Int, mDisplay: Int, mTotal: Int) {
        val uri = Uri.parse(item.get(position).imagePath)
        imageView.load(uri)
        textView.text = "+" + (mTotal - mDisplay)
        if (mTotal > mDisplay) {
            if (position == mDisplay - 1) {
                textView.visibility = View.VISIBLE
                imageView.setAlpha(72)
            } else {
                textView.visibility = View.GONE
                imageView.setAlpha(255)
            }
        } else {
            imageView.setAlpha(255)
            textView.visibility = View.GONE
        }
        listener.bindOnViewClick(itemView, uri, imageView)
    }
}

fun AsymmetricRecyclerView.bind(urls: List<String>) {
    val mapper = itemMapperFor(urls)
    setRequestedColumnCount(mapper.requestColumns)
    setDebugging(true)
    requestedHorizontalSpacing = dip(3)
    addItemDecoration(SpacesItemDecoration(dip(3)))
    val itemAdapter = AsymmetricPhotoAdapter(mapper.item) {
        onViewClick { view, uri ->
            val activity = context as Activity
            activity.viewPhoto(uri, activity.sceneTransition(view to activity.getString(R.string.transition_photo)))
        }
    }
    adapter = AsymmetricRecyclerViewAdapter(context, this, itemAdapter)
}
