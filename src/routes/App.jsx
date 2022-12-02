import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import PasswordRecovery from '../pages/PasswordRecovery';
import Layout from '../containers/Layout';
import Checkout from '../pages/Checkout';
import CreateAccount from '../pages/CreateAccount';
import Home from '../pages/Home';
import MyAccount from '../pages/MyAccount';
import NewPassword from '../pages/NewPassword';
import NotFound from '../pages/NotFound';
import Orders from '../pages/Orders';
import SendEmail from '../pages/SendEmail';
import '../styles/global.scss';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

const App = () => {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/password-recovery' element={<PasswordRecovery />} />
                        <Route path='/send-email' element={<SendEmail />} />
                        <Route path='/new-password' element={<NewPassword />} />
                        <Route path='/account' element={<MyAccount />} />
                        <Route path='/signup' element={<CreateAccount />} />
                        <Route path='/checkout' element={<Checkout />} />
                        <Route path='/orders' element={<Orders />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    );
};

export default App;