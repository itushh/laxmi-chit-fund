const steps = [
  {
    title: "Capital Allocation",
    desc: "Submit your contribution to an active cycle through the secure member portal. Once recorded, the allocation is logged and assigned automatically.",
    img: "",
  },
  {
    title: "Cycle Lock Period",
    desc: "The system enforces a 21-day lock-in during which capital remains inaccessible. No manual actions or early exits are permitted.",
    img: "",
  },
  {
    title: "Maturity Processing",
    desc: "At cycle completion, the system initiates automated maturity processing based on predefined rules and availability.",
    img: "",
  },
];

const Flow = () => {
  return (
    <div className="max-w-300 mx-auto flex flex-col gap-15">
      {steps.map((step, index) => (
        <div>
            <div className="py-5">
                <div className="border border-border w-fit px-4 py-1 text-sm rounded-md">{index+1}</div>
            </div>
            <div className="flex border border-border">
                <div className="w-full flex flex-col justify-center items-center p-5 text-center">
                    <h2>{step.title}</h2>
                    <p className="text-primary/70">{step.desc}</p>
                </div>
                <div className="w-full aspect-[2/1.5] p-5">
                    <div className="size-full bg-white/5 rounded-4xl"></div>
                </div>
            </div>
        </div>
      ))}
    </div>
  );
};

export default Flow;
