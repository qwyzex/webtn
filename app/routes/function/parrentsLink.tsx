export const ChildBackNav = (props: {lvl: "2" | "3"; gp: {}; p?: {}}) => {
    if (props.lvl === "3") {
        return (
            <div className="upper-nav">
                <a href="/">Home</a>
                &#9656;
                <a href="../">{props.gp}</a>
                &#9656;
                <a href="./">{props.p}</a>
            </div>
        );
    } else if (props.lvl === "2") {
        return (
            <div className="upper-nav">
                <a href="/">Home</a>
                &#9656;
                <a href="./">{props.gp}</a>
            </div>
        );
    }
};
