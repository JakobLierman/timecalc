import React, { FC, useEffect, useRef, useState } from 'react';
import {
	LayoutChangeEvent,
	NativeSyntheticEvent,
	TextInput,
	TextInputFocusEventData,
} from 'react-native';

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

	const [fontSize, setFontSize] = useState<number>(90);
	const [value, setValue] = useState<number>();

	const onChange = (text: string): void => {
		const num = +text;
		if (isNaN(num)) return;

		setValue(num);
	};

	const onBlur = ({ nativeEvent }: NativeSyntheticEvent<TextInputFocusEventData>) => {
		const num = +nativeEvent.text;

		if (num > maximum) {
			// TODO: Toast
			setValue(maximum);

			return;
		}

		if (num < minimum) {
			// TODO: Toast
			setValue(minimum);

			return;
		}
	};

	useEffect(() => {
		(async () => {
			await TimeoutUtils.wait(300);
			if (value != null) onChangeValue(value);
		})();
	}, [value]);

	const onLayout = (event: LayoutChangeEvent): void => {
		const { width, height } = event.nativeEvent.layout;
		const newFontSize = (width > height ? height : width) * 0.75;

		if (fontSize !== newFontSize) setFontSize(newFontSize);
	};

	// TODO: Add scrolling number selector

	return (
		<Styled.Container onLayout={onLayout} style={style}>
			<Styled.NumberText
				ref={inputRef}
				autoCompleteType="off"
				blurOnSubmit={true}
				defaultValue={DateUtils.displayTime(defaultValue, true)}
				fontSize={fontSize}
				keyboardType="number-pad"
				maxLength={2}
				onBlur={onBlur}
				onChangeText={onChange}
				returnKeyType="done"
				selectTextOnFocus={true}
				textAlign="center"
				textAlignVertical="center"
				value={DateUtils.displayTime(value || defaultValue, !inputRef.current?.isFocused())}
			/>
		</Styled.Container>
	);
};

export default LargeNumberInput;
