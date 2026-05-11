import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Not Found</h2>
        <p className="mb-4">Could not find requested resource</p>
        <Link 
          href="/"
          className="bg-gold text-black px-6 py-2 font-semibold hover:bg-yellow-400 transition-colors inline-block"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}