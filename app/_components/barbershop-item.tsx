import { Barbershop } from "@prisma/client";
import Image from "next/image";
import { Button } from "./ui/button";

const BarbershopItem = ({ barbershop }: { barbershop: Barbershop }) => {
  return (
    <div className="h-[291px] w-[167px] rounded-xl border border-muted bg-foreground text-white">
      <div className="relative h-[171px] w-[167px]">
        <Image
          src={barbershop.imageUrl}
          alt={barbershop.name}
          fill
          className="rounded-xl object-cover"
        />
      </div>
      <div className="flex flex-col gap-4 p-3">
        <div>
          <h1 className="truncate font-bold">{barbershop.name}</h1>
          <p className="text-xs text-accent">{barbershop.address}</p>
        </div>
        <Button className="w-full rounded-xl bg-muted hover:bg-muted-foreground">
          Reservar
        </Button>
      </div>
    </div>
  );
};

export default BarbershopItem;
