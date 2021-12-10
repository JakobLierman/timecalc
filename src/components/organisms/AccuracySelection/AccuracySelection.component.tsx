import { t } from 'i18n-js';
import React, { FC, useEffect, useState } from 'react';

import { SelectionRow } from '../../molecules';
import { Section } from '../../templates';
import { TComponentProps } from '../../types';

type TProps = {
	accuracies: number[];
	defaultAccuracy: number;
	onChangeAccuracy: (accuracyValue: number) => void;
};

const AccuracySelection: FC<TComponentProps<TProps>> = ({
	accuracies,
	defaultAccuracy,
	onChangeAccuracy,
	style,
}) => {
	const [selectedIndex, setSelectedIndex] = useState<number>(
		accuracies.findIndex((v) => v === defaultAccuracy),
	);

	useEffect(() => {
		onChangeAccuracy(accuracies[selectedIndex]);
	}, [selectedIndex]);

	return (
		<Section title={t('accuracy.title')} subtext={t('accuracy.inMinutes')} style={style}>
			<SelectionRow
				values={accuracies.map((v) => v.toString(10))}
				selectedIndex={selectedIndex}
				onChangeSelection={setSelectedIndex}
			/>
		</Section>
	);
};

export default React.memo(AccuracySelection);
