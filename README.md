Build and install on an Android device

1. get phonegap installed (npm install -g phonegap) and your android sdk set up (http://docs.phonegap.com/en/edge/guide_platforms_android_index.md.html#Android%20Platform%20Guide)
2. mkdir .cordova platform plugins
3. phonegap plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-inappbrowser.git
4. phonegap build android
5. connect android device to usb.
6. phonegap install android

Build and install on an iOS device

1. get phonegap installed on your mac and do whatever other nonsensical mac activities might be necessary. 
Once you figure it out, update this README.
2. mkdir .cordova platform plugins
3. phonegap plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-inappbrowser.git
4. phonegap build ios
5. connect ios device to usb or... lighting or whatever apple is making you buy these days.
6. phonegap install ios
