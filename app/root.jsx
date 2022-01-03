import {
    Link,
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useCatch,
} from "remix";

// import CookieConsent from "react-cookie-consent";

// styles
import globalStylesUrl from "~/styles/components/global.css";
import darkStylesUrl from "~/styles/components/dark.css";
import headerStyle from "~/styles/components/header.css";
import footerStyle from "~/styles/components/footer.css";
// import cookiesStyle from "~/styles/components/cookies.css";
import {ReactChild, ReactFragment, ReactPortal} from "react";

// https://remix.run/api/app#links
export let links = () => {
    return [
        {
            rel: "stylesheet",
            href: globalStylesUrl,
        },
        {
            rel: "stylesheet",
            href: darkStylesUrl,
            media: "(prefers-color-scheme: dark)",
        },
        {
            rel: "stylesheet",
            href: headerStyle,
        },
        {
            rel: "stylesheet",
            href: footerStyle,
        },
        {
            rel: "shortcut icon",
            href: "/favicon.png",
            type: "image/x-icon",
        },
    ];
};

export default function App() {
    return (
        <Document>
            <Layout>
                <Outlet />
            </Layout>
        </Document>
    );
}

// https://remix.run/docs/en/v1/api/conventions#errorboundary
export function ErrorBoundary({error}) {
    console.error(error);
    return (
        <Document title="Error!">
            <Layout>
                <div>
                    <h1>
                        There was a <span className="bg-red">fatal error</span>{" "}
                        with the app
                    </h1>
                    {error.message}
                    <div className="error root">
                        <div>
                            Sorry for the inconvenience, there's an error with
                            the production state of the App. I will fix this
                            soon. Please contact me at{" "}
                            <span className="bg-red">qwyzex@yandex.com</span> if
                            this is still occure for some time.
                        </div>
                    </div>
                </div>
            </Layout>
        </Document>
    );
}

// https://remix.run/docs/en/v1/api/conventions#catchboundary
export function CatchBoundary() {
    let caught = useCatch();

    let message;
    switch (caught.status) {
        case 401:
            message = (
                <div className="error privilege">
                    You don't have access to visit this page!
                </div>
            );
            break;
        case 404:
            message = (
                <div className="error not-found">
                    <div className="not-found-message">
                        <object
                            data="/images/misc/warning-3.svg"
                            className="errorWarningLogo"
                        ></object>
                        <p>
                            Looks like you tried to visit a page that does not
                            exist in this universe!
                        </p>
                    </div>
                    <div className="not-found-return">
                        <span>Let's get you back from here!</span>
                        <div className="not-found-return-list">
                            <Link to="/">Home</Link>
                            <Link to="/posts">Blog</Link>
                            <Link to="/gallery">Gallery</Link>
                            <Link to="/profile">Profile</Link>
                        </div>
                    </div>
                </div>
            );
            break;

        default:
            throw new Error(caught.data || caught.statusText);
    }

    return (
        <Document title={`${caught.status} ${caught.statusText}`}>
            <Layout>
                <div className="flex jc-center ai-center">
                    <h1>
                        {caught.status}: {caught.statusText}
                    </h1>
                </div>
                {message}
            </Layout>
        </Document>
    );
}

function Document({children, title}) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1"
                />
                {title ? <title>{title}</title> : null}
                <Meta />
                <Links />
            </head>
            <body>
                {children}
                <ScrollRestoration />
                <Scripts />
                {process.env.NODE_ENV === "development" && <LiveReload />}
            </body>
        </html>
    );
}

// const CookieChild = () => {
//     return <img src="/images/misc/person-black.png" />;
// };

function Layout({children}) {
    return (
        <div className="app">
            <Header />
            <div className="main">
                <div className="container main-content">{children}</div>
            </div>
            <Footer />
            {/* <Cookies /> */}
        </div>
    );
}

// components
export const Header = () => {
    // header navigation
    return (
        <header className="header" id="header">
            <Link to="/">
                <MainLogo />
            </Link>
            <nav className="navigation">
                <ul className="nav-list">
                    <li className="nav-items">
                        <Link to="/" className="essentials home">
                            HOME
                        </Link>
                    </li>
                    <li className="nav-items">
                        <Link to="/posts" className="essentials blog">
                            BLOG
                        </Link>
                    </li>
                    <li className="nav-items">
                        <Link to="/gallery" className="essentials gallery">
                            GALLERY
                        </Link>
                    </li>
                    <li className="nav-items">
                        <Link to="/profile" className="essentials profile">
                            PROFILE
                        </Link>
                    </li>
                    <li className="nav-items">
                        <Link to="/contact" className="essentials contact">
                            CONTACT
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="nav-button-cont">
                <button className="nav-button" onClick={mobileNavbar}></button>
                <div className="nav-button-image-cont">
                    <object
                        data="/images/svg/triangle.svg"
                        className="nav-button-image"
                    ></object>
                </div>
            </div>
        </header>
    );
};

export const Footer = () => {
    // footer
    return (
        <footer id="footer">
            <div className="footer-content">
                <ul className="footer-socials">
                    <li>
                        <a
                            href="https://github.com/qwyzex"
                            target="_blank"
                            className="github"
                        >
                            <img src="/images/misc/github.png" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://instagram.com/qwyzex"
                            target="_blank"
                            className="instagram"
                        >
                            <img src="/images/misc/instagram.png" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://facebook.com/qwyzex"
                            target="_blank"
                            className="facebook"
                        >
                            <img src="/images/misc/facebook.png" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://twitter.com/qwyzex"
                            target="_blank"
                            className="twitter"
                        >
                            <img src="/images/misc/twitter.png" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://youtube.com/channel/UCUgf36IXL1h-nXNJbZTadmQ"
                            target="_blank"
                            className="youtube"
                        >
                            <img src="/images/misc/youtube.png" />
                        </a>
                    </li>
                    <li>
                        <Link to="/contact" className="contact">
                            <img src="/images/misc/contact.png" />
                        </Link>
                    </li>
                </ul>
                <div className="copyright-container">
                    <p>
                        Copyright &copy; 2021 Ihsan Fashbir. All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

// export const Cookies = () => {
//     return (
//         <CookieConsent
//             // debug={true}
//             buttonText="OKAY"
//             cookieName="dev-consent"
//             expires={30}
//             disableStyles={true}
//             // identifier
//             containerClasses="cookies-container"
//             buttonWrapperClasses="cookies-button-wrapper"
//             buttonClasses="cookies-button"
//             contentClasses="cookies-content"
//         >
//             <CookieChild />
//             <p>
//                 This site is still under development and may had some
//                 compability issue! Please <Link to="/contact">contact</Link> me
//                 if there is a problem. Thank You!
//             </p>
//         </CookieConsent>
//     );
// };

export function MoreOthers(props) {
    return (
        <div className="other-container">
            <h2>OTHER STUFF</h2>
            <hr />
            <div className="other-subcontainer">{props.data}</div>
        </div>
    );
}

{
    /* ########################################################## */
}

// function
const mobileNavbar = () => {
    document.querySelector(".nav-button-cont").classList.toggle("active");
    document.querySelector(".nav-button-image").classList.toggle("clicked");
    document.querySelector(".navigation").classList.toggle("open");
};

// property
export function MainLogo() {
    return <img id="mainLogo" src="/images/essentials/logo-white.png" />;
}
