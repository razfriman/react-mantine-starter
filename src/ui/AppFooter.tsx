import { ActionIcon, Footer, Group } from '@mantine/core';
import { Icon } from './Icons/Icon';
import { IconName } from './Icons/IconName';

const links: { href: string; icon: IconName }[] = [
  {
    href: 'https://github.com/razfriman/react-mantine-starter',
    icon: 'github',
  },
];

export const AppFooter = () => {
  const items = links.map((link) => {
    return (
      <ActionIcon
        component='a'
        href={link.href}
        key={link.href}
        aria-label={`${link.icon} link`}
        target='_blank'
      >
        <Icon icon={link.icon} />
      </ActionIcon>
    );
  });
  return (
    <Footer height={60} p='xs'>
      <Group position='center' spacing={20}>
        {items}
      </Group>
    </Footer>
  );
};
