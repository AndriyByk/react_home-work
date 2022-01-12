import "./Launch.css";

export default function Launch (props) {
    let {mission_name, launch_year, links} = props;

    return (
        <div className={"launch"}>
            <div className={"launch-details"}>
                <div className={"launch-details-mission_name"}>
                    {mission_name}
                </div>
                <div className={"launch-details-launch_year"}>
                    {launch_year}
                </div>
            </div>
            <div className={"launch-picture-wrapper"}>
                <div className={"launch-picture"}>
                    <img src={links.mission_patch_small} alt="launch"/>
                </div>
            </div>
        </div>
    );
}