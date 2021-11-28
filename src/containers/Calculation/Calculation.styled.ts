import styled from 'styled-components/native';

import { AccuracySelection, DurationInput, EndTimeInput, Result } from '../../components/organisms';

const Container = styled.View`
	flex: 1;
	padding: ${({ theme }) => theme.margins.default}px;
`;

const DurationSection = styled(DurationInput)`
	margin: ${({ theme }) => theme.margins.default / 2}px 0px;
`;

const EndDateSection = styled(EndTimeInput)`
	margin: ${({ theme }) => theme.margins.default / 2}px 0px;
`;

const AccuracySection = styled(AccuracySelection)`
	margin: ${({ theme }) => theme.margins.default / 2}px 0px;
`;

const ResultSection = styled(Result)`
	margin: ${({ theme }) => theme.margins.default / 2}px 0px;
`;

export default { Container, DurationSection, EndDateSection, AccuracySection, ResultSection };
