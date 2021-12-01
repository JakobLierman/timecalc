import styled from 'styled-components/native';

const Container = styled.View`
	flex: 1;
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
`;

export default {
	Container,
	NumberText,
};
