import HeroSection from "@/components/hero";
import { featuresData, howItWorksData, statsData, testimonialsData } from "./data/landing";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <div className="mt-40">
      <HeroSection />
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((statsData, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{statsData.value}</div>
                <div className="text-muted-foreground">{statsData.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Everything you need to manage your finances</h2>
          <div className="grid grid-cols-1 gap-8">
            {featuresData.map((feature, index) => (
              <Card key={index} className="p-6">
                <CardContent className="space-y-4 pt-4">
                  {feature.image}
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}
      <section id="demoLink" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Everything you need to manage your finances
          </h2>

          <div className="space-y-16">
            {featuresData.map((feature, index) => (
              <div
                key={index}
                className="grid md:grid-cols-2 gap-10 items-center border rounded-2xl p-8"
              >
                {/* Left side (number, title, description) */}
                <div className="space-y-4">
                  <h3 className="text-5xl font-bold text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </h3>
                  <h4 className="text-2xl font-semibold">{feature.title}</h4>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>

                {/* Right side (image with rounded border) */}
                <div className="flex justify-center">
                  <div className="rounded-2xl overflow-hidden shadow-lg border border-blue-500">
                    {feature.image}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorksData.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="pt-4">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="ml-4">
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{testimonial.quote}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-center mb-4 text-primary-foreground">Ready to Take Control of Your Finances?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already managing their finances smarter with FinSync
          </p>
          <Link href="/dashboard">
            <Button size="lg" className="bg-background text-foreground hover:bg-muted animate-bounce">Start Free Trial</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
