import { Route, Routes } from "react-router";
import { LoginPage } from "./app/auth/login";
import { RegisterPage } from "./app/auth/register";
import { AuthLayout } from "./app/auth/layout";
import { RootLayout } from "./app/root/layout";
import { ReservoirPage } from "./app/root/reservoir";
import { ReservoirDetailsPage } from "./app/root/reservoir/details";

export function App() {

  return (
    <Routes>

      <Route path="/" element={<RootLayout />} >
        <Route path="/" element={<ReservoirPage />} />
        <Route path="reservoir/:id" element={<ReservoirDetailsPage />} />
      </Route>

      <Route path="/auth" element={<AuthLayout />} >
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>

    </Routes>
  )
}


