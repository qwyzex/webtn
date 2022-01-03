import contactStyle from "~/styles/components/contact/contact.css";
import {useForm} from "@formspree/react";
import {formspreeKey} from "~/routes/private/vars";

export let links = () => {
    return [{rel: "stylesheet", href: contactStyle}];
};

export let meta = () => {
    return {
        title: "Contact",
        description: "Contact me trough email and other social platforms!",
    };
};

// main components
const Contact = () => {
    return (
        <div className="contact-parrent">
            <h1>CONTACT ME!</h1>
            <ContactForm />
        </div>
    );
};

// form
const ContactForm = () => {
    const [state, handleSubmit] = useForm(formspreeKey);

    // show status function
    function showStatus() {
        document.querySelector("#msgStatus").classList.add("show");
    }

    // status
    const FormStatus = () => {
        if (state.succeeded) {
            // @ts-ignore this works fine, please stfu :)
            document.querySelector("#contact-form").reset();
            return (
                <p id="msgStatus" className="status show success">
                    SUCCESS
                </p>
            );
        } else if (state.submitting) {
            return (
                <p id="msgStatus" className="status show pending">
                    SUBMITTING...
                </p>
            );
        } else if (state.errors) {
            return (
                <p id="msgStatus" className="status error">
                    ERROR!
                </p>
            );
        }
    };

    // form
    return (
        <div className="contact-container">
            <form onSubmit={handleSubmit} id="contact-form" autoComplete="off">
                {/* name */}
                <div className="name">
                    <label htmlFor="name">Full Name</label>
                    <input
                        id="name"
                        type="name"
                        name="name"
                        placeholder="Joe Bidden"
                        required
                    />
                </div>

                {/* email */}
                <div className="email">
                    <label htmlFor="email">Email Address</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="joe@something.com"
                        required
                    />
                </div>

                {/* subject */}
                <div className="subject">
                    <label htmlFor="subject">The Subject</label>
                    <input
                        id="subject"
                        type="subject"
                        name="subject"
                        placeholder="Title"
                    />
                </div>

                {/* message */}
                <div className="message">
                    <label htmlFor="message">Your Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Put your message here..."
                        required
                    />
                </div>

                {/* submit */}
                <div className="submit">
                    <button
                        type="submit"
                        disabled={state.submitting}
                        onClick={showStatus}
                    >
                        SEND MESSAGE
                    </button>
                    <FormStatus />
                </div>
            </form>
            <ContactInfo />
        </div>
    );
};

// info components
const ContactInfo = () => {
    return (
        <div className="contact-info">
            <article>
                <h2>INFORMATION</h2>
                <p>Manually contact me here!</p>
            </article>
            <ul className="contacts">
                <li>
                    <img src="/images/misc/contact.png" />
                    qwyzex@yandex.com
                </li>
                <li>
                    <img src="/images/misc/phone.png" />
                    +62 822-8101-9574
                </li>
            </ul>
            <ul className="socials">
                <li>
                    <a href="#">
                        <img src="/images/misc/instagram.png" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/images/misc/twitter.png" />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Contact;
