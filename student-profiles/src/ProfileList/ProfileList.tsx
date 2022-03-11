import React from 'react';
import { ProfileInfoCard } from '../ProfileInfoCard/ProfileInfoCard';
import { SearchBar } from '../SearchBar/SearchBar';
import { IStudentInfo } from './Api';
import "./profileList.scss";

interface IProfileListProps {
    profiles: IStudentInfo[];
}

export const ProfileList = (props: IProfileListProps) => {
    const [profilesListed, setProfilesListed] = React.useState<IStudentInfo[]>(props.profiles);
    const [renderProfiles, setRenderProfiles] = React.useState<JSX.Element[]>();

    const renderProfileList = (profiles: IStudentInfo[]) => profiles?.map((profile) => <div className="profile-card"><ProfileInfoCard key={profile.id} profile={profile}></ProfileInfoCard></div>);

    React.useEffect(() => {
        setRenderProfiles(renderProfileList(props.profiles));
    }, [props.profiles]);

    React.useEffect(() => {
        setRenderProfiles(renderProfileList(profilesListed));
    }, [profilesListed]);

    return (
        <div className="profile-list-wrapper">
            <SearchBar onChange={(listedProfiles) => setProfilesListed(listedProfiles)} items={props.profiles}></SearchBar>
            {renderProfiles}
        </div>
    );
}