"use client";

import React from "react";
import Logo from "./logo";
import { ModeToggle } from "@/components/shared/mode-toggle";
import { Button } from "@/components/ui/button";
import { useScrolled } from "../../../../hooks/useScrolled";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const scrolled = useScrolled();

  return (
    <div
      className={cn(
        "z-50 bg-background fixed top-0 flex items-center justify-between w-full p-4",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="flex items-center gap-x-2">
        <Button size={"sm"} variant={"ghost"}>
          Log In
        </Button>
        <Button size={"sm"}>Get Notion Free</Button>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
