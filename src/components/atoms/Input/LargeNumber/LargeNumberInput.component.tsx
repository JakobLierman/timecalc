import React, { FC, useEffect, useRef, useState } from 'react';
import { NativeSyntheticEvent, TextInput, TextInputFocusEventData } from 'react-native';

import DateUtils from '../../../../utils/date.utils';
import TimeoutUtils from '../../../../utils/timeout.utils';
import { TComponentProps } from '../../../types';

import Styled from './LargeNumberInput.styled';

type TProps = {
	defaultValue?: number;
	onChangeValue: (num: number) => void;
	minimum?: number;
	maximum?: number;
};

const LargeNumberInput: FC<TComponentProps<TProps>> = ({
	defaultValue = 0,
	onChangeValue,
	minimum = 0,
	maximum = 59,
	style,
}) => {
	// TODO: Add increment decrement buttons on focus

	const inputRef = useRef<TextInput>(null);

	const [textValue, setTextValue] = useState<string>(DateUtils.displayTime(defaultValue, true));

	/**
	 * Gets numeric value from text value
	 * @param text
	 */
	const getValue = (text: string): number | undefined => {
		const num = +text;

		return isNaN(num) ? undefined : num;
	};

	/**
	 * Block invalid characters on typing
	 * @param text
	 */
	const onChange = (text: string): void => {
		const cleanText = text.trim();
		if (cleanText === '') return setTextValue(cleanText);

		const num = +cleanText;
		if (isNaN(num)) return;

		setTextValue(cleanText);
	};

	/**
	 * Check valid number on blur
	 * @param nativeEvent
	 */
	const onBlur = ({ nativeEvent }: NativeSyntheticEvent<TextInputFocusEventData>) => {
		if (isFocused) setIsFocused(false);

		setNumber(+nativeEvent.text);
	};

	/**
	 * Set number in text field
	 * @param num
	 */
	const setNumber = (num: number): void => {
		if (num > maximum) {
			// TODO: Toast
			setTextValue(DateUtils.displayTime(maximum, true));

			return;
		}

		if (num < minimum) {
			// TODO: Toast
			setTextValue(DateUtils.displayTime(minimum, true));

			return;
		}

		textValue?.length !== 2 && setTextValue(DateUtils.displayTime(num, true));
	};

	/**
	 * Delays actual value change
	 */
	useEffect(() => {
		(async () => {
			await TimeoutUtils.wait(300);

			if (textValue != null && textValue !== '') onChangeValue(+textValue);
		})();
	}, [textValue]);

	// TODO: Add scrolling number selector

	return (
		<Styled.Container style={style}>
			<Styled.NumberText
				ref={inputRef}
				blurOnSubmit={true}
				defaultValue={DateUtils.displayTime(defaultValue, true)}
				onBlur={onBlur}
				onChangeText={onChange}
				selectTextOnFocus={true}
				value={
					textValue == null
						? DateUtils.displayTime(defaultValue, !inputRef.current?.isFocused())
						: textValue
				}
			/>
		</Styled.Container>
	);
};

export default React.memo(LargeNumberInput);
