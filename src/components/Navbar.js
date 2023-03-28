import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="nav-bar">
    <h1 className="nav-brand">Math Magicians</h1>
    <ul className="nav-list">
      <li className="list">
        <Link className="list-link" to="/">Home</Link>
      </li>
      <li className="list">
        <Link className="list-link" to="/Calculator">Calculator</Link>
      </li>
      <li className="list">
        <Link to="/Quote">Quote</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
