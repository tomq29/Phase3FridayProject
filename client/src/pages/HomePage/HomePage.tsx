import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core';
import classes from './HeroBullers.module.css';
import { useNavigate } from 'react-router-dom';


function HomePage(): JSX.Element {


const navigate = useNavigate();



  return (
    <Container size='xl'>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            Press the  <span className={classes.highlight}>button </span>  <br /> 
            to start the game
          </Title>
          <Group mt={25}>
            <Button onClick={() => navigate('/game')} radius="xl" size="md" className={classes.control}>
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
