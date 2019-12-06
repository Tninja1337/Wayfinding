import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  Switch,
  Picker,
} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Card, CheckBox} from 'react-native-elements';
import {AsyncStorage} from '@react-native-community/async-storage';

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

  // async componentDidMount() {
  //   this.getSettings().then(value => {
  //     console.log('promise from state: ', value);
  //   });
  // }

  // async componentDidUpdate() {
  //   await this.saveSettings(this.state).then(res => {
  //     console.log('saved something: ', res);
  //   });
  // }

  // async saveSettings(value) {
  //   const settings = JSON.stringify(value);
  //   await AsyncStorage.setItem(this.storageKey, settings);
  // }

  // async getSettings() {
  //   const settings = await AsyncStorage.getItem(this.storageKey);
  //   return JSON.parse(settings);
  // }

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

  render() {
    return (
      <SafeAreaView style={styles.containerStyles}>
        <ScrollView>
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
                this.setState({listenForBeacons: !this.state.listenForBeacons})
              }
            />
          </Card>
          <Card title="Assistance Customizaion">
            <CheckBox
              containerStyle={styles.checkboxStyle}
              title="Audio Directions"
              checked={this.state.audioDirections}
              onPress={() =>
                this.setState({audioDirections: !this.state.audioDirections})
              }
            />
            <CheckBox
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
              containerStyle={styles.checkboxStyle}
              title="Vibration Alerts"
              checked={this.state.vibrationAlerts}
              onPress={() =>
                this.setState({vibrationAlerts: !this.state.vibrationAlerts})
              }
            />
            <CheckBox
              containerStyle={styles.checkboxStyle}
              title="Give Vibration Alerts While Locked"
              checked={this.state.vibrationAlertsLocked}
              onPress={() =>
                this.setState({
                  vibrationAlertsLocked: !this.state.vibrationAlertsLocked,
                })
              }
            />
          </Card>
          <Card title="Level of Detail">
            <Picker
              selectedValue={this.state.levelOfDetail}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({levelOfDetail: itemValue})
              }>
              {this.detailOptions.map((prop, key) => {
                return (
                  <Picker.Item
                    key={key}
                    label={prop.label}
                    value={prop.value}
                  />
                );
              })}
            </Picker>
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

const mapStateToProps = state => {
  return {libraries: state.libraries};
};

const Settings = connect(mapStateToProps)(SettingsComp);
export {Settings};
