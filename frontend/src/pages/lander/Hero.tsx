import Header from "@/components/Header";

const Hero = () => {
  return (
    <div className="h-dvh bg-black bg-linear-to-br from-[#010A10] to-black">
      <div className="max-w-300 mx-auto h-full flex flex-col justify-end">
        <div className="border border-border py-5">
            <Header />
        </div>
        <div className="flex-1 flex flex-col items-center justify-center border border-border">
            <h1>Double your money within 21 days</h1>
            <p className="text-primary/70">the scheme used by rich people to grow their money</p>
            <button>Invest Now</button>
        </div>
        <div className="border border-border flex justify-between py-10">
          <div>
            <div>$ 15680</div>
            <div>credited</div>
          </div>
          <div>
            <div>$ 1575</div>
            <div>people</div>
          </div>
          <div>
            <div>$ 31360</div>
            <div>debited</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
