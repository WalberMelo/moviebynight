import Router from "./routes/Routes";
import "./App.css";
import Login from "./components/login/Login";
import useToken from "./hooks/useToken";

function App() {
  const { token, setToken } = useToken();

  if (token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="app-wrapper">
      <Router />
    </div>
  );
}

export default App;
