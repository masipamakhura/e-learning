import Logo from '../img/logo.png';
import LoginButtons from './LoginButtons';

function Navigation(){

    return <nav className="nav">
        <div className="nav__content">
            <div className="nav__logo">
                <img src={Logo}  alt="logo"/>
            </div>
            <ul className="nav__list">
                <li className="nav__list-item">
                    <a href="/home" className="nav__list-item-link">Home</a>
                </li>
                <li className="nav__list-item">
                    <a href="/courses" className="nav__list-item-link">Courses</a>
                </li>
                <li className="nav__list-item">
                    <a href="/about" className="nav__list-item-link">About Us</a>
                </li>
                <li className="nav__list-item">
                    <a href="/pricing" className="nav__list-item-link">Pricing</a>
                </li>
                <li className="nav__list-item">
                    <a href="/contact" className="nav__list-item-link">Contact</a>
                </li>
            </ul>
            <LoginButtons />
        </div>
    </nav>
}

export default Navigation;