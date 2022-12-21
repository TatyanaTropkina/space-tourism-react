import classes from "./Destination.module.css";
import bg from "./../../Images/destination/background-destination-desktop.jpg";

import moon from "./../../Images/destination/moon.png"
import "./Destination.css"
import React from 'react';


import {Tab, TabList, TabPanel, TabPanels, Tabs,} from "@chakra-ui/react";

function TabBody(props) {

    return (
        <div className="sliderBody">
            <div className={classes.sliderBodyImg}>
                <img src={moon} alt=""/>
            </div>
            <div className="sliderBodyContent destinationBodyContent">
                <h3 className={classes.sliderBodyTitle}>{props.name}</h3>
                <p className="sliderBodyText">{props.text}</p>
                <div className={classes.sliderBodyInfo}>
                    <div>
                        <div className={classes.infoDescr}>avg. distance</div>
                        <div className={classes.infoDescrText}>{props.distance}</div>
                    </div>
                    <div>
                        <div className={classes.infoDescr}>est.travel time</div>
                        <div className={classes.infoDescrText}>{props.time}</div>
                    </div>

                </div>
            </div>

        </div>
    )
}


function Destination(props) {

    let tabs = props.destinationPage.map(t => <Tab className="destinationButton sliderTab" name={t.name} image={t.image}>{t.name}</Tab>)

    let content = props.destinationPage.map(p => <TabPanel> <TabBody destinationPage={props.destinationPage}
                                                                        name={p.name} text={p.text}
                                                                        distance={p.avgDistance} time={p.travelTime}
                                                                        image={p.image}/> </TabPanel>)
    return (
        <div className={classes.destination}>
<h2 className="titlePage"><span>01</span>pick your destination</h2>
            <img className="bg" src={bg} alt=""/>
            <div className={classes.slider}>
                <Tabs>
                    <TabList className="destinationButtons">
                        {tabs}
                    </TabList>
                    <TabPanels className="sliderPanels">
                        {content}
                    </TabPanels>
                </Tabs>
            </div>


        </div>
    )
}

export default Destination;