import { Row, Tag, Checkbox } from 'antd';
import { useState } from 'react';
import { CloseCircleOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux';
import { checkedStatusChange, deleteChange } from '../../redux/actions';

const priorityColorMapping = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray',
};

export default function Todo({ name, priority, completed, id}) {
  const [checked, setChecked] = useState(completed);
  const dispatch = useDispatch()

  const toggleCheckbox = (id) => {
    setChecked(!checked);
    dispatch(checkedStatusChange(id))
  };

  const handleDelete = (id) => {
    dispatch(deleteChange(id))
  }

  return (
    <Row
      justify='space-between'
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={() => toggleCheckbox(id)} style = {{flex: 1}} >
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[priority]} style={{ marginRight: '8px'}}>
        {priority}
      </Tag>
      <span style={{display : 'block' , paddingTop : '3px', color : 'red', cursor : 'pointer'}} onClick = { () => handleDelete(id) }>
        <CloseCircleOutlined />
      </span>
    </Row>
  );
}