"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { CalendarCheck, HomeIcon, LogInIcon, MenuIcon } from "lucide-react";
import { Separator } from "./ui/separator";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-5 py-6">
      <Image src="/Logo.png" alt="Logo" width={130} height={22} />
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="text-white" size="icon">
            <MenuIcon size={24} />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-[85%] border-none text-white">
          <SheetHeader>
            <SheetTitle className="text-white">Menu</SheetTitle>
          </SheetHeader>
          <div className="flex items-center justify-between py-5">
            <h1 className="text-lg font-bold">Olá. Faça seu login!</h1>
            <Button size="icon">
              <LogInIcon size={24} />
            </Button>
          </div>

          <Separator />

          <div className="flex flex-col gap-1 py-5">
            <Button variant="ghost" className="flex justify-start">
              <HomeIcon size={24} />
              <span className="ml-2">Início</span>
            </Button>
            <Button variant="ghost" className="flex justify-start">
              <CalendarCheck size={24} />
              <span className="ml-2">Agendamentos</span>
            </Button>
          </div>

          <Separator />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Header;
