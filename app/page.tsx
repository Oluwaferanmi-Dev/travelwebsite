import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import PopularPackages from '../components/PopularPackages';
import ReviewsArticles from '../components/ReviewsArticles';
import InternationalPackages from '../components/InternationalPackages';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <PopularPackages />
      <ReviewsArticles />
      <InternationalPackages />
      <Footer />
    </>
  );
}
