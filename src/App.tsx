import HeroSection from './components/HeroSection'
import ProblemSolution from './components/ProblemSolution'
import KeyFeatures from './components/KeyFeatures'
import Testimonial from './components/Testimonial'
import ContactForm from './components/ContactForm'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <HeroSection />
      <ProblemSolution />
      <KeyFeatures />
      <Testimonial />
      <ContactForm />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
