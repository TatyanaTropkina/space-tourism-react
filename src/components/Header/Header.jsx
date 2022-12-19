import classes from "./Header.module.css";
import NavBar from "../NavBar/NavBar";
import logo from "./logo.svg"

function Header() {
    return (
        <header className={classes.header}>
            <a className="logo" href="/home"><img src={logo} alt="logo"/></a>
            <NavBar/>
        </header>
    )
}

export default Header;