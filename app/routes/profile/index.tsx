import {MoreOthers} from "~/root";
import profileStyle from "~/styles/components/profile/profile.css";

export let grandparrent = "Profile";

export let links = () => {
    return [{rel: "stylesheet", href: profileStyle}];
};

export let meta = () => {
    return {
        title: "Profile",
        description: "Profile about the author.",
    };
};

const moreOthersLink = [
    {
        title: "Skills",
        slug: "skills",
    },
    {
        title: "Education",
        slug: "education",
    },
    {
        title: "About",
        slug: "about",
    },
    {
        title: "What I Love",
        slug: "wil",
    },
];

const Profile = () => {
    const pfp = "/images/essentials/pfp4.jpg";

    return (
        <div className="profile-container">
            <div className="pfp-container">
                <img src={pfp} alt="profile-picture" />
                <div className="box"></div>
                <div className="box"></div>
            </div>
            <h1>Ihsan Fashbir</h1>
            <p>
                My name is Ihsan Fashbir Danurrahardjo, my mate usually call me
                Ihsan. I'm born at Metro, Lampung, on September 1st 2007. My
                hobbies and things that I love is frequently changes. Ranging
                from Art, Sports, Entertainment to Programming.
            </p>
            <p>
                Math is my favorite subject of all time, it's so fun. Don't know
                why people's hate math, it's literally the best thing that we
                could learn. Trust me, loving math can significantly change your
                life, just a reminder.
            </p>
            <p>
                Schools and private tutoring didn't really improve my English.
                In fact, I get almost of my English ability is from Video Games,
                Movies, Music and Memes. I also have a very high curiosity.
                Always want to know and explore something that I never discover
                before. I'm a bit popular at my Elementary School if I may say.
                I had a lotta friends there, competing in multiple Math's
                Olympic, had a good leadership skill.
            </p>
            <p>
                And I sure do love games, my favorite video games genre is RPG,
                Roguelike, and FPS/TPS On PC. Having a computer since I was
                still 4 years old kinda make me more experts in computing
                amongst all of my friends.
            </p>
            <p>
                And lastly, why do I sound so arrogant? Well idk, Prob cuz this
                page is about me smh...
            </p>
            <MoreOthers
                data={moreOthersLink.map((links) => (
                    <a key={links.slug} href={"/profile/" + links.slug}>
                        {links.title}
                    </a>
                ))}
            />
        </div>
    );
};

export default Profile;
