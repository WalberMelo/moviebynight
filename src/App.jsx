import Router from "./routes/Routes";
import "./App.css";
import Login from "./components/login/Login";

function App() {
  const token = JSON.parse(sessionStorage.getItem("token"));
  console.log(token);

  if (!token) {
    return <Login />;
  }

  return (
    <div className="app-wrapper">
      <Router />
    </div>
  );
}

export default App;
