import { Meta, StoryObj } from '@storybook/react';
import { EmailInput } from "./Index";
import { Props } from  './Index'

export default {
    title: 'Components/EmailInput',
    component: EmailInput,
    args: {
        type: 'email',
        placeholder: 'Testando...'
    }
} as Meta<Props>



export const Default: StoryObj<Props> = {}
