import { PropsWithChildren } from 'react';
import { StyleProp } from 'react-native';

export type TComponentProps<T, E = never> = PropsWithChildren<T> & { style?: StyleProp<E> };
