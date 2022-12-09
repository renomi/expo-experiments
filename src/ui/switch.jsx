import { useMemo } from 'react';
import { Pressable } from 'react-native';
import { MotiView } from 'moti';
import { Easing } from 'react-native-reanimated';

const _colors = {
  active: '#2c2c2c',
  inactive: '#dcdcdc',
};

const transition = {
  type: 'timing',
  duration: 300,
  easing: Easing.inOut(Easing.ease),
};

export const Switch = ({ size, onPress, isActive }) => {
  const trackWidth = useMemo(() => size * 1.5, [size]);
  const trackHeight = useMemo(() => size * 0.4, [size]);
  const knobSize = useMemo(() => size * 0.6, [size]);

  return (
    <Pressable onPress={onPress}>
      <MotiView justifyContent="center" alignItems="center">
        <MotiView
          transition={transition}
          animate={{
            backgroundColor: isActive ? _colors.active : _colors.inactive,
          }}
          style={{
            position: 'absolute',
            width: trackWidth,
            height: trackHeight,
            borderRadius: trackHeight / 2,
            backgroundColor: _colors.active,
          }}
        />
        <MotiView
          transition={transition}
          animate={{ translateX: isActive ? trackWidth / 4 : -trackWidth / 4 }}
          style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <MotiView
            transition={transition}
            animate={{
              width: isActive ? 0 : knobSize,
              borderColor: isActive ? _colors.active : _colors.inactive,
            }}
            style={{
              width: knobSize,
              height: knobSize,
              borderRadius: knobSize / 2,
              borderWidth: size * 0.1,
              borderColor: _colors.active,
            }}
          />
        </MotiView>
      </MotiView>
    </Pressable>
  );
};
