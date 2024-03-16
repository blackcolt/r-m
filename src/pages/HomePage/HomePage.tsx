import { FC, useEffect, useState } from "react";
import Characters from "../../components/Characters/Characters";
import { useQuery } from "@tanstack/react-query";
import { fetchCharacters } from "../../fetch/fetchCharacters";
import { Character } from "../../entities/characters";

interface HomePageProps {}

interface queryResults {
  results: Character[];
  info: {
    pages: number;
  };
}

export const HomePageTsx: FC<HomePageProps> = () => {
  const [page, setPage] = useState(1);
  const { isLoading, isError, data, refetch } = useQuery<queryResults>({
    queryKey: ["characters", "page", page],
    queryFn: () => fetchCharacters({ page }),
  });
  useEffect(() => {}, [refetch]);

  const handleNext = () => {
    if (page < data!.info.pages) setPage(page + 1);
  };
  const handleBack = () => {
    if (page > 0) setPage(page - 1);
  };

  if (isLoading) return <span className="loader"></span>;
  if (isError) return <div className="error"></div>;
  return (
    <div>
      <Characters characters={data?.results} />
      <button disabled={page >= data!.info.pages} onClick={handleNext}>
        NEXT
      </button>
      <button disabled={page <= 1} onClick={handleBack}>
        BACK
      </button>
    </div>
  );
};

export default HomePageTsx;
