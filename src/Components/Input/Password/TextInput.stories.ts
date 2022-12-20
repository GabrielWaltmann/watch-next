import { Meta, StoryObj } from '@storybook/react';
import { PasswordInput } from "./Index";
import { Props } from  './Index'

export default {
    title: 'Components/PasswordInput',
    component: PasswordInput,
    args: {
        type: 'password',
        placeholder: 'Testando...'
    }
} as Meta<Props>



export const Default: StoryObj<Props> = {}
