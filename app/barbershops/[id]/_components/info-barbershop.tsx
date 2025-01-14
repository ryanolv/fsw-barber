import { BarbershopDTO } from "@/app/_data/get-barbershop";
import { MapPin, Star } from "lucide-react";

const InfoBarbershop = ({ barbershop }: { barbershop: BarbershopDTO }) => {
  return (
    <div className="space-y-2 px-5 py-3 text-white">
      <h1 className="text-xl font-bold">{barbershop.name}</h1>
      <div className="flex items-center gap-1">
        <MapPin size={16} className="text-primary" />
        <p className="text-sm">{barbershop.address}</p>
      </div>
      <div className="flex items-center gap-1">
        <Star size={16} className="fill-current text-primary" />
        <p className="text-sm">5,0 (889 avaliações)</p>
      </div>
    </div>
  );
};

export default InfoBarbershop;
