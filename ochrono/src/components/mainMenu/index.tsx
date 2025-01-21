import { Link } from '@tanstack/react-router';

function MainMenu() {
  return (
    <section className="flex flex-col">
      <Link to="/about">Dni Wolne</Link>
      <button>Lista Pracowników</button>
      <button>News</button>
    </section>
  );
}

export default MainMenu;
