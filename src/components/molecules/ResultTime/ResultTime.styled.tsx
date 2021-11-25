import styled from 'styled-components/native';

import { LargeNumber as LargeNumberComponent } from '../../atoms';

const Container = styled.View`
	flex: 1;
	flex-direction: row;
	min-height: ${({ theme }) => theme.components.largeNumber.minHeight}px;
`;

const LargeNumber = styled(LargeNumberComponent)<{ isFirst?: boolean; isLast?: boolean }>`
	margin-left: ${({ theme, isFirst }) => (isFirst ? 0 : theme.margins.small / 2)}px;
	margin-right: ${({ theme, isLast }) => (isLast ? 0 : theme.margins.small / 2)}px;
`;

export default { Container, LargeNumber };
