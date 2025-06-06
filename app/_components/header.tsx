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
import {
  CalendarCheck,
  HomeIcon,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
} from "lucide-react";
import { Separator } from "./ui/separator";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  return (
    <div className="flex items-center justify-between border-b border-muted-foreground px-5 py-6">
      <Link href="/">
        <Image src="/Logo.png" alt="Logo" width={130} height={22} />
      </Link>
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
          {status === "unauthenticated" ? (
            <div className="flex items-center justify-between py-5">
              <h1 className="text-lg font-bold">Olá. Faça seu login!</h1>
              <Button size="icon" onClick={() => signIn()}>
                <LogInIcon size={24} />
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-2.5 py-5">
              <Avatar className="h-12 w-12">
                <AvatarImage src={session?.user?.image as string} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="font-bold">{session?.user?.name}</h1>
                <p className="text-xs text-gray-300">{session?.user?.email}</p>
              </div>
            </div>
          )}

          <Separator />

          <div className="flex flex-col gap-1 py-5">
            <Button
              variant="ghost"
              className={`flex justify-start ${pathname === "/" && "bg-primary"}`}
              asChild
            >
              <Link href="/">
                <HomeIcon size={24} />
                <span className="ml-2">Início</span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              className={`flex justify-start ${pathname === `/appointments/${session?.user.id}` && "bg-primary"}`}
              asChild
            >
              <Link href={`/appointments/${session?.user.id}`}>
                <CalendarCheck size={24} />
                <span className="ml-2">Agendamentos</span>
              </Link>
            </Button>
          </div>

          <Separator />

          {status === "authenticated" && (
            <div className="py-5">
              <Button
                variant="ghost"
                className="flex w-full justify-start text-gray-200"
                onClick={() => signOut()}
              >
                <LogOutIcon size={24} />
                <span className="ml-2">Saír da conta</span>
              </Button>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Header;
