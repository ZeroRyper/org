import "./Footer.css"
import facebook from '../img/facebook.png';
import twitter from '../img/twitter.png';
import instagram from '../img/instagram.png';
import logoOrg from '../img/Logo.png';
import footerImg from '../img/Footer.png';

const Footer=()=>{
    return <footer className='footer' style={{ backgroundImage: `url(${footerImg})` }}>
    <div className='redes'>
        <a href='https://www.aluracursos.com/'>
            <img src={facebook} alt='Facebook' />
        </a>
        <a href='https://www.aluracursos.com/'>
            <img src={twitter} alt='twitter' />
        </a>
        <a href='https://www.aluracursos.com/'>
            <img src={instagram} alt='instagram' />
        </a>
    </div>
    <img src={logoOrg} alt='org' />
</footer>
}
export default Footer