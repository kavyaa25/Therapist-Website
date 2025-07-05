import { SERVICES_DATA } from "../lib/constants";

// Import images
import anxietyImage from "../assets/anxiety-service.jpg";
import relationshipImage from "../assets/relationship-service.jpg";
import traumaImage from "../assets/trauma-service.jpg";

const imageMap = {
  "anxiety-service.jpg": anxietyImage,
  "relationship-service.jpg": relationshipImage,
  "trauma-service.jpg": traumaImage
};

const Services = () => (
  <section id="services" className="py-20 bg-background">
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-foreground mb-4">Services</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Personalized therapy approaches tailored to your unique needs and goals
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES_DATA.map((service, index) => (
          <div key={index} className="bg-card rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="aspect-video overflow-hidden">
              <img 
                src={imageMap[service.image]} 
                alt={service.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-card-foreground">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              <div className="pt-4 border-t">
                <p className="text-primary font-semibold text-lg">{service.fee}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;