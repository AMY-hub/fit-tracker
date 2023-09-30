import { css } from 'styled-components';

import { Colors } from '@components/styledComponents/base/Colors';
import { typography } from '@components/styledComponents/base/typography';

export const baseInputStyles = css<{isError?: boolean, isValid?: boolean}>`
  ${typography.body};
  color: ${Colors.GRAY_800};
  height: 48px;
  width: 100%;
  border-radius: 10px;
  border: 1px solid ${({isError, isValid}) => isError ? Colors.DANGER 
        : isValid ? Colors.EMERALD : Colors.GRAY_400};
  transition: 0.3s border;

  &::placeholder {
    color: ${Colors.GRAY_500};
  }

  &:hover {
    border: 1px solid ${({isError, isValid}) => isError ? Colors.DANGER 
        : isValid ? Colors.EMERALD : Colors.GRAY_600};
  }

  &:focus {
    outline: none;
    border: 1px solid ${({isError, isValid}) => isError ? Colors.DANGER 
        : isValid ? Colors.EMERALD : Colors.BLUE};
  }

  &:disabled {
    border: 1px solid ${Colors.GRAY_400};
  }
`;