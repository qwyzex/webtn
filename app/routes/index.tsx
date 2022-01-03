import {Link} from "remix";
import indexStyle from "~/styles/components/index/index.css";

export let links = () => {
    return [{rel: "stylesheet", href: indexStyle}];
};

export let meta = () => {
    return {
        title: "qwyzeX",
        description: "Personal Blog",
    };
};

export default function Index() {
    let welcome = "<welcome>";

    return (
        <main>
            <div className="page landing split">
                <div className="message" id="welcome">
                    <div className="welcome-text">
                        <p className="cascade absolute random">{welcome}</p>
                        <h1 className="">
                            My name is, <span className="x-acc">qwyzeX</span>
                        </h1>
                        <p>
                            I'm a 14y/o Solo Web Developer from{" "}
                            <span className="x-acc">Indonesia</span>. Currently
                            getting into <span className="x-acc">economy</span>,
                            love cat :3
                        </p>
                    </div>
                    <div className="learn-more-cont">
                        <Link to="/profile" id="learn-more">
                            ABOUT ME
                        </Link>
                        <Link to="/profile/skills" id="skills">
                            SKILLS
                        </Link>
                    </div>
                </div>
                <div className="picture">
                    <img id="index-doodle" src="/images/svg/index-4.svg" />
                    <p className="cascade terminal">
                        web dev / writer / video editor / student
                    </p>
                    {/* <img /> */}
                </div>
            </div>
        </main>
    );
}
