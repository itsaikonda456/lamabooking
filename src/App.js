import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import LoginForm from "./pages/form2/LoginForm";
import RegisterForm from "./pages/form1/RegisterForm";
import SearchPage from "./Components/Searchbar/SearchPage";
import { auth } from "./firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

const App = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={user ? <Home /> : <Navigate to="/form2" />} />
                <Route path="/hotel" element={user ? <Hotel /> : <Navigate to="/form2" />} />
                <Route path="/list" element={user ? <List /> : <Navigate to="/form2" />} />
                <Route path="/search" element={user ? <SearchPage /> : <Navigate to="/form2" />} />
                <Route path="/form2" element={user ? <Navigate to="/" /> : <LoginForm />} />
                <Route path="/form1" element={user ? <Navigate to="/" /> : <RegisterForm />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
