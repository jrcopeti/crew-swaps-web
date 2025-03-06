import { CircleCheckBig } from "lucide-react";

function Feature({ name = "easy" }: { name: string }) {
  return (
    <div className="flex items-center gap-2">
      <CircleCheckBig className="h-6 w-6 text-info md:h-8 md:w-8 xl:h-10 xl:w-10" />
      <p className="text-base font-medium md:text-lg xl:text-xl">{name}</p>
    </div>
  );
}

export default Feature;
