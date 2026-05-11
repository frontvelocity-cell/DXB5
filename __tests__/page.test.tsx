import { render, screen, fireEvent } from '@testing-library/react'
import FAQPage from '@/app/page'

describe('FAQ Page', () => {
  it('renders the main heading', () => {
    render(<FAQPage />)
    const heading = screen.getByText('QUESTIONS WE OFTEN GET FROM OUR CUSTOMERS')
    expect(heading).toBeInTheDocument()
  })

  it('renders all FAQ questions', () => {
    render(<FAQPage />)
    const questions = [
      'Does making a booking with Al Majlis guarantee that the service will be provided?',
      'Why is there a need for the passenger to pre-register for the Al Majlis service?',
      'Does booking Al Majlis service entitle the passenger to airline benefits such as upgrades and excess baggage allowances?',
      'Why is there a need to submit credit card details when booking?',
      'Can passengers that report late for a flight, and refused by the airline, request for a refund?',
      'Can no-show passenger request for a refund?',
      'Can passengers that advise cancellation, prior to 24 hours of the flight, opt to hold the payment with us?'
    ]
    
    questions.forEach(question => {
      expect(screen.getByText(question)).toBeInTheDocument()
    })
  })

  it('expands and collapses FAQ items when clicked', () => {
    render(<FAQPage />)
    const firstQuestion = screen.getByText('Does making a booking with Al Majlis guarantee that the service will be provided?')
    
    // Initially, the answer should not be visible
    expect(screen.queryByText(/Yes, once your booking is confirmed/)).not.toBeInTheDocument()
    
    // Click to expand
    fireEvent.click(firstQuestion)
    expect(screen.getByText(/Yes, once your booking is confirmed/)).toBeInTheDocument()
    
    // Click to collapse
    fireEvent.click(firstQuestion)
    expect(screen.queryByText(/Yes, once your booking is confirmed/)).not.toBeInTheDocument()
  })

  it('renders the header with navigation', () => {
    render(<FAQPage />)
    expect(screen.getByText('DXB VIP LOUNGE SERVICE')).toBeInTheDocument()
    expect(screen.getByText('HOME')).toBeInTheDocument()
    expect(screen.getByText('PACKAGES')).toBeInTheDocument()
    expect(screen.getByText('PARTNERS')).toBeInTheDocument()
    expect(screen.getByText('FAQS')).toBeInTheDocument()
    expect(screen.getByText('CONTACT')).toBeInTheDocument()
    expect(screen.getByText('BOOK NOW')).toBeInTheDocument()
  })

  it('renders the footer with links', () => {
    render(<FAQPage />)
    expect(screen.getByText('Terms & Conditions')).toBeInTheDocument()
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument()
  })
})