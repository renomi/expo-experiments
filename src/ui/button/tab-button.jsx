import { motify, useAnimationState } from 'moti';
import { useCallback } from 'react';
import { TouchableOpacity } from 'react-native';

const AnimatedTouchableOpacity = motify(TouchableOpacity)();

export const TabButton = props => {
  const {
    onPressIn: _onPressIn,
    onPressOut: _onPressOut,
    ...passThroughProps
  } = props;

  const animationState = useAnimationState({
    from: {
      scale: [{ value: 0.92, type: 'timing', duration: 100 }],
    },
    to: {
      scale: [
        { value: 1.15, type: 'timing', duration: 200 },
        { value: 1, type: 'timing', duration: 100 },
      ],
    },
  });

  const onPressIn = useCallback(
    event => {
      animationState.transitionTo('from');
      _onPressIn?.(event);
    },
    [_onPressIn, animationState],
  );
  const onPressOut = useCallback(
    event => {
      animationState.transitionTo('to');
      _onPressOut?.(event);
    },
    [_onPressOut, animationState],
  );

  return (
    <AnimatedTouchableOpacity
      delayPressIn={0}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      state={animationState}
      {...passThroughProps}
    />
  );
};
