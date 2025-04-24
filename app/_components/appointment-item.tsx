import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { AppointmentDTO } from "../_types/dto";

const AppointmentItem = ({ appointment }: { appointment: AppointmentDTO }) => {
  if (!appointment || !appointment.date) {
    return null;
  }

  const month = appointment.date.toLocaleString("pt-BR", {
    month: "long",
  });
  const day = appointment.date.toLocaleString("pt-BR", {
    day: "2-digit",
  });
  const hour = appointment.date.toLocaleString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div className="relative grid h-28 grid-cols-3 rounded-lg border border-muted bg-foreground text-white">
      <Badge className="absolute left-2 top-2 bg-secondary text-primary">
        Confirmado
      </Badge>
      <div className="col-span-2 flex flex-col items-start justify-end gap-1.5 border-r border-r-muted px-6 py-4">
        <h1 className="text-lg font-bold">{appointment.service.name}</h1>
        <div className="flex gap-2">
          <Avatar className="h-6 w-6">
            <AvatarImage src={appointment.service.barbershop.imageUrl} />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <span className="text-sm">{appointment.service.barbershop.name}</span>
        </div>
      </div>
      <div className="col-span-1 flex flex-col items-center justify-center">
        <span className="text-sm">{month}</span>
        <h3 className="text-2xl font-bold">{day}</h3>
        <span className="text-sm">{hour}</span>
      </div>
    </div>
  );
};

export default AppointmentItem;
