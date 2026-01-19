import './Footer.css';
import factoria from './f5.png';
import creative from './cc.png'
function Footer() {
    return (
        <footer>
            <p className="sides">Factoria&nbsp;<img className="footerIcon" src={factoria} /></p>
            <p className="center">the mahjong game</p>
            <p className="sides"><img className="footerIconCC" src={creative} />&nbsp;2026</p>
        </footer>
    )
}

export default Footer;