import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, PenBox } from "lucide-react"
import { checkUser } from "@/lib/checkUser"
import { ThemeToggle } from "@/components/theme-toggle"
import { Logo } from "@/components/logo"

const Header = async () => {
  await checkUser()
  return (
    <div className="fixed top-0 w-full bg-background/40 backdrop-blur-md z-50 border-b">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left side (logo) */}
        <Link href="/">
          <Logo />
        </Link>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          {/* Engineering button comes BEFORE ThemeToggle */}
          <Link href="/engineering">
            <div className="relative rounded-full p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-gradient">
              <Button
                variant="ghost"
                className="rounded-full bg-background text-sm px-5 py-2 hover:bg-background"
              >
                Engineering
              </Button>
            </div>
          </Link>

          <ThemeToggle />

          <SignedIn>
            <Link
              href={"/dashboard"}
              className="text-muted-foreground hover:text-primary flex items-center gap-2"
            >
              <Button variant="outline">
                <LayoutDashboard size={18} />
                <span className="hidden md:inline">Dashboard</span>
              </Button>
            </Link>

            <Link
              href={"/transaction/create"}
              className="flex items-center gap-2"
            >
              <Button variant="outline">
                <PenBox size={18} />
                <span className="hidden md:inline">Transaction</span>
              </Button>
            </Link>
          </SignedIn>

          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button variant="outline">Login</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </div>
  )
}

export default Header
