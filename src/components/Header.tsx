import { Button } from "./ui/button";

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  element?.scrollIntoView({ behavior: 'smooth' });
};

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' }
];

const Header = () => (
  <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
    <div className="container mx-auto px-4 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-sm">SB</span>
        </div>
        <div>
          <h2 className="font-semibold text-lg">Dr. Serena Blake</h2>
          <p className="text-xs text-muted-foreground">Licensed Clinical Psychologist</p>
        </div>
      </div>

      <nav className="hidden md:flex items-center space-x-6">
        {navItems.map(item => (
          <button 
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="text-foreground hover:text-primary transition-colors"
          >
            {item.label}
          </button>
        ))}
      </nav>

      <Button 
        onClick={() => scrollToSection('contact')}
        className="hidden md:block"
      >
        Book Consultation
      </Button>

      <button className="md:hidden p-2">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </header>
);

export default Header;