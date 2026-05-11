'use client'

import { Instagram } from 'lucide-react'

export default function Footer() {
  return (
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
  )
}