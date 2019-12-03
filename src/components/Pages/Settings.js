import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Switch,
  Picker,
} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Input, Header, Button} from '../common';
import {Card, CheckBox, ListItem} from 'react-native-elements';

class SettingsComp extends Component {
  static navigationOptions = {
    title: 'Settings',
  };

  state = {
    listenForBeacons: false,
    audioDirections: false,
    audioDirectionsLocked: false,
    vibrationAlerts: false,
    vibrationAlertsLocked: false,
    levelOfDetail: 'none',
  };

  selectedDetailDescription = '';

  onChangeUserName() {
    console.log('Changed Text');
  }

  render() {
    // Options for the Level Of Detail picker
    const detailOptions = [
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

    // Check against selected detail value so we can update the description
    for (var i = 0; i < detailOptions.length; i++) {
      if (detailOptions[i].value === this.state.levelOfDetail) {
        this.selectedDetailDescription = detailOptions[i].description;
      }
    }

    return (
      <SafeAreaView style={styles.containerStyles}>
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
            {detailOptions.map((prop, key) => {
              return <Picker.Item label={prop.label} value={prop.value} />;
            })}
          </Picker>
          <Text style={styles.pickerDescription}>
            {this.selectedDetailDescription}
          </Text>
        </Card>
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
