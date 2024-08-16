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
import { Link, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from "react-hook-form"
import { useAppDispatch } from '../../App/provider/store/store';
import { regUser } from '../../entities/user/model/authSlice';

function RegPage(): JSX.Element {

  const dispatch = useAppDispatch();

  const { register, handleSubmit, formState: { errors }, watch } = useForm<{ login: string, password: string, confirmPassword?: string }>({
    mode: 'onChange',
});

const navigate = useNavigate();

const onSubmit: SubmitHandler<{
  confirmPassword?: string; login: string, password: string }> = (data) => {
  if(data.password === data.confirmPassword) {
    delete data.confirmPassword
    console.log(data)
    dispatch(regUser(data)).then(()=>navigate('/'))
  }
 
}
  return (
<Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Hi, new User!
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
      Do you have an account?{' '}
        <Anchor size="sm" component="button">
          <Link to="/auth/login">
              Login to account</Link>
        </Anchor>
      </Text>
      <form  onSubmit={handleSubmit(onSubmit)}>
      <Paper  withBorder shadow="md" p={30} mt={30} radius="md" >
        <TextInput label="Login" placeholder="Login" required  {...register("login", {
          required: "Login is required",
          pattern: {
            value: /^([а-яё]+|[a-z]+)$/i,
            message: "Login must contain only letters",
          }
        })}/>
        {errors.login && <p style={{ color: "red" }}>{errors.login.message}</p>}
        <PasswordInput label="Password" placeholder="Your password" required mt="md" {...register("password", {
          pattern: {
            value: /.{8,}/,
            message: "Password must contain at least 8 characters",
          }
        })}/>
        {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
        <PasswordInput label="Confirm Password" placeholder="Confirm password" required mt="md" {...register("confirmPassword", {
          validate: (value) => value === watch("password") || "Пароли не совпадают",
        })}/>
        {errors.confirmPassword && <p style={{ color: "red" }}>{errors.confirmPassword.message}</p>}
        <Button fullWidth mt="md" type="submit"  size="md">
          Sign up
        </Button>
      </Paper>
      </form>
    </Container>
)
}

export default RegPage