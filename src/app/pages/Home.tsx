import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Star, Wifi, Coffee, Dumbbell, UtensilsCrossed, Wine } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Home() {
  const features = [
    {
      icon: Wifi,
      title: "Free WiFi",
      description: "High-speed internet throughout the property",
    },
    {
      icon: Coffee,
      title: "Complimentary Breakfast",
      description: "Start your day with our delicious buffet",
    },
    {
      icon: Dumbbell,
      title: "Fitness Center",
      description: "State-of-the-art gym facilities",
    },
    {
      icon: UtensilsCrossed,
      title: "Fine Dining",
      description: "Award-winning restaurant & bar",
    },
    {
      icon: Wine,
      title: "Banquet Services",
      description: "Perfect venue for your events",
    },
    {
      icon: Star,
      title: "5-Star Service",
      description: "Exceptional hospitality guaranteed",
    },
  ];

  const rooms = [
    {
      name: "Deluxe Room",
      image: "https://images.unsplash.com/photo-1675494051271-f4a99814de27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGRlbHV4ZSUyMHJvb218ZW58MXx8fHwxNzcwODAzMDgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "$199",
      description: "Elegant comfort with modern amenities",
    },
    {
      name: "Executive Suite",
      image: "https://images.unsplash.com/photo-1638277000768-005d326db4b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJvb20lMjBzdWl0ZXxlbnwxfHx8fDE3NzA3ODA1Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "$349",
      description: "Spacious luxury with stunning views",
    },
    {
      name: "Presidential Suite",
      image: "https://images.unsplash.com/photo-1748652252546-6bea5d896bd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHByZXNpZGVudGlhbCUyMHN1aXRlfGVufDF8fHx8MTc3MDc5ODk1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "$599",
      description: "Ultimate luxury experience",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1744782996368-dc5b7e697f4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcwNzcxMDUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Hotel Grand Vekasa Lobby"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4 md:px-8 flex items-center">
          <div className="text-white max-w-2xl">
            <div className="inline-block px-4 py-1 bg-accent/20 backdrop-blur-sm border border-accent/50 rounded-full mb-4">
              <span className="text-accent text-sm tracking-widest uppercase">Luxury Redefined</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-6 leading-tight">
              Welcome to<br />
              <span className="text-accent">Grand Vekasa</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-xl">
              Experience unparalleled luxury and elegance in the heart of the city. 
              Where every moment becomes a cherished memory.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/rooms">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary">
                  Book Your Stay
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Explore More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-accent text-sm tracking-widest uppercase">Our Amenities</span>
            <h2 className="text-3xl md:text-4xl font-serif mt-2">World-Class Facilities</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                      <Icon className="size-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-serif mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Rooms Preview Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-accent text-sm tracking-widest uppercase">Accommodations</span>
            <h2 className="text-3xl md:text-4xl font-serif mt-2">Our Luxury Rooms</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Choose from our selection of elegantly designed rooms and suites
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all">
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-primary px-4 py-2 rounded-full">
                    <span className="text-sm font-serif">From {room.price}/night</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif mb-2">{room.name}</h3>
                  <p className="text-muted-foreground mb-4">{room.description}</p>
                  <Link to="/rooms">
                    <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-primary">
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/rooms">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary">
                View All Rooms
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1547064663-a07e03f25fca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHBvb2wlMjBsdXh1cnl8ZW58MXx8fHwxNzcwNzA0NDM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Hotel Pool"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 md:px-8 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-serif mb-6">
            Ready to Experience Luxury?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Book your stay today and discover why Grand Vekasa is the premier choice for discerning travelers.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
