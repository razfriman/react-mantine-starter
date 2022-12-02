import { Hero } from '@/ui/Hero';
import { Container, Stack } from '@mantine/core';

export const Profile = () => {
  return (
    <Container size='xs' px='xs'>
      <Stack spacing={32}>
        <Hero title='Profile Page' />
      </Stack>
    </Container>
  );
};
