import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tlemcen CS  Space",
  description: "Tlemcen CS Dep",
};

import Link from "next/link"
import {
  CircleUser,
  Menu,
  Package2,
  Search,
} from "lucide-react"

import { Button } from "@/components/ui/button"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        
      <body className={inter.className}>
      <div className="flex w-full flex-col space-y-4 space-x-1 items-center">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="/admin/"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <iframe
                src="/logo.ico"
                className="h-6 w-6"
                title="Acme Inc"

            ></iframe>
            <span className="sr-only">Acme Inc</span>
          </Link>
          <Link
            href="/admin/ComingEvents"
            className="text-foreground transition-colors hover:text-foreground"
          >
            Events
          </Link>
          <Link
            href="/admin/MyProfessors"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Professors
          </Link>
          <Link
            href="/admin/MyComplaints"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Complaints
          </Link>
          <Link
            href="/admin/Planning"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Planning
          </Link>

        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
              </Link>
              <Link href="#" className="hover:text-foreground">
                Dashboard
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Orders
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Products
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Customers
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Analytics
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
            </div>
          </form>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                
                <span className="sr-only">Toggle user menu</span>
              </Button>
              
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu><h1>user</h1>
        </div>
      </header>
        {children}
    </div>
        
        
        </body>
    </html>
  );
}
