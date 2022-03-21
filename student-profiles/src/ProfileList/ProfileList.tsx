import React from 'react';
import { ProfileInfoCard } from '../ProfileInfoCard/ProfileInfoCard';
import { SearchBar, SearchType } from '../SearchBar/SearchBar';
import { IStudentInfo } from './Api';
import "./profileList.scss";

interface IProfileListProps {
    profiles: IStudentInfo[];
}

export const ProfileList = (props: IProfileListProps) => {
    const [profilesListedName, setProfilesListedName] = React.useState<IStudentInfo[]>(props.profiles);
    const [profilesListedTag, setProfilesListedTag] = React.useState<IStudentInfo[]>(props.profiles);
    const [renderProfiles, setRenderProfiles] = React.useState<JSX.Element[]>();

    const renderProfileList = (profiles: IStudentInfo[]) => profiles?.map((profile) => <div className="profile-card"><ProfileInfoCard key={profile.id} profile={profile}></ProfileInfoCard></div>);

    React.useEffect(() => {
        setRenderProfiles(renderProfileList(props.profiles));
        setProfilesListedName(props.profiles);
        setProfilesListedTag(props.profiles);
    }, [props.profiles]);

    React.useEffect(() => {
        setRenderProfiles(renderProfileList(props.profiles.filter((profile) => profilesListedName.includes(profile) && profilesListedTag.includes(profile))));
    }, [profilesListedTag, profilesListedName]);

    return (
        <div className="profile-list-wrapper">
            <SearchBar
                searchType={SearchType.NAME}
                onChange={(listedProfiles) => setProfilesListedName(listedProfiles)}
                items={props.profiles}
                placeholder="Search by name"
            />
            <SearchBar
                searchType={SearchType.TAG}
                onChange={(listedProfiles) => setProfilesListedTag(listedProfiles)}
                items={props.profiles}
                placeholder="Search by tag"
            />
            {renderProfiles}
        </div>
    );
}