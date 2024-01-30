import React, {ReactNode, useId} from 'react';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';

import Helper from '@logic/helpers/Helper/Helper';

import {CloseBtnSize, CloseButton} from "@components/common/buttons/CloseButton";
import { Text } from '@components/common/texts/typography/Typography';
import {Colors} from "@src/styledComponents/base/Colors";

import { baseInputStyles } from '../components/baseInputStyles';
import { InputError } from '../components/InputError/InputError';
import { InputLabel } from '../components/InputLabel/InputLabel';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder: string,
    value: string,
    maxLength?: number,
    isError?: boolean,
    isValid?: boolean,
    isRequired?: boolean,
    errorMessage?: ReactNode,
    tipsText?: ReactNode,
    label?: string,
    noMessageSpace?: boolean,
    setValue: (value: string) => void;
    onClear?: (args?: unknown) => void;
    preventOnInvalidChar?: boolean;
    tipsColor?: Colors;
}

export const Input = (props: Props) => {

    const {
        placeholder,
        value,
        setValue,
        maxLength,
        isError,
        isValid,
        isRequired,
        errorMessage,
        tipsText,
        disabled,
        name,
        type,
        label,
        noMessageSpace,
        preventOnInvalidChar,
        tipsColor,
        onClear,
    } = props;

    const id = useId();

    const blockInvalidChar = (e: React.KeyboardEvent<HTMLInputElement>) => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        if(maxLength && e.target.value.length > maxLength) {
            return;
        }
        if(preventOnInvalidChar && !Helper.hasNotInvalidSymbols(value)) {
            return;
        }
        setValue(e.target.value);
    };

    return (
        <InputWrapper>
            <InputContainer 
                isDisabled={!!disabled}>

                {(label || maxLength) &&
                <InputHeader>
                    {label && <InputLabel forInput={id} isRequired={isRequired} text={label}/>}
                    {maxLength &&
                    <Text font='captions' color={Colors.GRAY_600}>
                        {value.length} / {maxLength}
                    </Text>}
                </InputHeader>}
                
                <InputRow>
                    <InputField
                        id={id}
                        isError={isError}
                        isValid={isValid}
                        onWheel={(e) => e.currentTarget.blur()}
                        disabled={disabled}
                        type={type}
                        name={name}
                        onKeyDown={(e) => type === 'number' && blockInvalidChar(e)}
                        value={value || ''}
                        placeholder={placeholder}
                        onChange={handleChange}
                        withButton={!!onClear}
                    />                

                    {onClear && <CloseButton clickHandler={onClear} size={CloseBtnSize.XS} style={{
                        position: 'absolute',
                        right: '16px',
                        top: '16px',
                        opacity: value ? 1 : 0,
                        visibility: value ? 'visible' : 'hidden',
                        transition: 'opacity 0.5s, visibility 0.5s'
                    }}/>}
                </InputRow>

                {tipsText &&
                <Text as='p' font='bodySmall' color={tipsColor || Colors.GRAY_600}>
                    {tipsText}
                </Text>}
            </InputContainer>

            <AnimatePresence>
                {isError && errorMessage &&
                <InputError absolutePosition={noMessageSpace} message={errorMessage} />}
            </AnimatePresence>            
        </InputWrapper>
    );
};

const InputWrapper = styled.div`
  position: relative;
  height: min-content;
`;

const InputHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px;
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

const InputField = styled.input<{isError?: boolean, isValid?: boolean, withButton: boolean}>`
  ${baseInputStyles};
  padding: ${({withButton}) => withButton ? '14px 36px 14px 14px' : '14px' };
`;