import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../../src/animations/done.json";
import ContactUsAnimation from "../../../src/animations/contactUs.json";
import "./contact.css";

function Contact() {
  const [state, handleSubmit] = useForm("manwkwyb");

  return (
    <section id="contact" className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"></span>
        Contact us
      </h1>

      <p className="subtitle">
        Contact us for more information and Get notified when i publish
        something new.
      </p>

      <div style={{ justifyContent: "space-between" }} className="flex">
        <form onSubmit={handleSubmit} className="">
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input
              autoComplete="off"
              required
              type="email"
              id="email"
              name="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your Message:</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button className="submit" type="submit" disabled={state.submitting}>
            {state.submitting ? "Submitting..." : "Submit"}
          </button>

          {state.succeeded ? (
            <p className="sent flex">
              <Lottie
                loop={false}
                style={{ height: 40 }}
                animationData={doneAnimation}
              />
              Your Message has been sent successfully 👌
            </p>
          ) : null}
        </form>

        <div className="animation">
          <Lottie
            className="contact-animation"
            style={{ height: 355 }}
            animationData={ContactUsAnimation}
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
