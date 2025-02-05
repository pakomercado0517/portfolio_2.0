import useAllData from "../hooks/useAllData";
import AboutCard from "../components/AboutCard";
import ServiceCard from "../components/ServiceCard";
import FooterComponent from "../components/FooterComponent";

export default function AboutMe() {
  const { serviceData, frameworksData } = useAllData();
  return (
    <section>
      <div className="bg-white dark:bg-[#111111] lg:rounded-2xl">
        <div>
          <article className="px-2 pt-12 sm:px-5 md:px-10 md:py-12 lg:px-14">
            <h2 className="after-effect after:left-72">Acerca de mí</h2>
            <div className="col-span-12 space-y-2.5">
              <div className="lg:mr-16">
                <p className="text-gray-lite mt-5 leading-7 dark:text-gray-400">
                  Mi viaje en la programación comenzó en 2016, explorando el
                  desarrollo web y lenguajes como C, C++ y JavaScript. Aunque
                  tuve que hacer una pausa por razones personales, regresé con
                  más determinación, creando mi primera web para Náutica SerCyn
                  y enfrentando los desafíos del desarrollo y despliegue.
                </p>
                <br />
                <p className="text-gray-lite leading-7 dark:text-gray-400">
                  Hoy, soy desarrollador Full Stack con experiencia en React.js,
                  Redux, Node.js, Express.js, PostgreSQL y Sequelize, creando
                  aplicaciones funcionales e innovadoras. Me motiva el
                  aprendizaje continuo, resolver problemas y trabajar en equipo
                  para construir soluciones impactantes.
                </p>
              </div>
            </div>
          </article>
          <article className="lg-px-14 px-2 pb-12 sm:px-5 md:px-10">
            <h3 className="pb-5 text-center text-[35px] font-medium dark:text-white ">
              Lo que hago...
            </h3>
            <div className="flex justify-center">
              {/* expierence information */}
              <AboutCard item={serviceData} />
            </div>
          </article>
          <article className="flex flex-col items-center justify-center">
            <h3 className="pb-5 text-[35px] font-medium dark:text-white ">
              Frameworks
            </h3>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-3">
              {/* expierence information */}
              {frameworksData
                .sort((a, b) => b.id - a.id)
                .map((el) => {
                  return <ServiceCard key={el.id} item={el} />;
                })}
            </div>
          </article>
        </div>
        <FooterComponent />
      </div>
    </section>
  );
}
