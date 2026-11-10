import fs from 'node:fs';

const manifest = 'android/app/src/main/AndroidManifest.xml';
if (!fs.existsSync(manifest)) {
  throw new Error(`Android manifest not found: ${manifest}`);
}

let xml = fs.readFileSync(manifest, 'utf8');
const permissions = [
  'android.permission.READ_MEDIA_AUDIO',
  'android.permission.READ_MEDIA_IMAGES',
  'android.permission.READ_MEDIA_VIDEO',
  'android.permission.POST_NOTIFICATIONS',
  'android.permission.FOREGROUND_SERVICE',
  'android.permission.FOREGROUND_SERVICE_MEDIA_PLAYBACK',
  'android.permission.WAKE_LOCK',
  'android.permission.BLUETOOTH_CONNECT'
];

const additions = permissions
  .filter(permission => !xml.includes(`android:name="${permission}"`))
  .map(permission => `    <uses-permission android:name="${permission}" />`)
  .join('\n');

if (additions) {
  xml = xml.replace('<application', `${additions}\n    <application`);
  fs.writeFileSync(manifest, xml);
}
