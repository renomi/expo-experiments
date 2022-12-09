import { useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import { Extrapolate, interpolate } from 'react-native-reanimated';
import { motify } from 'moti';
import { Ionicons } from '@expo/vector-icons';

const MotifiedIcon = motify(Ionicons)();

export const buttonToggle = ({ onPress, size, icon, color, isActive }) => {
  const _size = useMemo(() => size, [size]);
  const _icon = useMemo(() => icon, [icon]);
  const _color = useMemo(() => color, [color]);

  return (
    <TouchableOpacity onPress={onPress}>
      <MotifiedIcon
        style={absoluteFillObject}
        animate={{
          scale: interpolate(
            isActive ? 1 : 0,
            [0, 1],
            [1, 0],
            Extrapolate.CLAMP,
          ),
        }}
        name={_icon.outline}
        size={_size}
        color={_color.outline}
      />

      <MotifiedIcon
        animate={{
          scale: isActive ? 1 : 0,
          opacity: isActive ? 1 : 0,
        }}
        name={_icon.fill}
        size={_size}
        color={_color.fill}
      />
    </TouchableOpacity>
  );
};

const absoluteFillObject = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
};
