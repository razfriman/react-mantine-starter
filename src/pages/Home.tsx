import { Hero } from '@/ui/Hero';
import { Container, List, ListItem, Stack } from '@mantine/core';

export const Home = () => {
  return (
    <Container size='xs' px='xs'>
      <Stack spacing={32}>
        <Hero title='React Mantine Starter' />
        <List>
          <ListItem>Prettier code formatting</ListItem>
          <ListItem>ESLint code linting</ListItem>
          <ListItem>Mantine UI library</ListItem>
          <ListItem>Light/Dark mode switcher</ListItem>
          <ListItem>SVG icon component</ListItem>
        </List>
      </Stack>
    </Container>
  );
};
