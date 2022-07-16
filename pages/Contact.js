import styled from "../styles/pages/Contact.module.scss";
import BlackLayout from "../components/layouts/BlackLayout";

export default function Contact() {
  return <div>Contact</div>;
}

Contact.getLayout = function getLayout(Contact) {
  return <BlackLayout>{Contact}</BlackLayout>;
};
