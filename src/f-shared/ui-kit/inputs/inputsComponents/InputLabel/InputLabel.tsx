import { typography } from "../../../base/typography";
import { Color } from "../../../base/color";
import { BASE_TRANSITION_TIME } from "../../../base/vars";
import styled from "styled-components";

export const InputLabel = styled.label<{background: Color, active: boolean}>`
  ${typography.body};
  white-space: nowrap;
  overflow: hidden;
  height: min-content;
  padding: 0 5px;
  position: absolute;
  bottom: 0;
  top: 0;
  left: 16px;
  margin: auto;
  border-radius: 6px;
  transition: transform ${BASE_TRANSITION_TIME}, background-color ${BASE_TRANSITION_TIME};
  transition-timing-function: ease-in-out;
  background-color: ${({background}) => background};
  transform: ${({active}) => active && 'scale(0.9) translateY(-150%)'};

  input:focus + & {
    transform: scale(0.9) translateY(-150%);
  }
`;