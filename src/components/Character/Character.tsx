
import { FC } from "react";
import { Link } from "react-router-dom";
import { decrement, incrementByAmount } from '../../features/counter/counterSlice'
import { useSelector, useDispatch } from 'react-redux'
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/black-and-white.css";

interface CharacterProps {
  name: string;
  image: string;
  species: string;
  id: number;
}

export const Character: FC<CharacterProps> = (props) => {
  const count = useSelector((state:Record<string, Record<string, number>>) => state.counter.value)
  const dispatch = useDispatch()
  const { id, name, image, species } = props;
  return (
    <div style={{ display: "inline-grid", margin: "10px" }}>
      <Link to={`/r-m/characters/${id}`}>
        <LazyLoadImage effect="black-and-white" src={image} />
        <div className="name">{name}</div>
        <div className="specie">{species}</div>
      </Link>
      <div>
        {count}
        <button onClick={()=>dispatch(incrementByAmount(67))}>Add</button>
         <button onClick={() => dispatch(decrement())}>Decrees</button>
      </div>
    </div>
  );
};

export default Character;
