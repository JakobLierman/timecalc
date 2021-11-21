import React, { FC, useCallback, useRef, useState } from 'react';
import { LayoutChangeEvent, TextInput, ViewStyle } from 'react-native';

import { TComponentProps } from '../../../types';

import Styled from './LargeNumberInput.styled';

type TProps = {
	defaultValue?: number;
	maximum?: number;
};

const LargeNumberInput: FC<TComponentProps<TProps, ViewStyle>> = ({
	defaultValue = 0,
	maximum = 59,
	style,
}) => {
	const inputRef = useRef<TextInput>(null);
	const [value, setValue] = useState<number>(defaultValue);

	const [fontSize, setFontSize] = useState<number>(90);

	const onChange = useCallback((text: string): void => {
		let num = +text;
		if (isNaN(num)) return;

		if (num > maximum) {
			// TODO: Toast
			num = 0;
		}

		setValue(num);
	}, []);

	const getValueText = (): string => {
		let text = value.toString(10);

		if (inputRef.current?.isFocused()) return text;

		if (text.length < 2) text = `0${text}`;

		return text;
	};

	const onLayout = (event: LayoutChangeEvent): void => {
		const { width, height } = event.nativeEvent.layout;

		setFontSize((width > height ? height : width) * 0.75);
	};

	// TODO: Add scrolling number selector

	return (
		<Styled.Container style={style}>
			<Styled.NumberText
				ref={inputRef}
				autoCompleteType="off"
				fontSize={fontSize}
				keyboardType="number-pad"
				maxLength={2}
				onChangeText={onChange}
				onLayout={onLayout}
				selectTextOnFocus={true}
				textAlign="center"
				textAlignVertical="center"
				value={getValueText()}
			/>
		</Styled.Container>
	);
};

export default LargeNumberInput;
