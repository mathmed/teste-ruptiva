import React from 'react';
import { Container, LoadingText, LoadingIcon } from './styles';
import { Animated, Easing } from 'react-native';

interface IconCustomProps {
  text: string;
}

const Loading: React.FC<IconCustomProps> = ({ text, ...props }) => {
  const spinValue = new Animated.Value(0);
  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: false,
    }),
  ).start();

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Container>
      <Animated.View style={{ transform: [{ rotate: spin }] }}>
        <LoadingIcon
          style={{ transform: [{ rotateY: '180deg' }] }}
          size={36}
          color="#ff9000"
          name="spinner"
          {...props}
        />
      </Animated.View>
      <LoadingText>{text}</LoadingText>
    </Container>
  );
};

export default Loading;
