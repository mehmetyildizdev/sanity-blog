function Banner() {
  return (
    <section className="flex items-center border border-black rounded-xl max-w-7xl mx-auto bg-neutral-500">
      <div className="flex items-center py-20">
        <div className="px-10 space-y-5">
          <h1 className="text-6xl max-w-l font-serif">
            What is{" "}
            <span className="underline decoration-zinc-400 decoration-4">
              Lorem Ipsum
            </span>
            ?
          </h1>
          <h2>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </h2>
        </div>
        <div className="hidden md:inline-flex border-l-2 border-green-400">
          <img className="" src="/assets/logo.png" alt=""></img>
        </div>
      </div>
    </section>
  );
}

export default Banner;
