import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Router />
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
