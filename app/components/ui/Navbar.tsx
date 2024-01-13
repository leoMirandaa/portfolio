"use client";
import Link from "next/link";
import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { usePathname } from "next/navigation";

interface routeProps {
  label: string;
  url: string;
}

const routes: routeProps[] = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Projects",
    url: "/projects",
  },
  {
    label: "Contact",
    url: "/contact",
  },
];

export const NavbarSection = () => {
  const pathname = usePathname();

  return (
    <Navbar
      classNames={{
        wrapper: [
          "bg-content2",
          "rounded-xl",
          "h-11",
          "my-8",
          "flex",
          "justify-center",
          "w-auto",
          "px-2",
        ],

        item: [
          "transition-all",
          "flex",
          "relative",
          "text-sm",
          "text-default-500",
          "font-medium",
          "items-center",
          "hover:text-opacity-60",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:bg-background",
          "data-[active=true]:text-default-foreground",
          "data-[active=true]:dark:bg-default rounded-lg",
        ],
      }}
      isBlurred
    >
      <NavbarContent
        className=" sm:flex gap-4"
        justify="center"
      >
        {routes.map((section: routeProps) => (
          <NavbarItem
            key={section.url}
            isActive={pathname === section.url}
          >
            <Link
              className="px-3 py-1.5 rounded-lg"
              color="foreground"
              href={section.url}
            >
              {section.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
    </Navbar>
  );
};
