import Navbar from "../home/Navbar";
import ProductInfo from "./ProductInfo";
import ProductFeatures from "./ProductFeatures";
import DownloadSteps from "./DownloadSteps";
import RelatedProducts from "./RelatedProducts";

export default function ProductView() {

  return (

    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">

        <ProductInfo />

        <ProductFeatures />

        <DownloadSteps />

        <RelatedProducts />

      </div>

    </>

  );

}