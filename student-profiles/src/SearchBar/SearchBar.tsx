import { ChangeEvent } from "react";
import { IStudentInfo } from "../ProfileList/Api";
import "./searchBar.scss";

export enum SearchType {
    NAME, TAG
}
interface ISearchBarProps {
    onChange: (filteredItems: IStudentInfo[]) => void;
    items: IStudentInfo[];
    searchType: SearchType
    placeholder: string
}
/**
 * Search component can filter items according to their title and description
 * @param onChange runs given function when a change detected inside search box.
 * @param items objects that wanted to be filtered.
 *
 * @author elif
 */
export const SearchBar = (props: ISearchBarProps) => {

    const filterItems = (value: string): IStudentInfo[] => {
        if (value === "") {
            return props.items;
        }
        if (props.searchType === SearchType.NAME) {
            return props.items.filter(
                (item) =>
                    item.firstName.toLowerCase().trim().includes(value) ||
                    item.lastName.toLowerCase().trim().includes(value)
            );
        }
        else if (props.searchType === SearchType.TAG) {
            return props.items.filter(
                (item) => item.tags && item.tags.find((tag) => tag.toLowerCase().includes(value))
            );
        }
        return props.items;
    }


    const onSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.toLowerCase().trim();
        const filteredItems = filterItems(value);
        //Call props onChange to send search results to top.
        props.onChange(filteredItems);
    };

    return (
        <div className="search">
            <input
                className="app-input"
                placeholder={props.placeholder}
                onChange={onSearchInputChange}
            ></input>
        </div>
    );
};
