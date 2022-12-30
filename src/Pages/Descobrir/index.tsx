import Image from "next/image";
import Text from "../../Components/Text/Index";
import Carousel from "../../Components/Carousel";
import Card from "../Home/Card";
import Header from "../../Components/Header";

export default function Descobrir() {
  return (
    <div className="w-screen min-h-screen overflow-x-hidden">
      <Header />

      <Carousel title="Fantasia" className="mt-16">
        <Card
        title="Avengers"
        url="avengers.jpg"
        watched={false}
        />

      </Carousel>



    </div>
  );
}
