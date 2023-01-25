import { useEffect } from 'react';
import { NativeModules, Platform } from 'react-native';

const { DeviceCheck } = NativeModules;

const isEmulator = async () => {
  if (Platform.OS === 'android') {
    return await DeviceCheck.isEmulator();
  } else if (Platform.OS === 'ios') {
    return await DeviceCheck.isSimulator();
  }
};

const EmulatorChecker = ({ message, style }) => {
  useEffect(() => {
    const checkOnStartup = async () => {
      const isRunningOnEmulator = await isEmulator();
      if (isRunningOnEmulator) {
        // Show notice to user
        alert(message, style);
      }
    };
    checkOnStartup();
  }, []);

  return null;
};

export default EmulatorChecker;

