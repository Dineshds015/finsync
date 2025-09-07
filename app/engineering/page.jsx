"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Code2, 
  Database, 
  Shield, 
  Zap, 
  Globe, 
  Smartphone, 
  BarChart3, 
  Brain,
  GitBranch,
  Server,
  Lock,
  Cpu,
  FileText,
  CreditCard,
  TrendingUp,
  Camera,
  Mail,
  Search,
  Layers,
  ArrowRight
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function EngineeringPage() {
  const techStack = [
    { name: "Next.js 14", category: "Frontend", icon: <Globe className="w-5 h-5" />, description: "Full-stack React framework with server-side rendering" },
    { name: "React", category: "Frontend", icon: <Code2 className="w-5 h-5" />, description: "Component-based UI library" },
    { name: "TypeScript", category: "Language", icon: <Code2 className="w-5 h-5" />, description: "Type-safe JavaScript development" },
    { name: "Tailwind CSS", category: "Styling", icon: <Zap className="w-5 h-5" />, description: "Utility-first CSS framework" },
    { name: "Prisma", category: "Database", icon: <Database className="w-5 h-5" />, description: "Type-safe database ORM" },
    { name: "PostgreSQL", category: "Database", icon: <Server className="w-5 h-5" />, description: "Reliable SQL database" },
    { name: "Clerk", category: "Authentication", icon: <Shield className="w-5 h-5" />, description: "User authentication and management" },
    { name: "Vercel", category: "Deployment", icon: <Globe className="w-5 h-5" />, description: "Serverless deployment platform" },
  ];

  const features = [
    {
      title: "Multi-Account Support",
      description: "Manage multiple accounts and credit cards in one place",
      imageLight: "/engineering/light_multipleAccount.svg",
      imageDark: "/engineering/dark_multipleAccount.svg",
    },
    {
      title: "Inngest Background Jobs",
      description: "Inngest is used to handle background jobs such as email notifications and async processing.",
      imageLight: "/engineering/light_inngest.svg",
      imageDark: "/engineering/dark_inngest.svg",
    },
    {
      title: "Rate limiting",
      description: "Rate limiting is used to prevent abuse of the application, here used for continuously budget changes.",
      imageLight: "/engineering/light_ratelimiting.svg",
      imageDark: "/engineering/dark_ratelimiting.svg",
    },
    {
      title: "Receipt Scanner",
      description: "LLM (Mistral Model) Integration for receipt scanning.",
      imageLight: "/engineering/light_receipt.svg",
      imageDark: "/engineering/dark_receipt.svg",
    },
    {
      title: "Light / Dark Mode & Fuzzy Searching",
      description: "This is an easy one, I just used CSS variables and changed their values depending on whether there is a 'dark' class in the html tag. Then I simply used basic DOM manipulation to toggle this class in html tag and saved the theme in local storage, also implementaed Fuzzy searching is implemented using PostgreSQL full-text search.",
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          {/* Logo */}
          <div className="mb-8">
            <Image
              src="/logo-sm.png"
              alt="FinSync Logo"
              width={150}
              height={150}
              className="mx-auto"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Engineering behind <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">FinSync</span>
          </h1>
          <div className="flex justify-center space-x-4">
            <Link href="/">
              <Button size="lg" variant="outline">
                Back to Home
              </Button>
            </Link>
            {/* <Link href="https://github.com/your-repo/finsync" target="_blank">
              <Button size="lg">
                <GitBranch className="w-4 h-4 mr-2" />
                View Source Code
              </Button>
            </Link> */}
          </div>
        </div>
      </section>

      {/* Warming up section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Warming up: What to expect..?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            I get it, this seems interesting. So let me tell you what we are going through here. 
            First I will tell you <strong>what problem this application aims to solve</strong>, then very quickly we move on to the <strong>high level design</strong> of this application.
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            Still with me? Okay, then we will go through the <strong>database design</strong> of this project. 
            After that I will quickly share how I built some of the most <strong>interesting features</strong> of this project. 
            I will conclude by mentioning the <strong>tech stack</strong>.
          </p>
          <p className="text-lg font-semibold">Let's begin!</p>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Once upon a time...</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-6">
              Sarah, a busy professional, struggled to keep track of her finances. She had multiple bank accounts, 
              credit cards, and investment accounts scattered across different platforms. Every month, she spent hours 
              manually categorizing transactions, trying to understand where her money was going, and setting budgets 
              that she could never stick to.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              She tried various budgeting apps, but they were either too complex, required manual data entry, 
              or didn't provide the insights she needed. She wanted something simple yet powerful—a tool that could 
              automatically track her spending, categorize transactions intelligently, and give her actionable insights 
              about her financial habits.
            </p>
            <p className="text-lg text-muted-foreground">
              That's where FinSync comes in. No more scattered financial data or forgotten transactions—just a clean, 
              intelligent way to track, analyze, and optimize your financial life.
            </p>
          </div>
        </div>
      </section>

      {/* High Level Diagram */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-8">High level diagram</h2>

          <div className="rounded-lg border bg-muted/40 p-4 md:p-8">
            {/* Light mode image */}
            <Image
              src="./engineering/hldFinSync_lightmode.svg"
              alt="High-level diagram (light mode)"
              width={1600}
              height={900}
              priority
              className="block dark:hidden w-full h-auto"
            />
            {/* Dark mode image */}
            <Image
              src="./engineering/hldFinSync_darkmode.svg"
              alt="High-level diagram (dark mode)"
              width={1600}
              height={900}
              priority
              className="hidden dark:block w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Database Design */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-8">Database Design</h2>

          <div className="rounded-lg border bg-background p-4 md:p-8">
            {/* Light mode image */}
            <Image
              src="/engineering/dbDesign_lightMode.png"
              alt="Part flow diagram (light mode)"
              width={1600}
              height={900}
              priority
              className="block dark:hidden w-full h-auto"
            />
            {/* Dark mode image */}
            <Image
              src="/engineering/dbDesign_darkMode.png"
              alt="Part flow diagram (dark mode)"
              width={1600}
              height={900}
              priority
              className="hidden dark:block w-full h-auto"
            />
          </div>
                  </div>
      </section>

      {/* Part Flow Diagram */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-8">Complete flow Diagram</h2>

          <div className="rounded-lg border bg-background p-4 md:p-8">
            {/* Light mode image */}
            <Image
              src="/engineering/flowDiagram.svg"
              alt="Part flow diagram (light mode)"
              width={1600}
              height={900}
              priority
              className="block dark:hidden w-full h-auto"
            />
            {/* Dark mode image */}
            <Image
              src="/engineering/flowDiagram.svg"
              alt="Part flow diagram (dark mode)"
              width={1600}
              height={900}
              priority
              className="hidden dark:block w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Action section */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">There are <strike className="text-primary">APIs</strike> Actions!</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Remix (framework of this web application) provides server actions for data mutations (backend). So, this way every route which has an 'action' also becomes an API route. Sounds cool, here is an example:
          </p>

          <p className="text-lg text-muted-foreground mb-6">
          It takes you back to the traditional way of dealing with mutations.
          Similarly, for 'GET' requests, there is a loader function like action which executes before the page gets loaded.
          </p>

          <div className="bg-muted p-6 rounded-xl flex justify-center">
            {/* Light Mode Image */}
            <Image
              src="/engineering/light_action.png"
              alt="Light Mode"
              width={1600}
              height={900}
              priority
              className="w-full h-auto dark:hidden rounded-2xl shadow-2xl ring-2 ring-gray-200 dark:ring-gray-700"
            />

            {/* Dark Mode Image */}
            <Image
              src="/engineering/dark_action.png"
              alt="Dark Mode"
              width={1600}
              height={900}
              priority
              className="w-full h-auto hidden dark:block rounded-2xl shadow-2xl ring-2 ring-gray-200 dark:ring-gray-700"
            />
          </div>

          
        </div>
      </section>



      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Let's talk about features</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Let me discuss with you the approach with which I implemented 5 main features of this application in descending order of interesting-ness.
          </p>
          
          <div className="space-y-16">
            {features.map((feature, index) => (
              <div key={index} className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="text-2xl font-bold text-muted-foreground">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="flex items-center space-x-3">
                    <h3 className="text-2xl font-semibold">{feature.title}</h3>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {/* Description above */}
                  <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto">
                    {feature.description}
                  </p>

                  {/* Centered smaller diagram/image - only show if images exist */}
                  {feature.imageLight && feature.imageDark && (
                    <div className="relative mx-auto h-[28rem] w-full max-w-4xl rounded-xl overflow-hidden border shadow-sm">
                      {/* Light image */}
                      <Image
                        src={feature.imageLight}
                        alt={`${feature.title} (light)`}
                        fill
                        className="object-contain bg-background p-4 block dark:hidden"
                      />
                      {/* Dark image */}
                      <Image
                        src={feature.imageDark}
                        alt={`${feature.title} (dark)`}
                        fill
                        className="object-contain bg-background p-4 hidden dark:block"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Tech Stack</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Built completely in <strong className="text-primary">TypeScript</strong>.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            <strong className="text-primary">Remix</strong> as the full stack framework. Why? Amazing developer experience and performance.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            <strong className="text-primary">Tailwind CSS</strong> and <strong className="text-primary">Shadcn UI</strong> for styling. Why? Easy and quick to use.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            <strong className="text-primary">Prisma</strong> as ORM. Why? To talk to SQL like NoSQL.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            <strong className="text-primary">PostgreSQL</strong> as primary database. Why? SQL because I don't like the schema flexibility which a NoSQL database gives. Moreover, it gives the feature of fuzzy searching out of the box.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            <strong className="text-primary">Inngest</strong> for background jobs. Why? To handle background jobs such as email notifications and async processing.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            <strong className="text-primary">Tesseract</strong> for receipt scanning. Why? To scan receipts and extract text from them.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            <strong className="text-primary">LLM (Mistral Model)</strong> for organizing data extraction from receipts.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            <strong className="text-primary">Arcjet</strong> for rate limiting. Why? To prevent abuse of the application.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            <strong className="text-primary">Google Gemini</strong> as a generative AI for AI insights.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            <strong className="text-primary">Vercel</strong> for deployment. Why? To deploy the application.
          </p>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">Designed and built with by</h2>
          <div className="space-y-4">
            <p className="text-xl font-semibold">Dinesh :)</p>
          </div>
        </div>
      </section>
    </div>
  );
}
