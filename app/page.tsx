'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, Instagram } from 'lucide-react'

interface FAQItem {
  id: number
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Does making a booking with Al Majlis guarantee that the service will be provided?",
    answer: "Yes, once your booking is confirmed and payment is processed, Al Majlis guarantees the provision of VIP lounge services as per the selected package. However, services are subject to airport operational requirements and security protocols."
  },
  {
    id: 2,
    question: "Why is there a need for the passenger to pre-register for the Al Majlis service?",
    answer: "Pre-registration is required to ensure seamless service delivery and proper coordination with airport authorities. It allows us to prepare your VIP experience in advance and ensures all necessary arrangements are made before your arrival."
  },
  {
    id: 3,
    question: "Does booking Al Majlis service entitle the passenger to airline benefits such as upgrades and excess baggage allowances?",
    answer: "No, Al Majlis service is independent of airline services. It provides VIP lounge access and ground handling services only. Airline benefits such as upgrades and baggage allowances are subject to your airline's policies and your ticket type."
  },
  {
    id: 4,
    question: "Why is there a need to submit credit card details when booking?",
    answer: "Credit card details are required for payment processing and to secure your booking. We use industry-standard encryption to protect your payment information and ensure secure transactions."
  },
  {
    id: 5,
    question: "Can passengers that report late for a flight, and refused by the airline, request for a refund?",
    answer: "Refund eligibility depends on the circumstances and timing of the request. If the passenger reports late due to factors beyond their control, a partial refund may be considered. Please contact our customer service team for case-by-case evaluation."
  },
  {
    id: 6,
    question: "Can no-show passenger request for a refund?",
    answer: "No-show passengers are generally not eligible for refunds as the service allocation and resources have been reserved. However, exceptional circumstances may be considered on a case-by-case basis with proper documentation."
  },
  {
    id: 7,
    question: "Can passengers that advise cancellation, prior to 24 hours of the flight, opt to hold the payment with us?",
    answer: "Yes, passengers who cancel their booking at least 24 hours before their flight can opt to hold their payment as credit for future bookings within 12 months. This credit can be applied to any Al Majlis service package."
  }
]

export default function FAQPage() {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set())

  const toggleExpanded = (id: number) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(id)) {
      newExpanded.delete(id)
    } else {
      newExpanded.add(id)
    }
    setExpandedItems(newExpanded)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="h-20 bg-black flex items-center justify-between px-10">
        <div className="text-gold text-xl font-bold">
          DXB VIP LOUNGE SERVICE
        </div>
        
        <nav className="flex items-center space-x-8">
          <a href="#" className="text-white hover:text-gold transition-colors">HOME</a>
          <a href="#" className="text-white hover:text-gold transition-colors">PACKAGES</a>
          <a href="#" className="text-white hover:text-gold transition-colors">PARTNERS</a>
          <a href="#" className="text-gold font-semibold">FAQS</a>
          <a href="#" className="text-white hover:text-gold transition-colors">CONTACT</a>
          <a href="#" className="text-white hover:text-gold transition-colors">العربية</a>
        </nav>
        
        <button className="bg-gold text-black px-6 py-2 font-semibold hover:bg-yellow-400 transition-colors">
          BOOK NOW
        </button>
      </header>

      {/* Main Content */}
      <main className="px-10 py-10">
        <h1 className="text-center text-2xl font-bold mb-12 text-white">
          QUESTIONS WE OFTEN GET FROM OUR CUSTOMERS
        </h1>
        
        <div className="max-w-6xl mx-auto space-y-6">
          {faqData.map((item) => {
            const isExpanded = expandedItems.has(item.id)
            
            return (
              <div key={item.id} className="border border-gray-800 bg-black">
                <button
                  onClick={() => toggleExpanded(item.id)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-900 transition-colors"
                >
                  <span className="text-white text-lg pr-4">{item.question}</span>
                  <div className="bg-gold p-2 flex-shrink-0">
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-black" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-black" />
                    )}
                  </div>
                </button>
                
                {isExpanded && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-300 text-base leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="h-20 bg-black flex items-center justify-between px-10 border-t border-gray-800">
        <div className="flex space-x-8">
          <a href="#" className="text-gold hover:text-yellow-400 transition-colors">
            Terms & Conditions
          </a>
          <a href="#" className="text-gold hover:text-yellow-400 transition-colors">
            Privacy Policy
          </a>
        </div>
        
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gold hover:text-yellow-400 transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </footer>
    </div>
  )
}