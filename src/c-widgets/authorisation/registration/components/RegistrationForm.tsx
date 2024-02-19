'use client';

import { Gender, UserRegister } from "@entities";
import { Color, Heading2 } from "@shared/ui";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { CredentialsForm } from "./CredentialsForm";
import { DetailsForm } from "./DetailsForm";
import styled from "styled-components";

export enum RegistrarionStep {
    USER = 'user',
    DETAILS = 'details'
}

export const RegistrationForm = () => {

    const [step, setStep] = useState<RegistrarionStep>(RegistrarionStep.USER);

    const {
        register,
        formState,
        handleSubmit,
        control,
        reset
    } = useForm<UserRegister>({mode: 'onBlur', reValidateMode: 'onBlur', defaultValues: {
        'details': {
            'gender': Gender.FEMALE
        }
    },});
    

    const onSubmitCredentials: SubmitHandler<UserRegister> = (data, e) => {
        e?.preventDefault();
        console.log(data);
        setStep(RegistrarionStep.DETAILS);
    };

    const onSubmitFinal: SubmitHandler<UserRegister> = (data, e) => {
        e?.preventDefault();
        console.log(data);
        reset();
    };

  return (
    <FormContainer>
        <FormTitle>
            <Heading2 align='center'>Registration</Heading2>
        </FormTitle>
        {step === RegistrarionStep.USER && 
        <CredentialsForm 
            control={control} 
            onSubmit={handleSubmit(onSubmitCredentials)}/>}
        {step === RegistrarionStep.DETAILS && 
        <DetailsForm  
            control={control} 
            onSubmit={handleSubmit(onSubmitFinal)}
            setStep={setStep}/>}
    </FormContainer>
  )
};

const FormContainer = styled.div`
    margin: auto;
    width: calc(100vw - 80px);
    max-width: 600px;
    border-radius: 16px;
    background-color: ${Color.BG_MEDIUM};
    border: 1px solid ${Color.GRAY_800};
`;

const FormTitle = styled.div`
    padding: 16px;
    margin-bottom: 16px;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius:16px;
    background-color: ${Color.VIOLET_400};
`;
