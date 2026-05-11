import { render, screen, fireEvent } from '@testing-library/react'
import FAQAccordion from '@/components/FAQAccordion'

const mockFAQItems = [
  {
    id: 1,
    question: 'Test Question 1',
    answer: 'Test Answer 1'
  },
  {
    id: 2,
    question: 'Test Question 2',
    answer: 'Test Answer 2'
  }
]

describe('FAQAccordion', () => {
  it('renders all FAQ questions', () => {
    render(<FAQAccordion items={mockFAQItems} />)
    
    expect(screen.getByText('Test Question 1')).toBeInTheDocument()
    expect(screen.getByText('Test Question 2')).toBeInTheDocument()
  })

  it('shows answers when questions are clicked', () => {
    render(<FAQAccordion items={mockFAQItems} />)
    
    const question1 = screen.getByText('Test Question 1')
    
    // Initially, answer should not be visible
    expect(screen.queryByText('Test Answer 1')).not.toBeInTheDocument()
    
    // Click to expand
    fireEvent.click(question1)
    expect(screen.getByText('Test Answer 1')).toBeInTheDocument()
  })

  it('can expand multiple items simultaneously', () => {
    render(<FAQAccordion items={mockFAQItems} />)
    
    const question1 = screen.getByText('Test Question 1')
    const question2 = screen.getByText('Test Question 2')
    
    // Expand both
    fireEvent.click(question1)
    fireEvent.click(question2)
    
    expect(screen.getByText('Test Answer 1')).toBeInTheDocument()
    expect(screen.getByText('Test Answer 2')).toBeInTheDocument()
  })

  it('has proper accessibility attributes', () => {
    render(<FAQAccordion items={mockFAQItems} />)
    
    const buttons = screen.getAllByRole('button')
    
    buttons.forEach(button => {
      expect(button).toHaveAttribute('aria-expanded')
      expect(button).toHaveAttribute('aria-controls')
    })
  })
})