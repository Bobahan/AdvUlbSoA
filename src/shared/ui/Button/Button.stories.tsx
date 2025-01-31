import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Button, ButtonTheme } from './Button'
import '../../../app/styles/index.scss'

const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: { onClick: fn() },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Clear: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.CLEAR,
    },
}

export const Outlined: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINED,
    },
}
