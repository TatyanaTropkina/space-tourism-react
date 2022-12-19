import classes from "./Destination.module.css";
import bg from "./../../Images/destination/background-destination-desktop.jpg";

import moon from "./../../Images/destination/moon.png"
import "./Destination.css"
import React from 'react';


import {Tab, TabList, TabPanel, TabPanels, Tabs,} from "@chakra-ui/react";

function TabBody(props) {

    return (
        <div className={classes.sliderBody}>
            <div className={classes.sliderBodyImg}>
                <img src={moon} alt=""/>
            </div>
            <div className="sliderBodyContent">
                <h3 className={classes.sliderBodyTitle}>{props.name}</h3>
                <p className={classes.sliderBodyText}>{props.text}</p>
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

function TabHead(props) {
    return (
        <div className={classes.sliderTabHead}>
            {props.name}
        </div>
    )
}

function Destination(props) {

    let list = props.destinationPage.map(p => <Tab className="sliderTab"><TabHead
        destinationPage={props.destinationPage} name={p.name} image={p.image}/></Tab>)
    let components = props.destinationPage.map(p => <TabPanel> <TabBody destinationPage={props.destinationPage}
                                                                        name={p.name} text={p.text}
                                                                        distance={p.avgDistance} time={p.travelTime}
                                                                        image={p.image}/> </TabPanel>)
    return (
        <div className={classes.destination}>

            <img className="bg" src={bg} alt=""/>
            <div className={classes.slider}>
                <Tabs variant='soft-rounded' colorScheme='green'>
                    <TabList className="sliderTabs">
                        {list}
                    </TabList>
                    <TabPanels className="sliderPanels">
                        {components}
                    </TabPanels>
                </Tabs>
            </div>


        </div>
    )
}

export default Destination;