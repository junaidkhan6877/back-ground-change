import { useState } from "react";

const images = [
    "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
    ,
  "https://tse1.mm.bing.net/th?id=OIP.TrAbbR3oGA_Ban6kV98t0AHaE6&pid=Api&P=0&h=220",
  "https://wallpapercave.com/wp/wp2611170.jpg",
  "https://www.pixelstalk.net/wp-content/uploads/2016/06/Nature-Wallpaper.jpg",
  "https://toppng.com/uploads/preview/lion-bw-muzzle-king-of-beasts-mane-11570458902veidzwppyn.jpg",
  "https://wallpapercave.com/wp/wp2722928.jpg",
  "https://www.chromethemer.com/wallpapers/phone/images/download/mufasa-lion.png",
  "https://wallpapers.com/images/featured/gangster-3k6omrqz107r2o9k.jpg",
];

export default function RandomBackground() {
  const [bgImage, setBgImage] = useState(images[0]);

  const changeBackground = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setBgImage(images[randomIndex]);
  };

  return (
    <div
      className="h-screen flex justify-center items-center transition-all duration-500"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height:"100vh"
      }}
    >
      <button
        onClick={changeBackground}
        className="px-4 py-2 bg-white text-black rounded-md shadow-lg"
      >
        Change Background
      </button>
    </div>
  );
}
