import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../home/Navbar";

export default function Login() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "a@gmail.com",
    password: "123"
  });

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!form.email || !form.password) {

      alert("Please enter all fields");

      return;

    }

    localStorage.setItem("user", JSON.stringify(form));

    alert("Login Successful ✅");

    navigate("/product-view");

  };

  return (

    <>
      <Navbar />

      <div className="min-h-screen flex justify-center items-center bg-gray-100">

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg p-10 rounded-xl w-[400px]"
        >

          <h2 className="text-3xl font-bold text-[#082a57] mb-6">

            Login

          </h2>


          <input
            name="email"
            type="email"
            placeholder="Enter Email"
            onChange={handleChange}
            className="w-full border p-3 mb-4 rounded"
          />


          <input
            name="password"
            type="password"
            placeholder="Enter Password"
            onChange={handleChange}
            className="w-full border p-3 mb-6 rounded"
          />


          <button className="w-full bg-[#082a57] text-white py-3 rounded">

            Login

          </button>


          <p className="mt-4 text-center">

            New user?{" "}
            <span
              onClick={() => navigate("/register")}
              className="text-blue-600 cursor-pointer"
            >
              Register here
            </span>

          </p>

        </form>

      </div>
    </>
  );

}