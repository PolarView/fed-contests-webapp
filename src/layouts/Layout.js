import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <>
      <Button
        className="text-xl lg:text-2xl m-12 rounded-lg border border-black border-solid"
        asChild
        variant="outline">
        <Link href="/">На главную</Link>
      </Button>

      <>{children}</>
    </>
  );
};

export default Layout;
