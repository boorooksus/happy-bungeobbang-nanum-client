import MainPage from 'pages/MainPage';
import ManagerPage from 'pages/ManagerPage';
import { Route, Routes } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/manager" element={<ManagerPage />}></Route>
        <Route path="/*" element={<MainPage />} />
      </Routes>
      <Analytics />
    </div>
  );
};

export default App;
