import { Meta, StoryObj } from '@storybook/react';
import { TextInput } from "./Index";
import { Props } from  './Index'

export default {
    title: 'Components/TextInput',
    component: TextInput,
    args: {
        type: 'email',
        placeholder: 'Testando...'
    }
} as Meta<Props>



export const Default: StoryObj<Props> = {}
