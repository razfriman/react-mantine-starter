import { Button, Container, Stack } from '@mantine/core';
import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <Container size='xs' px='xs'>
      <Stack spacing={16}>
        <Button onClick={() => setCount(count + 1)}>Count: {count}</Button>
      </Stack>
    </Container>
  );
};
