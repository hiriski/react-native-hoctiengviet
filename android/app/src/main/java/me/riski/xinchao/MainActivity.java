package me.riski.xinchao;

import com.facebook.react.ReactActivity;
import android.os.Bundle; // required for onCreate parameter
import org.devio.rn.splashscreen.SplashScreen; // required for react-native-splash-screen >= 0.3.1

public class MainActivity extends ReactActivity {
  
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    // SplashScreen.show(this);
    SplashScreen.show(this, R.style.SplashScreenTheme);
    super.onCreate(savedInstanceState);
  }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "XinChao";
  }

}
