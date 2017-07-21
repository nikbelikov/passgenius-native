import config from './../shared/config'

export default {
  generatePassword(chars, length, noRepeat) {
    let result = '';
    let random;

    for (let i = 1; i <= length; i += 1) {
      random = Math.floor(Math.random() * chars.length);
      result = result + chars.substring(random, random + 1);
      if (noRepeat === 'true' || noRepeat === true) {
        chars = chars.replace(chars.substring(random, random + 1), '');
      }
    }

    return result;
  },

  getPasswordFontsize(password) {
    const length = password.length;
    const sizes = config.passwordFontSizes;
    const values = sizes.filter(size => length >= size.value);

    return sizes[values.length - 1].size;
  },

  getChars(hasSymbols, hasNumbers) {
    let chars = config.letters;

    if (hasSymbols) {
      chars += config.symbols;
    }

    if (hasNumbers) {
      chars += config.numbers;
    }

    return chars;
  }
}
