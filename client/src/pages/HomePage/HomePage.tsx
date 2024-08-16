import { Image, Container, Title, Button, Group} from '@mantine/core';
import classes from './HeroBullers.module.css';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../App/provider/store/store';


function HomePage(): JSX.Element {


const navigate = useNavigate();

const user = useAppSelector((state) => state.currentUserStore.user)




  return (
    <Container size='xl'>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            Press the  <span className={classes.highlight}>button </span>  <br /> 
            to start the game
          </Title>
          <Group mt={25}>
            <Button onClick={()=> user? navigate('/game') : navigate('/auth/login')} radius="xl" size="md" className={classes.control}>
              button
            </Button>
          </Group>
        </div>
        <Image src='https://i.gifer.com/AnA.gif' className={classes.image} />
      </div>
    </Container>
  )
}

export default HomePage;
