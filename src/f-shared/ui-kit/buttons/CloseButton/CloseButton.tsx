'use client';

import React, { DetailedHTMLProps, HTMLProps } from 'react';
import styled from 'styled-components';

import CloseIcon from  '@shared/assets/icons/crosses/Close_round_light.svg';
import { Color } from '../../base/color';

interface Props extends DetailedHTMLProps<HTMLProps<HTMLButtonElement>, HTMLButtonElement> {
    color?: Color;
    hoverColor?: Color;
    buttonSize?: CloseBtnSize;
    type?: "button" | "submit" | "reset"
}

export enum CloseBtnSize {
    XXS = '10px',
    XS = '18px',
    S = '20px',
    M = '24px',
    L = '28px',
}

export const CloseButton = (props: Props) => {

    const {
        color = Color.GRAY_400, 
        hoverColor = Color.GRAY_600, 
        buttonSize = CloseBtnSize.S, 
        disabled = false,
        type = 'button',
        ...rest
    } = props;

    return (
        <Button 
            buttonSize={buttonSize} 
            color={color} 
            hoverColor={hoverColor} 
            disabled={disabled}     
            type={type}       
            {...rest}>
            <CloseIcon />
        </Button>
    );
};

const Button = styled.button<{color: Color, hoverColor: Color, buttonSize: CloseBtnSize}>`
    width: ${({ buttonSize }) => buttonSize};
    height: ${({ buttonSize }) => buttonSize};
    cursor: pointer;

    svg {
        width: 100%;
        height: 100%;
        fill: ${({ color }) => color};
        transition: fill 0.5s;
    }

    &:hover {
        svg {
            fill: ${({ hoverColor }) => hoverColor};
        }
    }

    &:disabled {
        opacity: 0.5;
        pointer-events: none;
    }

    &:focus {
        outline: 3px solid ${Color.GRAY_400};
        outline-offset: 0px;
        &:not(:focus-visible) {
            outline: none;
        }
    }
`;
