# BasicProject App React Native

Clone this repo
```console
git clone https://github.com/AlinaRadyk/BasicApp.git
```

## Set up Environment
- Make sure you have installed
   - [Android Studio](https://developer.android.com/studio)
   - [Xcode](https://apps.apple.com/us/app/xcode/id497799835?mt=12)
- Install [Node Version Manager](https://github.com/nvm-sh/nvm/blob/master/README.md)
- Run auto-installation with `install.sh` file
  ```console
  sh install.sh
  ```

### IOS

- In the ios directory (`cd ios`) run `pod install`
- Open the `ios/BasicProject.xcodeproj` directory in Xcode
- Run the build command
- Now you can run the app by `react-native run-ios` from the root of the project

### Android

Run the command from your project console
```bash
yarn android
```

## Global React Native Style Guide:

https://github.com/airbnb/javascript

### Troubleshooting

- **Packager can't find a dependency:**
    ```bash
    watchman watch-del-all && yarn start -- --reset-cache
    ```

- **What other caches can I clean?:**
    ```bash
    rm -rf node-modules && yarn
    ```

- **Pod is hopelessly messed up:**
    ```bash
    cd ios;
    rm -rf ~/Library/Caches/CocoaPods; rm -rf Pods;
    rm -rf ~/Library/Developer/Xcode/DerivedData/*;
    pod deintegrate; pod setup; pod install;
    ```
