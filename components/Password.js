import React from 'react';
import {StyleSheet, Text} from 'react-native';
import passwordHelper from './../shared/passwordHelper';

export default class Password extends React.Component {
  render() {
    const { password, onPasswordClick } = this.props;

    return (
      <Text
        style={[styles.password, {fontSize: passwordHelper.getPasswordFontsize(password)}]}
        onLongPress={onPasswordClick.bind(this)}
        onPress={onPasswordClick.bind(this)}
      >
        {this.props.password}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  password: {
    color: 'white',
    position: 'absolute',
    bottom: 20,
    width: '100%',
    textAlign: 'center',
  },
});
