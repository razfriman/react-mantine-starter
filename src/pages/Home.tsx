import { Hero } from '@/ui/Hero';
import { Container, List, Stack } from '@mantine/core';

export const Home = () => {
  return (
    <Container size='xs' px='xs'>
      <Stack spacing={32}>
        <Hero title='React Mantine Starter' />
        <List>
          <List.Item>Prettier code formatting</List.Item>
          <List.Item>ESLint code linting</List.Item>
          <List.Item>Mantine UI library</List.Item>
          <List.Item>Light/Dark mode switcher</List.Item>
          <List.Item>SVG icon component</List.Item>
        </List>
      </Stack>
    </Container>
  );
};
