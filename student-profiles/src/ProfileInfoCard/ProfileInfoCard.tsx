import React, { KeyboardEvent } from "react";
import { CircleImage } from "../CircleImage/CircleImage";
import { IStudentInfo } from "../ProfileList/Api";
import { Tag } from "../Tag/Tag";
import "./profileInfoCard.scss";

interface IProfileInfoCardProps {
    profile: IStudentInfo;
}
export const ProfileInfoCard = (props: IProfileInfoCardProps) => {
    const [isExpanded, setIsExpanded] = React.useState(false);
    const [tagVal, setTagVal] = React.useState<string>("");
    const [addedTagList, setAddedTagList] = React.useState<string[]>(props.profile.tags ? props.profile.tags : []);

    const onExpand = () => {
        setIsExpanded(!isExpanded);
    }

    const onAddTag = (tagInput: KeyboardEvent<HTMLInputElement>) => {
        if (tagInput.key == "Enter" && tagVal !== "") {
            setAddedTagList([...addedTagList, tagVal]);

            !props.profile.tags && (props.profile.tags = []);

            props.profile.tags.push(tagVal);
            setTagVal("");
        }
    }

    const calculateAvarage = () => {
        let sumGrade = 0;
        props.profile.grades.forEach((grade) => { sumGrade += Number(grade) });
        let avarage = (sumGrade * 1.0) / props.profile.grades.length
        return avarage; //Actually, we should use toFixed() here
    }

    const renderGrades = () => props.profile.grades.map((grade, index) => <div key={grade + index} className="test-result">{"Test" + (index + 1) + ": " + grade}</div>)

    const renderTags = () => addedTagList.map((tag, index) => <Tag key={tag + index} text={tag} />)

    return (
        <div className="card-wrapper">
            <div className="card-left">
                <CircleImage source={props.profile.pic}></CircleImage>
            </div>
            <div className="card-right">
                <div className="header-wrapper">
                    <div className="card-header">{props.profile.firstName + " " + props.profile.lastName}</div>
                    <button className={"expand-button" + (isExpanded ? " expanded" : "")} onClick={onExpand}>{(isExpanded ? "-" : "+")}</button>
                </div>
                <div className="card-info">{"Email: " + props.profile.email}</div>
                <div className="card-info">{"Company: " + props.profile.company}</div>
                <div className="card-info">{"Skill: " + props.profile.skill}</div>
                <div className="card-info">{"Avarage: " + calculateAvarage()}</div>

                {addedTagList.length !== 0 && <div className="tags-wrapper">{renderTags()}</div>}

                <input
                    className="app-input"
                    placeholder="Add Tag"
                    value={tagVal}
                    onChange={(e) => setTagVal(e.target.value.trim())}
                    onKeyPress={onAddTag}
                    maxLength={30}
                />

                {isExpanded && <div className="card-expand">{renderGrades()}</div>}
            </div>

        </div>
    );
}