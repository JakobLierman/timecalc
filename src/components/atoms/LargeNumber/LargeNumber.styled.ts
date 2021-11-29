import styled from 'styled-components/native';

import TextComponent from '../Text/Text.component';

const Container = styled.View`
	flex: 1;
	justify-content: center;

	background-color: ${({ theme }) => theme.colors.white};
	border-radius: ${({ theme }) => theme.components.largeNumber.borderRadius}px;
`;

const NumberText = styled(TextComponent)`
	color: ${({ theme }) => theme.colors.primary};
	font-family: ${({ theme }) => theme.fonts.alternative.bold};
	font-size: ${({ theme }) => theme.components.largeNumber.fontSize}px;
	text-align: center;
`;

export default {
	Container,
	NumberText,
};
