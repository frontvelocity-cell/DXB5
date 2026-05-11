'use client'

export default function Header() {
  return (
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
  )
}