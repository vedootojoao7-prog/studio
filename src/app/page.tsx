import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import TrustRow from '@/components/landing/TrustRow';
import ProblemSolution from '@/components/landing/ProblemSolution';
import PersonalizedRoutine from '@/components/landing/PersonalizedRoutine';
import RankProof from '@/components/landing/RankProof';
import CourseContents from '@/components/landing/CourseContents';
import TargetAudience from '@/components/landing/TargetAudience';
import Objections from '@/components/landing/Objections';
import Authority from '@/components/landing/Authority';
import Offer from '@/components/landing/Offer';
import Faq from '@/components/landing/Faq';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-grow">
        <Hero />
        <TrustRow />
        <ProblemSolution />
        <PersonalizedRoutine />
        <RankProof />
        <CourseContents />
        <TargetAudience />
        <Objections />
        <Authority />
        <Offer />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
