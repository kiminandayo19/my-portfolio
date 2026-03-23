'use client';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { SectionHeader } from '@/components/molecules/SectionHeader';
import { ExperienceItem } from '@/components/molecules/ExperienceItem';
import { FadeIn } from '@/components/animations/FadeIn';
import { PORTFOLIO_CONTENT } from '@/lib/content';

export const ExperienceSection = () => {
  const { experiences } = PORTFOLIO_CONTENT;
  return (
    <Box id="experience" component="section" sx={{ py: 10, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <FadeIn>
          <SectionHeader title="Professional Experience" subtitle="My journey in software development and team leadership." />
        </FadeIn>
        <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
          {experiences.map((item, index) => (
            <FadeIn key={item.id} delay={0.1 * (index + 1)}>
              <ExperienceItem
                {...item}
                isLast={index === experiences.length - 1}
              />
            </FadeIn>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
