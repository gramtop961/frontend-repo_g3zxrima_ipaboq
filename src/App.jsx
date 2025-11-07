import Header from './components/Header';
import Hero from './components/Hero';
import Collections from './components/Collections';
import Stories from './components/Stories';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans bg-[#f7f3ee] text-[#2b2118]">
      <Header />
      <main>
        <Hero />
        <Collections />
        <Stories />
      </main>
      <Footer />
    </div>
  );
}

export default App;
