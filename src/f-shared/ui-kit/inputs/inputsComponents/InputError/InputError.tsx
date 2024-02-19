'use client';

import React, {ReactNode} from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import ErrIcon from '@shared/assets/icons/alertIcons/warning.svg';
import { Text } from '../../../Text/Text';
import { Color } from '../../../base/color';

const appearenceConfig = {
    initial: { opacity: 0, y: '-10px', height: '0px', marginTop: '0px' },
    animate: { opacity: 1, y: '0px', height: 'auto', marginTop: '6px' },
    exit: { opacity: 0, y: '-10px', height: '0px', marginTop: '0px' },
    transition: { bounce: 0 },
};

interface Props {
    message: ReactNode,
    absolutePosition?: boolean
}

export const InputError = ({message, absolutePosition}: Props) => (
    <ErrorMessage
        $absolutePosition={!!absolutePosition} 
        {...appearenceConfig}>
        <ErrIcon />
        <Text as='p' font='bodySmall' color={Color.W_LIGHT}>
            {message}
        </Text>
    </ErrorMessage>); 

const ErrorMessage = styled(motion.div)<{$absolutePosition: boolean}>`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 8px;

  ${({$absolutePosition}) => $absolutePosition && css`
    position: absolute;
    top: 100%;
  `}

  svg {
    width: 16px;
    height: 16px;
    stroke: ${Color.W_LIGHT};
  }
`;