import {Card,Text,SimpleGrid, UnstyledButton,Group,} from '@mantine/core';
import classes from './ActionsGrid.module.css';


function TopicCard({topicCard}) {
    const items = topicCard.Questions.map((question) => (
        <UnstyledButton key={question.id} className={classes.item}>
                    <Text size='xs'>{question.point}</Text>
        </UnstyledButton>
    ));

    return (
        <div style={{ margin: 30 }}>
            <Card withBorder radius='md' className={classes.card}>
                <Group justify='space-between'>
                    <Text className={classes.title}>{topicCard.topicsName}</Text>
                </Group>
                <SimpleGrid cols={3} mt='md'>{items}</SimpleGrid>
            </Card>
        </div>
    );
}

export default TopicCard;