import './App.css'
import Layout from './Layout';
import { useEffect } from 'react';
import ProtectedRoutes from './Utils/ProtectedRoutes'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home, Login, Signup } from './pages'
import { useDispatch, useSelector } from 'react-redux';
import { storeLogin } from './store/authSlice';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const storageLoginStatus = localStorage.getItem('stickerAppLogin');
    const storageUserData =localStorage.getItem('stickerAppUserData');

    if (storageLoginStatus && storageUserData) {
      dispatch(storeLogin({ userData: JSON.parse(storageUserData) }));
    }
  }, [dispatch]);

  const authStatus = useSelector((state) => state.auth.status);
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Layout />} >
            {!authStatus && (
              <>
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
              </>
            )}
            <Route element={<ProtectedRoutes />}>
              <Route path='/login' element={<Navigate to='/' />} />
              <Route path='/signup' element={<Navigate to='/' />} />
              <Route path='/' element={<Home />} />
            </Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App