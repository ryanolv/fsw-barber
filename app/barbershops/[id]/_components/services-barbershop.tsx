import { BarbershopDTO } from "@/app/_data/get-barbershop";
import ServiceBarbershopItem from "./service-barbershop-item";

const ServicesBarbershop = ({ barbershop }: { barbershop: BarbershopDTO }) => {
  return (
    <div className="space-y-3 px-5">
      <h2 className="text-xs font-bold text-accent">SERVIÇOS</h2>
      <div className="space-y-3">
        {barbershop.services.map((service) => (
          <ServiceBarbershopItem key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesBarbershop;
