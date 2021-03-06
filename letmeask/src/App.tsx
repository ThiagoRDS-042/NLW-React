import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";
import { AdminRoom } from "./pages/AdminRoom";
import { Home } from "./pages/Home/index";
import { NewRoom } from "./pages/NewRoom/index";
import { Room } from "./pages/Room/index";
import { ThemeContextProvider } from "./contexts/ThemeContext";

export function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <ThemeContextProvider>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/rooms/new" component={NewRoom} />
            <Route path="/rooms/:id" component={Room} />
            <Route path="/admin/rooms/:id" component={AdminRoom} />
          </Switch>
        </ThemeContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}
