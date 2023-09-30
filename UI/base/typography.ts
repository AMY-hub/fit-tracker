import { css } from 'styled-components';

import { Breakpoints } from './breakpoints';
import { mediaBreakpointDown } from './functions';

export const typography = {
    default: css`
    
    `,
   
    title1: css`

    ${mediaBreakpointDown(Breakpoints.xMedium)} {
 
    }

    ${mediaBreakpointDown(Breakpoints.xTablet)} {
        
    }

    ${mediaBreakpointDown(Breakpoints.mMobile)} {
        
    }
    `,
    title2: css`


    ${mediaBreakpointDown(Breakpoints.xMedium)} {
        
    }

    ${mediaBreakpointDown(Breakpoints.xTablet)} {
       
    }

    ${mediaBreakpointDown(Breakpoints.mMobile)} {
        
    }
    `,
};

export type Typography = keyof typeof typography;