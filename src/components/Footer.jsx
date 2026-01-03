import { Link, useLocation } from 'react-router-dom';

export function Footer() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? 'activo' : '';

  return (
    <footer>
      <nav>
        <Link to="/" className={isActive('/')}>Inicio</Link>
        <Link to="/noticias" className={isActive('/noticias')}>Noticia</Link>
        <Link to="/mortandad" className={isActive('/mortandad')}>Mortandad</Link>
      </nav>
      <section className="propaganda">
        <img src="/img/propagandaFooter.png" alt="Propaganda del sitio" />
      </section>
      <p>&copy; 2025 COVID-19 y su impacto en la sociedad. Todos los derechos reservados.</p>
    </footer>
  );
}