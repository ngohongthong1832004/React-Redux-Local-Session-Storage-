import { Typography, Divider } from 'antd';

import Home from "./Home";
import Filters from "./components/Fillters";
import TodoList from "./components/TodoLists";

const { Title } = Typography;

function ReduxCom() {


  return (
    <Home>
      <div
        style={{
          width: 350,
          margin: "20px auto 0 auto",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          padding: 20,
          boxShadow: "0 0 10px 4px #bfbfbf",
          borderRadius: 5,
          height: "80vh",
        }}
      >
        <Title style={{ textAlign: "center" }}>TODO APP</Title>
        <Filters />
        <Divider />
        <TodoList />
      </div>
    </Home>
  );
}

export default ReduxCom;
