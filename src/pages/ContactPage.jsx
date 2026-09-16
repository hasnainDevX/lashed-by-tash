import ContactForm from "../components/ContactForm";
import ContactHero from "../components/ContactHero";
import FAQ from "../components/FAQ"
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <FAQ/>
      <Footer/>
    </>
  );
};

export default ContactPage;
