import { Link } from 'react-router-dom';

const Header = () => {
return(
<div>

<nav class="navbar navbar-expand-lg bg-success">
  <div className="container-fluid">
    <Link className="navbar-brand text-light fs-1 fw-bold" to="/">My Web Solutions</Link>
    <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon text-light"></span>
    </button>
    <div className="collapse navbar-collapse text-light" id="navbarNav">
      <ul className="navbar-nav p-3">
        <li className="nav-item">
          <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/Solutions">Solutions</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/Contact">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

</div>

);

}


export default Header;