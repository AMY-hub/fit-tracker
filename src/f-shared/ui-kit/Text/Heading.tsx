'use client';

import styled from 'styled-components';
import { TextAlign } from './Text';
import { Color } from '../base/color';
import { typography } from '../base/typography';

export const Title1 = styled.h1<{
    color?: Color;
    styles?: any;
    align?: TextAlign;
}>`
    ${typography.title1};
    color: ${({color}) => color || Color.WHITE};
    margin: 0;
    padding: 0;
    text-align: ${({align}) => align || 'left'};
    ${(props) => props.styles || ''};
`;

export const Title2 = styled.h2<{
    color?: Color;
    styles?: any;
    align?: TextAlign;
}>`
    ${typography.title2};
    color: ${({color}) => color || Color.WHITE};
    margin: 0;
    padding: 0;
    text-align: ${({align}) => align || 'left'};
    ${(props) => props.styles || ''};
`;

export const Heading1 = styled.h1<{
    color?: Color;
    styles?: any;
    align?: TextAlign;
}>`
    ${typography.heading1};
    color: ${({color}) => color || Color.WHITE};
    margin: 0;
    padding: 0;
    text-align: ${({align}) => align || 'left'};
    ${(props) => props.styles || ''};
`;

export const Heading2 = styled.h2<{
    color?: Color;
    styles?: any;
    align?: TextAlign;
}>`
    ${typography.heading2};
    color: ${({color}) => color || Color.WHITE};
    margin: 0;
    padding: 0;
    text-align: ${({align}) => align || 'left'};
    ${(props) => props.styles || ''};
`;

export const Heading3 = styled.h3<{
    color?: Color;
    styles?: any;
    align?: TextAlign;
}>`
    ${typography.heading3};
    color: ${({color}) => color || Color.WHITE};
    margin: 0;
    padding: 0;
    text-align: ${({align}) => align || 'left'};
    ${(props) => props.styles || ''};
`;