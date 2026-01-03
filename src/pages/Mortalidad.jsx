export function Mortalidad() {
  return (
    <main className="principal">
      <section>
        <h2>Estadísticas de Mortalidad por COVID-19 en Ecuador</h2>
        <p>Según datos oficiales del Ministerio de Salud Pública (MSP) y fuentes como Datosmacro, hasta noviembre de 2025 se registran <strong>36.063 fallecidos confirmados</strong> por COVID-19. Nota: El exceso de mortalidad total desde 2020 supera las 89.000 personas, considerando decesos indirectos relacionados con la pandemia.</p>
        
        <table className="tabla-mortalidad">
          <thead>
            <tr>
              <th>Año</th>
              <th>Fallecidos Confirmados (Acumulado)</th>
              <th>Incremento Anual Aproximado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2020</td>
              <td>~20.000</td>
              <td>+20.000</td>
            </tr>
            <tr>
              <td>2021</td>
              <td>~35.000</td>
              <td>+15.000</td>
            </tr>
            <tr>
              <td>2022</td>
              <td>~36.000</td>
              <td>+1.000</td>
            </tr>
            <tr>
              <td>2023-2025</td>
              <td>36.063</td>
              <td>+63</td>
            </tr>
          </tbody>
        </table>
        
        <p>Fuente: MSP Ecuador y análisis excesivo de mortalidad. Para datos actualizados, consulta <a href="https://www.salud.gob.ec/noticias/" target="_blank" rel="noopener noreferrer">sitio oficial del MSP</a>.</p>
      </section>
    </main>
  );
}