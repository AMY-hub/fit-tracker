import styled, { FlattenSimpleInterpolation } from 'styled-components';

import { Colors } from '@components/styledComponents/base/Colors';
import { typography } from '@components/styledComponents/base/typography';

export const Title1 = styled.h1<{
    color?: Colors;
    styles?: FlattenSimpleInterpolation;
}>`
    ${typography.title1};
    color: ${({color}) => color || Colors.GRAY_800};
    margin: 0;
    padding: 0;
    ${(props) => props.styles || ''};
`;

export const Title2 = styled.h2<{
    color?: Colors;
    styles?: FlattenSimpleInterpolation;
}>`
    ${typography.title2};
    color: ${({color}) => color || Colors.GRAY_800};
    margin: 0;
    padding: 0;
    ${(props) => props.styles || ''};
`;

export const Heading1 = styled.h1<{
    color?: Colors;
    styles?: FlattenSimpleInterpolation;
}>`
    ${typography.heading1};
    color: ${({color}) => color || Colors.GRAY_800};
    margin: 0;
    padding: 0;
    ${(props) => props.styles || ''};
`;

export const Heading2 = styled.h2<{
    color?: Colors;
    styles?: FlattenSimpleInterpolation;
}>`
    ${typography.heading2};
    color: ${({color}) => color || Colors.GRAY_800};
    margin: 0;
    padding: 0;
    ${(props) => props.styles || ''};
`;

export const Heading3 = styled.h3<{
    color?: Colors;
    styles?: FlattenSimpleInterpolation;
}>`
    ${typography.heading3};
    color: ${({color}) => color || Colors.GRAY_800};
    margin: 0;
    padding: 0;
    ${(props) => props.styles || ''};
`;