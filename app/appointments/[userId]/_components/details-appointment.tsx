import Image from "next/image";
import { format } from "date-fns";

import { AppointmentDTO } from "@/app/_types/dto";

import { Button } from "@/app/_components/ui/button";
import { SheetContent, SheetHeader, SheetTitle } from "@/app/_components/ui/sheet";
import SummaryAppointment from "@/app/_components/summary-appointment";
import PhonesBarbershop from "@/app/barbershops/[id]/_components/phones-barbershop";
import { Badge } from "@/app/_components/ui/badge";

interface DetailsAppointmentProps {
  appointment: AppointmentDTO;
}

const DetailsAppointment = ({ appointment }: DetailsAppointmentProps) => {
  const hour = format(appointment.date, "HH:mm");

  return <SheetContent className="w-[90%]  border-none space-y-6">
    <SheetHeader className="border-b border-b-muted pb-6">
      <SheetTitle className="text-white text-lg font-bold">Informações da reserva</SheetTitle>
    </SheetHeader>

    <div className="relative w-full h-[180px] rounded-lg overflow-hidden">
        <Image src="/barbershop-location.png" alt="Barbershop location" fill />
    </div>

    <Badge  className="text-primary bg-primary/20 hover:bg-primary/20 text-sm font-semibold">Confirmado</Badge>

    <SummaryAppointment 
      service={appointment.service}
      selectedDay={appointment.date}
      selectedHour={hour}
      barbershopName={appointment.service.barbershop.name}
    />

    <PhonesBarbershop phones={appointment.service.barbershop.phones} />    

    <div className="flex gap-3 items-center absolute bottom-2 left-0 p-4 w-full">
        <Button variant="outline" className="rounded-xl text-sm font-semibold border-none text-white bg-muted w-full">Voltar</Button>
        <Button variant="destructive" className="rounded-xl text-sm text-white font-semibold w-full">Cancelar Reserva</Button>
    </div>
    
  </SheetContent>;
};
 
export default DetailsAppointment;