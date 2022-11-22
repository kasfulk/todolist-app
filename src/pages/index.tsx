import type { NextPage } from 'next'
import { useState } from 'react';
import { createStyles, Paper, Text, Container, Divider, TextInput, Textarea, Button } from '@mantine/core';

const Home: NextPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const handleButton = () => {
    alert(`${title} ${description}`)
  };
  return (
    <Container size="xs" px="xs" py="md">
      <Paper radius="md" p="xl" withBorder>
        <Text size="lg" weight={900} >
          Todo List App
        </Text>
        <Divider />
        <div>
            <TextInput label="Title" placeholder="What will you do?" value={title} onChange={(event) => setTitle(event.target.value)} />
            <Textarea 
                 label="Description" 
                 placeholder="Description of task." 
                 onChange={(event) => setDescription(event.target.value)}
                 value={description} 
                 autosize
                 minRows={2}
                 maxRows={4}/>
            <Button mt={10} onClick={handleButton}>Add</Button>
        </div>

      </Paper>
    </Container>
  )
}

export default Home
