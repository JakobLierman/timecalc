import styled from 'styled-components/native';

import IconButton from '../../Button/Icon/IconButton.component';

const Container = styled.View`
	flex: 1;
	flex-direction: row;

	background-color: ${({ theme }) => theme.components.numberInput.backgroundColor};
	border-radius: ${({ theme }) => theme.components.largeNumber.borderRadius}px;
`;

const NumberText = styled.TextInput.attrs(({ theme }) => ({
	autoCompleteType: 'off',
	autoCorrect: false,
	keyboardAppearance: theme.components.keyboard.appearance,
	keyboardType: 'number-pad',
	maxLength: 2,
	returnKeyType: 'done',
	textAlign: 'center',
	textAlignVertical: 'center',
}))`
	flex: 1;

	color: ${({ theme }) => theme.colors.text};
	font-family: ${({ theme }) => theme.fonts.alternative.bold};
	font-weight: 800;
	font-size: ${({ theme }) => theme.components.largeNumber.fontSize}px;

	margin: 0 ${({ theme }) => theme.margins.tiny}px;
`;

const SideButton = styled(IconButton).attrs(({ theme }) => ({
	size: theme.components.icon.size,
}))`
	height: 100%;
	padding: 0 ${({ theme }) => theme.margins.tiny}px;
	z-index: 10;
`;

const DecrementButton = styled(SideButton).attrs(() => ({
	name: 'minus',
}))`
	padding-left: ${({ theme }) => theme.margins.small}px;
`;

const IncrementButton = styled(SideButton).attrs(() => ({
	name: 'plus',
}))`
	padding-right: ${({ theme }) => theme.margins.small}px;
`;

export default {
	Container,
	NumberText,
	DecrementButton,
	IncrementButton,
};
