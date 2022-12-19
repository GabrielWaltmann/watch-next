import { Meta, StoryObj } from '@storybook/react';
import { Button } from "./Index";
import { Props } from  './Index'

export default {
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Testando',
    },
    argTypes: {
        size: {
            options: ['xs', 'sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }

} as Meta<Props>

export const Default: StoryObj = {
    args:{
        size: 'lg'
    }
}
