import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Bed, Users, Maximize, Wifi, Coffee, Tv, Bath, Wind } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Rooms() {
  const rooms = [
    {
      name: "Deluxe Room",
      image: "https://images.unsplash.com/photo-1675494051271-f4a99814de27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGRlbHV4ZSUyMHJvb218ZW58MXx8fHwxNzcwODAzMDgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "$199",
      size: "350 sq ft",
      guests: "2 Guests",
      beds: "1 King Bed",
      description: "Experience comfort and elegance in our well-appointed Deluxe Rooms, featuring contemporary design and premium amenities.",
      amenities: [
        { icon: Wifi, label: "Free WiFi" },
        { icon: Tv, label: "Smart TV" },
        { icon: Coffee, label: "Coffee Maker" },
        { icon: Bath, label: "Luxury Bath" },
        { icon: Wind, label: "Climate Control" },
      ],
    },
    {
      name: "Executive Suite",
      image: "https://images.unsplash.com/photo-1638277000768-005d326db4b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJvb20lMjBzdWl0ZXxlbnwxfHx8fDE3NzA3ODA1Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "$349",
      size: "600 sq ft",
      guests: "3 Guests",
      beds: "1 King Bed",
      description: "Indulge in spacious luxury with separate living area, stunning city views, and enhanced amenities for the discerning traveler.",
      amenities: [
        { icon: Wifi, label: "Free WiFi" },
        { icon: Tv, label: "Smart TV" },
        { icon: Coffee, label: "Coffee Maker" },
        { icon: Bath, label: "Spa Bath" },
        { icon: Wind, label: "Climate Control" },
      ],
    },
    {
      name: "Presidential Suite",
      image: "https://images.unsplash.com/photo-1748652252546-6bea5d896bd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHByZXNpZGVudGlhbCUyMHN1aXRlfGVufDF8fHx8MTc3MDc5ODk1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "$599",
      size: "1200 sq ft",
      guests: "4 Guests",
      beds: "2 King Beds",
      description: "The epitome of luxury living with panoramic views, private dining area, and exclusive access to premium hotel services.",
      amenities: [
        { icon: Wifi, label: "Free WiFi" },
        { icon: Tv, label: "Smart TV" },
        { icon: Coffee, label: "Espresso Bar" },
        { icon: Bath, label: "Jacuzzi" },
        { icon: Wind, label: "Climate Control" },
      ],
    },
    {
      name: "Superior Room",
      image: "https://images.unsplash.com/photo-1638277000768-005d326db4b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJvb20lMjBzdWl0ZXxlbnwxfHx8fDE3NzA3ODA1Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "$249",
      size: "400 sq ft",
      guests: "2 Guests",
      beds: "1 King Bed",
      description: "Enhanced comfort with upgraded amenities and elegant furnishings, perfect for both business and leisure travelers.",
      amenities: [
        { icon: Wifi, label: "Free WiFi" },
        { icon: Tv, label: "Smart TV" },
        { icon: Coffee, label: "Coffee Maker" },
        { icon: Bath, label: "Rain Shower" },
        { icon: Wind, label: "Climate Control" },
      ],
    },
    {
      name: "Family Suite",
      image: "https://images.unsplash.com/photo-1675494051271-f4a99814de27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGRlbHV4ZSUyMHJvb218ZW58MXx8fHwxNzcwODAzMDgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "$449",
      size: "750 sq ft",
      guests: "5 Guests",
      beds: "2 Queen Beds",
      description: "Spacious accommodations designed for families, featuring separate sleeping areas and kid-friendly amenities.",
      amenities: [
        { icon: Wifi, label: "Free WiFi" },
        { icon: Tv, label: "Smart TV" },
        { icon: Coffee, label: "Coffee Maker" },
        { icon: Bath, label: "Dual Baths" },
        { icon: Wind, label: "Climate Control" },
      ],
    },
    {
      name: "Honeymoon Suite",
      image: "https://images.unsplash.com/photo-1748652252546-6bea5d896bd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHByZXNpZGVudGlhbCUyMHN1aXRlfGVufDF8fHx8MTc3MDc5ODk1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "$499",
      size: "650 sq ft",
      guests: "2 Guests",
      beds: "1 King Bed",
      description: "Romantic retreat with champagne on arrival, rose petals, and breathtaking views for unforgettable moments.",
      amenities: [
        { icon: Wifi, label: "Free WiFi" },
        { icon: Tv, label: "Smart TV" },
        { icon: Coffee, label: "Coffee Maker" },
        { icon: Bath, label: "Spa Bath" },
        { icon: Wind, label: "Climate Control" },
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1638277000768-005d326db4b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJvb20lMjBzdWl0ZXxlbnwxfHx8fDE3NzA3ODA1Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Luxury Rooms"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-center">
          <div className="text-center text-white">
            <span className="text-accent text-sm tracking-widest uppercase">Accommodations</span>
            <h1 className="text-4xl md:text-6xl font-serif mt-2">Luxury Rooms & Suites</h1>
            <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
              Discover our collection of elegantly designed rooms, each offering comfort and sophistication
            </p>
          </div>
        </div>
      </section>

      {/* Rooms Grid Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {rooms.map((room, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className="grid md:grid-cols-5 gap-0">
                  <div className="md:col-span-2 relative h-64 md:h-auto overflow-hidden">
                    <ImageWithFallback
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-accent text-primary px-3 py-1 rounded-full">
                      <span className="text-sm font-serif">{room.price}/night</span>
                    </div>
                  </div>
                  
                  <CardContent className="md:col-span-3 p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-serif mb-2">{room.name}</h3>
                      
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Maximize className="size-4" />
                          <span>{room.size}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="size-4" />
                          <span>{room.guests}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Bed className="size-4" />
                          <span>{room.beds}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                        {room.description}
                      </p>

                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {room.amenities.map((amenity, idx) => {
                          const Icon = amenity.icon;
                          return (
                            <div key={idx} className="flex items-center gap-2 text-xs">
                              <Icon className="size-3 text-accent" />
                              <span>{amenity.label}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1 bg-accent hover:bg-accent/90 text-primary">
                        Book Now
                      </Button>
                      <Button variant="outline" className="flex-1 border-accent text-accent hover:bg-accent hover:text-primary">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Rooms Include Section */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif">All Rooms Include</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-2">
                <Wifi className="size-6 text-accent" />
              </div>
              <p className="text-sm">Free High-Speed WiFi</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-2">
                <Coffee className="size-6 text-accent" />
              </div>
              <p className="text-sm">Daily Breakfast</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-2">
                <Tv className="size-6 text-accent" />
              </div>
              <p className="text-sm">Smart TV</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-2">
                <Wind className="size-6 text-accent" />
              </div>
              <p className="text-sm">Climate Control</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
