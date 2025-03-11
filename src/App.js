import styles from './styles/App.module.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import Landing from './pages/Landing';

function App() {
  return (
    <div className={styles.container}>
      <HashRouter>
          <Routes>
            <Route element={<Landing />} path="/" />
          </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
