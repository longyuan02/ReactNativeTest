package com.awesomeprojectnew;

import android.widget.ImageView;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

import javax.annotation.Nonnull;

public class ReactImageManager extends SimpleViewManager<ImageView> {
    public static final String REACT_CLASS = "GIFImageView";
    @Nonnull
    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Nonnull
    @Override
    protected ImageView createViewInstance(@Nonnull ThemedReactContext reactContext) {
        return new ImageView(reactContext);
    }
    @ReactProp(name = "imageName")
    public void setImageSrc(final ImageView image, String url) {
        // 加载url对应的图片
//        Bitmap bitmap = loadBitmap(url)
        image.setImageResource(R.mipmap.ic_launcher);
    }
}
