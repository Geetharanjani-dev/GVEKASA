import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us! We will get back to you shortly.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (234) 567-890", "+1 (234) 567-891"],
      action: "tel:+1234567890",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@grandvekasa.com", "reservations@grandvekasa.com"],
      action: "mailto:info@grandvekasa.com",
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Luxury Avenue", "City Center, ST 12345"],
      action: null,
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["24/7 Reception", "Restaurant: 6 AM - 11 PM"],
      action: null,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1744782996368-dc5b7e697f4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcwNzcxMDUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-center">
          <div className="text-center text-white">
            <span className="text-accent text-sm tracking-widest uppercase">Get In Touch</span>
            <h1 className="text-4xl md:text-6xl font-serif mt-2">Contact Us</h1>
            <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
              We're here to help. Reach out to us for reservations, inquiries, or any assistance you need.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-4">
                      <Icon className="size-7 text-accent" />
                    </div>
                    <h3 className="font-serif text-lg mb-3">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-muted-foreground">
                          {info.action && idx === 0 ? (
                            <a href={info.action} className="hover:text-accent transition-colors">
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <span className="text-accent text-sm tracking-widest uppercase">Send Us a Message</span>
                <h2 className="text-3xl md:text-4xl font-serif mt-2">We'd Love to Hear From You</h2>
                <p className="text-muted-foreground mt-4">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1"
                      placeholder="+1 (234) 567-890"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-1"
                    placeholder="Reservation Inquiry"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 min-h-32"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-primary">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              <Card className="overflow-hidden border-none shadow-lg">
                <div className="bg-secondary h-80 flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin className="size-16 text-accent mx-auto mb-4" />
                    <h3 className="font-serif text-xl mb-2">Visit Us</h3>
                    <p className="text-muted-foreground">
                      123 Luxury Avenue<br />
                      City Center, ST 12345<br />
                      United States
                    </p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4"
                    >
                      <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-primary">
                        Get Directions
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <h3 className="font-serif text-2xl mb-4">Business Hours</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between pb-3 border-b">
                      <span className="font-medium">Reception</span>
                      <span className="text-muted-foreground">24/7</span>
                    </div>
                    <div className="flex justify-between pb-3 border-b">
                      <span className="font-medium">Restaurant</span>
                      <span className="text-muted-foreground">6:00 AM - 11:00 PM</span>
                    </div>
                    <div className="flex justify-between pb-3 border-b">
                      <span className="font-medium">Fitness Center</span>
                      <span className="text-muted-foreground">5:00 AM - 11:00 PM</span>
                    </div>
                    <div className="flex justify-between pb-3 border-b">
                      <span className="font-medium">Spa & Wellness</span>
                      <span className="text-muted-foreground">8:00 AM - 9:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Banquet Inquiries</span>
                      <span className="text-muted-foreground">By Appointment</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg bg-accent/5">
                <CardContent className="p-8">
                  <h3 className="font-serif text-xl mb-3">Need Immediate Assistance?</h3>
                  <p className="text-muted-foreground mb-4">
                    Our team is available 24/7 to help you with any urgent matters.
                  </p>
                  <div className="flex flex-col gap-2">
                    <a href="tel:+1234567890">
                      <Button className="w-full bg-accent hover:bg-accent/90 text-primary">
                        <Phone className="mr-2 size-4" />
                        Call Now
                      </Button>
                    </a>
                    <a href="mailto:info@grandvekasa.com">
                      <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-primary">
                        <Mail className="mr-2 size-4" />
                        Email Us
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
