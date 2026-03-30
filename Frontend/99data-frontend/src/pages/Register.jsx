import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../home/Navbar";

export default function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (form.password !== form.confirmPassword) {

      alert("Passwords do not match ❌");

      return;

    }

    localStorage.setItem("user", JSON.stringify(form));

    alert("Registered Successfully 🎉");

    navigate("/product-view");

  };

  return (

    <>
      <Navbar />

      <div className="min-h-screen flex justify-center items-center bg-gray-100">

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg p-10 rounded-xl w-[420px]"
        >

          <h2 className="text-3xl font-bold text-[#082a57] mb-6">

            Register

          </h2>


          <input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full border p-3 mb-4 rounded"
          />


          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full border p-3 mb-4 rounded"
          />


          <input
            name="mobile"
            placeholder="Mobile"
            onChange={handleChange}
            className="w-full border p-3 mb-4 rounded"
          />


          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full border p-3 mb-4 rounded"
          />


          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            onChange={handleChange}
            className="w-full border p-3 mb-6 rounded"
          />


          <button className="w-full bg-[#082a57] text-white py-3 rounded">

            Register

          </button>


          <p className="mt-4 text-center">

            Already registered?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-blue-600 cursor-pointer"
            >
              Login here
            </span>

          </p>

        </form>

      </div>
    </>
  );

}