import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Home({ children }) {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/redux");
  },[])


  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          display: "flex",
          justifyContent: "center",
          width: "100vw",
          borderBottom : "2px dashed aqua"
        }}
      >
        <NavLink to={"/redux"}>Todo App</NavLink>
        {/* <NavLink to={"/reducer-context"}>Reducer + Context</NavLink> */}
      </div>
      <div className="wrap">{children}</div>
    </>
  );
}

export default Home;
