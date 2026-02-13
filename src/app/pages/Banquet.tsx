import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Users, Music, Utensils, Sparkles, Calendar, Award } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";

export default function Banquet() {
  const venues = [
    {
      name: "Grand Ballroom",
      image: "https://images.unsplash.com/photo-1663194816323-e3a2dbfc76d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGJhbnF1ZXQlMjBoYWxsfGVufDF8fHx8MTc3MDgwMzA4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      capacity: "500 Guests",
      size: "5,000 sq ft",
      description: "Our flagship venue featuring crystal chandeliers, premium sound systems, and customizable lighting for your special occasion.",
      ideal: "Weddings, Galas, Corporate Events",
    },
    {
      name: "Crystal Hall",
      image: "https://images.unsplash.com/photo-1640108930193-76941e385e5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJlc3RhdXJhbnQlMjBkaW5pbmd8ZW58MXx8fHwxNzcwNzczOTY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      capacity: "200 Guests",
      size: "2,500 sq ft",
      description: "Elegant mid-sized venue with natural lighting and terrace access, perfect for intimate celebrations.",
      ideal: "Receptions, Anniversaries, Conferences",
    },
    {
      name: "Garden Pavilion",
      image: "https://images.unsplash.com/photo-1547064663-a07e03f25fca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHBvb2wlMjBsdXh1cnl8ZW58MXx8fHwxNzcwNzA0NDM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      capacity: "150 Guests",
      size: "2,000 sq ft",
      description: "Outdoor venue surrounded by lush gardens, ideal for daytime events and open-air celebrations.",
      ideal: "Garden Weddings, Cocktail Parties, Social Gatherings",
    },
  ];

  const services = [
    {
      icon: Utensils,
      title: "Catering Services",
      description: "Customized menus from our award-winning culinary team",
    },
    {
      icon: Music,
      title: "Audio/Visual",
      description: "State-of-the-art sound and lighting equipment",
    },
    {
      icon: Sparkles,
      title: "Event Decoration",
      description: "Professional decoration and styling services",
    },
    {
      icon: Calendar,
      title: "Event Planning",
      description: "Dedicated coordinator for seamless execution",
    },
    {
      icon: Users,
      title: "Guest Services",
      description: "Professional staff to ensure guest satisfaction",
    },
    {
      icon: Award,
      title: "Premium Packages",
      description: "Customizable packages to suit your needs",
    },
  ];

  const eventTypes = [
    { title: "Weddings", description: "Make your dream wedding a reality" },
    { title: "Corporate Events", description: "Professional settings for business" },
    { title: "Conferences", description: "Equipped for presentations" },
    { title: "Galas & Award Ceremonies", description: "Elegant venues for grand celebrations" },
    { title: "Birthday Parties", description: "Celebrate in style" },
    { title: "Anniversaries", description: "Romantic settings for milestones" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1663194816323-e3a2dbfc76d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGJhbnF1ZXQlMjBoYWxsfGVufDF8fHx8MTc3MDgwMzA4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Banquet Hall"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4 md:px-8 flex items-center">
          <div className="text-white max-w-2xl">
            <span className="text-accent text-sm tracking-widest uppercase">Events & Celebrations</span>
            <h1 className="text-4xl md:text-6xl font-serif mt-2 mb-4">Banquet Facilities</h1>
            <p className="text-lg md:text-xl text-gray-200 mb-6">
              Host unforgettable events in our elegant venues, where every detail is crafted to perfection
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary">
                Plan Your Event
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Venues Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-accent text-sm tracking-widest uppercase">Our Venues</span>
            <h2 className="text-3xl md:text-4xl font-serif mt-2">Elegant Event Spaces</h2>
          </div>

          <div className="space-y-8">
            {venues.map((venue, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                  <div className={`relative h-80 ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                    <ImageWithFallback
                      src={venue.image}
                      alt={venue.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <CardContent className="p-8 flex flex-col justify-center">
                    <h3 className="text-3xl font-serif mb-4">{venue.name}</h3>
                    
                    <div className="flex gap-6 mb-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Users className="size-5 text-accent" />
                        <span className="font-medium">{venue.capacity}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Sparkles className="size-5 text-accent" />
                        <span className="font-medium">{venue.size}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {venue.description}
                    </p>

                    <div className="mb-6">
                      <span className="text-sm font-medium text-accent">Ideal For: </span>
                      <span className="text-sm text-muted-foreground">{venue.ideal}</span>
                    </div>

                    <Link to="/contact">
                      <Button className="bg-accent hover:bg-accent/90 text-primary">
                        Book This Venue
                      </Button>
                    </Link>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-accent text-sm tracking-widest uppercase">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-serif mt-2">Comprehensive Event Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-4">
                      <Icon className="size-7 text-accent" />
                    </div>
                    <h3 className="text-xl font-serif mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Event Types Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-accent text-sm tracking-widest uppercase">Perfect For</span>
            <h2 className="text-3xl md:text-4xl font-serif mt-2">Types of Events We Host</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventTypes.map((event, index) => (
              <div key={index} className="p-6 border-l-4 border-accent bg-secondary/50 hover:bg-secondary transition-colors">
                <h3 className="text-xl font-serif mb-2">{event.title}</h3>
                <p className="text-muted-foreground text-sm">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-serif mb-6">
            Ready to Plan Your Event?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Our experienced event coordinators are here to help you create the perfect celebration. 
            Contact us today to discuss your vision.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary">
                Contact Event Team
              </Button>
            </Link>
            <a href="tel:+1234567890">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Call Us Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
