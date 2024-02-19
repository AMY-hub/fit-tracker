'use client';

import React, { useId, useState} from 'react';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';

import { baseInputStyles, InputThemeType, themes } from '../inputsComponents/baseInputStyles';
import { InputError } from '../inputsComponents/InputError/InputError';
import { Control, FieldValues, useController, UseControllerProps } from 'react-hook-form';

import EyeOpened from '@shared/assets/icons/password/eye_opened.svg';
import EyeClosed from '@shared/assets/icons/password/eye_closed.svg';
import { InputLabel } from '../inputsComponents/InputLabel/InputLabel';
import { Color } from '../../base/color';

interface Props<T extends FieldValues> extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'name' | 'defaultValue'>,UseControllerProps<T> {
    isRequired?: boolean,
    label?: string;
    noMessageSpace?: boolean;
    control: Control<T, any>,
    theme?: InputThemeType,
    background?: Color,
};

export default function PasswordInput<T extends FieldValues> (props: Props<T>) {

    const {
        isRequired,
        label,
        placeholder,
        background = Color.BG_BASE,
        noMessageSpace,
        theme = 'violet',
        ...rest
    } = props;

    const [showPassword, setShowPassword] = useState(false);
    const { field, fieldState } = useController(props);
    const id = useId();

    return (
        <InputWrapper>
            <InputContainer isDisabled={!!rest.disabled}>
                <InputRow>
                    <Input
                        background={background}
                        inputTheme={theme}
                        type={showPassword ? 'type' : 'password'}
                        isError={!!fieldState.error || fieldState.invalid}
                        isValid={fieldState.isDirty && !fieldState.invalid && (field.value as string)?.length > 5}
                        {...rest}
                        id={id}
                        {...field}
                    />
                    <InputLabel htmlFor={id} active={field.value} background={background}>{label}{isRequired ? '*' : ''}</InputLabel>
                    <EyeButton
                        type='button'
                        isHide={showPassword}
                        onClick={() => setShowPassword((prevState) => !prevState)}
                    >
                        <EyeIcon color={themes[theme].hover} isHide={showPassword}>
                            <EyeOpened/>  
                            <EyeClosed/>                            
                        </EyeIcon>
                    </EyeButton>

                </InputRow>
            </InputContainer>  
        
            <AnimatePresence>
                {fieldState.error && fieldState.error.message &&
                <InputError message={fieldState.error.message} absolutePosition={noMessageSpace} />}
            </AnimatePresence>       
        </InputWrapper>

    );
}

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

const Input = styled.input<{isError?: boolean, isValid?: boolean, inputTheme: InputThemeType, background?: Color}>`
  ${baseInputStyles};
  background-color: ${({background}) => background};
  padding-left: 15px;
  padding-right: 45px;
`;

const EyeButton = styled.button<{isHide: boolean}>`
  cursor: pointer;
  position: absolute;
  height: 48px;
  width: 20px;
  right: 17px;
`;

const EyeIcon = styled.span<{isHide: boolean, color: Color}>`
  svg {
    position: absolute;
    inset: 0;
    width: 18px;
    height: 100%;
    stroke: ${({color}) => color};
    transition: opacity 0.3s;

    &:first-child {
        opacity: ${({isHide}) => isHide ? 1 : 0};
    }

    &:last-child {
        opacity: ${({isHide}) => isHide ? 0 : 1};
    }
  }
`;