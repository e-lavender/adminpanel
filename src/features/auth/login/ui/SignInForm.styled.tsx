import { FieldValues } from 'react-hook-form'

import {
  ControlledTextField,
  ControlledTextFieldProps,
} from '@/ui/components/text-field-controlled'
import { Card, Typography } from '@flyingtornado06/ui-kit'
import { styled } from 'styled-components'

export const SignInFormStyles = {
  Card: styled(Card)`
    width: 378px;
    height: 348px;
    padding: 23px 24px 36px;
    margin: 100px auto;
  `,
  Email: styled(ControlledTextField)<ControlledTextFieldProps<FieldValues>>`
    margin-bottom: 24px;
  `,
  Password: styled(ControlledTextField)<ControlledTextFieldProps<FieldValues>>`
    margin-bottom: 36px;
  `,
  SignInForm: styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Title: styled(Typography)`
    margin-bottom: 37px;
  `,
}
