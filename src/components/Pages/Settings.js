import React, {Component} from 'react';
import {
  SafeAreaView,
  TouchableWithoutFeedback,
  ScrollView,
  Text,
  StyleSheet,
  Switch,
  Platform,
} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Card, CheckBox} from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
import AsyncStorage from '@react-native-community/async-storage';

class SettingsComp extends Component {
  static navigationOptions = {
    title: 'Settings',
  };

  storageKey = 'wayfindingSettings';

  state = {
    listenForBeacons: false,
    audioDirections: false,
    audioDirectionsLocked: false,
    vibrationAlerts: false,
    vibrationAlertsLocked: false,
    levelOfDetail: 'none',
  };

  // Options for the Level Of Detail picker
  detailOptions = [
    {
      label: 'None',
      value: 'none',
      description: 'You will not receive any details.',
    },
    {
      label: 'Reduced',
      value: 'reduced',
      description: 'You will receive all directions.',
    },
    {
      label: 'Full',
      value: 'full',
      description:
        'You will receive all directions, beacon callouts, nearby buildings, etc.',
    },
  ];

  // Load settings from local storage when the view is mounted
  async componentDidMount() {
    await this.getSettings().then(value => {
      console.log('populate settings from state: ', value);
      this.setState(value);
    });
  }

  // When something on the view changes, save settings again
  async componentDidUpdate() {
    await this.saveSettings(this.state).then(res => {
      console.log('saved state');
    });
  }

  // Save settings to local storage
  async saveSettings(value) {
    const settings = JSON.stringify(value);
    try {
      return await AsyncStorage.setItem(this.storageKey, settings);
    } catch (e) {
      console.error('unable to save settings', e);
      return e;
    }
  }

  // Get settings from local storage
  async getSettings() {
    try {
      const settings = await AsyncStorage.getItem(this.storageKey);
      return JSON.parse(settings);
    } catch (e) {
      console.error('unable to read from local storage: ', e);
      return e;
    }
  }

  // Check against selected detail value and return description
  checkSelectedDetail() {
    let selectedDetail = '';
    for (var i = 0; i < this.detailOptions.length; i++) {
      if (this.detailOptions[i].value === this.state.levelOfDetail) {
        selectedDetail = this.detailOptions[i].description;
      }
    }
    return selectedDetail;
  }

  accessibleChangeListenForBeacons() {
    this.setState({listenForBeacons: !this.state.listenForBeacons});
  }

  render() {
    return (
      <SafeAreaView style={styles.containerStyles}>
        <ScrollView>
          <TouchableWithoutFeedback
            onPress={this.accessibleChangeListenForBeacons.bind(this)}
            accessible={true}
            accessibilityLabel={`Listen for beacons, ${
              this.state.listenForBeacons ? 'On' : 'Off'
            }`}>
            <Card
              wrapperStyle={styles.switchCard}
              titleStyle={styles.cardTitleStyle}>
              <Icon
                containerStyle={styles.iconStyle}
                name="magnify"
                type="material-community"
                color="black"
                size={20}
              />
              <Text style={styles.textStyle}>Listen for Beacons</Text>
              <Switch
                style={styles.switchStyle}
                value={this.state.listenForBeacons}
                onValueChange={() =>
                  this.setState({
                    listenForBeacons: !this.state.listenForBeacons,
                  })
                }
              />
            </Card>
          </TouchableWithoutFeedback>

          <Card
            title="Assistance Customization"
            accessibilityLabel="Assistance customization, 4 checkboxes below">
            <CheckBox
              accessibilityState={{checked: this.state.audioDirections}}
              containerStyle={styles.checkboxStyle}
              title="Audio Directions"
              checked={this.state.audioDirections}
              onPress={() =>
                this.setState({audioDirections: !this.state.audioDirections})
              }
            />
            <CheckBox
              accessibilityState={{checked: this.state.audioDirectionsLocked}}
              containerStyle={styles.checkboxStyle}
              title="Give Audio Directions While Locked"
              checked={this.state.audioDirectionsLocked}
              onPress={() =>
                this.setState({
                  audioDirectionsLocked: !this.state.audioDirectionsLocked,
                })
              }
            />
            <CheckBox
              accessibilityState={{checked: this.state.vibrationAlerts}}
              containerStyle={styles.checkboxStyle}
              title="Vibration Alerts"
              checked={this.state.vibrationAlerts}
              onPress={() =>
                this.setState({vibrationAlerts: !this.state.vibrationAlerts})
              }
            />
            <CheckBox
              title="Give Vibration Alerts While Locked"
              accessibilityState={{checked: this.state.vibrationAlertsLocked}}
              containerStyle={styles.checkboxStyle}
              checked={this.state.vibrationAlertsLocked}
              onPress={() =>
                this.setState({
                  vibrationAlertsLocked: !this.state.vibrationAlertsLocked,
                })
              }
            />
          </Card>
          <Card title="Level of Detail">
            <RNPickerSelect
              disabled={false}
              accessible={true}
              accessibilityLabel="hello"
              style={pickerSelectStyles}
              items={this.detailOptions}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({levelOfDetail: itemValue})
              }
              value={this.state.levelOfDetail}
              useNativeAndroidPickerStyle={false}
              Icon={() => {
                return Platform.OS !== 'ios' ? (
                  <Icon
                    size={26}
                    raised
                    name="chevron-down"
                    type="material-community"
                  />
                ) : null;
              }}
            />

            <Text style={styles.pickerDescription}>
              {this.checkSelectedDetail()}
            </Text>
          </Card>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  cardTitleStyle: {
    textAlign: 'left',
    fontSize: 200,
  },
  switchCard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switchStyle: {
    flex: 1,
  },
  textStyle: {
    fontSize: 16,
    flex: 8,
    marginLeft: 10,
  },
  iconStyle: {
    flex: 1,
  },
  checkboxStyle: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    paddingHorizontal: 0,
    paddingVertical: 5,
  },
  pickerDescription: {
    padding: 10,
    lineHeight: 20,
  },
  containerStyles: {
    flex: 1,
    backgroundColor: '#E9E9EF',
  },
  buttonContainer: {
    paddingVertical: 20,
    alignSelf: 'center',
    width: '90%',
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    alignSelf: 'flex-end',
    fontWeight: 'bold',
  },
});
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
  },
  iconContainer: {
    top: '50%',
    right: 10,
    transform: [{translateY: -15}],
  },
});

const mapStateToProps = state => {
  return {libraries: state.libraries};
};

const Settings = connect(mapStateToProps)(SettingsComp);
export {Settings};
