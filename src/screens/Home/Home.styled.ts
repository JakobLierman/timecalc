import styled from 'styled-components/native';

const ScrollView = styled.ScrollView.attrs(() => ({
	keyboardDismissMode: 'interactive',
	keyboardShouldPersistTaps: 'handled',
}))`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.primary};
`;

export default { ScrollView };
