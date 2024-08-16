import { Button, Paper, Text, Group, Container } from '@mantine/core';
import { useAppDispatch } from '../../App/provider/store/store';
import { logoutUser } from '../../entities/user/model/authSlice';
import { useNavigate } from 'react-router-dom';

export function LogoutPage() {

    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const logout = () => {
      dispatch(logoutUser()).then(() => navigate('/'))
    }

  return (
    <Container size={400} my={60}> 
      <Paper withBorder p="lg" radius="md" shadow="md">
        <Group justify="space-between" mb="xs">
          <Text fz="md" fw={500}>
            Вы уверены что хотите выйти?
          </Text>
        </Group>
        <Text c="dimmed" fz="xs">
          Не выходите пожалуйста, останьтесь на нашем сайте и мы сделаем вам скидку, в размере 0.01$.
        </Text>
        <Group justify="flex-end" mt="md">
          <Button onClick={logout} variant="default" size="xs">
            Выйти
          </Button>
          <Button onClick={() => navigate('/')} variant="outline" size="xs">
            Остаться
          </Button>
        </Group>
      </Paper>
    </Container>
  );
}

export default LogoutPage;
