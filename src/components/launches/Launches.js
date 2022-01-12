import {useEffect, useState} from "react";

import Launch from "../launch/Launch";
import "./Launches.css";

export default function Launches() {
    let [launchList, setLaunchList] = useState([]);

    useEffect(() => {
        fetch("https://api.spacexdata.com/v3/launches/")
            .then(response => response.json())
            .then(launches => {
                setLaunchList(launches.filter((value) =>
                    !(value.launch_year === "2020")
                ));
            });
    }, []);

    return(
        <div className={"launches"}>
            {launchList.map((value) =>
                <Launch
                    mission_name={value.mission_name}
                    launch_year={value.launch_year}
                    links={value["links"]}
                />
            )}
        </div>
    );
}