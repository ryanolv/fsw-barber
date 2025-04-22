import { Button } from "@/app/_components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/app/_components/ui/sheet";
import { BarbershopServiceDTO } from "@/app/_data/get-barbershop";
import Image from "next/image";
import BookingService from "./booking-service";

const ServiceBarbershopItem = ({
  service,
  barbershopName,
}: {
  service: BarbershopServiceDTO;
  barbershopName: string;
}) => {
  return (
    <Sheet>
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
        <div className="col-span-2 flex flex-col justify-between">
          <div>
            <h2 className="text-sm font-bold text-white">{service.name}</h2>
            <p className="text-sm text-accent">{service.description}</p>
          </div>
          <div className="flex items-center justify-between gap-7">
            <h3 className="text-sm font-bold text-primary">
              R${service.price}
            </h3>
            <SheetTrigger asChild>
              <Button className="h-[36px] w-[90px] rounded-xl bg-muted font-bold hover:bg-muted-foreground">
                Reservar
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[95%] border-none text-white">
              <BookingService
                service={service}
                barbershopName={barbershopName}
              />
            </SheetContent>
          </div>
        </div>
      </div>
    </Sheet>
  );
};

export default ServiceBarbershopItem;
