import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { useToast } from "../hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "", phone: "", email: "", message: "", preferredTime: "", agreeToContact: false
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name || formData.name.length < 2) newErrors.name = "Name must be at least 2 characters";
    if (!formData.phone || formData.phone.length < 10) newErrors.phone = "Please enter a valid phone number";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Please enter a valid email";
    if (!formData.message || formData.message.length < 10) newErrors.message = "Please tell us more about what brings you here";
    if (!formData.preferredTime) newErrors.preferredTime = "Please let us know when you prefer to be contacted";
    if (!formData.agreeToContact) newErrors.agreeToContact = "You must agree to be contacted";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent successfully!",
      description: "Dr. Blake will get back to you within 24 hours.",
    });
    
    setFormData({ name: "", phone: "", email: "", message: "", preferredTime: "", agreeToContact: false });
    setIsSubmitting(false);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: "" }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="text-sm font-medium">Name *</label>
        <Input 
          placeholder="Your full name" 
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          className={errors.name ? "border-destructive" : ""}
        />
        {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
      </div>

      <div>
        <label className="text-sm font-medium">Phone *</label>
        <Input 
          placeholder="Your phone number" 
          value={formData.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          className={errors.phone ? "border-destructive" : ""}
        />
        {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone}</p>}
      </div>

      <div>
        <label className="text-sm font-medium">Email *</label>
        <Input 
          type="email"
          placeholder="your.email@example.com" 
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          className={errors.email ? "border-destructive" : ""}
        />
        {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
      </div>

      <div>
        <label className="text-sm font-medium">What brings you here? *</label>
        <Textarea 
          placeholder="Tell us about your concerns, goals, or what you'd like to work on..."
          className={`min-h-[120px] ${errors.message ? "border-destructive" : ""}`}
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
        />
        {errors.message && <p className="text-sm text-destructive mt-1">{errors.message}</p>}
      </div>

      <div>
        <label className="text-sm font-medium">Preferred time to reach you *</label>
        <Input 
          placeholder="e.g., Weekday mornings, evenings after 6pm..." 
          value={formData.preferredTime}
          onChange={(e) => handleChange('preferredTime', e.target.value)}
          className={errors.preferredTime ? "border-destructive" : ""}
        />
        {errors.preferredTime && <p className="text-sm text-destructive mt-1">{errors.preferredTime}</p>}
      </div>

      <div className="flex items-start space-x-3">
        <Checkbox
          checked={formData.agreeToContact}
          onCheckedChange={(checked) => handleChange('agreeToContact', checked)}
          className={errors.agreeToContact ? "border-destructive" : ""}
        />
        <div>
          <label className="text-sm font-medium">I agree to be contacted by Dr. Blake's office *</label>
          {errors.agreeToContact && <p className="text-sm text-destructive mt-1">{errors.agreeToContact}</p>}
        </div>
      </div>

      <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;