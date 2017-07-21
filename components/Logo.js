import React from 'react';
import {StyleSheet, Text} from 'react-native';

export default class Logo extends React.Component {
  render() {
    return <Text style={styles.title}>{this.props.title}</Text>;
  }
}

const styles = StyleSheet.create({
  title: {
    width: '100%',
    fontSize: 30,
    color: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'center',
    position: 'absolute',
    top: 40,
  },
});
