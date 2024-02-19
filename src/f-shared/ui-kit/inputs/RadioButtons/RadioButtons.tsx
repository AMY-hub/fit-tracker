'use client';

import styled from 'styled-components';


import { Control, FieldValues, UseControllerProps, useController } from 'react-hook-form';
import { Color } from '../../base/color';
import { Text } from '../../Text/Text';
import { BASE_TRANSITION_TIME, BorderRadius } from '../../base/vars';

interface Theme {
    hover: Color,
    default: Color,
    selected: Color,
    area: Color
}
enum ThemeType {
    VIOLET = 'violet',
    PINK = 'pink',
    BLUE = 'blue',
    GREEN = 'green'
}

const RadioBtnThemes: Record<ThemeType, Theme> = {
    [ThemeType.VIOLET]: {
        hover: Color.VIOLET_200,
        default: Color.VIOLET_400,
        selected: Color.VIOLET_100,
        area: Color.VIOLET_100,
    },
    [ThemeType.PINK]: {
        hover: Color.PINK_200,
        default: Color.PINK_400,
        selected: Color.PINK_100,
        area: Color.FUKSIA
    },
    [ThemeType.BLUE]: {
        hover: Color.BLUE_200,
        default: Color.BLUE_400,
        selected: Color.BLUE_100,
        area: Color.BLUE_100
    },
    [ThemeType.GREEN]: {
        hover: Color.GREEN_200,
        default: Color.GREEN_400,
        selected: Color.GREEN_100,
        area: Color.GREEN_400
    }
}

interface Option {
    value :string,
    label?: string
}

interface Props<T extends FieldValues> extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'name' | 'defaultValue'>,UseControllerProps<T>{
    control: Control<T, any>;
    theme?: ThemeType;
    options: Array<Option>;
    legeng?: string;
    column?: boolean;
};

export const RadioButtons = <T extends FieldValues>(props: Props<T>) => {

    const {
        theme = ThemeType.VIOLET,
        options,
        legeng,
        column = false,
        ...rest} = props;

    const { field } = useController(rest);

    return (
        <RadioWrapper radioTheme={theme}>
            {legeng && 
            <legend>
                <Text color={RadioBtnThemes[theme].default}>{legeng}:</Text>
            </legend>}
            <Options column={column}>
            {options.map(opt => (
                <OptionRow radioTheme={theme} key={opt.value}>
                    <input type="radio" {...rest} {...field} value={opt.value} checked={field.value === opt.value} /> 
                    <Text>{opt.label ?? opt.value}</Text>          
                </OptionRow>
            ))}                
            </Options>
        </RadioWrapper>
    );
};

const RadioWrapper = styled.fieldset<{
    radioTheme: ThemeType;
}>`
    border: 1px solid ${({radioTheme}) => RadioBtnThemes[radioTheme].default};
    border-radius: ${BorderRadius.SMALL};

    legend {
        padding: 0px 8px;
        margin-left: 16px;
    }
`;

const Options = styled.div<{
    column: boolean;
}>`
    margin: 8px 16px 16px 16px;
    display: flex;
    flex-direction: ${({column}) => column ? 'column' : 'row'};
    align-items: flex-start;
    gap: 16px;
`;

const OptionRow = styled.label<{
    radioTheme: ThemeType;
}>`
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

        input[type="radio"] {
        position: relative;
        -webkit-appearance: none;
        appearance: none;
        outline: none;
        width: 6px;
        height: 6px;
        flex-shrink: 0;
        background-color: ${({radioTheme}) => RadioBtnThemes[radioTheme].default};
        border-radius: 50%;
        border: 1px solid ${({radioTheme}) => RadioBtnThemes[radioTheme].default};
        transition: border ${BASE_TRANSITION_TIME}, background-color ${BASE_TRANSITION_TIME};
        cursor: pointer;
        transform: scale(1);
        transition: transform ${BASE_TRANSITION_TIME};

        & + span {
            color: ${({radioTheme}) => RadioBtnThemes[radioTheme].hover};
        }

        &::before {
            flex-shrink: 0;
            content: '';
            position: absolute;
            top: 0;
            left: -3.6px;
            bottom: 0;
            right: 0;
            margin: auto;
            width: 12px;
            height: 12px;
            border: 1px solid ${({radioTheme}) => RadioBtnThemes[radioTheme].default};
            border-radius: 50%;
            transform: scale(1);
            transition: transform ${BASE_TRANSITION_TIME};
        }

        &::after {
            flex-shrink: 0;
            content: '';
            position: absolute;
            top: 0;
            left: -6.3px;
            bottom: 0;
            right: 0;
            margin: auto;
            width: 17px;
            height: 17px;
            border-radius: 50%;
            background-color: ${({radioTheme}) => RadioBtnThemes[radioTheme].area};
            opacity: 0.25;
            transform: scale(0);
            transition: transform ${BASE_TRANSITION_TIME};
        }

        &:focus {
            background-color: ${({radioTheme}) => RadioBtnThemes[radioTheme].hover};
        }

        &:checked {
            background-color: ${({radioTheme}) => RadioBtnThemes[radioTheme].selected};
            & + span {
                color: ${({radioTheme}) => RadioBtnThemes[radioTheme].selected};
            }

            &::after {
                transform: scale(1.1);
            }
        }

        &:checked:hover {
            background-color: ${({radioTheme}) => RadioBtnThemes[radioTheme].selected};
        }

        &:hover {
            transform: scale(0.7);
            background-color: ${({radioTheme}) => RadioBtnThemes[radioTheme].hover};
            &::before {
                transform: scale(1.6);
                transform-origin: center;
            }
        }

        &:disabled {
            pointer-events: none;
            opacity: 0.6;
        }
    }
`;