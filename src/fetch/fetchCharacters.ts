interface fetchCharactersProps {
  id?: number;
  page?: number;
}

export const fetchCharacters = async (props?: fetchCharactersProps) => {
  const { id, page = 1 } = props || {};
  const response = await fetch(
    `${import.meta.env.VITE_RICK_AND_MORTY_API_BASE_URL}character/${
      id ?? ""
    }?page=${page}`
  );
  if (!response.ok) throw "error fetching character";
  const responseData = await response.json();
  return responseData || responseData;
};
