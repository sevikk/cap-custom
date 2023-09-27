import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'cap-custom',
  webDir: 'dist/cap-custom',
  server: {
    androidScheme: 'https'
  }
};

export default config;
