import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import AdminLayout from "./components/Layout/AdminLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import CollectionPage from "./pages/CollectionPage";
import Checkout from "./components/Cart/Checkout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          {/* User Route */}
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route path="collection" element={<CollectionPage />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          {/* Admin Route */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
