import React from 'react';
import {View, ScrollView, TextInput, Animated} from 'react-native';
import MainTextInput from '../../components/MainTextInput';

import TitleText from '../../components/TitleText';
import {useAuth} from '../../contexts/auth';

import styles from '../../styles';

const SignUp: React.FC = () => {
  const [scrollY, setScrollY] = React.useState(new Animated.Value(0));
  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.header,
          {
            height: scrollY.interpolate({
              inputRange: [10, 120, 145],
              outputRange: [100, 10, 0],
              extrapolate: 'clamp',
            }),
            opacity: scrollY.interpolate({
              inputRange: [1, 80, 170],
              outputRange: [1, 0.5, 0],
              extrapolate: 'clamp',
            }),
          },
        ]}>
        <TitleText caption="LRBank" />
      </Animated.View>
      <ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {y: scrollY},
              },
            },
          ],
          {useNativeDriver: false},
        )}>
        <MainTextInput placeholder="Primeiro Nome" />
        <MainTextInput placeholder="Sobrenome" />
      </ScrollView>
    </View>
  );
};

export default SignUp;
