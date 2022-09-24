import Router from "./routes/Routes";
import "./App.css";
import Login from "./components/login/Login";
import Registration from "./pages/Registration/Registration";
import useToken from "./hooks/useToken";
// import Video from "./pages/Intro/Video";

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return (
      <>
        {/* <Video /> */}
        <Login setToken={setToken} />;
        <Registration />
      </>
    );
  }

  return (
    <div className="app-wrapper">
      <Router />
    </div>
  );
}

export default App;
