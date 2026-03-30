// import { BrowserRouter, Routes, Route } from "react-router-dom";

// /* HOME COMPONENTS */

// import Navbar from "./home/Navbar";
// import Hero from "./home/Hero";
// import Categories from "./home/Categories";
// import Recommended from "./home/Recommended";
// import FlashSale from "./home/FlashSale";
// import Featured from "./home/Featured";
// import Testimonials from "./home/Testimonials";
// import Newsletter from "./home/Newsletter";
// import Footer from "./home/Footer";


// /* PAGES */

// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import ProductView from "./pages/ProductView";
// import CategoriesPage from "./pages/CategoriesPage";


// /* HOME PAGE COMBINED */

// function HomePage() {

//   return (

//     <>
//       <Navbar />
//       <Hero />
//       <Categories />
//       <Recommended />
//       <FlashSale />
//       <Featured />
//       <Testimonials />
//       <Newsletter />
//       <Footer />
//     </>

//   );

// }


// export default function App() {

//   return (

//     <BrowserRouter>

//       <Routes>


//         {/* HOME */}

//         <Route path="/" element={<HomePage />} />
//         <Route path="/categories" element={<CategoriesPage />} />

//         {/* AUTH */}

//         <Route path="/login" element={<Login />} />

//         <Route path="/register" element={<Register />} />


//         {/* PRODUCT VIEW (LOGIN REQUIRED INSIDE PAGE) */}

//         <Route path="/product-view" element={<ProductView />} />


//       </Routes>

//     </BrowserRouter>

//   );

// }


import { BrowserRouter, Routes, Route } from "react-router-dom";

/* HOME COMPONENTS */

import Navbar from "./home/Navbar";
import Hero from "./home/Hero";
import Categories from "./home/Categories";
import Recommended from "./home/Recommended";
import FlashSale from "./home/FlashSale";
import Featured from "./home/Featured";
import Testimonials from "./home/Testimonials";
import Newsletter from "./home/Newsletter";
import Footer from "./home/Footer";

/* AUTH PAGES */

import Login from "./pages/Login";
import Register from "./pages/Register";
import CategoriesPage from "./pages/CategoriesPage";
import CategoryProducts from "./pages/CategoryProducts";

/* PRODUCT VIEW MODULE */

import ProductView from "./productview/ProductView";
import Wishlist from "./productview/Wishlist";
import Cart from "./productview/Cart";


/* HOME PAGE COMBINED */

function HomePage() {

  return (

    <>
      <Navbar />
      <Hero />
      <Categories />
      <Recommended />
      <FlashSale />
      <Featured />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>

  );

}


/* APP ROUTER */

export default function App() {

  return (

    <BrowserRouter>

      <Routes>


        {/* HOME */}

        <Route path="/" element={<HomePage />} />


        {/* CATEGORY LIST PAGE */}

        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/category/:name" element={<CategoryProducts />} />

        {/* AUTH */}

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />


        {/* PRODUCT DETAILS */}

        <Route path="/product-view" element={<ProductView />} />


        {/* USER FEATURES */}

        <Route path="/wishlist" element={<Wishlist />} />

        <Route path="/cart" element={<Cart />} />


      </Routes>

    </BrowserRouter>

  );

}