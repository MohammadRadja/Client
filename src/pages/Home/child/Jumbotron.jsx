const Jumbotron = () => {
  return (
    <section className="grid grid-cols-2 items-center my-20">
      <div>
        <h2 className="text-7xl font-bold">
          Mari Melakukan Kegiatan Positif <br /> 
        </h2>
        <p className="text-3xl font-light mt-5">Mau kemana hari ini?</p>
      </div>
      <div>
        <img src="/images/jumbotron.png" alt="jumbotron" />
      </div>
    </section>
  );
};

export default Jumbotron;
