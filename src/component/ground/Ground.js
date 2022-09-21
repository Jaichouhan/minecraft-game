import { usePlane } from "@react-three/cannon";
import { NearestFilter, RepeatWrapping } from "three";
import { gressTextTures } from "../../images/textures";

export const Ground = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 4, 0, 0],
    position: [0, 0, 0],
  }));

  gressTextTures.magFilter = NearestFilter;
  gressTextTures.wrapS = RepeatWrapping;
  gressTextTures.wrapT = RepeatWrapping;
  gressTextTures.repeat.set(100, 100);
  return (
    <mesh ref={ref}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial attach="material" map={gressTextTures} />
    </mesh>
  );
};
