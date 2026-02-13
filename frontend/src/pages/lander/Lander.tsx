import Footer from "@/components/Footer";
import Flow from "./Flow";
import Hero from "./Hero";

const Lander = () => {
  return (
    <>
      <Hero />
      <div className="my-20">
        <Flow />
      </div>
      <Footer />
    </>
  );
};

export default Lander;
