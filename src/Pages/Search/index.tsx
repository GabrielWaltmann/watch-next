import Image from "next/image";
import Text from "../../Components/Text/Index";
import Carousel from "../../Components/Carousel";
import Card from "../../Components/Card";
import Header from "./Header";

export default function Search() {
  return (
    <>
      <Header />

      <Carousel title="Fantasia">
        <Card 
        ImageAlt="Avengers poster" 
        src="/avengers.jpg" 
        title="Avengers: Infinity wars"
        />
        <Card 
        ImageAlt="Strangers Things poster" 
        src="/stranger.jpg" 
        title="Strangers Things"
        />
        <Card 
        ImageAlt="Avatar poster" 
        src="/avatar.jpg" 
        title="Avatar: The Way of Water"
        />
        <Card 
        ImageAlt="Pokemon: The Movie poster" 
        src="/pokemon.jpg" 
        title="Pokemon: The Movie"
        />
        <Card 
        ImageAlt="Avengers poster" 
        src="/avengers.jpg" 
        title="Avengers: Infinity wars"
        />
        <Card
        ImageAlt="Avengers poster" 
        src="/avengers.jpg" 
        title="Avengers: Infinity wars"
        />
      </Carousel>

      <Carousel title="Aventura">
        <Card 
        ImageAlt="Avengers poster" 
        src="/avengers.jpg" 
        title="Avengers: Infinity wars"
        />
        <Card 
        ImageAlt="Strangers Things poster" 
        src="/stranger.jpg" 
        title="Strangers Things"
        />
        <Card 
        ImageAlt="Avatar poster" 
        src="/avatar.jpg" 
        title="Avatar: The Way of Water"
        />
        <Card 
        ImageAlt="Pokemon: The Movie poster" 
        src="/pokemon.jpg" 
        title="Pokemon: The Movie"
        />
        <Card 
        ImageAlt="Avengers poster" 
        src="/avengers.jpg" 
        title="Avengers: Infinity wars"
        />
        <Card
        ImageAlt="Avengers poster" 
        src="/avengers.jpg" 
        title="Avengers: Infinity wars"
        />
      </Carousel>

      <Carousel title="Animes">
        <Card 
        ImageAlt="Avengers poster" 
        src="/avengers.jpg" 
        title="Avengers: Infinity wars"
        />
        <Card 
        ImageAlt="Strangers Things poster" 
        src="/stranger.jpg" 
        title="Strangers Things"
        />
        <Card 
        ImageAlt="Avatar poster" 
        src="/avatar.jpg" 
        title="Avatar: The Way of Water"
        />
        <Card 
        ImageAlt="Pokemon: The Movie poster" 
        src="/pokemon.jpg" 
        title="Pokemon: The Movie"
        />
        <Card 
        ImageAlt="Avengers poster" 
        src="/avengers.jpg" 
        title="Avengers: Infinity wars"
        />
        <Card
        ImageAlt="Avengers poster" 
        src="/avengers.jpg" 
        title="Avengers: Infinity wars"
        />
      </Carousel>

    </>
  );
}
