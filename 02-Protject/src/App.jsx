import React from "react";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import Cards from "./Components/Cards";

function App() {
  const imageCards = [
    {
      id: 1,
      title: "Search engine optimization",
      image:
        "https://res.cloudinary.com/dkn6an4bw/image/upload/v1765882031/Illustration_1_o6hkel.png",
      variant: "light",
    },
    {
      id: 2,
      title: "Pay-per-click advertising",
      image:
        "https://res.cloudinary.com/dkn6an4bw/image/upload/v1765882032/Illustration_2_g7xw4y.png",
      variant: "green",
    },
    {
      id: 3,
      title: "Social Media Marketing",
      image:
        "https://res.cloudinary.com/dkn6an4bw/image/upload/v1765882032/Illustration_3_sealvb.png",
      variant: "dark",
    },
    {
      id: 4,
      title: "Email Marketing",
      image:
        "https://res.cloudinary.com/dkn6an4bw/image/upload/v1765882197/tokyo-sending-messages-from-one-place-to-another_1_e6o2w0.png",
      variant: "light",
    },
  ];

  function Request() {
    alert('Quote is Sent !!')
  }
  return (
    <div>
      <Navbar NavClick={Request} />
      <HomePage />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-6 mt-10">
        {imageCards.map((card) => (
          <Cards
            key={card.id}
            image={card.image}
            title={card.title}
            variant={card.variant}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
