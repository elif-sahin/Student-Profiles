import { IStudentInfo } from "../ProfileList/Api";

interface IProfileInfoCardProps {
    profile: IStudentInfo;
}
export const ProfileInfoCard = (props: IProfileInfoCardProps) => {
    return (<div>{props.profile.firstName}</div>);
}