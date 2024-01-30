import useAllData from "../hooks/useAllData";
import AboutCard from "../components/AboutCard";
import ServiceCard from "../components/ServiceCard";
import FooterComponent from "../components/FooterComponent";

export default function AboutMe() {
  const { serviceData, frameworksData } = useAllData();
  return (
    <section>
      <div className="lg:rounded-2xl bg-white dark:bg-[#111111]">
        <div>
          <article className="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14">
            <h2 className="after-effect after:left-72">Acerca de mí</h2>
            <div className="col-span-12 space-y-2.5">
              <div className="lg:mr-16">
                <p className="text-gray-lite dark:text-gray-400 leading-7 mt-5">
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
                  servicios turísticos llamado &quotNáutica SerCyn&quot
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
                </p>
              </div>
            </div>
          </article>
          <article className="pb-12 px-2 sm:px-5 md:px-10 lg-px-14">
            <h3 className="text-[35px] dark:text-white font-medium pb-5 ">
              Lo que hago...
            </h3>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
              {/* expierence information */}
              <AboutCard item={serviceData} />

              {/* {serviceData.map((el) => {
                return <AboutCard key={el.id} item={el} />;
              })} */}
            </div>
          </article>
          <article className="pb-12 px-2 sm:px-5 md:px-10 lg-px-14">
            <h3 className="text-[35px] dark:text-white font-medium pb-5 ">
              Frameworks
            </h3>
            <div className="grid gap-8 grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
              {/* expierence information */}
              {frameworksData.map((el) => {
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
