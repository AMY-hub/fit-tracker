'use client';

import React, {ReactNode, useId} from 'react';
import styled, { css } from 'styled-components';
import { AnimatePresence } from 'framer-motion';

import { InputThemeType, baseInputStyles, themes } from '../inputsComponents/baseInputStyles';
import { InputError } from '../inputsComponents/InputError/InputError';
import { UseControllerProps, FieldValues, useController, Control } from "react-hook-form";
import { InputLabel } from '../inputsComponents/InputLabel/InputLabel';
import { Color } from '../../base/color';
import { Text } from '../../Text/Text';

interface Props<T extends FieldValues> extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'name' | 'defaultValue'>,UseControllerProps<T> {
    maxLength?: number,
    isRequired?: boolean,
    errorMessage?: ReactNode,
    tipsText?: ReactNode,
    label?: string,
    theme?: InputThemeType
    control: Control<T, any>,
    background?: Color
}

export const Input = <T extends FieldValues>(props: Props<T>) => {

    const {
        maxLength,
        isRequired,
        tipsText,
        disabled,
        label,
        theme = 'violet',
        type,
        background = Color.BG_BASE,
        ...rest
    } = props;

    const id = useId();
    const { field, fieldState } = useController(props);

    const blockInvalidChar = (e: React.KeyboardEvent<HTMLInputElement>) => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();

    return (
        <InputWrapper>
            <InputContainer 
                isDisabled={!!disabled}>

                {maxLength && 
                <Text font='captions' color={themes[theme].hover} styles={css`display: inline-block; margin-left: auto;`}>
                        {(field.value as string)?.length ?? '0'} / {maxLength}
                </Text>}
                
                <InputRow>
                    <InputField
                        background={background}
                        inputTheme={theme}
                        id={id}
                        onWheel={(e) => e.currentTarget.blur()}
                        disabled={disabled}
                        type={type}
                        onKeyDown={(e) => type === 'number' && blockInvalidChar(e)}
                        {...field}
                        {...rest}
                    />                
                    <InputLabel htmlFor={id} active={field.value} background={background}>{label}{isRequired ? '*' : ''}</InputLabel>
                </InputRow>

                {tipsText &&
                <Text as='p' font='bodySmall' color={themes[theme].hover}>
                    {tipsText}
                </Text>}
            </InputContainer>

            <AnimatePresence>
                {fieldState.error && fieldState.error.message &&
                <InputError absolutePosition message={fieldState.error.message} />}
            </AnimatePresence>            
        </InputWrapper>
    );
};

const InputWrapper = styled.div`
  position: relative;
  height: min-content;
`;

const InputRow = styled.div`
  height: 48px;
  position: relative;
`;

const InputContainer = styled.div<{isDisabled: boolean}>`
  pointer-events: ${({isDisabled}) => isDisabled ? 'none' : 'all'};
  opacity: ${({isDisabled}) => isDisabled ? 0.8 : 1};
  display: grid;
  row-gap: 8px;
`;

const InputField = styled.input<{background: Color, isError?: boolean, isValid?: boolean, inputTheme: InputThemeType}>`
  ${baseInputStyles};
  padding: 0px 14px;
  background-color: ${({background}) => background};
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0; 
  }

  &[type=number] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
`;