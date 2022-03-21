export interface IStudentInfo {
    id: number;
    firstName: string;
    lastName: string;
    grades: string[];
    city: string;
    company: string;
    email: string;
    pic: string;
    skill: string;
    tags: string[];
}

export const fetchStudentInfo = async () => {
    const data = await fetch('https://api.hatchways.io/assessment/students');
    return await data.json();
};