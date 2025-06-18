import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Button } from './Button'

describe('Button', () => {
  it('should render button with default props', () => {
    render(<Button>Click me</Button>)
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
  })

  it('should render button with primary variant', () => {
    render(<Button variant='primary'>Primary</Button>)
    const button = screen.getByRole('button', { name: /primary/i })
    expect(button).toHaveClass('bg-blue-600')
  })

  it('should render button with secondary variant', () => {
    render(<Button variant='secondary'>Secondary</Button>)
    const button = screen.getByRole('button', { name: /secondary/i })
    expect(button).toHaveClass('bg-gray-600')
  })

  it('should render button with outline variant', () => {
    render(<Button variant='outline'>Outline</Button>)
    const button = screen.getByRole('button', { name: /outline/i })
    expect(button).toHaveClass('border-2')
    expect(button).toHaveClass('border-blue-600')
  })

  it('should render button with different sizes', () => {
    const { rerender } = render(<Button size='sm'>Small</Button>)
    let button = screen.getByRole('button', { name: /small/i })
    expect(button).toHaveClass('text-sm')

    rerender(<Button size='lg'>Large</Button>)
    button = screen.getByRole('button', { name: /large/i })
    expect(button).toHaveClass('text-lg')
  })

  it('should render loading state', () => {
    render(<Button isLoading>Submit</Button>)
    expect(screen.getByText(/carregando/i)).toBeInTheDocument()
    expect(screen.queryByText(/submit/i)).not.toBeInTheDocument()
  })

  it('should render full width button', () => {
    render(<Button fullWidth>Full Width</Button>)
    const button = screen.getByRole('button', { name: /full width/i })
    expect(button).toHaveClass('w-full')
  })

  it('should render disabled button', () => {
    render(<Button disabled>Disabled</Button>)
    const button = screen.getByRole('button', { name: /disabled/i })
    expect(button).toBeDisabled()
  })
})
