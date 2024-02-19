'use client';

import styled, { css } from 'styled-components';

import CheckIcon from '@shared/assets/icons/check/check_round.svg';
import { Control, FieldValues, UseControllerProps, useController } from 'react-hook-form';
import { Color } from '../../base/color';
import { BASE_TRANSITION_TIME } from '../../base/vars';


interface Props<T extends FieldValues> extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'name' | 'defaultValue'>,UseControllerProps<T>{
    control: Control<T, any>,
    checkColor?: Color,
    checkHoverColor?: Color,
    checkMarkColor?: Color,
};

export const Checkbox = <T extends FieldValues>(props: Props<T>) => {

    const {
        checkColor = Color.BLUE_400, 
        checkHoverColor = Color.BLUE_100,
        checkMarkColor = Color.WHITE,
        ...rest} = props;

    const { field, fieldState } = useController(rest);

    return (
        <CheckboxWrapper
            checkColor={checkColor}
            checkHoverColor={checkHoverColor}
            checkMarkColor={checkMarkColor}
            isError={!!fieldState.error || fieldState.invalid}>
            <input 
                type="checkbox"
                {...rest}
                {...field}/>
            <CheckIcon />
        </CheckboxWrapper>
    );
};

const CheckboxWrapper = styled.span<{
    checkColor: Color,
    checkHoverColor: Color,
    checkMarkColor: Color,
    isError?: boolean
}>`
    --activeColor: ${({checkColor, isError}) => isError ? Color.W_DARK : checkColor};
    --hoverColor: ${({checkHoverColor, isError}) => isError ? Color.W_LIGHT : checkHoverColor};

    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;

    input[type="checkbox"] {
        -webkit-appearance: none;
        appearance: none;

        width: 16px;
        height: 16px;
        margin: -3px;
        flex-shrink: 0;
        border: 1px solid var(--activeColor);
        border-radius: 4px;
        outline: none;
        background-color: rgba(255, 255, 255, 0.1);
        transition: border 0.3s, background-color 0.3s;
        cursor: pointer;
        z-index:1;

        &+svg {
            overflow: visible;
            pointer-events: none;
            position: absolute;
            z-index: 3;
            flex-shrink: 0;
            z-index: 1;
            display: block;
            margin: auto;
            width: 18px;
            height: 27px;
            stroke: ${({checkMarkColor}) => checkMarkColor};
            stroke-dasharray: 20px;
            stroke-dashoffset: 20px;
            transition: fill ${BASE_TRANSITION_TIME}, stroke-dashoffset ${BASE_TRANSITION_TIME};
        }

        &:focus {
            outline: 3px solid ${Color.GRAY_400};
            outline-offset: 0px;
            &:not(:focus-visible) {
                outline: none;
            }
        }

        &:checked {
            border: 1px solid var(--activeColor);
            background-color: var(--activeColor);

            &+svg {
                stroke-dashoffset: 0px;
            }
        }

        &:checked:hover {
            border: 1px solid var(--hoverColor);
            background-color: var(--hoverColor);
        }

        &:hover {
            border: 1px solid var(--hoverColor);
        }

        &:disabled {
            pointer-events: none;
            border: 1px solid ${Color.GRAY_300};
            background-color: ${Color.GRAY_300};
        }

        &:disabled:checked {
            border: 1px solid ${Color.GRAY_400};
            background-color: ${Color.GRAY_400};

            &+svg {
                opacity: 1;
                visibility: visible;
            }
        }
    }
`;