import { CONTACT_INFO } from "../lib/constants";

const Footer = () => (
  <footer className="bg-foreground text-background py-12">
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-background text-foreground rounded-full flex items-center justify-center">
              <span className="font-bold text-sm">SB</span>
            </div>
            <div>
              <h3 className="font-semibold">Dr. Serena Blake</h3>
              <p className="text-sm opacity-75">Licensed Clinical Psychologist</p>
            </div>
          </div>
          <p className="text-sm opacity-75 leading-relaxed">
            Providing compassionate, evidence-based therapy to help you find balance, heal, and thrive.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold">Contact</h4>
          <div className="space-y-2 text-sm opacity-75">
            <p>{CONTACT_INFO.phone}</p>
            <p>{CONTACT_INFO.email}</p>
            <p>{CONTACT_INFO.address}</p>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold">Office Hours</h4>
          <div className="space-y-2 text-sm opacity-75">
            <p><span className="font-medium">In-person:</span><br />{CONTACT_INFO.officeHours.inPerson}</p>
            <p><span className="font-medium">Virtual:</span><br />{CONTACT_INFO.officeHours.virtual}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-background/20 mt-8 pt-8 text-center">
        <p className="text-sm opacity-75">
          © 2024 Dr. Serena Blake Psychology. All rights reserved. | Licensed in California
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;