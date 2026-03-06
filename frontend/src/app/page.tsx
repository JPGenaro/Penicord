import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Service';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Analytics }  from '@vercel/analytics/next'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <FAQ />
      <Contact />
      <Footer />
      <Analytics />
    </main>
  );
}