import { Fragment } from "react";
import moment from "moment";

const Footer = () => {
  return (
    <Fragment>
      <footer
        style={{ background: "#303031" }}
        className="z-10 py-6 px-4 md:px-12 text-center text-white"
      >
      &copy; {moment().format("YYYY")} Develop & Design by Candra
      </footer>
    </Fragment>
  );
};

export default Footer;