import {Tabs, TabList, TabPanels, Tab, TabPanel} from '@chakra-ui/react'
import tech from "../../Images/technology/vehicle-landscape.jpg";
import bg from "../../Images/technology/background-technology-desktop.jpg";
import "./Tecnology.css"

function TabBody (props) {
    return (
        <div className="sliderBody">
            <div className="sliderBodyContent techBodyContent">
                <p className="techSliderTitle">THE TERMINOLOGY…</p>
                <div className="techTitle">{props.title}</div>
                <p className="sliderBodyText">{props.text}</p>
            </div>
            <div>
                <img className="techSliderImg" src={tech} alt=""/>
            </div>
        </div>
    )
}
function Technology(props) {
    const tabs = props.techPage.map(t => <Tab className="techButton sliderTab">{t.id}</Tab>)
    const content = props.techPage.map(c => <TabPanel> <TabBody title={c.title} text={c.text}/> </TabPanel>)
    return (
        <div>
            <img className="bg" src={bg} alt=""/>
            <h2 className="titlePage"><span>03</span>SPACE LAUNCH 101</h2>

            <Tabs className="techSlider">
                <TabList className="techButtons">

                    {tabs}
                </TabList>
                <TabPanels>
                    {content}
                </TabPanels>


            </Tabs>
        </div>

    )
}

export default Technology;