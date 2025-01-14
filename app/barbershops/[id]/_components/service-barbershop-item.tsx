import { Button } from "@/app/_components/ui/button";
import { BarbershopServiceDTO } from "@/app/_data/get-barbershop";
import Image from "next/image";

const ServiceBarbershopItem = ({
  service,
}: {
  service: BarbershopServiceDTO;
}) => {
  return (
    <div className="grid h-[134px] w-full grid-cols-3 gap-3 rounded-xl border border-muted bg-foreground p-3">
      <div className="col-span-1">
        <Image
          src={service.imageUrl}
          alt={service.name}
          width={110}
          height={110}
          className="rounded-lg object-cover"
        />
      </div>
      <div className="col-span-2">
        <div>
          <h2 className="text-sm font-bold text-white">{service.name}</h2>
          <p className="text-sm text-accent">{service.description}</p>
        </div>
        <div className="flex items-center justify-between gap-7">
          <h3 className="text-sm font-bold text-primary">R${service.price}</h3>
          <Button className="rounded-xl bg-muted hover:bg-muted-foreground">
            Reservar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceBarbershopItem;
