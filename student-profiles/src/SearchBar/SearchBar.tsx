import { ChangeEvent } from "react";
import { IStudentInfo } from "../ProfileList/Api";
import "./searchBar.scss";

interface ISearchBarProps {
    onChange: (filteredItems: IStudentInfo[]) => void;
    items: IStudentInfo[]
}
/**
 * Search component can filter items according to their title and description
 * @param onChange runs given function when a change detected inside search box.
 * @param items objects that wanted to be filtered.
 *
 * @author elif
 */
export const SearchBar = (props: ISearchBarProps) => {

    const filterItems = (value: string): IStudentInfo[] =>
        props.items.filter(
            (item) =>
                item.firstName.toLowerCase().trim().includes(value) ||
                item.lastName.toLowerCase().trim().includes(value)
        );

    const onSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.toLowerCase().trim();
        const filteredItems = filterItems(value);
        //Call props onChange to send search results to top.
        props.onChange(filteredItems);
    };

    return (
        <div className="search">
            <input
                className="search-input"
                placeholder="Search"
                onChange={onSearchInputChange}
            ></input>
        </div>
    );
};
