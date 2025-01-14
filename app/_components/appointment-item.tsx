import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Badge } from "./ui/badge";
import { AvatarFallback } from "./ui/avatar";

const AppointmentItem = () => {
  return (
    <div className="relative grid h-28 grid-cols-3 rounded-lg border border-muted bg-foreground text-white">
      <Badge className="absolute left-2 top-2 bg-secondary text-primary">
        Confirmado
      </Badge>
      <div className="col-span-2 flex flex-col items-center justify-end gap-1.5 border-r border-r-muted p-2">
        <h1 className="font-bold">Corte de Cabelo</h1>
        <div className="flex gap-2">
          <Avatar>
            <AvatarImage src="/avatar.png" alt="Avatar" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <h2 className="text-sm">Vintage Barber</h2>
        </div>
      </div>
      <div className="col-span-1 flex flex-col items-center justify-center">
        <span className="text-sm">Fevereiro</span>
        <h3 className="text-2xl font-bold">06</h3>
        <span className="text-sm">09:45</span>
      </div>
    </div>
  );
};

export default AppointmentItem;
