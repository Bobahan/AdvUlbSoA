import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import '../../../../app/styles/index.scss'
import { Sidebar } from './Sidebar'

const meta = {
    title: 'widget/Sidebar',
    component: Sidebar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {},
}

export const Dark: Story = {
    args: {},
}
