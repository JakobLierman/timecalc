import styled from 'styled-components/native';

import { Subtitle, Text } from '../../atoms';

const Title = styled(Subtitle)`
	margin-bottom: ${({ theme }) => theme.margins.default}px;
`;

const Subtext = styled(Text)`
	font-family: ${({ theme }) => theme.fonts.main.italic};
	text-align: right;
	margin-top: ${({ theme }) => theme.margins.small}px;
`;

export default { Title, Subtext };
