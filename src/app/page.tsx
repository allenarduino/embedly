import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Welcome to Embedly
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Your platform for blog embedding and content management
        </p>
        <div className="space-x-4">
          <Link
            href="/get-started"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-200"
          >
            Get Started
          </Link>
          <Link
            href="/auth/signin"
            className="inline-block bg-white hover:bg-gray-50 text-blue-600 font-semibold py-3 px-8 rounded-lg text-lg border-2 border-blue-600 transition-colors duration-200"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  )
}
