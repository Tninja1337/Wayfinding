import * as RNEP from '@estimote/react-native-proximity';

// this will trigger a popup with "allow this app to access your location?"
RNEP.locationPermission.request().then(permission => {
  // this is the user's decision
  // permission can be equal to:
  // * RNEP.locationPermission.DENIED - proximity detection won't work
  // * RNEP.locationPermission.WHEN_IN_USE - only when the app is active
  // * RNEP.locationPermission.ALWAYS - even when the app is not active
});
