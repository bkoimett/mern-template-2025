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
        showToast("Login successful!", "success", 1000, () => {
          navigate("/userDetails");
        });
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
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-100"
              >
                Email address
              </label>
              <div className="mt-2">
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
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-100"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
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
              </div>
            </div>

            <div>
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
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-400">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-indigo-400 hover:text-indigo-300"
            >
              Register
            </Link>
          </p>
        </div>

        {/* Toast */}
        {toast.show && (
          <div className="toast toast-top toast-start">
            <div
              className={`alert ${
                toast.type === "success" ? "alert-success" : "alert-error"
              }`}
            >
              <span>{toast.message}</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
