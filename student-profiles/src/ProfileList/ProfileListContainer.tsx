import React from 'react';
import { fetchStudentInfo, IStudentInfo } from './Api';
import { ProfileList } from './ProfileList';


export const ProfileListContainer = () => {
    const [studentInfoList, setStudentInfoList] = React.useState<IStudentInfo[]>([]);

    React.useEffect(() => {
        fetchStudentInfo().then(items => {
            setStudentInfoList(items.students)
        }
        );
    }, []);


    return (
        <ProfileList profiles={studentInfoList} />
    );
}
