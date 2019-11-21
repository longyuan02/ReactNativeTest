package com.awesomeprojectnew;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;

import com.facebook.react.HeadlessJsTaskService;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.jstasks.HeadlessJsTaskConfig;

import javax.annotation.Nullable;

public class MyTaskService extends HeadlessJsTaskService {
    @Nullable
    @Override
    protected HeadlessJsTaskConfig getTaskConfig(Intent intent) {
        Bundle bundle = intent.getExtras();
        if (bundle != null) {
            Log.e("print======","getTaskConfig");
            return new HeadlessJsTaskConfig("SomeTaskName", Arguments.fromBundle(bundle), 2000, false);
        }
        return null;
    }
}
