"use client";
import { Chrome, Compass, Contact, HomeIcon, Layout } from "lucide-react";
import { SidebarItem } from "./SidebarItem";

const guestRoutes = [
  {
    icon: HomeIcon,
    label: "Home",
    href: "/home",
  },
  {
    icon: Layout,
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: Compass,
    label: "Browse",
    href: "/compas",
  },
  {
    icon: Contact,
    label: "Contact",
    href: "/contact",
  },
  {
    icon: Chrome,
    label: "Browse",
    href: "/browse",
  },
];

const Navabar = () => {
  return (
    <div className="flex flex-col lg:flex-row  w-full">
      {guestRoutes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};

export default Navabar;
