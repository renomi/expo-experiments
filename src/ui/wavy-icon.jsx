import { useMemo } from 'react';
import { MotiView } from 'moti';
import { Ionicons } from '@expo/vector-icons';
import { Easing } from 'react-native-reanimated';

const _color = '#6E01EF';
const _size = 100;

export const WavyIcon = ({
  name = 'alarm-outline',
  size = _size,
  iconSize = size / 2,
  color = _color,
}) => {
  const dotStyles = useMemo(
    () => ({
      width: size,
      height: size,
      borderRadius: size,
      backgroundColor: color,
    }),
    [size, color],
  );

  return (
    <MotiView justifyContent="center" alignItems="center" style={dotStyles}>
      {[...Array(3).keys()].map(index => {
        return (
          <MotiView
            key={index}
            from={{ opacity: 0.7, scale: 1 }}
            animate={{ opacity: 0, scale: 3 }}
            transition={{
              type: 'timing',
              duration: 2000,
              easing: Easing.out(Easing.ease),
              delay: index * 400,
              repeatReverse: false,
              loop: true,
            }}
            position="absolute"
            style={dotStyles}
          />
        );
      })}
      <Ionicons name={name} size={iconSize} color="#fff" />
    </MotiView>
  );
};
