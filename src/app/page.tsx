import Header from '@/components/landing/Header';
import ProblemSection from '@/components/landing/ProblemSection';
import SolutionSection from '@/components/landing/SolutionSection';
import WhatsInsideSection from '@/components/landing/WhatsInsideSection';
import ForWhomSection from '@/components/landing/ForWhomSection';
import OfferSection from '@/components/landing/OfferSection';
import FaqSection from '@/components/landing/FaqSection';
import Footer from '@/components/landing/Footer';
import FloatingButton from '@/components/landing/FloatingButton';

export default function Home() {
  return (
    <main>
      <Header />
      <ProblemSection />
      <SolutionSection />
      <WhatsInsideSection />
      <ForWhomSection />
      <OfferSection />
      <FaqSection />
      <Footer />
      <FloatingButton />
    </main>
  );
}
