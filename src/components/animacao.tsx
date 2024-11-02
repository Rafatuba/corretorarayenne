import Lottie from "react-lottie";
import animationData from "../assets/animation.json";

export default function Animacao() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice", // Para manter a proporção
    },
  };

  return <Lottie options={defaultOptions} />;
}
