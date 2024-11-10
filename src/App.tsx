// import { useRoutes } from 'react-router-dom';
// import { routes } from './routes';
import MainPage from 'pages/MainPage';
import ManagerPage from 'pages/ManagerPage';
import { Route, Routes } from 'react-router-dom';

// const App: React.FC = () => {
//   const elem = useRoutes(routes);
//   return elem;
// };
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/manager" element={<ManagerPage />}></Route>
        <Route path="/*" element={<MainPage />} />
      </Routes>
    </div>
  );
};

export default App;
