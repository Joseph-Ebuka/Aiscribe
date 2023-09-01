import React, { Suspense } from "react";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import "./styles.scss";
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
import { Loader } from "./Components/Loader";
import Pages from "./ComponetsTito/Pages";
import Blog from "./ComponetsTito/blog";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          index
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        />

        <Route
          path="pages"
          element={
            <Suspense fallback={<Loader />}>
              <Pages />
            </Suspense>
          }
        />

        <Route
          path="blog"
          element={
            <Suspense fallback={<Loader />}>
              <Blog />
            </Suspense>
          }
        />

        <Route path="contact" element={<Contact />} />
        <Route
          path="signup"
          element={
            <Suspense fallback={<Loader />}>
              <Signup />
            </Suspense>
          }
        />
        <Route path="signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
