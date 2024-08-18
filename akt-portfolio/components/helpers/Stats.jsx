"use client";

import CountUp from "react-countup";
import '../styling/stats.css'

const stats = [
  { num: 9, text: "Years of work experience" },
  { num: 21, text: "Projects completed" },
  { num: 1892, text: "Contributions in 2024" },
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



	<div className="text-center mt-5 mb-5">

  <h1 id="github-chart-api"><a href="https://github.com/KadirTarti/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">My Github Activities</a></h1>

		<img className="m-auto figure" src="http://ghchart.rshah.org/KadirTarti" alt="Abdulkadir's Github Chart" />

	</div>


  </section>
)
};

export default Stats;
