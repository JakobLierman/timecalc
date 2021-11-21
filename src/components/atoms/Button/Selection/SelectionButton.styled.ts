import styled from 'styled-components/native';

import { Text } from '../../';

const Pressable = styled.Pressable<{ selected: boolean }>`
	flex: 1;
	align-items: center;
	justify-content: center;

	background-color: ${({ theme, selected }) =>
		theme.components.selectionButton.backgroundColor[selected ? 'selected' : 'unselected']};
	border-radius: ${({ theme }) => theme.components.selectionButton.borderRadius};
`;

const ValueText = styled(Text)<{ selected: boolean }>`
	color: ${({ theme, selected }) => theme.colors[selected ? 'primary' : 'text']};
	font-family: ${({ theme }) => theme.fonts.main.bold};
	font-size: ${({ theme }) => theme.components.button.fontSize}px;
	text-align: center;
`;

export default { Pressable, ValueText };
