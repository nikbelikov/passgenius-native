import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, Alert, Clipboard} from 'react-native';
import * as Animatable from 'react-native-animatable';
import config from './shared/config';
import passwordHelper from './shared/passwordHelper';
import Logo from './components/Logo';
import Settings from "./components/Settings";
import SettingsIcon from "./components/SettingsIcon";
import Password from "./components/Password";

const INITIAL_CHARS = `${config.letters}${config.numbers}${config.symbols}`;
const PASSWORD_INITIAL_LENGTH = 10;
const INITIAL_NO_REPEAT = true;

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      passwordLength: 10,
      hasSymbols: true,
      hasNumbers: true,
      noRepeat: true,
      password: passwordHelper.generatePassword(INITIAL_CHARS, PASSWORD_INITIAL_LENGTH, INITIAL_NO_REPEAT),
    };
  }

  showSettings() {
    this.refs.settings.zoomIn(config.animationSpeed.settings);
  }

  hideSettings() {
    this.refs.settings.zoomOut(config.animationSpeed.settings);
  }

  handleCreatePassword() {
    const { passwordLength, noRepeat, hasSymbols, hasNumbers } = this.state;
    const chars = passwordHelper.getChars(hasSymbols, hasNumbers);

    this.setState({
      password: passwordHelper.generatePassword(chars, passwordLength, noRepeat),
    });
    this.handleHideSettings();

    this.refs.password.pulse(config.animationSpeed.password);

    if (this.state.showSettings) {
      this.hideSettings();
    }
  }

  handlePasswordClick() {
    Clipboard.setString(this.state.password);
    Alert.alert('Пароль скопирован в буфер обмена');
  }

  handlePasswordLengthChange(value) {
    this.setState({
      passwordLength: value,
    });
  }

  handleToggleSettings() {
    this.state.showSettings ? this.hideSettings() : this.showSettings();

    this.setState({
      showSettings: !this.state.showSettings,
    });
  }

  handleHideSettings() {
    this.setState({
      showSettings: false,
    });
  }

  handleToggleSymbols() {
    this.setState({
      hasSymbols: !this.state.hasSymbols,
    });
  }

  handleToggleNumbers() {
    this.setState({
      hasNumbers: !this.state.hasNumbers,
    });
  }

  handleToggleRepeat() {
    this.setState({
      noRepeat: !this.state.noRepeat,
    });
  }

  renderSettings() {
    return (
      <View>
        <Animatable.View ref="settings" animation="fadeOut" duration={1}>
          <Settings
            {...this.state}
            onPasswordLengthChange={this.handlePasswordLengthChange.bind(this)}
            onToggleSymbols={this.handleToggleSymbols.bind(this)}
            onToggleNumbers={this.handleToggleNumbers.bind(this)}
            onToggleRepeat={this.handleToggleRepeat.bind(this)}
          />
        </Animatable.View>
        <SettingsIcon onToggleSettings={this.handleToggleSettings.bind(this)} />
      </View>
    );
  }

  renderButton() {
    return (
      <TouchableOpacity style={styles.createPasswordContainer} onPress={this.handleCreatePassword.bind(this)}>
        <Text style={styles.createPasswordText}>Создать пароль</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <Image source={require('./img/bg.jpg')} style={styles.backgroundImage}>
          <View style={styles.textContainer}>
            <Logo title="PassGenius" />
            <Animatable.View ref="password" style={styles.password}>
              <Password
                password={this.state.password}
                onPasswordClick={this.handlePasswordClick.bind(this)}
              />
            </Animatable.View>
          </View>
          {this.renderSettings()}
          {this.renderButton()}
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    paddingBottom: 20,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  createPasswordContainer: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    paddingVertical: 15,
    borderRadius: 5,
    marginHorizontal: 10,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: 1,
  },
  createPasswordText: {
    color: 'white',
    fontSize: 18,
  },
  password: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});
