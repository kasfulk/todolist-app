import React from 'react'
import type { NextPage } from 'next'
import { useState } from 'react'
import {
  Paper,
  Text,
  Container,
  Divider,
  TextInput,
  Textarea,
  Button,
} from '@mantine/core'
import {
  getAllTodoList,
  addTodoList,
  deleteTodoList,
} from '@/store/features/todo-list/slice'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

const Home: NextPage = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const dispacth = useDispatch()

  const todoList = useSelector(getAllTodoList)

  const handleButton = () => {
    const id = uuidv4()
    dispacth(
      addTodoList({
        id,
        title,
        description,
      }),
    )
  }

  return (
    <Container size="xs" px="xs" py="md">
      <Paper radius="md" p="xl" withBorder>
        <Text size="lg" weight={900}>
          Todo List App
        </Text>
        <Divider />
        <div>
          <TextInput
            label="Title"
            placeholder="What will you do?"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <Textarea
            label="Description"
            placeholder="Description of task."
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            autosize
            minRows={2}
            maxRows={4}
          />
          <Button mt={10} onClick={handleButton}>
            Add
          </Button>
        </div>
      </Paper>
      <Container>
        {todoList?.map((value) => (
          <>
            <h4>{value.title}</h4>
            <h5>{value.description}</h5>
            <Button onClick={() => dispacth(deleteTodoList(value))}>
              Delete
            </Button>
          </>
        ))}
      </Container>
    </Container>
  )
}

export default Home
