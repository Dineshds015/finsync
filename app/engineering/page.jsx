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
      title: "Receipt Scanner",
      description: "AI-powered receipt scanning using computer vision to automatically extract transaction details, amounts, and categories from uploaded receipt images.",
      icon: <Camera className="w-8 h-8 text-blue-500" />,
      image: "/4_receipt.png",
      implementation: "Built with Tesseract.js for OCR and custom image processing algorithms to detect and extract text from receipt images."
    },
    {
      title: "Real-time Budget Tracking",
      description: "Live budget monitoring with instant updates when transactions are added, providing immediate feedback on spending against budget limits.",
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      image: "/1_dashboard.png",
      implementation: "Uses React state management and real-time database updates to provide instant budget calculations and progress indicators."
    },
    {
      title: "Smart Categorization",
      description: "Automatic transaction categorization using machine learning algorithms that learn from user behavior and improve over time.",
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      image: "/2_createTransaction.png",
      implementation: "Implements fuzzy matching algorithms and user preference learning to automatically categorize transactions based on merchant names and amounts."
    },
    {
      title: "Email Notifications",
      description: "Automated email notifications for budget alerts, spending summaries, and important financial milestones.",
      icon: <Mail className="w-8 h-8 text-orange-500" />,
      image: "/5_list.png",
      implementation: "Uses Inngest for background job processing and Resend for reliable email delivery with customizable templates."
    },
    {
      title: "Advanced Search",
      description: "Powerful search functionality with fuzzy matching, date ranges, and category filters to quickly find specific transactions.",
      icon: <Search className="w-8 h-8 text-red-500" />,
      image: "/3_chart.png",
      implementation: "PostgreSQL full-text search with custom ranking algorithms and intelligent query parsing for natural language searches."
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
            <Link href="https://github.com/your-repo/finsync" target="_blank">
              <Button size="lg">
                <GitBranch className="w-4 h-4 mr-2" />
                View Source Code
              </Button>
            </Link>
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


      {/* Features Section */}
      <section className="py-20 px-4 bg-muted">
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
                    {feature.icon}
                    <h3 className="text-2xl font-semibold">{feature.title}</h3>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div className="space-y-4">
                    <p className="text-muted-foreground text-lg">{feature.description}</p>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm font-medium mb-2">Implementation:</p>
                      <p className="text-sm text-muted-foreground">{feature.implementation}</p>
                    </div>
                  </div>
                  <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg border">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Tech Stack</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Built completely in <strong>TypeScript</strong>.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center space-x-2">
                  <Globe className="w-5 h-5" />
                  <span>Next.js 14</span>
                </h3>
                <p className="text-muted-foreground">as the full stack framework. Why? Amazing developer experience and performance.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center space-x-2">
                  <Zap className="w-5 h-5" />
                  <span>Tailwind CSS & Shadcn UI</span>
                </h3>
                <p className="text-muted-foreground">for styling. Why? Easy and quick to use.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center space-x-2">
                  <Database className="w-5 h-5" />
                  <span>Prisma</span>
                </h3>
                <p className="text-muted-foreground">as ORM. Why? To talk to SQL like NoSQL.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center space-x-2">
                  <Server className="w-5 h-5" />
                  <span>PostgreSQL</span>
                </h3>
                <p className="text-muted-foreground">as primary database. Why? SQL because I don't like the schema flexibility which a NoSQL database gives. Moreover, it gives the feature of fuzzy searching out of the box.</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center space-x-2">
                  <Shield className="w-5 h-5" />
                  <span>Clerk</span>
                </h3>
                <p className="text-muted-foreground">for authentication. Why? Secure and easy to implement user management.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span>Inngest</span>
                </h3>
                <p className="text-muted-foreground">for background jobs. Why? To handle email notifications and async processing reliably.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center space-x-2">
                  <Camera className="w-5 h-5" />
                  <span>Tesseract.js</span>
                </h3>
                <p className="text-muted-foreground">for OCR. Why? To extract text from receipt images for automatic transaction entry.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center space-x-2">
                  <Globe className="w-5 h-5" />
                  <span>Vercel</span>
                </h3>
                <p className="text-muted-foreground">for deployment. Why? Seamless integration with Next.js and excellent performance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Mode Note */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Bonus: Dark/Light mode</h2>
          <p className="text-lg text-muted-foreground mb-6">
            This is an easy one, I just used CSS variables and changed their values depending on whether there is a 'dark' class in the html tag. 
            Then I simply used basic DOM manipulation to toggle this class in html tag and saved the theme in local storage.
          </p>
          <div className="bg-muted p-6 rounded-lg">
            <p className="text-sm font-mono">
              {`// Theme toggle implementation
const toggleTheme = () => {
  const html = document.documentElement;
  const isDark = html.classList.contains('dark');
  html.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
};`}
            </p>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">Designed and built with ❤️ by</h2>
          <div className="space-y-4">
            <p className="text-xl font-semibold">FinSync Team</p>
            <div className="flex justify-center space-x-4">
              <Link href="https://github.com/your-repo/finsync" target="_blank">
                <Button variant="outline">
                  <GitBranch className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button>
                  Try the Application
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
