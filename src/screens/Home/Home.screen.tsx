import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC } from 'react';

import { Calculation } from '../../containers';
import { ERootRouteNames, TRootStackParamList } from '../../navigations';

import Styled from './Home.styled';

type TProps = NativeStackScreenProps<TRootStackParamList, ERootRouteNames.HOME>;

const HomeScreen: FC<TProps> = () => {
	return (
		<Styled.ScrollView>
			<Calculation />
		</Styled.ScrollView>
	);
};

export default HomeScreen;
