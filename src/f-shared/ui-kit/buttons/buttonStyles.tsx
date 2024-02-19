'use client';

import { css } from "styled-components";
import { Color } from "../base/color";

export enum IconPosition {
    RIGHT = 'right',
    LEFT = 'left'
}

export enum ButtonStyle {
    PINK = 'pink',
    GREEN = 'green',
    BLUE = 'blue',
    VIOLET = 'violet',
    STROKE_GREEN = 'stroke_green'
}

export const activeButtonStyles: Record<ButtonStyle, any> = {
    [ButtonStyle.PINK]: css`
        background-color: ${Color.PINK_200};
        box-shadow: 0px 0px 20px rgba(207, 135, 221, 0.2);
    `,
    [ButtonStyle.GREEN]: css`
        background-color: ${Color.GREEN_200};
        box-shadow: 0px 0px 20px rgba(22, 176, 193, 0.2);
    `,
    [ButtonStyle.BLUE]: css`
        background-color: ${Color.BLUE_200};
        box-shadow: 0px 0px 20px rgba(82, 148, 229, 0.2);
    `,
    [ButtonStyle.VIOLET]: css`
        background-color: ${Color.VIOLET_200};
        box-shadow: 0px 0px 20px rgba(82, 148, 229, 0.2);
    `,
    [ButtonStyle.STROKE_GREEN]: css`
        border: 1px solid ${Color.GREEN_200};
        color: ${Color.GREEN_100};
        background-color: #16b0c127;
        box-shadow: 0px 0px 20px rgba(22, 176, 193, 0.2);
    `,
};

export const buttonStyles: Record<ButtonStyle, any> = {
    [ButtonStyle.PINK]: css`
        --pulse-gradient: radial-gradient(ellipse at center, rgba(254, 215, 255, 0.4) 0%,rgba(255, 246, 255, 0.4) 1%,rgba(76, 252, 173, 0.6) 33%,rgba(0,0,0,0) 100%);

        background-color: ${Color.PINK_400};
        color: ${Color.WHITE};
        transition: background-color 0.5s, box-shadow 0.5s;

        &:hover {
            ${activeButtonStyles.pink};
        }

        @media (pointer:coarse) {
            --pulse-gradient: radial-gradient(ellipse at center, rgba(0, 100, 62, 0.4) 0%,rgba(0, 100, 62, 0.4) 1%,rgba(0, 100, 62, 0.6) 33%,rgba(0,0,0,0) 100%);
        }
    `,
    [ButtonStyle.GREEN]: css`
        --pulse-gradient: radial-gradient(ellipse at center, rgba(244, 244, 244, 0.3) 0%,rgba(244, 244, 244, 0.3) 1%,rgba(244, 244, 244, 0.4) 33%,rgba(0,0,0,0) 100%);

        background-color: ${Color.GREEN_400};
        color: ${Color.WHITE};
        transition: background-color 0.5s;

        &:hover {
            ${activeButtonStyles.green};
        }
    `,
    [ButtonStyle.BLUE]: css`
        --pulse-gradient: radial-gradient(ellipse at center, rgba(28, 28, 28, 0.3) 0%,rgba(28, 28, 28, 0.3) 1%,rgba(28, 28, 28, 0.4) 33%,rgba(0,0,0,0) 100%);
            
        background-color: ${Color.BLUE_400};
        color: ${Color.WHITE};
        transition: background-color 0.5s;

        &:hover {
            ${activeButtonStyles.blue};
        }
    `,
    [ButtonStyle.VIOLET]: css`
        background-color: ${Color.VIOLET_400};
        color: ${Color.WHITE};
        transition: background-color 0.5s;

        &:hover {
            ${activeButtonStyles.violet};
        }
    `,
    [ButtonStyle.STROKE_GREEN]: css`
        background-color: transparent;
        color: ${Color.GREEN_200};
        border: 1px solid ${Color.GREEN_400};
        transition: border 0.5s, background-color 0.5s, color 0.5s;

        &:hover {
            ${activeButtonStyles.stroke_green};
        }
    `,
};