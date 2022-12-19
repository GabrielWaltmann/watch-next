import { Meta, StoryObj } from '@storybook/react';
import { Button } from "./Index";
import { Props } from  './Index'

export default {
    title: 'Components/Buttons',
    component: Button,
    args: {
        children: 'Create Accout',
    },
    argTypes: {}

} as Meta<Props>

export const Default: StoryObj = {
    args:{
        size: 'xs'
    }
}


