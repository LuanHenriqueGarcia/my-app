import { EmojiRating } from "@/components/EmojiRating";

const Page = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <EmojiRating  rate={2.2} />

    </div>
  )
};

export default Page;
