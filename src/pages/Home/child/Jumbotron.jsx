const Jumbotron = () => {
  return (
    <section className="grid grid-cols-2 items-center my-20">
      <div>
        <div className="w-[300jjjkpx] h-[72px] bg-white bg-opacity-25 rounded-[40px] border border-zinc-400 text-neutral-600 text-[32px] font-bold font-['Satoshi']">
        Health Matters
        </div>
         <div className="w-[823px]">
          <span className="text-blue-600 text-[90px] font-bold leading-[105px]">One Step Solution <br/></span>
          <span className="text-black text-[90px] font-bold leading-[105px]">for all your dietary needs.</span>
        </div>
        <div className="w-[762px] text-zinc-500 text-[32px] font-bold font-['Satoshi'] leading-[43px]">Using your BMI index we calculate whether the dish is suitable for you.</div>
        <div className="text-blue-500 text-[34px] font-black font-['Satoshi'] tracking-[7.82px]">FEATURES WE PROVIDE</div>
      </div>
      <div>
        <img src="/images/jumbotron.png" alt="jumbotron" />
      </div>
    </section>
  );
};

export default Jumbotron;
