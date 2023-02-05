import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { searchFilterChange, statusFilterChange, priorityFilterChange } from '../../redux/actions';
import { priorityFilter, statusFilter } from '../../redux/selector';

const { Search } = Input;

export default function Filters() {
  
  const [searchValue, setSearchValue] = useState("")
  const [statusValue, setStatusValue] = useState("")

  const dispatch = useDispatch()

  const test = useSelector(priorityFilter)
  

  console.log('test' , test)

  const handleChangeSearchFilter = e => {
  
    setSearchValue(e.target.value)
    dispatch(searchFilterChange(e.target.value))
  } 
  const handleStatusChange = e =>{
    setStatusValue(e.target.value)
    dispatch(statusFilterChange(e.target.value))
  }

  const handleChangePriority = e => dispatch(priorityFilterChange(e))

  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search placeholder='input search text' value = {searchValue} onChange = {handleChangeSearchFilter }/>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value = {statusValue} onChange = { handleStatusChange }>
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}
          onChange = {handleChangePriority}
        >
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
      </Col>
    </Row>
  );
}
