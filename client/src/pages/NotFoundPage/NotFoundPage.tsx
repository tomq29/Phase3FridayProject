import { Title, Text, Button, Container, Group } from '@mantine/core';
import classes from './Style/NotFoundTitle.module.css';
import { useNavigate } from 'react-router-dom';

export function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <Container className={classes.root}>
      <div className={classes.title}>404</div>
      <Title className={classes.title}>You have found a secret place.</Title>
      <Text c="dimmed" size="lg" ta="center" className={classes.description}>
        Unfortunately, this is only a 404 page. You may have mistyped the
        address, or the page has been moved to another URL.
      </Text>
      <Group justify="center">
        <Button variant="subtle" onClick={() => navigate('/')} size="md">
          Take me back to home page
        </Button>
      </Group>
    </Container>
  );
}
