import { css,Interpolation } from 'styled-components';

import { Breakpoints} from './breakpoints';

/**
 * @param breakpoint - целевой Breakpoint
 * @example
 * ${mediaBreakpointUp(Breakpoints.XL)} {
 *     // styles
 * }
 */
export const mediaBreakpointUp: (breakpoint: Breakpoints | number) => string = (breakpoint) => `@media(min-width: ${breakpoint}px)`;
/**
 * @param breakpoint - целевой Breakpoint
 * @example
 * ${mediaBreakpointDown(Breakpoints.XL)} {
 *     // styles
 * }
 */
export const mediaBreakpointDown: (breakpoint: Breakpoints | number) => string = (breakpoint) => `@media(max-width: ${breakpoint - 1}px)`;

/**
 * @param value - Значение на целевом экране
 * @param screenWidth - Ширина целевого экрана (число или Breakpoint)
 * @returns Относительное значение в формате vw. Результат изменяется вместе с шириной экрана
 * @example
 * width: ${vw(480)};
 *
 * ${mediaBreakpointDown(Breakpoints.XL)} {
 *     width: ${vw(240, Breakpoints.XL)};
 * }
 */
export const vw: (value: number, screenWidth?: Breakpoints | number) => string = (value, screenWidth: Breakpoints | number = 1920) => `${(value / screenWidth) * 100}vw`;

/**
 * @param value - Значение на целевом экране
 * @param screenHeight - Высота целевого экрана
 * @returns Относительное значение в формате vh. Результат изменяется вместе с высотой экрана
 * @example
 * height: ${vh(480)};
 *
 * ${mediaBreakpointDown(Breakpoints.XL)} {
 *     height: ${vw(240, Breakpoints.XL)};
 * }
 */
export const vh: (value: number, screenHeight?: number) => string = (value, screenHeight = 1080) => `${(value / screenHeight) * 100}vh`;

export const rem: (size: number, rootFontSize?: number) => string = (size, rootFontSize = 16) => `${size / rootFontSize}rem`;
