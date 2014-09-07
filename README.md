<h3>The easy way</h3>
<p>
Use <a target="_blank" href="https://build.phonegap.com/">Phonegap Build</a>
</p>

<h3>The hard way</h3>
<p>
Build and install on an Android device

<ol>
<li>get phonegap installed (npm install -g phonegap) and your android sdk set up (http://docs.phonegap.com/en/edge/guide_platforms_android_index.md.html#Android%20Platform%20Guide)</li>
<li>mkdir .cordova platform plugins</li>
<li>phonegap plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-inappbrowser.git</li>
<li>phonegap build android</li>
<li>connect android device to usb.</li>
<li>phonegap install android</li>
</ol>
</p>

<p>
Build and install on an iOS device

<ol>
<li>get phonegap installed on your mac and do whatever other nonsensical mac activities might be necessary.
Once you figure it out, update this README.
</li>
<li>mkdir .cordova platform plugins</li>
<li>phonegap plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-inappbrowser.git</li>
<li>phonegap build ios</li>
<li>connect ios device to usb or... lighting or whatever apple is making you buy these days.</li>
<li>phonegap install ios</li>
</ol>
</p>
