import { useForm } from "react-hook-form";
import styles from "./Auth.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
  });

  const showToast = (message, type = "success", duration = 1000, onClose) => {
    setToast({ show: true, message, type });
    const t = setTimeout(() => {
      setToast({ ...toast, show: false });
      if (typeof onClose === "function") onClose();
      clearTimeout(t);
    }, duration);
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await axios.post(
        "http://localhost:3001/api/auth/login",
        data,
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        const { accessToken } = response.data;
        if (accessToken) {
          localStorage.setItem("accessToken", accessToken);
        } else {
          console.log("Token Not Received");
        }

        // show success toast, then navigate after a short delay so user sees it
        showToast(
          "You have been logged in successfully!",
          "success",
          1000,
          () => {
            navigate("/userDetails");
          }
        );
      }
    } catch (error) {
      console.error("Login error:", error);
      const message =
        error?.response?.data?.message ||
        "An unexpected error occurred. Please try again.";
      showToast(message, "error", 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
            <div className="text-center">
              <h1 className="text-5xl font-bold">Welcome Back</h1>
              <p className="py-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
                rerum, nesciunt deleniti maxime accusamus minus. Magnam facere
                veritatis, facilis iste aspernatur quis neque placeat debitis
                dolor illum distinctio! Neque omnis hic cum quo non debitis
                libero similique voluptatum assumenda est, porro amet suscipit!
                Quod repellendus est aliquid optio a officia.
              </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <h3 className="text-xl font-bold">Sign In</h3>
                {/* email field */}
                <label htmlFor="email" className="label">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <div className={styles.error}>{errors.email.message}</div>
                )}

                {/* password field */}
                <label htmlFor="password" className="label">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className={styles.input}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                />
                {errors.password && (
                  <div className={styles.error}>{errors.password.message}</div>
                )}

                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex w-full justify-center rounded-md px-3 py-1.5 text-sm/6 font-semibold text-white ${
                    isSubmitting
                      ? "bg-indigo-300"
                      : "bg-indigo-500 hover:bg-indigo-400"
                  } focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500`}
                >
                  {isSubmitting ? "Signing in..." : "Sign in"}
                </button>
                <p className={styles.toggleText}>
                  Don't have an account?{" "}
                  <Link to="/register" className={styles.toggleLink}>
                    Register
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>

      {/* Toast */}

      {toast.show && (
        <div className="toast toast-top toast-start">
          <div
            className={`alert ${
              toast.type === "success" ? "alert-success" : "alert-error"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{toast.message}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
