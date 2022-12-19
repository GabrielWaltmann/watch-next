import { Meta, StoryObj } from '@storybook/react';
import { Heading } from "./Index";
import { Props } from  './Index'

export default {
    title: 'Components/Heading',
    component: Heading,
    args: {
        children: 'Testando',
    },
    argTypes: {
        size: {
            options: [ 'sm', 'md', 'lg'],
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
