import featuresData from '@data/features.json';

function SecureAccessSection() {
  if (!featuresData) {
    return null;
  }

  const features = featuresData.secureAccessFeatures;

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center -m-8">
          <div className="w-full md:w-1/2 p-8">
            <div className="relative z-10 md:max-w-md">
              <span className="inline-block mb-4 text-sm text-green-400 font-medium tracking-tighter">Acesso Seguro</span>
              <h2 className="font-heading mb-6 text-6xl md:text-7xl text-white tracking-tighter-xl">
                Fazendo história de crédito
              </h2>
              <p className="mb-8 text-white text-opacity-60">
                É um fato estabelecido há muito tempo que um leitor se distrairá com o conteúdo legível de uma página ao olhar para seu layout. O objetivo de usar Lorem Ipsum é que ele tem uma distribuição de letras mais ou menos normal.
              </p>
              <ul>
                {features.map((feature, index) => (
                  <li key={index} className="inline-flex mb-3.5">
                    <img className="mr-3.5" src="/images/checked.svg" alt="" />
                    <span className="text-white">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-8">
            <img className="mx-auto" src="/images/card2.png" alt="" />
          </div>
        </div>
      </div>
      <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src="/images/bg-blur.png" alt="" />
    </section>
  );
}

export default SecureAccessSection;