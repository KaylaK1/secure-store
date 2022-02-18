# SecureStore Expo

Provides a way to encrypt and securely store key-value pairs on devices. Each expo project does not have access to the storage of other Expo projects (iOS standalone apps are an exception - can persist across app installs).

iOS: Stored using keychain services (1) as `kSecClassGenericPassword`. Can also set `kSecAttrAccessible` attribute (controls when the value is available to be fetched)

Android: Stored in SharedPreferences (2) with Android's Keystore system (3).

Values greater than 2048 bytes may fail.

## Installation an usage

`expo install expo-secure-store`

If installing in a bare React Native application (Not being managed Expo) - run `npx pod-install` for iOS configuration as well. (4)

### Sources

https://docs.expo.dev/versions/latest/sdk/securestore/

(1) https://developer.apple.com/documentation/security/keychain_services

(2) https://developer.android.com/training/data-storage/shared-preferences

(3) https://developer.android.com/training/articles/keystore

(4) https://github.com/expo/expo/tree/main/packages/expo-secure-store
