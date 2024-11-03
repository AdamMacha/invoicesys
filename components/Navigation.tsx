"use client";

import { cn } from "@/lib/utils";
import { LayoutDashboard, FileText, Settings, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const Navigation = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const navigation = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Faktury",
      href: "/dashboard/faktury",
      icon: FileText,
    },
    {
      name: "Nastavení",
      href: "/dashboard/nastaveni",
      icon: Settings,
    },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/dashboard" className="text-xl font-bold gradient-text">
            Fakturační Systém
          </Link>
          <div className="flex items-center space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "nav-link",
                  pathname === item.href
                    ? "nav-link-active"
                    : "nav-link-inactive"
                )}
              >
                <item.icon className="h-4 w-4 mr-2 inline-block" />
                {item.name}
              </Link>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-4"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Přepnout téma</span>
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;