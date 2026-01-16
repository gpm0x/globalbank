function AboutHeroSection() {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="md:max-w-xl text-center mx-auto mb-20">
          <span className="inline-block mb-4 text-sm text-green-400 font-medium tracking-tighter">Confira nossas estatísticas</span>
          <h2 className="font-heading text-7xl text-white tracking-tighter-xl">Sobre nós</h2>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap lg:items-center -m-8 lg:-m-12">
            <div className="w-full md:w-1/2 p-8 lg:p-12">
              <div className="max-w-max mx-auto">
                <img className="rounded-3xl" src="/images/about.png" alt="" />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-8 lg:p-12">
              <span className="inline-block mb-4 text-sm text-green-400 font-medium tracking-tighter">Confira nossas estatísticas</span>
              <h2 className="mb-6 text-6xl md:text-7xl text-white tracking-tighter">Fazendo história de crédito com serviços bancários</h2>
              <p className="mb-10 text-white text-opacity-60 md:max-w-xs">A Global Bank é uma agência de branding estratégico focada na criação, reformulação e gestão de marcas</p>
              <a className="inline-block px-8 py-4 text-white hover:text-black font-medium tracking-tighter hover:bg-green-400 border-2 border-white focus:border-green-400 focus:border-opacity-40 hover:border-green-400 focus:ring-4 focus:ring-green-400 focus:ring-opacity-40 rounded-full transition duration-300" href="#">Ler mais</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHeroSection;