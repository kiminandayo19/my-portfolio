'use client';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { SectionHeader } from '@/components/molecules/SectionHeader';
import { ProjectCard } from '@/components/molecules/ProjectCard';
import { FadeIn } from '@/components/animations/FadeIn';
import { PORTFOLIO_CONTENT } from '@/lib/content';

export const ProjectsSection = () => {
  const { projects } = PORTFOLIO_CONTENT;
  return (
    <Box id="projects" component="section" sx={{ py: 10, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <FadeIn>
          <SectionHeader title="Featured Projects" subtitle="Key initiatives and applications I have delivered." />
        </FadeIn>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={project.id} sx={{ display: 'flex' }}>
              <FadeIn delay={0.1 * (index + 1)} sx={{ width: '100%' }}>
                <ProjectCard {...project} />
              </FadeIn>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
