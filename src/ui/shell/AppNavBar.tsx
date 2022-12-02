import { Avatar, createStyles, Navbar } from '@mantine/core';
import { Link, useMatch } from 'react-router-dom';
import { IconName } from '../Icons/IconName';

const useStyles = createStyles((theme) => ({
  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
          : theme.colors[theme.primaryColor][0],
      color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 3 : 7],
    },
  },
}));

export const AppNavBar = () => {
  const links: { link: string; label: string; icon?: IconName }[] = [
    { link: '/', label: 'Home', icon: 'github' },
    { link: '/counter', label: 'Counter' },
  ];
  const { classes, cx } = useStyles();
  const linkItems = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className={cx(classes.link, { [classes.linkActive]: useMatch(link.link) })}
    >
      {link.label}
    </Link>
  ));
  return (
    <Navbar width={{ base: 300 }} height={500} p='xs'>
      <Navbar.Section grow mt='xs'>
        {linkItems}
      </Navbar.Section>
      <Navbar.Section>
        <Avatar alt='Avatar' radius='xl' component={Link} to='/profile' />
      </Navbar.Section>
    </Navbar>
  );
};
