import { NavLink } from "react-router-dom";

function Home({ children }) {
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
          borderBottom : "1px solid aqua"
        }}
      >
        <NavLink to={"/redux"}>Redux</NavLink>
        <NavLink to={"/reducer-context"}>Reducer + Context</NavLink>
      </div>
      <div className="wrap">{children}</div>
    </>
  );
}

export default Home;
