'use client';

import { ReactNode } from 'react';
import styled from 'styled-components';
import { Color } from '../base/color';
import { Typography, typography } from '../base/typography';

type TextColor = Color | 'inherit';

export type TextAlign = 'center' | 'right' | 'left';

interface Props extends React.HTMLAttributes<HTMLElement> {
    children: ReactNode;
    color?: TextColor;
    as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4';
    styles?: any;
    font?: Typography;
    align?: TextAlign
};

export const Text = ({children, align = 'left', color = Color.WHITE, ...rest}: Props) => (
    <TextContent align={align} color={color} {...rest}>
        {children}
    </TextContent>
);

export const TextContent = styled.span<{
    color?: TextColor;
    font?: Typography;
    styles?: any;
    align: TextAlign
}>`
    ${({font}) => font ? typography[font] : typography.body};
    color: ${({color}) => color};
    margin: 0;
    padding: 0;
    transition: color 0.5s;
    text-align: ${({align}) => align};
    ${(props) => props.styles || ''};
`;