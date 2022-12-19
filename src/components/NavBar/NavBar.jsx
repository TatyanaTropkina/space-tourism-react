import classes from "./NavBar.module.css";
import {NavLink} from "react-router-dom";
function NavBar() {
    return (
        <ul className={classes.nav}>
            <li className={classes.item}><NavLink to="/Home" className={navData => navData.isActive ? classes.active : classes.item}> <span>00 </span>Home</NavLink></li>
            <li className={classes.item}><NavLink to="/Destination" className={navData => navData.isActive ? classes.active : classes.item}><span>01 </span>Destination</NavLink></li>
            <li className={classes.item}><NavLink to="/Crew" className={navData => navData.isActive ? classes.active : classes.item}><span>02 </span>Crew</NavLink></li>
            <li className={classes.item}><NavLink to="/Technology" className={navData => navData.isActive ? classes.active : classes.item}><span>03 </span>Technology</NavLink></li>
        </ul>
    )
}
export default NavBar;