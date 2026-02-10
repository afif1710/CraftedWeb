import React from "react";
import { Sparkles, Users, Award, Heart, Code, Zap } from "lucide-react";

const AboutPage: React.FC = () => {
  const stats = [
    { value: "20+", label: "Premium Templates" },
    { value: "24/7", label: "Support Available" },
  ];

  const values = [
    {
      icon: Code,
      title: "Quality Code",
      description:
        "Every template is built with clean, maintainable code following best practices and modern patterns.",
    },
    {
      icon: Heart,
      title: "Customer First",
      description:
        "We prioritize customer satisfaction with responsive support and continuous improvements based on feedback.",
    },
    {
      icon: Zap,
      title: "Performance",
      description:
        "Our templates are optimized for speed and performance, ensuring the best user experience.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We strive for excellence in every detail, from design to documentation to customer service.",
    },
  ];

  return (
    <section className="py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">About Us</span>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Building the Future of Web Development
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're creating and providing premium website templates that help you
            build faster, launch sooner and grow your Business/Brand more.
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex-1 min-w-[280px] max-w-[360px] bg-card rounded-2xl border border-border p-8 text-center hover-lift shadow-sm"
            >
              <div className="text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                CraftedWeb was born to reduce the struggles of Brands and
                Businesses chossing the layout and design of their website. Now
                with the help of CraftedWeb anyone can have pre built websites
                in which they can customize with their own informations and have
                a fully responsive website with minimal effort.
              </p>
              <p>
                As developers ourselves, we understand the value of starting
                with a solid foundation. That's why we create templates that
                aren't just beautiful—they're built with the same care and
                attention we'd give to our own projects.
              </p>
              <p>
                Every template is crafted with clean architecture, comprehensive
                documentation, and a focus on developer experience. We believe
                that great tools should get out of your way and let you focus on
                what matters: building something amazing.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <div className="text-center">
                <Users className="w-20 h-20 text-primary mx-auto mb-4" />
                <p className="text-lg font-semibold text-foreground">
                  Built by Developers
                </p>
                <p className="text-muted-foreground">For Brands</p>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-2xl -z-10" />
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl border border-border p-6 text-center hover-lift"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission */}
        <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            To empower Brands and Businesses with premium, website templates
            that save time, reduce frustration, and help bring ideas to life
            faster than ever before.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
