import wilStyle from "~/styles/components/profile/wil/wil.css";
import {ChildBackNav} from "~/routes/function/parrentsLink";

import {grandparrent} from "./index";
export const parrent = "What I Love";

export let links = () => {
    return [{rel: "stylesheet", href: wilStyle}];
};

export let meta = () => {
    return {
        title: "What I Love",
        description: "Things that I love...",
    };
};

export default function WIL() {
    return (
        <div>
            <ChildBackNav lvl="2" gp={grandparrent} />
            <h1>What I Love</h1>
        </div>
    );
}
