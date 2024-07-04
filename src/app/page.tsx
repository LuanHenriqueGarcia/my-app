import { GeoForm } from "@/components/GeoForm";
import { Card } from "@/components/Card";

const Page = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold italic">Hello world</h1>
      <h3>qualquer texto</h3>

      <Card phrase="Alguma frase top" author="qualquer um"/>
   

      <GeoForm />
    </div>
  );
};

export default Page;
