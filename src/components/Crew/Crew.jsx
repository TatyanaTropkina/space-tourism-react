// import style from "./Technology.module.css";
import bg from "./../../Images/crew/background-crew-desktop.jpg";
import {Tabs, TabList, TabPanels, Tab, TabPanel} from '@chakra-ui/react'
import crew from "./../../Images/crew/ansari.webp"
import "./Crew.css"

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

function Crew(props) {
    const tabs = props.crewPage.map(t => <Tab className="crewButton sliderTab"></Tab>)
    const content = props.crewPage.map(c => <TabPanel><TabBody crewPage={props.crewPage} occupation={c.occupation}
                                                               name={c.name} text={c.text}/></TabPanel>)
    return (
        <div className="Crew">
            <img className="bg" src={bg} alt=""/>
            <h2 className="titlePage"><span>02</span>meet your crew</h2>
            <div>
                <Tabs className="crewSlider">

                    <TabPanels>
                        {content}
                    </TabPanels>
                    <TabList className="crewButtons">
                        {tabs}
                    </TabList>

                </Tabs>
            </div>
        </div>

    )
}

export default Crew;