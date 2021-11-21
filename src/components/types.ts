import { PropsWithChildren } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export type TComponentProps<T, E = ViewStyle> = PropsWithChildren<T> & { style?: StyleProp<E> };
