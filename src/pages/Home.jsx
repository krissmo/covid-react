export function Home() {
  return (
    <main className="principal">
      <section>
        <h2>Introducción</h2>
        <p>
          La pandemia de COVID-19 ha transformado radicalmente el panorama global,
          provocando más de 7 millones de muertes confirmadas, colapsos sanitarios y
          cambios socioeconómicos como confinamientos y trabajo remoto.
          Este sitio web busca concienciar sobre los riesgos persistentes del COVID-19,
          promover información veraz y actualizada.
        </p>
      </section>

      <video controls width="100%">
        <source src="/video/casos-covid-ecuador-360.mp4" type="video/mp4" />
        <source src="/video/casos-covid-ecuador-360.webm" type="video/webm" />
        Tu navegador no soporta el video
      </video>
    </main>
  );
}
