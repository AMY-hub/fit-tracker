'use client';

import { UserRegister } from '@entities'
import { ButtonStyle, Color, Form, Input } from '@shared/ui'
import React, { DetailedHTMLProps, HTMLProps } from 'react'
import { Control} from 'react-hook-form'
import Button from 'src/f-shared/ui-kit/buttons/Button/Button'
import PasswordInput from 'src/f-shared/ui-kit/inputs/PasswordInput/PasswordInput'
import { css } from 'styled-components'

interface Props extends DetailedHTMLProps<HTMLProps<HTMLFormElement>, HTMLFormElement> {
    control: Control<UserRegister, any>
}

export const CredentialsForm = ({control, ...rest}: Props) => {
  return (
    <Form {...rest}>
        <Input 
            isRequired
            control={control} 
            name="firstname"
            label='First Name'
            background={Color.BG_MEDIUM} />
        <Input 
            control={control} 
            name="lastname"
            label='Last Name'
            background={Color.BG_MEDIUM} />
        <Input 
            isRequired
            control={control} 
            name="email"
            label='Mail'
            background={Color.BG_MEDIUM} />
        <PasswordInput
            isRequired
            label='Password'
            control={control} 
            name='password'
            background={Color.BG_MEDIUM} />
        
        <Button styles={css`margin-top: 16px;`} styleType={ButtonStyle.GREEN}>Next</Button>
    </Form>
  )
}
