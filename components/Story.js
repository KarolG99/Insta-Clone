const Story = ({ img, username, onClick }) => {
  return (
    <div onClick={onClick}>
      <img
        className="h-14 w-14 rounded-full p-[1.5px] border-red-500
         border-2 object-contain cursor-pointer hover:scale-110 transition transform
         duration-200 ease-out"
        src={img}
        alt="User picture"
      />
      <p className="text-xs w-14 truncate text-center pt-1">{username}</p>
    </div>
  );
};

export default Story;
