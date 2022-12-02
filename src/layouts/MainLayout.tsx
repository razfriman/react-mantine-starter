import { AppFooter } from '@/ui/shell/AppFooter';
import { AppHeader } from '@/ui/shell/AppHeader';
import { AppNavBar } from '@/ui/shell/AppNavBar';
import { AppShell } from '@mantine/core';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <AppShell
      padding='md'
      fixed={false}
      // Enables Left-Panel navbar
      navbar={<AppNavBar />}
      // Enables top header
      header={<AppHeader />}
      // Enables footer
      footer={<AppFooter />}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      })}
    >
      <Outlet />
    </AppShell>
  );
};
