import { Button } from "@/app/_components/ui/button";
import { Smartphone } from "lucide-react";

const PhonesBarbershop = ({ phones }: { phones: string[] }) => {
  return (
    <div className="space-y-3 px-5 pb-12">
      <h2 className="text-xs font-bold text-accent">CONTATO</h2>
      <div className="space-y-3 text-white">
        {phones.map((phone) => (
          <div className="flex items-center justify-between" key={phone}>
            <div className="flex items-center gap-1">
              <Smartphone size={24} />
              <p>{phone}</p>
            </div>
            <Button variant="outline" className="rounded-xl border-muted">
              Copiar
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhonesBarbershop;
