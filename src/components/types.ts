import { PropsWithChildren } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export type TComponentProps<T, E = StyleProp<ViewStyle>> = PropsWithChildren<T> & { style?: E };
