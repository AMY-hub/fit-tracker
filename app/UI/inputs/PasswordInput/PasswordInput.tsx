import React, { useId, useState} from 'react';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';

import { baseInputStyles } from '../components/baseInputStyles';
import { InputError } from '../components/InputError/InputError';
import { InputLabel } from '../components/InputLabel/InputLabel';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    value: string;
    responseError?: string;
    isError?: boolean,
    isValid?: boolean,
    isRequired?: boolean,
    errorMessage?: React.ReactNode,
    label?: string;
    setValue: (value: string) => void;
    noMessageSpace?: boolean;
};

export default function PasswordInput (props: Props) {

    const {
        value,
        responseError,
        isError,
        isValid,
        isRequired,
        errorMessage,
        label,
        placeholder,
        setValue,
        noMessageSpace,
        ...rest
    } = props;

    const [showPassword, setShowPassword] = useState(false);

    const id = useId();

    return (
        <InputWrapper>
            <InputContainer isDisabled={!!rest.disabled}>
                {label && <InputLabel forInput={id} isRequired={isRequired} text={label}/>}

                <InputRow>
                    <Input
                        type={showPassword ? 'type' : 'password'}
                        isError={isError || !!responseError}
                        isValid={isValid}
                        value={value ?? ''}
                        placeholder={placeholder ?? '••••••••'}
                        onChange={(e)=> {
                            const value = e.target.value;
                            const regex = new RegExp(/^[\u0020-\u007E\u2116]+$/);
                            if (regex.test(value) || value === '') {
                                setValue(e.target.value);
                            }
                        }}
                        {...rest}
                        id={id}
                    />
                    <EyeButton
                        type='button'
                        isHide={showPassword}
                        onClick={() => {
                            setShowPassword((prevState) => !prevState);
                        }}
                    />
                </InputRow>
            </InputContainer>  
        
            <AnimatePresence>
                {isError && errorMessage &&
                <InputError message={errorMessage} absolutePosition={noMessageSpace} />}
            </AnimatePresence>  
            <AnimatePresence>
                {!isError && responseError &&
                <InputError message={responseError} absolutePosition={noMessageSpace} />}
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

const Input = styled.input<{isError?: boolean, isValid?: boolean}>`
  ${baseInputStyles};
  padding-left: 15px;
  padding-right: 45px;
`;

const EyeButton = styled.button<{isHide: boolean}>`
  cursor: pointer;
  position: absolute;
  background: ${({isHide}) => isHide ? 'url("/landing/modalAuth/eye_off.svg")' : 'url("/landing/modalAuth/eye.svg")'} center no-repeat;
  height: 48px;
  width: 20px;
  right: 17px;
`;