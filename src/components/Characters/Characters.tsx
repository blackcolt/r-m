import { FC } from "react";
import { Character } from "../../entities/characters";
import { Character as CharacterCard } from "../Character/Character";

interface CharactersProps {
  characters?: Character[];
}

export const Characters: FC<CharactersProps> = (props) => {
  const { characters = [] } = props;
  return (
    <div>
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          id={character.id}
          name={character.name}
          image={character.image}
          species={character.species}
        />
      ))}
    </div>
  );
};

export default Characters;
