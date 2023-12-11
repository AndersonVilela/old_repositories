import GitHub from '../../assets/GitHub.png';
import Style from './styles.module.css';
import { Link } from "react-router-dom";

export default function Navbar() {


  return (
    <div className={Style.container}>
      <ul className={Style.list}>
        <li className={`${Style.links} ${Style.logoLink} `}>
          <Link to="/" className={`${Style.restLink}`}>
            <span className={Style.linkLogo}>A</span>nderson Vilela
          </Link>
        </li>
        <li className={Style.links}>
          <Link
            to="/Projects"
            className={`${Style.navLink} ${Style.pro}`}
          >
            Projects
          </Link>
        </li>
        <li className={Style.links}>
          <Link to="/Contact" className={Style.navLink}>
            Contact
          </Link>
        </li>
        <li className={Style.links}>
          <a href="https://github.com/AndersonVilela/homepage" className={`${Style.navLink} ${Style.gitLink}`}>
            <img src={GitHub} className={Style.gitImage} />Source
          </a>
        </li>
      </ul>
    </div>

  );
}
