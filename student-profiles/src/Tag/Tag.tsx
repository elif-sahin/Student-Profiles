import "./tag.scss";

interface ITagProps {
    text: string;
}
export const Tag = (props: ITagProps) => {
    return (
        <div className="tag-wrapper">{props.text}</div>
    );
}