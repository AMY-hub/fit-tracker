'use client';

import { Gender, UserRegister } from "@entities";
import { DetailedHTMLProps, HTMLProps } from "react";
import { Control } from "react-hook-form";
import { RegistrarionStep } from "./RegistrationForm";
import { ButtonStyle, Color, Form, Input, RadioButtons } from "@shared/ui";
import Button from "src/f-shared/ui-kit/buttons/Button/Button";
import styled from "styled-components";


interface Props extends DetailedHTMLProps<HTMLProps<HTMLFormElement>, HTMLFormElement> {
  control: Control<UserRegister, any>;
  setStep: (step: RegistrarionStep) => void;
}

export const DetailsForm = ({control, setStep, ...rest}: Props) => {
  return (
    <Form {...rest}>
        <RadioButtons 
          legeng='Choose your gender'
          name='details.gender' 
          control={control} 
          options={[{label: 'Female', value: Gender.FEMALE}, {label: 'Male', value: Gender.MALE}]} />
        <Input 
            control={control} 
            type='number'
            name="details.initialWeight"
            label='Current weight (kg)'
            background={Color.BG_MEDIUM} />
        <Input 
            control={control} 
            type='number'
            name='details.targetWeight'
            label='Target weight (kg)' 
            background={Color.BG_MEDIUM}/>
        <Input 
            control={control} 
            name='details.dateOfBirth'
            label='Date of birth'
            background={Color.BG_MEDIUM}/>
        <Input 
            control={control} 
            name='details.height'
            label='Height (sm)' 
            type='number'
            background={Color.BG_MEDIUM}/>
        <ButtonsWrapper>
          <Button 
            styleType={ButtonStyle.STROKE_GREEN} 
            onClick={() => setStep(RegistrarionStep.USER)}>Back</Button>
          <Button styleType={ButtonStyle.PINK}>Sign up</Button>          
        </ButtonsWrapper>
    </Form>
  )
}

const ButtonsWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:not(:last-child){
    margin-left: 16px;
  }
`;
