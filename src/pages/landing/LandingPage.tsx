import { useEffect } from 'react';
import { ScrollContainer } from '../../components/animation/ScrollContainer';
import { FirstView } from './FirstView';
import { SecondView } from './SecondView';
import { ThirdView } from './ThirdView';
import { FourthView } from './FourthView';
import { FifthView } from './FifthView';

export default function LandingPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div>
      <ScrollContainer>
        <FirstView />
      </ScrollContainer>
      <ScrollContainer>
        <SecondView />
      </ScrollContainer>
      <ScrollContainer>
        <ThirdView />
      </ScrollContainer>
      <ScrollContainer>
        <FourthView />
      </ScrollContainer>
      <ScrollContainer>
        <FifthView />
      </ScrollContainer>
    </div>
  );
}
