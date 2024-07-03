import { GeoForm } from "@/components/GeoForm";
import { Person } from "@/components/Person";
import imagem from './MicrosoftTeams-image.png';

const Page = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Hello world</h1>
      <h3>qualquer texto</h3>

      <Person
        name="Luan"
        avatar="https://avatars.githubusercontent.com/u/114183987?v=4"
        roles={['aprendiz gazin tech', 'white hat']}

      />
      <Person name="Gustavo" avatar={'https://scontent.fbfh3-2.fna.fbcdn.net/v/t1.6435-9/160923828_3817714178323395_4724397072753205633_n.png?_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_ohc=_2Acgw2FgKgQ7kNvgE3sCqr&_nc_ht=scontent.fbfh3-2.fna&oh=00_AYBf1ORJ3wbnVTQog4gOoBECyqoelUyP6G-YI01u8UpAWw&oe=66ACB4F8'} roles={['traine gazin tech']}

      />
      <GeoForm />
    </div>
  );
};

export default Page;
