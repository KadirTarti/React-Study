"use client";

import CountUp from "react-countup";

const stats = [
  { num: 14, text: "Years of work experience" },
  { num: 1, text: "Years of IT experience" },
  { num: 21, text: "Projects completed" },
  { num: 1850, text: "Contributions in 2024" },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
  <div className="container" mx-auto>
    <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
    {stats.map((item, index)=> {
      return ( 
        <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start" 
        key={index}>
      <CountUp
      className="text-4xl xl:text-6xl font-extrabold"
      end={item.num} 
      duration={5} 
      delay={2} 
      />
      <p
      className={`${
      item.text.length < 15 ? "ma[100px]" : "max-w-[150px]"}
      leading-snug text-white/80`}
      >
      {item.text}
      </p>
      </div>
    );
    })}
    </div>
  </div>
  </section>
)
};

export default Stats;
