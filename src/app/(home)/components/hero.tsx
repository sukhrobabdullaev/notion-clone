"use client";

import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <>
      <div className="max-w-3xl">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold my-4">
          Write, plan, share. With AI at your side.
        </h1>
        <h3 className="text-base sm:text-xl md:text-2xl font-medium my-4">
          Notion is the connected workspace where better, faster work happens.
        </h3>
        {isAuthenticated && !isLoading && (
          <>
            <Button asChild>
              <Link href="/documents">
                Enter notion
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </>
        )}

        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button>
               Get Notion Free
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </SignInButton>
          </>
        )}
      </div>
      <div className="flex flex-col items-center justify-center max-w-5xl">
        <div className="flex items-center">
          <div className="relative h-[400px] w-[400px] hidden md:block">
            <Image
              src={"/men.svg"}
              alt="logo notion"
              fill
              className="object-cover dark:hidden"
            />
            <Image
              src={"/men-dark.svg"}
              alt="logo notion"
              fill
              className="object-cover hidden dark:block"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
