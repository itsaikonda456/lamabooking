import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { auth } from "../../firebaseConfig"; // Import Firebase Auth
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

  // Check authentication state on component mount
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true); // User is logged in
      } else {
        setIsLoggedIn(false); // User is logged out
      }
    });

    return () => unsubscribe(); // Cleanup subscription
  }, []);

  const handleRegisterForm = () => {
    navigate("/form1");
  };

  const handleLoginForm = () => {
    navigate("/form2");
  };

  const handleList = () => {
    navigate("/list");
  };

  const handleHotel = () => {
    navigate("/hotel");
  };

  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out using Firebase
      alert("Logged out successfully!");
      navigate("/"); // Redirect to home page
    } catch (error) {
      alert("Error logging out: " + error.message);
    }
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <a className="Lamabooking" href="http://localhost:3000/">
          <span className="logo">LamaBooking</span>
        </a>
        <div className="navItems">
          <button onClick={handleList} className="navBtn">
            List
          </button>
          <button onClick={handleHotel} className="navBtn">
            Hotel
          </button>
          {isLoggedIn ? (
            <button onClick={handleLogout} className="navBtn">
              Logout
            </button>
          ) : (
            <>
              <button onClick={handleLoginForm} className="navBtn">
                Login
              </button>
              <button onClick={handleRegisterForm} className="navBtn">
                Register
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;