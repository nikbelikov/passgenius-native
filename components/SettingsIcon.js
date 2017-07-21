import React from 'react';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';

export default class SettingsIcon extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.settingsIconContainer} onPress={this.props.onToggleSettings.bind(this)}>
        <Image source={require('./../img/settings.png')} style={styles.settingsIcon} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  settingsIconContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    position: 'absolute',
    right: 20,
    bottom: 60,
  },
  settingsIcon: {
    width: 20,
    height: 20,
  },
});
