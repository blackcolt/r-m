import { FC } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Character } from "../../entities/characters";
import { fetchCharacters } from "../../fetch/fetchCharacters";

export const DetailPage: FC = () => {
  const { id } = useParams();
  const { isLoading, isError, data } = useQuery<Character>({
    queryKey: ["characters", id],
    queryFn: () => fetchCharacters({ id: Number(id) }),
  });

  if (isLoading) return <span className="loader"></span>;
  if (isError) return <div className="error"></div>;
  return (
    <div>
      <h1>{data?.name}</h1>
      <img src={data?.image} />
      <div>species: {data?.species}</div>
      <div style={{ fontSize: "20px" }}>
        gender: {data?.gender.toLowerCase() === "male" ? "♂️" : "♀️"}
      </div>
    </div>
  );
};

export default DetailPage;
