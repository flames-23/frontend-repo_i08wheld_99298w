import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Process from './components/Process'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Features />
      <Process />
      <CTA />
      <footer className="py-10 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} VoxAura Agency. All rights reserved.</p>
          <div className="text-sm text-slate-500">Made with AI voice tech.</div>
        </div>
      </footer>
    </div>
  )
}

export default App