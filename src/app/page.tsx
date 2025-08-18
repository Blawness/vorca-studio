import Image from "next/image";
import { ContactForm } from "@/components/forms/ContactForm";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            AI-Powered Web Solutions for the Modern Business
          </h1>
          <p className="text-lg text-foreground/80">
            We create cutting-edge web applications that leverage AI to drive engagement,
            efficiency, and growth for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg">
              <a href="/contact">Get Started Today</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/services">View Our Services</a>
            </Button>
          </div>
        </div>
        <div className="relative h-64 md:h-80 lg:h-96">
          <Image src="/globe.svg" alt="VorcaStudio" fill className="object-contain dark:invert" />
        </div>
      </section>

      {/* Services Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold mb-8">Our Core Services</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "AI Integration",
              desc:
                "Seamlessly incorporate artificial intelligence into your existing website or application to enhance user experience, automate processes, and gain valuable insights from data.",
              features: [
                "Machine learning implementation",
                "Natural language processing",
                "Predictive analytics",
                "Personalization engines",
                "Chatbot integration",
              ],
            },
            {
              title: "Custom Web Applications",
              desc:
                "Bespoke web solutions designed specifically for your business needs, built with modern technologies and enhanced with AI capabilities.",
              features: [
                "Full-stack development",
                "Responsive design",
                "Database integration",
                "API development",
                "Scalable architecture",
              ],
            },
            {
              title: "E-commerce Solutions",
              desc:
                "AI-powered online stores that not only sell your products but also understand your customers, predict trends, and optimize sales.",
              features: [
                "Product recommendation engines",
                "Dynamic pricing",
                "Inventory management",
                "Payment integration",
                "Analytics dashboard",
              ],
            },
            {
              title: "CMS Development",
              desc:
                "Content management systems enhanced with AI to help you create, manage, and optimize your digital content more efficiently.",
              features: [
                "AI content generation",
                "SEO optimization tools",
                "User behavior analytics",
                "Automated content scheduling",
                "Multi-channel publishing",
              ],
            },
          ].map((c) => (
            <Card key={c.title}>
              <CardHeader>
                <CardTitle>{c.title}</CardTitle>
                <CardDescription>{c.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-foreground/80">
                  {c.features.map((f) => (
                    <li key={f}>• {f}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="link" asChild>
                  <a href="/services">Learn more →</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold mb-8">Pricing</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              name: "Starter",
              price: "$999",
              desc:
                "Perfect for small businesses and startups looking to establish their online presence with AI-enhanced features.",
              features: [
                "Up to 5 pages",
                "Basic AI integration",
                "Responsive design",
                "Contact form",
                "Social media integration",
                "1 month support",
              ],
            },
            {
              name: "Professional",
              price: "$2,499",
              desc:
                "Ideal for growing businesses that need a comprehensive web solution with advanced AI capabilities.",
              features: [
                "Up to 10 pages",
                "Advanced AI integration",
                "Custom web application",
                "E-commerce functionality",
                "Content management system",
                "Analytics dashboard",
                "3 months support",
              ],
            },
            {
              name: "Enterprise",
              price: "Custom",
              desc:
                "For large organizations requiring complex, scalable solutions with full AI implementation.",
              features: [
                "Unlimited pages",
                "Full AI suite integration",
                "Custom functionality",
                "Advanced e-commerce",
                "Multi-user CMS",
                "API development",
                "Machine learning models",
                "6 months support",
                "Dedicated account manager",
              ],
            },
          ].map((p) => (
            <Card key={p.name}>
              <CardHeader className="flex flex-row items-baseline justify-between">
                <div>
                  <CardTitle>{p.name}</CardTitle>
                  <CardDescription>{p.desc}</CardDescription>
                </div>
                <CardDescription className="text-base font-semibold text-foreground">{p.price}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-foreground/80">
                  {p.features.map((f) => (
                    <li key={f}>• {f}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline">
                  <a href="/pricing">Choose plan</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Student Services Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-3">Specialized Web Services for Students</h2>
          <p className="text-foreground/80">
            We understand the unique needs of students and offer affordable solutions to help you build your online presence, portfolio, and digital projects.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-foreground/80">
            <li>• Portfolio Websites — Showcase your work with professionally designed portfolio websites at student-friendly prices.</li>
            <li>• Academic Project Assistance — Need help with a web development project for school? Our student services can guide you through the process.</li>
            <li>• Internship Preparation — Build real-world projects that will impress potential employers and help you land your dream internship.</li>
            <li>• Mentorship Programs — Connect with experienced developers who can provide guidance and advice on your career path.</li>
          </ul>
          <div className="mt-4 rounded-lg border p-4 text-sm text-foreground/80">Get 30% off any of our standard packages with valid student ID. Special group rates available for student organizations.</div>
        </div>
        <div className="relative h-56 md:h-72">
          <Image src="/next.svg" alt="Student services" fill className="object-contain dark:invert" />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold mb-8">Testimonials</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              quote:
                "Working with VorcaStudio transformed our online business. Their AI integration increased our conversion rate by 45% in just two months!",
              author: "Sarah Johnson",
              role: "CEO of TechStart",
            },
            {
              quote:
                "The team delivered exactly what we needed - a modern website with AI features that our customers love. Communication was excellent throughout the project.",
              author: "Michael Chen",
              role: "Marketing Director",
            },
            {
              quote:
                "As a student, I was worried about the cost, but their student pricing made it possible to get a professional website for my freelance business.",
              author: "Emma Rodriguez",
              role: "Computer Science Student",
            },
          ].map((t, i) => (
            <figure key={i} className="rounded-lg border p-6 bg-background">
              <blockquote className="text-sm text-foreground/90">“{t.quote}”</blockquote>
              <figcaption className="mt-3 text-xs text-foreground/60">— {t.author}, {t.role}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold mb-3">About</h2>
        <p className="text-foreground/80 max-w-3xl">
          We believe in the power of artificial intelligence to transform the web. Our mission is to make cutting-edge AI web development accessible to businesses of all sizes.
        </p>
        <ul className="mt-4 space-y-2 text-sm text-foreground/80">
          <li><span className="font-semibold">Innovation:</span> We&apos;re constantly exploring new technologies and techniques to deliver the best possible solutions.</li>
          <li><span className="font-semibold">Quality:</span> We never compromise on quality - every project is built to the highest standards.</li>
          <li><span className="font-semibold">Collaboration:</span> We work closely with our clients to ensure their vision becomes reality.</li>
          <li><span className="font-semibold">Education:</span> We believe in empowering our clients with knowledge about their digital solutions.</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold mb-6">Contact</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border p-6">
            <ContactForm />
          </div>
          <div className="rounded-lg border p-6 space-y-2 text-sm">
            <div>Email: contact@vorcastudio.com</div>
            <div>Phone: +1 (555) 123-4567</div>
            <div>Address: 123 Innovation Drive, Tech City</div>
            <div className="pt-2">
              <a href="/contact" className="text-primary hover:underline">More contact options →</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
