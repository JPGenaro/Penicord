import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Service';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Analytics }  from '@vercel/analytics/next'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
      <Analytics />
    </main>
  );
}