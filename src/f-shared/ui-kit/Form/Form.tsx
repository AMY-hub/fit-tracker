'use client';

import React, { DetailedHTMLProps, HTMLProps, ReactNode } from 'react'
import styled from 'styled-components';
import { mediaBreakpointUp } from '../base/functions';
import { Breakpoint } from '../base/breakpoint';

interface Props extends DetailedHTMLProps<HTMLProps<HTMLFormElement>, HTMLFormElement> {
    children: ReactNode;
} 

export const Form = ({children, ...rest}: Props) => {
  return (
    <FormWrapper {...rest}>
        {children}
    </FormWrapper>
  )
};

const FormWrapper = styled.form`
    padding: 16px;
    display: grid;
    gap: 24px;

    ${mediaBreakpointUp(Breakpoint.Tablet)} {
        padding: 24px;
    }

    ${mediaBreakpointUp(Breakpoint.xLarge)} {
        padding: 32px;
    }
`;
