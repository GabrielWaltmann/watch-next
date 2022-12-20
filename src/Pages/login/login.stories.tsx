import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, waitFor} from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { Login } from './Index';
export default {
    title: 'Pages/Login',
    component: Login,
} as Meta

export const Default: StoryObj = {
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement)

        userEvent.type(canvas.getByPlaceholderText('exemple@exemple.com'), 'gabrielwaltmann@gmail.com')
        userEvent.type(canvas.getByPlaceholderText('********'), 'SenhaForte123')

        userEvent.click(canvas.getByRole('button'))

        await waitFor(() => {
            expect(canvas.getByText('Login realizado com sucesso!')).toBeInDocument
        })
    }
}


