import ContactForm from "./ContactForm";
import InfoItem from "./ui/InfoItem";
import { CONTACT_INFO } from "../lib/constants";

const Contact = () => (
  <section id="contact" className="py-20 bg-background">
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
        <p className="text-xl text-muted-foreground">
          Ready to start your healing journey? Reach out for a free consultation.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h3>
            <div className="space-y-4">
              <InfoItem title="Phone" icon="circle">
                {CONTACT_INFO.phone}
              </InfoItem>
              
              <InfoItem title="Email" icon="circle">
                {CONTACT_INFO.email}
              </InfoItem>
              
              <InfoItem title="Address" icon="circle">
                {CONTACT_INFO.address}
              </InfoItem>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Office Hours</h3>
            <div className="space-y-2 text-muted-foreground">
              <p><span className="font-medium">In-person:</span> {CONTACT_INFO.officeHours.inPerson}</p>
              <p><span className="font-medium">Virtual:</span> {CONTACT_INFO.officeHours.virtual}</p>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  </section>
);

export default Contact;