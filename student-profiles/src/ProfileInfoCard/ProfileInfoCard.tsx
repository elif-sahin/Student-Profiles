import { CircleImage } from "../CircleImage/CircleImage";
import { IStudentInfo } from "../ProfileList/Api";
import "./profileInfoCard.scss";

interface IProfileInfoCardProps {
    profile: IStudentInfo;
}
export const ProfileInfoCard = (props: IProfileInfoCardProps) => {
    return (
        <div className="card-wrapper">
            <div className="card-left">
                <CircleImage source={props.profile.pic}></CircleImage>
            </div>
            <div className="card-right">
                <div className="card-header">{props.profile.firstName + " " + props.profile.lastName}</div>
                <div className="card-info">{"Email: " + props.profile.email}</div>
                <div className="card-info">{"Company: " + props.profile.company}</div>
                <div className="card-info">{"Skill: " + props.profile.skill}</div>
                <div className="card-info">{"Avarage: " + 100}</div>
            </div>
        </div>
    );
}