import styled from 'styled-components/native';

const Touchable = styled.TouchableOpacity<{ disabled?: boolean }>`
	justify-content: center;
	align-items: center;

	opacity: ${({ theme, disabled }) => (disabled ? theme.components.button.disabledOpacity : 1)};
`;

export default { Touchable };
