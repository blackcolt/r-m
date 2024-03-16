interface fetchCharactersProps {
  id?: number;
  page?: number;
}

export const fetchCharacters = async (props?: fetchCharactersProps) => {
  const { id, page = 1 } = props || {};
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id ?? ""}?page=${page}`
  );
  if (!response.ok) throw "error fetching character";
  const responseData = await response.json();
  return responseData || responseData;
};
