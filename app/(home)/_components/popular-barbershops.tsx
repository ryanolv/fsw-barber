import BarbershopItem from "@/app/_components/barbershop-item";
import { db } from "@/app/_lib/prisma";

const PopularBarbershops = async () => {
  const barbershops = await db.barbershop.findMany({
    take: 5,
  });
  return (
    <div className="space-y-2 px-5 py-6">
      <h3 className="text-xs font-bold text-accent">POPULARES</h3>
      <div className="flex gap-3 overflow-scroll scrollbar-hide">
        {barbershops.map((barbershop) => (
          <BarbershopItem key={barbershop.id} barbershop={barbershop} />
        ))}
      </div>
    </div>
  );
};

export default PopularBarbershops;
