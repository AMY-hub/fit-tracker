import React, { ReactNode, useId } from "react";
import styled from "styled-components";
import { AnimatePresence } from 'framer-motion';

import { InputError } from '../components/InputError/InputError';
import { InputLabel } from '../components/InputLabel/InputLabel';
import { Colors } from '@/UI/base/colors';
import { typography } from '@/UI/base/typography';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    placeholder: string,
    value: string,
    maxLength?: number,
    isError?: boolean,
    isValid?: boolean,
    isRequired?: boolean,
    errorMessage?: ReactNode,
    tipsText?: ReactNode,
    label?: string;
    styles?: FlattenSimpleInterpolation;
    noMessageSpace?: boolean;
}

export default function TextArea (props: TextAreaProps) {
    const {
        value,
        maxLength,
        isError,
        isValid,
        isRequired,
        errorMessage,
        tipsText,
        disabled,
        label,
        styles,
        noMessageSpace,
        ...rest
    } = props;

    const id = useId();

    return (
        <Wrapper styles={styles}>
            <Container>
                {(label || maxLength) &&
                <InputHeader>
                    {label && <InputLabel forInput={id} isRequired={isRequired} text={label}/>}
                    {maxLength &&
                    <Text font='captions' color={Colors.GRAY_600}>
                        {value.length} / {maxLength}
                    </Text>}
                </InputHeader>}
                <Content 
                    isDisabled={!!disabled}
                    isError={!!isError}
                    isValid={!!isValid}>
                    <TextAreaField
                        {...rest}
                        id={id}
                    />
                </Content>
                {tipsText &&
                <Text as='p' font='bodySmall' color={Colors.GRAY_600}>
                    {tipsText}
                </Text>}
            </Container> 
            <AnimatePresence>
                {isError && errorMessage &&
                <InputError absolutePosition={noMessageSpace} message={errorMessage} />}
            </AnimatePresence>       
        </Wrapper>
    );
}

const Wrapper = styled.div<{styles?: FlattenSimpleInterpolation}>`
  position: relative;
  ${({styles}) => styles};
`;

const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Content = styled.div<{isDisabled: boolean, isError: boolean, isValid: boolean}>`
  background: ${Colors.WHITE};
  border-radius: 16px;
  padding: 16px;
  padding-right: 4px;
  isolation: isolate;
  pointer-events: ${({isDisabled}) => isDisabled ? 'none' : 'all'};
  opacity: ${({isDisabled}) => isDisabled ? 0.8 : 1};
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 120px;
  border: 1px solid ${({isError, isValid}) => isError ? Colors.DANGER 
        : isValid ? Colors.EMERALD : Colors.GRAY_400};
  transition: 0.3s border;

  &:hover {
    border: 1px solid ${({isError, isValid}) => isError ? Colors.DANGER 
        : isValid ? Colors.EMERALD : Colors.GRAY_600};
  }

  &:has(textarea:focus) {
    outline: none;
    border: 1px solid ${({isError, isValid}) => isError ? Colors.DANGER 
        : isValid ? Colors.EMERALD : Colors.BLUE};
  }

  &:has(textarea:disabled) {
    border: 1px solid ${Colors.GRAY_400};
  }
`;

const InputHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px;
`;

const TextAreaField = styled.textarea<{isError?: boolean, isValid?: boolean}>`
  ${typography.body};
  width: 100%;
  height: 100%;
  color: ${Colors.GRAY_800};
  -ms-overflow-style: none; /* IE 11 */
  scrollbar-width: none; /* Firefox 64 */
  outline: none;
  border: none;
  resize: none;
  padding-right: 12px;

   &::placeholder {
    color: ${Colors.GRAY_500};
  }
  
  ::-webkit-scrollbar {
    width: 4px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${Colors.GRAY_400};
    border-radius: 10px;
  }
`;