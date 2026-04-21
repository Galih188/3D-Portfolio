const HeroLight = () => {
  return (
    <>
      <spotLight
        position={[-1, 5, -1]}
        angle={0.32}
        intensity={90}
        penumbra={0.8}
        color="white"
      />
      <spotLight
        position={[5, 5, 0]}
        angle={0.5}
        intensity={90}
        penumbra={0.5}
        color="#4cc0f0"
      />
      <spotLight
        position={[0, 5, 5]}
        angle={0.5}
        intensity={70}
        penumbra={0.5}
        color="#9d4edd"
      />
    </>
  );
};

export default HeroLight;
