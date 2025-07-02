import type { Meta, StoryObj } from '@storybook/react-vite'
import Button from './Button'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    isLoading: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Botão Primário',
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Botão Secundário',
    variant: 'secondary',
  },
}

export const Outline: Story = {
  args: {
    children: 'Botão Outline',
    variant: 'outline',
  },
}

export const Small: Story = {
  args: {
    children: 'Botão Pequeno',
    size: 'sm',
  },
}

export const Large: Story = {
  args: {
    children: 'Botão Grande',
    size: 'lg',
  },
}

export const Loading: Story = {
  args: {
    children: 'Botão Carregando',
    isLoading: true,
  },
}

export const FullWidth: Story = {
  args: {
    children: 'Botão Largura Total',
    fullWidth: true,
  },
}

export const Disabled: Story = {
  args: {
    children: 'Botão Desabilitado',
    disabled: true,
  },
}
