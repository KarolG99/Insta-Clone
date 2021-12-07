import faker from "faker";
import { useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import Story from "./Story";
import MyPageImg from "../image/MyPage.png";

const Stories = () => {
  const [suggestions, setSuggestions] = useState([]);
  const { data: session } = useSession();
  const linkRef = useRef(null);

  useEffect(() => {
    const suggestions = [...Array(16)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));

    setSuggestions(suggestions);
  }, []);

  return (
    <div
      className="flex space-x-2 p-6 bg-white mt-8 border-gray-200
    border rounded-md overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-200 "
    >
      {session && (
        <Story img={session.user.image} username={session.user.username} />
      )}

      <a ref={linkRef} href="https://karolgucwa.pl/" className="link">
        <Story
          onClick={() => linkRef.current.click()}
          img="https://firebasestorage.googleapis.com/v0/b/insta-clone-20368.appspot.com/o/posts%2FVlPtbeNBDJjqBO67zJzD%2Fimage?alt=media&token=06dde848-d089-43b1-bedc-75e635f860ce"
          username="My website"
        />
      </a>

      <a ref={linkRef} href="https://github.com/KarolG99" className="link">
        <Story
          onClick={() => linkRef.current.click()}
          img="https://logo.clearbit.com/github.com"
          username="GitHub"
        />
      </a>

      <a
        ref={linkRef}
        href="https://www.linkedin.com/in/karol-gucwa-0a3104226/"
        className="link"
      >
        <Story
          onClick={() => linkRef.current.click()}
          img="https://logo.clearbit.com/linkedin.com"
          username="linkedin"
        />
      </a>

      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={`https://picsum.photos/200/200?random=${profile.id}`}
          username={profile.username}
        />
      ))}
    </div>
  );
};

export default Stories;
