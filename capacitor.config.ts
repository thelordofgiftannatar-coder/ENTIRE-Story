import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.primeone.musicplayer',
  appName: 'Prime One',
  webDir: 'www',
  bundledWebRuntime: false,
  android: {
    allowMixedContent: false
  }
};

export default config;
