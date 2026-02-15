import Header from "@/components/Header";
import Pricing from "./Pricing";
import Footer from "@/components/Footer";
import Flow from "@/components/Flow";

const Invest = () => {
  return (
    <>
      <div className="max-w-300 mx-auto">
        <div className="border border-border py-5">
          <Header />
        </div>
        <div className="my-20">
          <Pricing />
        </div>
        <div className="my-20">
          <Flow />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Invest;
