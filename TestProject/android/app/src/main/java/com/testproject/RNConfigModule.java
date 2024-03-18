package com.testproject;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.Map;
import java.util.HashMap;

public class RNConfigModule extends ReactContextBaseJavaModule {

    String baseUrl;
    String env;

    RNConfigModule(ReactApplicationContext context) {
        super(context);
        baseUrl = context.getResources().getString(R.string.base_url);
        env = context.getResources().getString(R.string.BUILD_ENV);
    }

    @Override 
    public String getName() {
        return "RNConfig";
    } 

    @Override 
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put("BASE_URL", baseUrl);
        constants.put("BUILD_ENV", env);
        constants.put("env", BuildConfig.FLAVOR);
        return constants;
    }
}
