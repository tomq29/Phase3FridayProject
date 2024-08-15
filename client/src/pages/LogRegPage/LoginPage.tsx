import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from '@mantine/core';
import classes from './AunthenticationTitle.module.css';
import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from "react-hook-form"

export function AuthenticationTitle() {



  const { register, handleSubmit, formState: { errors }, watch } = useForm<{ login: string, password: string }>({
    mode: 'onChange',
});

const onSubmit: SubmitHandler<{ login: string, password: string }> = (data) => {
  console.log(data)
}


  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Welcome back!
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Do not have an account yet?{' '}
        <Anchor size="sm" component="button">
          <Link to="/auth/reg">Create account</Link>
        </Anchor>
      </Text>
      <form  onSubmit={handleSubmit(onSubmit)}>
      <Paper  withBorder shadow="md" p={30} mt={30} radius="md" >
        <TextInput label="Login" placeholder="Login" required  {...register("login")}/>
        <PasswordInput label="Password" placeholder="Your password" required mt="md" {...register("password")}/>
        <Group justify="space-between" mt="lg">
          <Anchor component="button" size="sm">
          </Anchor>
        </Group>
        <Button fullWidth mt="md" type="submit"  size="md">
          Sign in
        </Button>
      </Paper>
      </form>
    </Container>
  );
}

export default AuthenticationTitle;