import { Meta, StoryObj } from '@storybook/react';
import { Text } from "./Index";
import { Props } from  './Index'

export default {
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Testando',
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
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
