import {useEffect, useState} from "react";

import Launch from "../launch/Launch";
import "./Launches.css";

export default function Launches() {
    const [launchList, setLaunchList] = useState([]);

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
                    key={value.launch_date_unix}
                    mission_name={value.mission_name}
                    launch_year={value.launch_year}
                    mission_patch_small={value.links.mission_patch_small}
                />
            )}
        </div>
    );
}