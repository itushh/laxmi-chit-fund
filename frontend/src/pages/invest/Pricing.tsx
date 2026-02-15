const prices = [
  {
    price: 10,
    available: true,
    title: "Spark",
  },
  {
    price: 1000,
    available: true,
    title: "Confidence",
  },
  {
    price: 100000,
    available: true,
    title: "Faith",
  },
];

const Pricing = () => {
  return (
    <>
      <div className="flex justify-between gap-5">
        {prices.map((price, index) => (
          <div key={index} className="border border-border w-full px-5 py-10">
            <h2>{price.title}</h2>
            <h3>{price.price}</h3>
            <h4>
              {price.available
                ? `Your get Rs ${price.price * 2}`
                : "Not available in your region"}
            </h4>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button className="border border-border px-5 py-2">Continue</button>
      </div>
    </>
  );
};

export default Pricing;
