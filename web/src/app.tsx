import { Route, Routes } from "react-router";
import { Home } from "./app/root/home";
import { Login } from "./app/auth/login";
import { AuthLayout } from "./app/auth/layout";
import { RootLayout } from "./app/root/layout";
import { Register } from "./app/auth/register";

export function App() {

  return (
    <Routes>

      <Route path="/" element={<RootLayout />} >
        <Route path="/" element={<Home />} />
      </Route>

      <Route path="/auth" element={<AuthLayout />} >
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

    </Routes>
  )
}


