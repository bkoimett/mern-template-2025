import { useEffect, useState } from "react";
// import styles from "./Auth.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserDetails = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const fetchUserDetails = async (token) => {
    return await axios.get("http://localhost:3001/api/auth/getUserDetails", {
      withCredentials: true, // send cookie
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  useEffect(() => {
    // Fetch user details from backend
    const fetchUser = async () => {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        navigate("/login");
        return;
      }
      try {
        const res = await fetchUserDetails(accessToken);
        setUser(res.data);
      } catch (error) {
        const status = error.response.status;
        if (status === 401 || status === 403) {
          try {
            console.log("Access Token Expxired");
            const refreshRes = await axios.get(
              "http://localhost:3001/api/auth/refresh",
              {
                withCredentials: true,
              }
            );
            const newAccessToken = refreshRes.data.accessToken;
            localStorage.setItem("accessToken", newAccessToken);
            const retryRes = await fetchUserDetails(newAccessToken);
            setUser(retryRes.data);
          } catch (refresherror) {
            console.log("Refresh token expired");

            localStorage.clear();
            navigate("/login");
          }
        }
      }
    };

    fetchUser();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:3001/api/auth/logout",
        {},
        {
          withCredentials: true,
        }
      );
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      alert("Logout failed. Please try again.");
    }
  };

  if (!user) return <p>Loading user info...</p>;

  return (
    // <div className={styles.authContainer}>

    //   <div className={styles.authForm}>
    //     <h2 className={styles.authTitle}>User Details</h2>
    //     <p>
    //       <strong>Name:</strong> {user.name}
    //     </p>
    //     <p>
    //       <strong>Email:</strong> {user.email}
    //     </p>
    //     <p>
    //       <strong>Mobile:</strong> {user.mobile}
    //     </p>

    //     <button onClick={handleLogout} className={styles.submitButton}>
    //       Logout
    //     </button>
    //   </div>
    // </div>
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex gap-2">
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              className="theme-controller"
              value="light"
            />

            {/* sun icon */}
            <svg
              className="swap-off h-8 w-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on h-8 w-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center min-h-screen bg-base-200">
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">User Details</h2>{" "}
            <p>
              <strong>Name:</strong> {user.name}{" "}
            </p>{" "}
            <p>
              <strong>Email:</strong> {user.email}{" "}
            </p>{" "}
            <p>
              <strong>Mobile:</strong> {user.mobile}{" "}
            </p>
            <div class="card-actions justify-end">
              <button onClick={handleLogout} class="btn btn-primary">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
