import {Link} from 'react-router-dom';

function Header() {

    return (
        <header>
          <nav>
            <Link to="/">Ana ekran</Link>
            <Link to="/ekran1">Ekran 1</Link>
            <Link to="/ekran2">Ekran 2</Link>
          </nav>
        </header>
    );
}

export default Header;