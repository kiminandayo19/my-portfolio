'use client';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { Typography } from '@/components/atoms/Typography';
import { PORTFOLIO_CONTENT } from '@/lib/content';

export const Footer = () => {
  const { profile } = PORTFOLIO_CONTENT;

  return (
    <Box component="footer" sx={{ py: 6, bgcolor: 'background.paper', borderTop: 1, borderColor: 'divider' }}>
      <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        <Box>
          <IconButton href={profile.linkedin} target="_blank" color="primary">
            <LinkedInIcon />
          </IconButton>
          <IconButton href={`mailto:${profile.email}`} color="primary">
            <EmailIcon />
          </IconButton>
          <IconButton href={profile.github} target="_blank" color="primary">
            <GitHubIcon />
          </IconButton>
        </Box>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};
