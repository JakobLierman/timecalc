import styled from 'styled-components/native';

const Container = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.components.numberInput.backgroundColor};
	border-radius: ${({ theme }) => theme.components.largeNumber.borderRadius}px;
`;

const NumberText = styled.TextInput<{ fontSize: number }>`
	flex: 1;

	color: ${({ theme }) => theme.colors.text};
	font-family: ${({ theme }) => theme.fonts.alternative.bold};
	font-size: ${({ fontSize }) => fontSize}px;
`;

export default {
	Container,
	NumberText,
};
