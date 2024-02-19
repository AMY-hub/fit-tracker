'use client';

import { css } from "styled-components";
import { Color } from "../../base/color";
import { typography } from "../../base/typography";
import { BorderRadius } from "../../base/vars";

interface InputTheme {
    hover: Color,
    default: Color,
    error: Color,
    valid: Color
}

export const themes: {[key: string]: InputTheme} = {
  violet: {
    hover: Color.VIOLET_200,
    default: Color.VIOLET_400,
    error: Color.W_LIGHT,
    valid: Color.GREEN_100
  },
  pink: {
    hover: Color.PINK_200,
    default: Color.PINK_400,
    error: Color.W_LIGHT,
    valid: Color.GREEN_100
  },
  blue: {
    hover: Color.BLUE_200,
    default: Color.BLUE_400,
    error: Color.W_LIGHT,
    valid: Color.GREEN_100
  },
  green: {
    hover: Color.GREEN_200,
    default: Color.GREEN_400,
    error: Color.W_LIGHT,
    valid: Color.GREEN_100
  }
};

export type InputThemeType = keyof typeof themes;

export const baseInputStyles = css<{isError?: boolean, isValid?: boolean, inputTheme: InputThemeType}>`
  ${typography.body};
  color: ${Color.WHITE};
  height: 48px;
  max-height: 48px;
  width: 100%;
  border-radius: ${BorderRadius.SMALL};
  border: 1px solid ${({isError, isValid, inputTheme}) => isError ? themes[inputTheme].error 
        : isValid ? themes[inputTheme].valid : themes[inputTheme].default};
  transition: 0.3s border;
  background-color: ${Color.BG_BASE};

  & + label {
    color: ${({inputTheme}) => themes[inputTheme].hover}
  }

  &::placeholder {
    color: ${({inputTheme}) => themes[inputTheme].hover};
  }

  &:hover {
    border: 1px solid ${({isError, isValid, inputTheme}) => isError ? themes[inputTheme].error 
        : isValid ? themes[inputTheme].valid : themes[inputTheme].hover};
  }

  &:focus {
    outline: none;
    border: 1px solid ${({isError, isValid, inputTheme}) => isError ? themes[inputTheme].error 
        : isValid ? themes[inputTheme].valid : themes[inputTheme].hover};
  }

  &:disabled {
    pointer-events: none;
    border: 1px solid ${Color.GRAY_400};
  }
`;