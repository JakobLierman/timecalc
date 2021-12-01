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

	const onChange = (text: string): void => {
		if (text === '') setTextValue(text);

		const num = +text;
		if (isNaN(num)) return;

		setTextValue(text);
	};

	const onBlur = ({ nativeEvent }: NativeSyntheticEvent<TextInputFocusEventData>) => {
		const num = +nativeEvent.text;

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
				autoCompleteType="off"
				blurOnSubmit={true}
				defaultValue={DateUtils.displayTime(defaultValue, true)}
				keyboardType="number-pad"
				maxLength={2}
				onBlur={onBlur}
				onChangeText={onChange}
				returnKeyType="done"
				selectTextOnFocus={true}
				textAlign="center"
				textAlignVertical="center"
				value={textValue || DateUtils.displayTime(defaultValue, !inputRef.current?.isFocused())}
			/>
		</Styled.Container>
	);
};

export default React.memo(LargeNumberInput);
