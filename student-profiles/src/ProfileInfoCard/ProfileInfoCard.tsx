import React from "react";
import { CircleImage } from "../CircleImage/CircleImage";
import { IStudentInfo } from "../ProfileList/Api";
import "./profileInfoCard.scss";

interface IProfileInfoCardProps {
    profile: IStudentInfo;
}
export const ProfileInfoCard = (props: IProfileInfoCardProps) => {
    const [isExpanded, setIsExpanded] = React.useState(false);

    const onExpand = () => {
        setIsExpanded(!isExpanded);
    }

    const renderGrades = () => props.profile.grades.map((grade, index) => <div className="test-result">{"Test" + (index + 1) + ": " + grade}</div>)

    return (
        <div className="card-wrapper">
            <div className="card-left">
                <CircleImage source={props.profile.pic}></CircleImage>
            </div>
            <div className="card-right">
                <div className="header-wrapper">
                    <div className="card-header">{props.profile.firstName + " " + props.profile.lastName}</div>
                    <button className="expand-button" onClick={onExpand}>{(isExpanded ? "-" : "+")}</button>
                </div>
                <div className="card-info">{"Email: " + props.profile.email}</div>
                <div className="card-info">{"Company: " + props.profile.company}</div>
                <div className="card-info">{"Skill: " + props.profile.skill}</div>
                <div className="card-info">{"Avarage: " + 100}</div>

                {isExpanded && <div className="card-expand">{renderGrades()}</div>}
            </div>

        </div>
    );
}