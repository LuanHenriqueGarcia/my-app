
type Props = {
  phrase: string;
  author?: string;
}

export const Card = ({ phrase, author }: Props) => {
  return (
    <div className=" w-96 border-2 border-red-600 p-3 text-3xl text-center italic">
      <h3 className="text-3xl"> "{phrase}" </h3>
      {author && <p className="text-right text-sm">- {author}</p>}
      {!author && "Autor Desconhecido"}
    </div>
  );
}