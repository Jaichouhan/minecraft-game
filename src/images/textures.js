import { dirtImg, grassImg, glassImg, woodImg, logImg } from "./images";
import { TextureLoader } from "three";

const dirtTextTures = new TextureLoader().load(dirtImg);
const gressTextTures = new TextureLoader().load(grassImg);
const glassTextTures = new TextureLoader().load(glassImg);
const logTextTures = new TextureLoader().load(logImg);
const woodTextTures = new TextureLoader().load(woodImg);

export {
  woodTextTures,
  logTextTures,
  glassTextTures,
  gressTextTures,
  dirtTextTures,
};
