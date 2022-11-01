import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './components/layout/Main';
import LoginBootstarp from './components/LoginBootstarp';
import Register from './components/Register';
import RegisterReactBootstrap from './components/RegisterReactBootstrap';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main>0</Main>,
    children: [
      {
        path: '/',
        element: <RegisterReactBootstrap></RegisterReactBootstrap>
      },
      {
        path: '/register',
        element: <RegisterReactBootstrap></RegisterReactBootstrap>
      },
      {
        path: '/login',
        element: <LoginBootstarp></LoginBootstarp>
      }
    ]
  }
])

function App() {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
