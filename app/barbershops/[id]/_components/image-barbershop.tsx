"use client";

import { Button } from "@/app/_components/ui/button";
import { BarbershopDTO } from "@/app/_data/get-barbershop";
import { ChevronLeft, X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ImageBarbershop = ({ barbershop }: { barbershop: BarbershopDTO }) => {
  const router = useRouter();
  return (
    <div className="relative h-[250px] w-full">
      <Image
        src={barbershop.imageUrl}
        alt={barbershop.name}
        fill
        className="object-cover"
      />
      <Button
        className="absolute left-4 top-4 bg-foreground text-white hover:bg-muted-foreground"
        size="icon"
        onClick={() => router.back()}
      >
        <ChevronLeft size={24} />
      </Button>
      <Button
        className="absolute right-4 top-4 bg-foreground text-white hover:bg-muted-foreground"
        size="icon"
        onClick={() => router.push("/")}
      >
        <X size={24} />
      </Button>
    </div>
  );
};

export default ImageBarbershop;
