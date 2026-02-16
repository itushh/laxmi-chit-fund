import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Countdown from "./Countdown";
import ROI from "./ROI";
import Flow from "@/components/Flow";

const Dashboard = () => {
  return (
    <>
      <div className="max-w-300 mx-auto">
        <div className="border border-border py-5">
          <Header />
        </div>
        <div className="my-20">
          <Countdown />
        </div>
        <div className="my-20">
          <ROI />
        </div>
        <div className="my-20">
          <Flow />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
