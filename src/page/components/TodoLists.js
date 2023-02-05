import { Col, Row, Input, Button, Select, Tag } from 'antd';
import { useEffect, useRef, useState } from 'react';
import Todo from './Todo';
import { useDispatch,useSelector } from 'react-redux';
import { addTodo } from '../../redux/actions';
import { todoListSelector } from '../../redux/selector';
// lib add id
import { v4 } from 'uuid'

export default function TodoList() {

  const todoList = useSelector(todoListSelector);
  const dispatch = useDispatch()

  const addInputRef = useRef()

  const [addValue, setAddValue ] = useState('')
  const [priority, setPriority] = useState('Medium')


  useEffect(() => {
    console.log("Start")
    dispatch({
      type : 'load',
    })
  },[])  // eslint-disable-next-line

  const handleAddTodo = (e) => {
    setAddValue(e.target.value)
  }

  const handleClickButtonAdd = () => {
    dispatch(addTodo({
      id: v4(),
      name : addValue,
      completed : false,
      priority : priority,
    })) 
    setAddValue('')
    addInputRef.current.focus()
  }

  
  return (
    <Row style={{ height: 'calc(100% - 40px)' , overflowY: 'scroll'}}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'scroll'}}>
        {todoList?.map(todo =>  <Todo name={todo.name} priority={todo.priority} key = {todo.id} completed = {todo.completed} id = {todo.id}/>)}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input  value={addValue} onChange = {handleAddTodo} ref = {addInputRef} />
          <Select defaultValue="Medium" value={priority} onChange={ value =>  setPriority(value) }>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleClickButtonAdd}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}