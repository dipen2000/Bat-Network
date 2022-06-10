import { Routes, Route, Navigate } from "react-router-dom";
import { Login, Signup } from "../features/auth";
import { Home, Explore, Bookmark, SinglePage } from "../Pages";
import { useSelector } from "react-redux";
import { PrivateRoutes } from "./PrivateRoutes";

const NavRoutes = () => {
  const token = useSelector((state) => state.auth.token);
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/single" element={<SinglePage />} />
      </Route>

      {!token ? (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </>
      ) : (
        <>
          <Route path="/login" element={<Navigate to="/" replace />} />
          <Route path="/signup" element={<Navigate to="/" replace />} />
        </>
      )}
    </Routes>
  );
};

export { NavRoutes };
