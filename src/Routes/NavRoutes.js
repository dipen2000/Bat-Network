import { Routes, Route, Navigate } from "react-router-dom";
import { Login, Signup } from "../features/auth";
import {
  Home,
  Explore,
  Bookmark,
  SinglePage,
  Page404,
  UserProfile,
} from "../Pages";
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
        <Route path="/post/:postId" element={<SinglePage />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/profile/:username" element={<UserProfile />} />
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
