import { FC } from "react";
import { Link } from "react-router-dom";

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
        <img src={image} />
        <div className="name">{name}</div>
        <div className="specie">{species}</div>
      </Link>
    </div>
  );
};

export default Character;
