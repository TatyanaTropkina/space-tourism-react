import classes from "./Home.module.css";
import bg from "./../../Images/background-home-desktop.jpg";

function Home() {
    return (
        <div className={classes.home}>
            <img className="bg" src={bg} alt="bg"/>
            <div className={classes.intro}>
                <p className={classes.subtitle}>SO, YOU WANT TO TRAVEL TO</p>
                <h1 className={classes.title}>SPACE</h1>
                <p className={classes.text}>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </div>

                <a className={classes.button} href="#">explore</a>

        </div>
    )
}

export default Home;