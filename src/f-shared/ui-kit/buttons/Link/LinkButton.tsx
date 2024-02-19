'use client';

import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { Url } from 'next/dist/shared/lib/router/router';
import Link, { LinkProps } from 'next/link';
import styled from 'styled-components';

import { IconPosition } from '../buttonStyles';
import { Color } from '../../base/color';
import { Typography, typography } from '../../base/typography';
import { Breakpoint } from '../../base/breakpoint';
import { mediaBreakpointDown } from '../../base/functions';

export enum LinkStyle {
    BLUE = 'blue',
    GRAY = 'gray',
    PINK = 'pink',
}

const LINK_COLOR: Record<LinkStyle, Color> = {
    [LinkStyle.BLUE]: Color.BLUE_400,
    [LinkStyle.GRAY]: Color.GRAY_200,
    [LinkStyle.PINK]: Color.PINK_200
};

const LINK_HOVER_COLOR: Record<LinkStyle, Color> = {
    [LinkStyle.BLUE]: Color.BLUE_200,
    [LinkStyle.GRAY]: Color.GRAY_100,
    [LinkStyle.PINK]: Color.FUKSIA
};

export type ButtonCustomProps = {
    children: React.ReactNode,
    linkStyle?: LinkStyle;
    styles?: any,
    Icon?: JSX.Element;
    strokeIcon?: boolean;
    fillIcon?: boolean;
    iconPosition?: IconPosition;
    font?: Typography;
};

export type AsButton = ButtonCustomProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonCustomProps> & {
    as: 'button'
};

export type AsLink = Omit<LinkProps, 'href'> & ButtonCustomProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
    as: 'Link',
    href: Url;
};

export type AsAnchor = ButtonCustomProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonCustomProps> & {
    as: 'a'
};

export type Props = AsButton | AsAnchor | AsLink;

const isLink = (props: Props): props is AsLink => props.as === 'Link';
const isAnchor = (props: Props): props is AsAnchor => props.as === 'a';

export default function LinkButton (props: Props) {

    if (isLink(props)) {
        const {
            children,
            Icon,
            iconPosition = IconPosition.LEFT,
            linkStyle = LinkStyle.BLUE,
            fillIcon = false,
            strokeIcon = true,
            font = 'body',
            as,
            ...rest
        } = props;

        return (
            <Link {...rest}>
                <ButtonBody 
                    as='span'
                    fillIcon={fillIcon}
                    strokeIcon={strokeIcon}
                    linkStyle={linkStyle}
                    font={font}>
                    {iconPosition === IconPosition.LEFT && Icon}
                    {children}
                    {iconPosition === IconPosition.RIGHT && Icon} 
                </ButtonBody>
            </Link>
        );
    }

    if (isAnchor(props)) {
        const {
            children,
            Icon,
            iconPosition = IconPosition.LEFT,
            linkStyle = LinkStyle.BLUE,
            fillIcon = false,
            strokeIcon = true,
            font = 'body',
            as,
            ...rest
        } = props;

        return (
            <ButtonBody
                as='a'
                fillIcon={fillIcon}
                strokeIcon={strokeIcon}
                linkStyle={linkStyle}
                font={font}
                {...rest}>
                {iconPosition === IconPosition.LEFT && Icon}
                {children}
                {iconPosition === IconPosition.RIGHT && Icon}
            </ButtonBody>
        );
    }
    
    const {
        children,
        Icon,
        iconPosition = IconPosition.LEFT,
        linkStyle = LinkStyle.BLUE,
        fillIcon = false,
        strokeIcon = true,
        font = 'body',
        ...rest
    } = props;

    return (
        <ButtonBody
            fillIcon={fillIcon}
            strokeIcon={strokeIcon}
            linkStyle={linkStyle}
            font={font}
            {...rest}>
            {iconPosition === IconPosition.LEFT && Icon}
            {children}
            {iconPosition === IconPosition.RIGHT && Icon}
        </ButtonBody>
    );
};

const ButtonBody = styled.button<{
    styles?: any,
    linkStyle: LinkStyle;
    strokeIcon: boolean;
    fillIcon: boolean;
    font: Typography;
}>`
  ${({font}) => typography[font]};
  position: relative;
  color: ${({linkStyle}) => LINK_COLOR[linkStyle]};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  transition: color 0.5s, text-decoration 0.5s;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 0.5px;
    background-color: transparent;
    transition: background-color 0.5s;
  }

    @media (hover: hover) {
        &:hover {
            color: ${({linkStyle}) => LINK_HOVER_COLOR[linkStyle]};
              &::after {
              background-color: currentColor;
            }
        }
    }

    &:focus {
        outline-color: ${Color.GRAY_400};
        &:not(:focus-visible) {
            outline: none;
        }
    }
 
  &:disabled {
    pointer-events: none;
    color: ${Color.GRAY_400};

    svg {
        filter: grayscale(100%);
    }
  }

    svg {
        fill: ${({fillIcon}) => fillIcon && 'currentColor'};
        stroke: ${({strokeIcon}) => strokeIcon && 'currentColor'};
        flex-shrink: 0;
        width: 18px;
        height: 18px;

        transition: fill 0.5s, stroke 0.5s;
    }

  ${mediaBreakpointDown(Breakpoint.Medium)} {
    svg {
        width: 16px;
        height: 16px;
    }
  }

  ${mediaBreakpointDown(Breakpoint.Tablet)} {
    gap: 8px;

    svg {
        width: 14px;
        height: 14px;
    }
  }

  ${mediaBreakpointDown(Breakpoint.mMobile)} {
    svg {
        width: 12px;
        height: 12px;
    }
  }

  ${props => props.styles};
`;