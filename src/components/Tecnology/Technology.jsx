import style from "./Tecnology.module.css";
import bg from "./../../Images/technology/background-technology-desktop.jpg";
import crew from "../../Images/crew/ansari.webp";
import {Tabs, TabList, TabPanels, Tab, TabPanel} from '@chakra-ui/react'

const TabBody = (props) => {
    return (
        <div className="sliderBody">
            <div className="sliderBodyContent crewBodyContent">
                <div className="crewOccupation">{props.occupation}</div>
                <div className="crewName">{props.name}</div>
                <p className="sliderBodyText">{props.text}</p>
            </div>
            <div>
                <img src={crew} alt=""/>
            </div>
        </div>
    )
}
function Technology(props) {
    const tabs = props.crewPage.map(t => <Tab className="techButton sliderTab"></Tab>)
    const content = props.crewPage.map(c => <TabPanel><TabBody crewPage={props.crewPage} occupation={c.occupation}
                                                               name={c.name} text={c.text}/></TabPanel>)
    return (
        <div className="Crew">
            <img className="bg" src={bg} alt=""/>
            <h2 className="titlePage"><span>03</span>SPACE LAUNCH 101</h2>
            <div>
                <Tabs className="techSlider">
                    <TabList className="techButtons">
                        {tabs}
                    </TabList>
                    <TabPanels>
                        <p className="techTitle">THE TERMINOLOGY…</p>
                        {content}
                    </TabPanels>


                </Tabs>
            </div>
        </div>

    )
}

export default Technology;