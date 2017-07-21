import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Slider} from 'react-native';

export default class Settings extends React.Component {
  renderSlider() {
    return (
      <View>
        <Text style={styles.settingsText}>Длина: {this.props.passwordLength}</Text>
        <Slider
          minimumValue={8}
          maximumValue={30}
          step={1}
          maximumTrackTintColor="rgba(255, 255, 255, 0.1)"
          minimumTrackTintColor="white"
          value={this.props.passwordLength}
          onValueChange={this.props.onPasswordLengthChange.bind(this)}
        />
      </View>
    )
  }

  renderListOfParams() {
    return (
      <View>
        <TouchableOpacity onPress={this.props.onToggleSymbols.bind(this)}>
          <Text style={[styles.settingsButton, {opacity: this.props.hasSymbols ? 1 : 0.5}]}>{this.props.hasSymbols ? 'Символы включены' : 'Символы исключены'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.onToggleNumbers.bind(this)}>
          <Text style={[styles.settingsButton, {opacity: this.props.hasNumbers ? 1 : 0.5}]}>{this.props.hasNumbers ? 'Цифры включены' : 'Цифры исключены'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.onToggleRepeat.bind(this)}>
          <Text style={styles.settingsButton}>{this.props.noRepeat ? 'Без повторения знаков' : 'С повторением знаков'}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.settingsContainer}>
        {this.renderSlider()}
        {this.renderListOfParams()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  settingsContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    position: 'absolute',
    width: '92%',
    bottom: 100,
    left: '4%',
    zIndex: 1,
    padding: 10,
    borderRadius: 5,
  },
  settingsText: {
    color: 'white',
    fontSize: 16,
  },
  settingsButton: {
    color: 'white',
    fontSize: 16,
    marginVertical: 10,
    textAlign: 'right',
  }
});
