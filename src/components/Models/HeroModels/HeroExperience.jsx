import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { SecondRoom } from "./SecondRoom";
import HeroLight from "./HeroLight";
import Particles from "./Particles";

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <Canvas camera={{ position: [14, 0, 0], fov: 45 }}>
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={13}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <Particles count={250} />
      <HeroLight />
      <group scale={isMobile ? 0.7 : 1} position={[0, -2.5, 0]}>
        <SecondRoom />
      </group>
    </Canvas>
  );
};

export default HeroExperience;
