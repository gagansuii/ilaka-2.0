import { CommunitySection } from '@/sections/CommunitySection';
import { CreatorStorySection } from '@/sections/CreatorStorySection';
import { DiscoverySection } from '@/sections/DiscoverySection';
import { FinalCtaSection } from '@/sections/FinalCtaSection';
import { HeroSection } from '@/sections/HeroSection';
import { InteractiveMapSection } from '@/sections/InteractiveMapSection';
import { SocialProofSection } from '@/sections/SocialProofSection';
import { ViralLoopSection } from '@/sections/ViralLoopSection';

export function LandingExperience() {
  return (
    <main className="relative">
      <HeroSection />
      <DiscoverySection />
      <CommunitySection />
      <InteractiveMapSection />
      <CreatorStorySection />
      <SocialProofSection />
      <ViralLoopSection />
      <FinalCtaSection />
    </main>
  );
}
