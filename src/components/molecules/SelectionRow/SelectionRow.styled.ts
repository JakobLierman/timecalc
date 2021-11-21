import styled from 'styled-components/native';

import { SelectionButton as SelectionButtonComponent } from '../../atoms';

const Container = styled.View`
	flex-direction: row;
`;

const SelectionButton = styled(SelectionButtonComponent)<{ isFirst?: boolean; isLast?: boolean }>`
	margin-left: ${({ theme, isFirst }) => (isFirst ? 0 : theme.margins.small / 2)}px;
	margin-right: ${({ theme, isLast }) => (isLast ? 0 : theme.margins.small / 2)}px;
`;

export default { Container, SelectionButton };
