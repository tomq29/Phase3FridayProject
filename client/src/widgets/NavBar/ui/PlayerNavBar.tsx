import { Group, Button, Box, Text, Badge } from '@mantine/core';

import classes from '../HeaderMegaMenu.module.css';
import { IconUser } from '@tabler/icons-react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../App/provider/store/store';
import { ThemeToggle } from '../../../shared/ui/ThemeToggle/ThemeToggle';

export function PlayerNavBar() {
  const navigate = useNavigate();

  const currentUser = useAppSelector(
    (state) => state.currentUserStore.user
  );

  return (
    <Box pb={120}>
      <header className={classes.header}>
        <Group justify="space-around" h="100%">
          <Group h="100%" visibleFrom="sm">
            <NavLink to={'/'} className={classes.link}>
              Home
            </NavLink>
            <NavLink to={'/game'} className={classes.link}>
              Game
            </NavLink>
          </Group>
          <Group h="100%" visibleFrom="sm">
            <IconUser />
            <Text size="md" mx="xs">
              {currentUser?.login}
            </Text>
            <Badge color="teal" variant="filled" ml="sm">
              Max Score: {currentUser?.maxScore}
            </Badge>
          </Group>

          <Group visibleFrom="sm">
            <ThemeToggle />

            <Button onClick={() => navigate('/auth/logout')} variant="light">
              Logout
            </Button>
          </Group>
        </Group>
      </header>
    </Box>
  );
}
