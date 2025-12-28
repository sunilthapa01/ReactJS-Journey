import React from "react";

function Cards({ image, title, variant = "light" }) {
  const variants = {
    light: "bg-white text-black",
    green: "bg-[#B9FF66] text-black",
    dark: "bg-[#111] text-white",
  };

  return (
    <div
      className={`flex justify-between items-center border rounded-2xl p-6 shadow-[0_8px_0px_#000] ${variants[variant]}`}
    >
      {/* Left Content */}
      <div className="flex flex-col justify-between gap-10">
        <div className="max-w-55">
          <span className="inline-block bg-[#B9FF66] text-black px-2 py-1 rounded-md text-lg font-medium">
            {title}
          </span>
        </div>

        <div className="flex items-center gap-3 cursor-pointer">
          <img
            src="https://res.cloudinary.com/dkn6an4bw/image/upload/v1765881978/Icon_k3lv9a.png"
            alt="arrow"
            className="w-8"
          />
          <p className="text-sm font-medium">Learn more</p>
        </div>
      </div>

      <img src={image} alt={title} className="w-32 object-contain" />
    </div>
  );
}

export default Cards;
