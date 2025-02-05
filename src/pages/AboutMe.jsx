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
                {/* <p className="text-gray-lite dark:text-gray-400 leading-7 mt-5">
                  Alrededor del año 2016, inicié por mi cuenta, como
                  autodidacta, a conocer el mundo de la programación web. Al
                  igual, me llamaron la atención las bases de los lenguajes como
                  C, C++ y obviamente Javascript.
                </p>
                <br />
                <p className="text-gray-lite dark:text-gray-400 leading-7">
                  Tuve que dejarlo de lado, ya que por cuestiones de fuerza
                  mayor (mi hija menor tuvo una lesión que le provocó parálisis
                  cerebral) y me enfoqué 100% en darle la atención necesaria. Al
                  transcurso de un par de años quise retomar el aprender a
                  desarrollar Apps e inicie creando una página web para el
                  negocio con el que tengo sociedad con un primo acerca de
                  servicios turísticos llamado &quot;Náutica SerCyn&quot;
                  conociendo y resolviendo los desafíos que presenta entre
                  desarrollar y llevar a producción una Web (www.sercyn.com).
                  Hasta hace poco que encontré la oportunidad de entrar a Henry
                  y cursar la carrera de Full Stack Developer.
                </p>
                <br />
                <p className="text-gray-lite dark:text-gray-400 leading-7">
                  Actualmente soy desarrollador Full Stack, haciendo travesía en
                  el Bootcamp de Henry, aplicando las bases que se me han
                  otorgado haciendo uso de librerías y tecnologías como
                  React.Js, Redux, Node.Js, Express.js, PostgreSQL y Sequelize,
                  para la creación de Aplicaciones web en diferentes ámbitos
                  (Individual y grupalmente).
                </p>
                <br />
                <p className="text-gray-lite dark:text-gray-400 leading-7">
                  Yo realmente soy consiente que en la red, hay miles de
                  perfiles que sorprenden con la preparación que pueden llegar a
                  tener, pero en mi, sin duda, van a encontrar a una persona
                  motivada, con ganas de sobra de seguir avanzando, aprendiendo,
                  enseñando, resolviendo problemas y sobre todo, el gusto de
                  trabajar en equipo para cumplir metas.
                </p> */}
              </div>
            </div>
          </article>
          <article className="lg-px-14 px-2 pb-12 sm:px-5 md:px-10">
            <h3 className="pb-5 text-[35px] font-medium dark:text-white ">
              Lo que hago...
            </h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-2">
              {/* expierence information */}
              <AboutCard item={serviceData} />

              {/* {serviceData.map((el) => {
                return <AboutCard key={el.id} item={el} />;
              })} */}
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
