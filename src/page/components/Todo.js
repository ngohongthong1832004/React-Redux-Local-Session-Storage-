import { Row, Tag, Checkbox, Button } from 'antd';
import { useState } from 'react';
import { CloseCircleOutlined } from '@ant-design/icons'

const priorityColorMapping = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray',
};

export default function Todo({ name, priority, completed}) {
  const [checked, setChecked] = useState(completed);

  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  return (
    <Row
      justify='space-between'
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox} style = {{flex: 1}}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[priority]} style={{ marginRight: '8px'}}>
        {priority}
      </Tag>
      <span style={{display : 'block' , paddingTop : '3px', color : 'red', cursor : 'pointer'}}>
        <CloseCircleOutlined />
      </span>
      {/* <Button  danger style={{height : '100%'}} >X</Button> */}
    </Row>
  );
}