'use client';

import React from 'react';
import styled, {css, keyframes} from 'styled-components';
import { AnimatePresence, motion} from 'framer-motion';

import LoadingIcon from '@shared/assets/icons/loading/loading.svg';

import { activeButtonStyles, ButtonStyle, buttonStyles, IconPosition } from '../buttonStyles';
import { Breakpoint } from '../../base/breakpoint';
import { appearenceByScale, appearenceOpacity } from '../../base/animationConfigs';
import { Color } from '../../base/color';
import { mediaBreakpointDown } from '../../base/functions';
import { typography } from '../../base/typography';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode,
    styles?: any,
    isLoading?: boolean;
    Icon?: JSX.Element;
    strokeIcon?: boolean;
    fillIcon?: boolean;
    iconPosition?: IconPosition;
    isSmallHeight?: boolean;
    isWide?: boolean;
    isFit?: boolean;
    wideOnBreakPoint?: Breakpoint | number;
    styleType?: ButtonStyle;
}

export default React.forwardRef(function Button (props: Props, ref?: React.ForwardedRef<HTMLButtonElement>) {

    const {
        children,
        isLoading,
        Icon,
        styleType = ButtonStyle.VIOLET,
        iconPosition = IconPosition.LEFT,
        fillIcon = true,
        strokeIcon = false,
        onPointerDown,
        ...rest
    } = props;


    return (
        <ButtonBody
            isLoading={isLoading}
            styleType={styleType}
            fillIcon={fillIcon}
            strokeIcon={strokeIcon}
            {...rest}
            ref={ref}
        >
            <AnimatePresence>
                {isLoading &&
                <ButtonLoader {...appearenceOpacity} $styleType={styleType}>
                    <LoadIconContainer {...appearenceByScale}>
                        <LoadingIcon/>
                    </LoadIconContainer>
                </ButtonLoader>}                
            </AnimatePresence>

            {iconPosition === IconPosition.LEFT && Icon}
            {children}
            {iconPosition === IconPosition.RIGHT && Icon}
        </ButtonBody>
    );
});

const spin = keyframes`
  from{
    transform: rotate(0deg);
  }to{
     transform: rotate(360deg);
   }
`;

const shine = keyframes`
    100% { 
        width: 200%; 
        background-color: rgba(255,255,255,0); 
        transform: rotate(35deg) translateX(0);
    }
`;

const LoadIconContainer = styled(motion.span)`
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        flex-shrink: 0;
        fill: currentColor;
        stroke: transparent;
        animation: ${spin} 1s  infinite linear;
    }
`;

const ButtonLoader = styled(motion.span)<{
    $styleType: ButtonStyle;
}>`
    ${({$styleType}) => activeButtonStyles[$styleType]};
    position: absolute;
    z-index: 1;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
`;

const ButtonBody = styled.button<{
    styles?: any,
    isLoading?: boolean,
    isWide?: boolean;
    isFit?: boolean;
    wideOnBreakPoint?: Breakpoint;
    styleType: ButtonStyle;
    strokeIcon: boolean;
    fillIcon: boolean;
    isSmallHeight?: boolean;
}>`
  ${typography.body};
  position: relative;
  overflow: hidden;
  cursor: pointer;
  width: ${({isWide}) => isWide ? '100%' : 'fit-content'};
  min-width: ${({isFit}) => isFit ? 'fit-content' : '212px'};
  padding: ${({isSmallHeight}) => isSmallHeight ? '8px 16px' : '14px 24px'};
  border-radius: 68px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  ${({wideOnBreakPoint}) => wideOnBreakPoint && 
    css`
        ${mediaBreakpointDown(wideOnBreakPoint)} {
            width: 100%;
        }
    ` };

  &:disabled {
    pointer-events: none;
    background-color: ${Color.GRAY_400};
    color: ${Color.WHITE};

    svg {
        filter: grayscale(100%);
    }
  }

    &:focus {
        outline-color: 3px solid ${Color.GRAY_400};
        outline-offset: 0px;
        &:not(:focus-visible) {
            outline: none;
        }
    }

  ${({styleType}) => buttonStyles[styleType]};
  ${({isLoading, styleType}) => isLoading && activeButtonStyles[styleType]};

    svg {
        fill: ${({fillIcon}) => fillIcon && 'currentColor'};
        stroke: ${({strokeIcon}) => strokeIcon && 'currentColor'};
        flex-shrink: 0;
        width: 18px;
        height: 18px;
    }

  ${mediaBreakpointDown(Breakpoint.Large)} {
    padding: ${({isSmallHeight}) => isSmallHeight ? '8px 16px' : '12px 20px'};
    min-width: ${({isFit}) => isFit ? 'fit-content' : '180px'};
  }

  ${mediaBreakpointDown(Breakpoint.Medium)} {
    min-width: ${({isFit}) => isFit ? 'fit-content' : '150px'};
    padding: ${({isSmallHeight}) => isSmallHeight ? '8px 16px' : '10px 20px'};
    min-width: 150px;

    svg {
        width: 16px;
        height: 16px;
    }
  }

  ${mediaBreakpointDown(Breakpoint.Tablet)} {
    padding: 8px 12px;
    min-width: ${({isFit}) => isFit ? 'fit-content' : '146px'};
    gap: 8px;

    svg {
        width: 14px;
        height: 14px;
    }
  }

  ${mediaBreakpointDown(Breakpoint.mMobile)} {
    min-width: ${({isFit}) => isFit ? 'fit-content' : '132px'};

    svg {
        width: 12px;
        height: 12px;
    }
  }

  ${props => props.styles};

  &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255,255,255,0.4);
        transform: rotate(45deg) translateY(300%);
    }

    &:hover {
        &:before {
            animation: ${shine} 0.5s ease-out forwards;
        }
    }
`;