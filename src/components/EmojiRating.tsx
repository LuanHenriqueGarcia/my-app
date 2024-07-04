type Avaliacao = {
  rate: number,
};
export const EmojiRating = ({ rate }: Avaliacao) => {
  if (rate > 5) rate = 5;
  if (rate < 0) rate = 0;
  let emojis = ["😶", "😶", "😶", "😶", "😶"];
  let avaliacao = emojis.fill("😀", 0, rate);
  return (
    <>
      <div className="flex items-center text-6xl">
        <div className="bg-gray-700 p-2 rounded">{rate.toFixed(1)}</div>
        <div className="ml-3">{avaliacao}</div>
      </div>
    </>
  );
};
