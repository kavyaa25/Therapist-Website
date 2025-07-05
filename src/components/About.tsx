import drBlakeImage from "../assets/dr-blake.jpg";
import InfoItem from "./ui/InfoItem";
import { CONTACT_INFO } from "../lib/constants";

const About = () => (
  <section id="about" className="py-20 bg-secondary/30">
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-foreground">About Dr. Serena Blake</h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
          </p>

          <div className="space-y-4">
            <InfoItem title="Location">
              {CONTACT_INFO.address}
            </InfoItem>

            <InfoItem title="Contact">
              <p>{CONTACT_INFO.phone}</p>
              <p>{CONTACT_INFO.email}</p>
            </InfoItem>

            <InfoItem title="Office Hours">
              <p>In-person: {CONTACT_INFO.officeHours.inPerson}</p>
              <p>Virtual: {CONTACT_INFO.officeHours.virtual}</p>
            </InfoItem>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <img 
              src={drBlakeImage} 
              alt="Dr. Serena Blake"
              className="rounded-2xl shadow-2xl w-full max-w-md object-cover"
            />
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-full w-24 h-24 flex items-center justify-center text-center text-sm font-semibold">
              <div>
                <div>8+ Years</div>
                <div>Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;