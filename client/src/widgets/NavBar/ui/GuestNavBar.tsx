import { Group, Button, Box } from '@mantine/core';

import classes from '../HeaderMegaMenu.module.css';

import { NavLink, useNavigate } from 'react-router-dom';

import { ThemeToggle } from '../../../shared/ui/ThemeToggle/ThemeToggle';

export function GuestNavBar() {
  const navigate = useNavigate();

  return (
    <Box pb={120}>
      <header className={classes.header}>
        <Group justify="space-around" h="100%">
          <Group h="100%" visibleFrom="sm">
            <NavLink to={'/'} className={classes.link}>
              Home
            </NavLink>
          </Group>

          <Group visibleFrom="sm">
            <ThemeToggle />

            <Button onClick={() => navigate('/auth/login')} variant="default">
              Log in
            </Button>
            <Button onClick={() => navigate('/auth/reg')}>Sign up</Button>
          </Group>
        </Group>
      </header>
    </Box>
  );
}
