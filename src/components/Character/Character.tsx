import { FC } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface CharacterProps {
  name: string;
  image: string;
  species: string;
  id: number;
}

export const Character: FC<CharacterProps> = (props) => {
  const { id, name, image, species } = props;
  return (
    <div style={{ display: "inline-grid", margin: "10px" }}>
      <Link to={`/r-m/characters/${id}`}>
        <LazyLoadImage effect="blur" src={image} />
        <div className="name">{name}</div>
        <div className="specie">{species}</div>
      </Link>
    </div>
  );
};

export default Character;