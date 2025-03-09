import styles from './App.module.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import Landing from './pages/Landing';

function App() {
  return (
    <div className={styles.container}>
      <HashRouter>
        {/* <AuthProvider> */}
          <Routes>
            <Route element={<Landing />} path="/" />
            {/* <Route element={<Login />} path="/login" /> */}
            {/* <Route element={<ProtectedRoutes />}>
              <Route element={<Home />} path="home" />
            </Route> */}
          </Routes>
        {/* </AuthProvider> */}
      </HashRouter>
    </div>
  );
}

export default App;
