function CompanyStorySection() {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center -m-8">
          <div className="w-full md:w-1/2 p-8">
            <div className="md:max-w-md">
              <span className="inline-block mb-4 text-sm text-green-400 font-medium tracking-tighter">Confira nossas estatísticas</span>
              <h2 className="font-heading mb-8 text-4xl md:text-7xl text-white tracking-tighter-xl">Fazendo história de crédito com nightcard</h2>
              <p className="mb-8 text-lg text-gray-300">É um fato estabelecido há muito tempo que um leitor se distrairá com o conteúdo legível de uma página ao olhar para seu layout. O objetivo de usar Lorem Ipsum é que ele tem uma distribuição de letras mais ou menos normal, ao contrário de usar 'Conteúdo aqui, conteúdo aqui', fazendo com que pareça inglês legível. Muitos pacotes de editoração eletrônica e editores de páginas da web agora usam Lorem Ipsum como seu texto modelo padrão.</p>
              <a className="inline-block text-white hover:text-opacity-80 font-medium underline transition duration-500" href="#">Ler mais</a>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-8">
            <div className="mx-auto max-w-lg md:mr-0">
              <div className="flex flex-wrap -m-4">
                <div className="w-1/2 p-4">
                  <div className="flex flex-wrap">
                    <div className="mb-8 w-full">
                      <img className="w-full" src="/images/img2.png" alt="" />
                    </div>
                    <div className="w-full">
                      <img className="w-full" src="/images/img4.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="w-1/2 p-4">
                  <div className="flex flex-wrap mt-24">
                    <div className="mb-8 w-full">
                      <img className="w-full" src="/images/img3.png" alt="" />
                    </div>
                    <div className="w-full">
                      <img className="w-full" src="/images/img.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompanyStorySection;