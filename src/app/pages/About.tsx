import { Card, CardContent } from "../components/ui/card";
import { Award, Users, Heart, Shield } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function About() {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for perfection in every detail, ensuring an unforgettable experience for our guests.",
    },
    {
      icon: Users,
      title: "Hospitality",
      description: "Our dedicated team is committed to providing warm, personalized service to every guest.",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "We are passionate about creating memorable moments and exceeding expectations.",
    },
    {
      icon: Shield,
      title: "Trust",
      description: "Building lasting relationships through integrity, reliability, and transparency.",
    },
  ];

  const stats = [
    { number: "25+", label: "Years of Excellence" },
    { number: "10k+", label: "Happy Guests" },
    { number: "150+", label: "Luxury Rooms" },
    { number: "50+", label: "Expert Staff" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1744782996368-dc5b7e697f4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcwNzcxMDUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="About Grand Vekasa"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-center">
          <div className="text-center text-white">
            <span className="text-accent text-sm tracking-widest uppercase">Our Story</span>
            <h1 className="text-4xl md:text-6xl font-serif mt-2">About Grand Vekasa</h1>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent text-sm tracking-widest uppercase">Since 1999</span>
              <h2 className="text-3xl md:text-4xl font-serif mt-2 mb-6">A Legacy of Luxury</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  For over two decades, Hotel Grand Vekasa has been synonymous with luxury, elegance, 
                  and unparalleled hospitality. Located in the heart of the city, our hotel has been 
                  the preferred choice for discerning travelers seeking an exceptional experience.
                </p>
                <p>
                  Our journey began with a simple vision: to create a sanctuary where guests could 
                  escape the ordinary and immerse themselves in extraordinary comfort and service. 
                  Today, we continue to uphold this vision through our commitment to excellence.
                </p>
                <p>
                  Every corner of Grand Vekasa reflects our dedication to sophistication and attention 
                  to detail. From our elegantly appointed rooms to our world-class dining experiences, 
                  we ensure that every moment of your stay is nothing short of perfection.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1640108930193-76941e385e5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJlc3RhdXJhbnQlMjBkaW5pbmd8ZW58MXx8fHwxNzcwNzczOTY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Hotel Restaurant"
                className="w-full h-64 object-cover rounded-lg"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1604161926875-bb58f9a0d81b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHdlbGxuZXNzfGVufDF8fHx8MTc3MDc4MzU2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Hotel Spa"
                className="w-full h-64 object-cover rounded-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-serif text-accent mb-2">{stat.number}</div>
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-accent text-sm tracking-widest uppercase">What We Stand For</span>
            <h2 className="text-3xl md:text-4xl font-serif mt-2">Our Core Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="border-none shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                      <Icon className="size-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-serif mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <span className="text-accent text-sm tracking-widest uppercase">Our Mission</span>
          <h2 className="text-3xl md:text-4xl font-serif mt-2 mb-6">
            Creating Unforgettable Experiences
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At Hotel Grand Vekasa, our mission is to provide an unparalleled hospitality experience 
            that combines timeless elegance with modern luxury. We are dedicated to exceeding our 
            guests' expectations through impeccable service, exceptional amenities, and a genuine 
            commitment to their comfort and satisfaction. Every guest is treated like family, and 
            every stay is crafted to create lasting memories.
          </p>
        </div>
      </section>
    </div>
  );
}
