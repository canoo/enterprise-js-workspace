Exercise - Cordova
==================

## install cordova module

```bash
sudo npm install -g cordova
```
(make sure you have a recent node.js version >=v0.10.18)

## create a cordova project

```bash
cd ~/enterprise-js-workspace/70-exercise-cordova
```

```bash
cordova create mobile com.canoo.enterprisejs.mobile MyNotes
```

add your favorite mobile platform (make sure you have the appropriate SDK installed)
```bash
cordova platform add ios|android
```

## set grunt build

run grunt
```bash
grunt
```

## open native mobile project and deploy

XCode, Android Studio ...

