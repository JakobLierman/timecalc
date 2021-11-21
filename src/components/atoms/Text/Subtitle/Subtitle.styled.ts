import styled from 'styled-components/native';

import Text from '../../Text/Text.component';

const Subtitle = styled(Text)`
	font-family: ${({ theme }) => theme.fonts.main.bold};
	font-size: ${({ theme }) => theme.fonts.sizes.subtitle}px;
`;

export default { Subtitle };
