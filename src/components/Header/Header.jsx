import './Header.css'
import logo from './logo.svg'
function Header() {
    return (
        <header>
            <div><img className="logo" src={logo} /></div>
            <div><h2>Card & Pieces React Project</h2></div>
            <div id="headerMenu"><a href="">🏠 Home</a><a href="">🐱 Github</a></div>
        </header>
    )
}

export default Header;