package ffc.app.asm

//import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import ffc.android.onClick
import ffc.app.R
import kotlinx.android.synthetic.main.activity_home_list.toolbar
import kotlinx.android.synthetic.main.activity_home_list.viewPager
import kotlinx.android.synthetic.main.activity_home_list.tabLayout
import kotlinx.android.synthetic.main.activity_home_list.homeAsUp

import org.jetbrains.anko.design.tabItem
import org.jetbrains.anko.design.tabLayout

class HomeListActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_home_list)
        supportActionBar?.setDisplayHomeAsUpEnabled(true)
        toolbar.setTitle("Tab Layout")
        //setSupportActionBar(toolbar)

        val fragmentAdapter = MyPagerAdapter(supportFragmentManager);
        viewPager.adapter = fragmentAdapter
        tabLayout.setupWithViewPager(viewPager)
        homeAsUp.onClick {
            finish();
        }
    }
}
