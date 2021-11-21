import styled from 'styled-components/native';

const Text = styled.Text`
	color: ${({ theme }) => theme.colors.text};
	font-family: ${({ theme }) => theme.fonts.main.regular};
	font-size: ${({ theme }) => theme.fonts.sizes.default}px;
`;

export default { Text };
