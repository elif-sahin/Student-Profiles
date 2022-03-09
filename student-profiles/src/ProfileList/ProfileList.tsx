import { ProfileInfoCard } from '../ProfileInfoCard/ProfileInfoCard';
import { IStudentInfo } from './Api';

interface IProfileListProps {
    profiles: IStudentInfo[];
}

export const ProfileList = (props: IProfileListProps) => {

    const renderProfiles = props.profiles?.map((profile) => <ProfileInfoCard key={profile.id} profile={profile}></ProfileInfoCard>)
    return (<div>{renderProfiles}</div>);
}