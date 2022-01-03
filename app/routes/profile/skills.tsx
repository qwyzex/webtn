import skillsStyle from "~/styles/components/profile/skills/skills.css";
import {ChildBackNav} from "~/routes/function/parrentsLink";

import {grandparrent} from "./index";
export const parrent = "Skills";

export let links = () => {
    return [{rel: "stylesheet", href: skillsStyle}];
};

export let meta = () => {
    return {
        title: "Skills",
        description: "Skills I have.",
    };
};

const Skills = () => {
    return (
        <div className="skills-container">
            <ChildBackNav lvl="2" gp={grandparrent} p={parrent} />
            <article className="summary">
                <h1 className="skills-title">MY SKILLS</h1>
                <p>
                    Most of my "SKILLS" I put here is in technology or web
                    development category.
                </p>
            </article>
            <SkillsList />
            <SkillsToLearn />
            <SkillsGeneral />
        </div>
    );
};

// components
const SkillsList = () => {
    return (
        <div className="skills-list-container">
            <ul className="skills-list" id="skills">
                <li className="skills-item react">
                    <object data="/images/svg/tech/react.svg"></object>
                    <p>React</p>
                </li>
                <li className="skills-item nodejs">
                    <object data="/images/svg/tech/nodejs-2.svg"></object>
                    <p>NodeJS</p>
                </li>
                <li className="skills-item html">
                    <object data="/images/svg/tech/html.svg"></object>
                    <p>HTML5</p>
                </li>
                <li className="skills-item css">
                    <object data="/images/svg/tech/css.svg"></object>
                    <p>CSS3</p>
                </li>
                <li className="skills-item sass">
                    <object data="/images/svg/tech/sass.svg"></object>
                    <p>SASS</p>
                </li>
                <li className="skills-item javascript">
                    <object data="/images/svg/tech/javascript.svg"></object>
                    <p>JavaScript</p>
                </li>
                <li className="skills-item git">
                    <object data="/images/svg/tech/git.svg"></object>
                    <p>Git / GitHub</p>
                </li>
                <li className="skills-item remix">
                    <object data="/images/svg/tech/remix-icon.svg"></object>
                    <p>Remix</p>
                </li>
                <li className="skills-item python">
                    <object data="/images/svg/tech/python.svg"></object>
                    <p>Python</p>
                </li>
                <li className="skills-item tailwind">
                    <object data="/images/svg/tech/tailwind.svg"></object>
                    <p>Tailwind CSS</p>
                </li>
                <li className="skills-item bootstrap">
                    <object data="/images/svg/tech/bootstrap.svg"></object>
                    <p>Bootstrap</p>
                </li>
            </ul>
        </div>
    );
};

const SkillsToLearn = () => {
    return (
        <div className="skills-to-learn-container">
            <h2>SKILLS TO LEARN</h2>
            <ul className="skills-to-learn" id="skills-to-learn">
                <li className="skills-to-learn-item">
                    <p>Laravel</p>
                    <object data="/images/svg/tech/laravel.svg"></object>
                    <object
                        className="background"
                        data="/images/svg/tech/laravel.svg"
                    ></object>
                </li>
                <li className="skills-to-learn-item">
                    <p>Angular</p>
                    <object data="/images/svg/tech/angular.svg"></object>
                    <object
                        className="background"
                        data="/images/svg/tech/angular.svg"
                    ></object>
                </li>
                <li className="skills-to-learn-item">
                    <p>VueJS</p>
                    <object data="/images/svg/tech/vue.svg"></object>
                    <object
                        className="background"
                        data="/images/svg/tech/vue.svg"
                    ></object>
                </li>
                <li className="skills-to-learn-item">
                    <p>Svelte</p>
                    <object data="/images/svg/tech/svelte.svg"></object>
                    <object
                        className="background"
                        data="/images/svg/tech/svelte.svg"
                    ></object>
                </li>
                <li className="skills-to-learn-item better">
                    <p>NextJS</p>
                    <object data="/images/svg/tech/nextjs.svg"></object>
                    <object
                        className="background"
                        data="/images/svg/tech/nextjs.svg"
                    ></object>
                </li>
                <li className="skills-to-learn-item better">
                    <p>Firebase</p>
                    <object data="/images/svg/tech/firebase.svg"></object>
                    <object
                        className="background"
                        data="/images/svg/tech/firebase.svg"
                    ></object>
                </li>
                <li className="skills-to-learn-item">
                    <p>MongoDB</p>
                    <object data="/images/svg/tech/mongodb-icon.svg"></object>
                    <object
                        className="background"
                        data="/images/svg/tech/mongodb-icon.svg"
                    ></object>
                </li>
                <li className="skills-to-learn-item">
                    <p>MySQL</p>
                    <object data="/images/svg/tech/mysql.svg"></object>
                    <object
                        className="background"
                        data="/images/svg/tech/mysql.svg"
                    ></object>
                </li>
                <li className="skills-to-learn-item">
                    <p>C/C++</p>
                    <object data="/images/svg/tech/cpp.svg"></object>
                    <object
                        className="background"
                        data="/images/svg/tech/cpp.svg"
                    ></object>
                </li>
                <li className="skills-to-learn-item">
                    <p>PHP</p>
                    <object data="/images/svg/tech/php.svg"></object>
                    <object
                        className="background"
                        data="/images/svg/tech/php.svg"
                    ></object>
                </li>
                <li className="skills-to-learn-item">
                    <p>Ruby</p>
                    <object data="/images/svg/tech/ruby-on-rails.svg"></object>
                    <object
                        className="background"
                        data="/images/svg/tech/ruby-on-rails.svg"
                    ></object>
                </li>
            </ul>
        </div>
    );
};

const SkillsGeneral = () => {
    return (
        <div className="non-tech-skills-container">
            <h2>NON-TECH GENERAL SKILLS</h2>
            <ul className="non-tech-skills">
                <li className="non-tech-skills-item">
                    <h4>Draw (sketch)</h4>
                    <p>I hate coloring. That's it. I don't receive opinion.</p>
                </li>
                <li className="non-tech-skills-item">
                    <h4>Writing</h4>
                    <p>
                        I never actually publish a book, but I already had a
                        multi-million dollar startup idea in my fking head rn
                    </p>
                </li>
                <li className="non-tech-skills-item">
                    <h4>Video Editing</h4>
                    <p>
                        Yes, I kind of can do that in a way my self able to do
                        it, It's just the hardware that doesn't really scale
                        with me...
                    </p>
                </li>
                <li className="non-tech-skills-item">
                    <h4>English</h4>
                    <p>
                        Of course... you wouldn't see a thing here if I barely
                        understand English lmao
                    </p>
                </li>
                <li className="non-tech-skills-item">
                    <h4>Math</h4>
                    <p>
                        Well, I don't want to say that I'm good at math. But
                        this is more of a something that I love tbh
                    </p>
                </li>
            </ul>
        </div>
    );
};

export default Skills;
