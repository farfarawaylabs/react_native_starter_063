# React Native Starter

This project can be used to fast start your React Native development. It contains a React Native project configured with sensible list of packages almost any project needs.

## React Native

This project is based on React Native 0.62.3 and is using the TypeScript enabled template.

## How to use

Simply download the source code and use the react-native-rename package to rename the project. After renaming, search for the string "com.react_native_starter" and make sure all Java files were renamed correctly
See more info here: https://www.npmjs.com/package/react-native-rename

### Additional instructions

- To utilize react-native-permissions you need to edit your Pod file, your info.plist file and AndroidManifest.xml. and enable the permission you want to ask for. I left all the possible options commented out in each file

- If you are checking out the master the project configured default splash screen. To make it your own you will need to do the following:

1. For iOS, open the Images.xcasssets and replace the icons in the SplashIcon asset

2. For Android first replace the images named splash_screen.png with your own images (under android/app/src/main/res and each of the different resolution subfolders).

3. Search the repository for #424242 and replace it with the splash screen background color of your choice.

for more info check out this tutorial: https://medium.com/@appstud/add-a-splash-screen-to-a-react-native-app-810492e773f9

## Commits

Each commit represent addition of a different package so you can easily pull from the commit you want. Each commit message describe what package was added to the project

## Tags

There are also a few tags you can pull from, each representing "a milestone" in the project. Each tag is built on top of the other.

### BASE Tag

This tag contains the following packages:

- react-native-vector-icons
- @react-native-community/async-storage
- React Navigation (all required pacakges including Stack)
- axios
- react-native-device-info
- react-native-keyboard-aware-scroll-view

### BASE_PLUS_REDUX Tag

This tag adds the redux packages:

- redux
- react-redux
- @reduxjs/toolkit

### BASE_FULLY_LOADED

This tag adds additional useful packages:

- react-native-animatable
- @react-native-community/react-native-permissions
- @farfarawaylabs/react-native-layout
- @farfarawaylabs/react-native-beautiful-notifications
- react-native-splash-screen

### ELEMENTS Tag

This tag adds additional useful packages:

- react-native-elements

### STRUCTURE Tag

This tag adds the basic structure folders for the project. You can find all the new folders under the src folder.
Each of the new folder also has its own package.json file which allows you to import things in a much more efficient way. For example:

import X from 'screens/screenX'
instead of:
import X from '../../../screens/screenX'
