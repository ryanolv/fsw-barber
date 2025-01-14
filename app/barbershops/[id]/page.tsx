import ImageBarbershop from "./_components/image-barbershop";
import InfoBarbershop from "./_components/info-barbershop";
import { Separator } from "@/app/_components/ui/separator";
import AboutBarbershop from "./_components/about-barbershop";
import ServicesBarbershop from "./_components/services-barbershop";
import { getUniqueBarbershop } from "@/app/_data/get-barbershop";
import PhonesBarbershop from "./_components/phones-barbershop";

interface BarbershopPageProps {
  params: {
    id: string;
  };
}

const BarbershopPage = async ({ params: { id } }: BarbershopPageProps) => {
  const barbershop = await getUniqueBarbershop(id);
  if (!barbershop) return;
  return (
    <div>
      <ImageBarbershop barbershop={barbershop} />
      <InfoBarbershop barbershop={barbershop} />
      <div className="py-6">
        <Separator className="bg-muted" />
      </div>
      <AboutBarbershop description={barbershop.description} />
      <div className="py-6">
        <Separator className="bg-muted" />
      </div>
      <ServicesBarbershop barbershop={barbershop} />
      <div className="py-6">
        <Separator className="bg-muted" />
      </div>
      <PhonesBarbershop phones={barbershop.phones} />
    </div>
  );
};

export default BarbershopPage;
