import "./App.css";
// import "./compnets/Cards"
import Cards from "./Component/Cards";

function App() {

  const cardsData = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      title: "Transform your Digital Presence",
      description:
        "From Zero to Extraordinary, Let's create your Digital Reality",
      buttonText: "Send Message",
      footerLeft: "Sunnu.Design",
      footerRight: "coder + Traveller + Funny",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      title: "Transform your Digital Presence",
      description:
        "From Zero to Extraordinary, Let's create your Digital Reality",
      buttonText: "Send Message",
      footerLeft: "Sunnu.Design",
      footerRight: "coder + Traveller + Funny",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      title: "Transform your Digital Presence",
      description:
        "From Zero to Extraordinary, Let's create your Digital Reality",
      buttonText: "Send Message",
      footerLeft: "Sunnu.Design",
      footerRight: "coder + Traveller + Funny",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      title: "Transform your Digital Presence",
      description:
        "From Zero to Extraordinary, Let's create your Digital Reality",
      buttonText: "Send Message",
      footerLeft: "Sunnu.Design",
      footerRight: "coder + Traveller + Funny",
    },
  ];
  console.log(cardsData)
  
  return (
    <>
      <div className="Continaer" >
      {cardsData.map((card) => {
  return (
    <Cards
      key={card.id}
      title={card.title}
      image={card.image}
      description={card.description}
      buttonText={card.buttonText}
      footerLeft={card.footerLeft}
      footerRight={card.footerRight}
    />
  );
})}
  
        
      </div>
   
    </>
  )
}

export default App
