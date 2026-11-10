# Prime One — Android APK project

This repository packages the supplied Prime One HTML app inside an Android WebView using Capacitor.
GitHub Actions builds a debug APK whenever you push to `main`, or when you run the workflow manually.

## Build an APK with GitHub

1. Create a new empty repository on GitHub (for example `prime-one-android`).
2. Upload the **contents** of this ZIP to the repository's `main` branch. Keep the `.github` folder.
3. Open the repository's **Actions** tab.
4. Select **Build Prime One Android APK** and choose **Run workflow**, or wait for the first push build.
5. When the run finishes successfully, open that run and download the `Prime-One-debug-APK` artifact.
6. Extract the downloaded artifact ZIP. Install `app-debug.apk` on your Android device. You may need to allow installation from your browser/file manager.

## Important notes

- This creates a **debug APK** for testing. A public Play Store release should use a signed release build and a securely stored signing key.
- The uploaded HTML is a compiled web app. This wrapper does not recreate any missing backend services.
- The HTML contains calls to `/api/export/github-zip` and `${ZT()}/api/gemini/chat`. Those endpoints need a compatible hosted backend; they will not be supplied by this Android wrapper. Features relying on those endpoints may not work until configured.
- Google Drive / Google sign-in may require OAuth configuration for the Android app's package name and signing certificate. Test those flows on a real device.
- Browser-only capabilities vary inside Android WebView. Validate audio import, background playback, notifications, media controls, and storage on your device.
- The manifest permissions are added as a starting point. Android runtime permission prompts and foreground playback behavior may need native integration for a production-grade player.
- Do not commit API keys, OAuth client secrets, or Android signing keys to this repository.

## App identity

- App name: Prime One
- Android application ID: `com.primeone.musicplayer`
- Web app entry: `www/index.html`
