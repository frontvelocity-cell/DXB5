'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQItem {
  id: number
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
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
    <div className="space-y-6">
      {items.map((item) => {
        const isExpanded = expandedItems.has(item.id)
        
        return (
          <div key={item.id} className="border border-gray-800 bg-black">
            <button
              onClick={() => toggleExpanded(item.id)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-900 transition-colors"
              aria-expanded={isExpanded}
              aria-controls={`faq-answer-${item.id}`}
            >
              <span className="text-white text-lg pr-4">{item.question}</span>
              <div className="bg-gold p-2 flex-shrink-0">
                {isExpanded ? (
                  <ChevronUp className="w-4 h-4 text-black" aria-hidden="true" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-black" aria-hidden="true" />
                )}
              </div>
            </button>
            
            {isExpanded && (
              <div id={`faq-answer-${item.id}`} className="px-6 pb-6">
                <p className="text-gray-300 text-base leading-relaxed">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}