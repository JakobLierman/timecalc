import { impactAsync } from 'expo-haptics';
import React, { FC, useEffect, useState } from 'react';

import DateUtils from '../../../../utils/date.utils';
import { TComponentProps } from '../../../types';

import Styled from './LargeNumberInput.styled';

type TProps = {
	defaultValue?: number;
	onChangeValue: (num: number) => void;
	minimum?: number;
	maximum?: number;
	stepButtons?: boolean;
	stepValue?: number;
};

const LargeNumberInput: FC<TComponentProps<TProps>> = ({
	defaultValue = 0,
	onChangeValue,
	minimum = 0,
	maximum = 59,
	stepButtons = false,
	stepValue = 1,
	style,
}) => {
	// TODO: Add increment decrement buttons on focus

	const [textValue, setTextValue] = useState<string>(DateUtils.displayTime(defaultValue, true));
	const [isFocused, setIsFocused] = useState<boolean>(false);

	/**
	 * Block invalid characters on typing
	 * @param text
	 */
	const onChange = (text: string): void => {
		setTextValue(text.replace(/[^\d]/g, ''));
	};

	/**
	 * Check valid number on blur
	 */
	const onBlur = () => {
		setIsFocused(false);

		const num = +textValue;

		if (num >= maximum) return setTextValue(DateUtils.displayTime(maximum, true));
		if (num <= minimum) return setTextValue(DateUtils.displayTime(minimum, true));

		setTextValue(DateUtils.displayTime(+textValue, true));
	};

	/**
	 * Delays actual value change
	 */
	useEffect(() => {
		if (!isFocused) onChangeValue(+textValue);
	}, [textValue, isFocused]);

	const onFocus = (): void => {
		if (!isFocused) setIsFocused(true);
	};

	/**
	 * Decrement number by step value
	 */
	const decrement = () => {
		impactAsync();
		setTextValue(DateUtils.displayTime(+textValue - stepValue, true));
	};

	/**
	 * Increment number by step value
	 */
	const increment = () => {
		impactAsync();
		setTextValue(DateUtils.displayTime(+textValue + stepValue, true));
	};

	// TODO: Add scrolling number selector

	return (
		<Styled.Container style={style}>
			{stepButtons && isFocused && (
				<Styled.DecrementButton onPress={decrement} disabled={+textValue <= minimum} />
			)}
			<Styled.NumberText
				blurOnSubmit={true}
				defaultValue={DateUtils.displayTime(defaultValue, true)}
				onBlur={onBlur}
				onChangeText={onChange}
				onFocus={onFocus}
				selectTextOnFocus={true}
				value={textValue}
			/>
			{stepButtons && isFocused && (
				<Styled.IncrementButton onPress={increment} disabled={+textValue >= maximum} />
			)}
		</Styled.Container>
	);
};

export default LargeNumberInput;
