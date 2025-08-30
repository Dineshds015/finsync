import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, PenBox } from "lucide-react"
import { checkUser } from "@/lib/checkUser"
import { ThemeToggle } from "@/components/theme-toggle"
import { Logo } from "@/components/logo"
const Header = async () => {
    await checkUser();
    return (
        <div className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b">
            <nav className="container mx-auto px-4 py-4 flex item-center justify-between">
                <Link href="/">
                    <Logo />
                </Link>
                <div className="flex items-center space-x-4">
                    <ThemeToggle />
                    <SignedIn>
                        <Link href={"/dashboard"} className="text-muted-foreground hover:text-primary flex items-center gap-2">
                            <Button variant="outline">
                                <LayoutDashboard size={18} />
                                <span className="hidden md:inline">Dashboard</span>
                            </Button>
                        </Link>

                        <Link href={"/transaction/create"} className="flex items-center gap-2">
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
                        <UserButton appearance={{
                            elements: {
                                avatarBox: "w-10 h-10"
                            }
                        }} />
                    </SignedIn>
                </div>
            </nav>
        </div>
    )
}

export default Header
