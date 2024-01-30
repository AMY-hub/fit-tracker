import { ReactNode } from 'react';
import styled, { FlattenSimpleInterpolation } from 'styled-components';

import { Colors } from '@components/styledComponents/base/Colors';
import { Typography, typography } from '@components/styledComponents/base/typography';

type TextColor = Colors | 'inherit';

interface Props extends React.HTMLAttributes<HTMLElement> {
    children: ReactNode;
    color?: TextColor;
    as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4';
    styles?: FlattenSimpleInterpolation;
    font?: Typography;
};

export const Text = ({children, color = Colors.GRAY_800, ...rest}: Props) => (
    <TextContent color={color} {...rest}>
        {children}
    </TextContent>
);

export const TextContent = styled.span<{
    color?: TextColor;
    font?: Typography;
    styles?: FlattenSimpleInterpolation;
}>`
    ${({font}) => font ? typography[font] : typography.default};
    color: ${({color}) => color};
    margin: 0;
    padding: 0;
    transition: color 0.5s;
    ${(props) => props.styles || ''};
`;