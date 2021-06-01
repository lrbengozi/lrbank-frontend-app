import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  textContainer: {
    alignSelf: 'center',
    marginBottom: 100,
  },
  textLogo: {
    fontSize: 50,
    color: '#e46400',
    textAlign: 'center',
    fontFamily: 'OdibeeSans-Regular',
  },
  buttons: {
    padding: 10,
  },
  appButtonCreateAccount: {
    marginTop: 10,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#e46400',
  },
  appButtonCreateAccountText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  appButtonLogin: {
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    borderColor: '#e46400',
  },
  appButtonLoginText: {
    fontSize: 16,
    color: '#e46400',
    textAlign: 'center',
  },
});

export default styles;
