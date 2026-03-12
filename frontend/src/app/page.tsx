'use client';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Service';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import GoogleReviews from '../components/GoogleReviews';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <FAQ />
      <Contact />
      <GoogleReviews />
      <Footer />
    </main>
  );
}