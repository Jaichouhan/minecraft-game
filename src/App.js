import { Physics } from "@react-three/cannon";
import { Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Ground } from "./component/ground/Ground";
import { Player } from "./component/player/Player";

const App = () => {
  return (
    <div>
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={0.5} />
        <Physics>
          <Ground />
          <Player />
        </Physics>
      </Canvas>
    </div>
  );
};

export default App;
