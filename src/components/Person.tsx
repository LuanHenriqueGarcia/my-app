type Props = {
  name: string;
  avatar?: string;
  roles: string[];
};
export const Person = ({
  name,
  avatar = "https://static.vecteezy.com/ti/vetor-gratis/p1/9734564-default-avatar-profile-icon-of-social-media-user-vetor.jpg",
  roles,
}: Props) => {
  return (
    <div className="p-3">
      <h1>{name}</h1>
      <img 
      
      src={avatar} 
      alt={name} 
      className="w-40 h-40" />

      <ul style={{ fontSize: "10px" }}>
        <li>{roles[0]}</li>
        <li>{roles[1]}</li>
      </ul>
    </div>
  );
};

{
  /* <></> funciona como um div  */
}
