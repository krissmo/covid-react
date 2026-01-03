import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? 'activo' : '';

  return (
    <header>
      <section className="encabezado">
        <img className="imagen-encabezado" src="/img/logoEncabezado.gif" alt="Logo COVID" />
        <h1>Impacto del covid en la sociedad</h1>
      </section>
      <nav className="menu-navegacion">
        <Link to="/" className={isActive('/')}>Inicio</Link>
        <Link to="/noticias" className={isActive('/noticias')}>Noticia</Link>
        <Link to="/mortandad" className={isActive('/mortandad')}>Mortandad</Link>
      </nav>
    </header>
  );
}