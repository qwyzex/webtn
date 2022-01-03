import {ChildBackNav} from "~/routes/function/parrentsLink";
import {grandparrent} from "../index";
import {parrent} from "./index";

const Op = () => {
    return (
        <div>
            <p>OP TEST</p>
            <ChildBackNav lvl="3" gp={grandparrent} p={parrent} />
        </div>
    );
};

export default Op;
