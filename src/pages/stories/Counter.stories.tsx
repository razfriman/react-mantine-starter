import { Counter } from '../Counter';

export default {
  title: 'Counter Story',
  args: { primary: true },
  component: Counter,
};
export const CounterStory = () => {
  return <Counter />;
};
