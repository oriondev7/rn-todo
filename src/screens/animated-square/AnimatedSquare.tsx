import React, { useState, useRef } from 'react';
import { Animated, PanResponder, Pressable, View } from 'react-native';
import { styles } from './animated-square.styles';
import { SquareColors } from './constants';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { runOnJS } from 'react-native-reanimated';

/* eslint-disable */

export const AnimatedSquare = () => {
  const [color, setColor] = useState(SquareColors.green);
  const [size, setSize] = useState(50);
  const interval = useRef(null);
  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }]),
      onPanResponderRelease: () => {
        pan.extractOffset();
      },
    }),
  ).current;

  const changeSquareColor = () => {
    setColor(
      color === SquareColors.green ? SquareColors.red : SquareColors.green,
    );
  };

  const doubleTap = Gesture.Tap()
  .numberOfTaps(2)
  .onStart(() => {
    runOnJS(changeSquareColor)()
  })

  const updateSquareSize = () => {
    if (color === SquareColors.green) {
      setSize(size => size + 10);
    } else {
      setSize(size => {
        return size > 50 ? size - 10 : size;
      });
    }
  };

  const startUpdatingSquareSize = () => {
    updateSquareSize();

    if (!interval.current) {
      interval.current = setInterval(() => {
        updateSquareSize();
      }, 1000);
    }
  };

  const stopUpdatingSquareSize = () => {
    if (interval.current) {
      clearInterval(interval.current);
      interval.current = null;
    }
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          backgroundColor: color,
          width: size,
          height: size,
          transform: [{ translateX: pan.x }, { translateY: pan.y }],
        }}
        {...panResponder.panHandlers}
      >
        <GestureDetector gesture={doubleTap}>
        <Pressable
          style={{ flex: 1 }}
          onLongPress={startUpdatingSquareSize}
          onPressOut={stopUpdatingSquareSize}
        />
        </GestureDetector>
      </Animated.View>
    </View>
  );
};
