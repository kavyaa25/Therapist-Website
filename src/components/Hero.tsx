import { Button } from "./ui/button";
import heroBg from "../assets/hero-bg.jpg";

const scrollToContact = () => {
  const element = document.getElementById('contact');
  element?.scrollIntoView({ behavior: 'smooth' });
};

const Hero = () => (
  <section 
    className="relative min-h-screen flex items-center justify-center text-center text-white"
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}
  >
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <div className="space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Find Balance.<br />
          Heal. Thrive.
        </h1>
        
        <h2 className="text-xl md:text-2xl font-light opacity-90 max-w-2xl mx-auto leading-relaxed">
          Personalized therapy with Dr. Serena Blake, PsyD, in Los Angeles & online.
        </h2>
        
        <p className="text-sm opacity-75 mt-8">
          Top Rated • 8+ Years Experience • 500+ Client Sessions
        </p>
        
        <div className="pt-6">
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 h-auto font-semibold"
          >
            Book a Free Consult
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;