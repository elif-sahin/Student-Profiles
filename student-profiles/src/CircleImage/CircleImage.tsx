import "./circleImage.scss";

interface ICircleImageProps {
    source: string;
}
export const CircleImage = (props: ICircleImageProps) => {
    return (
        <div className="image-wrapper">
            <img src={props.source}></img>
        </div>
    );
}