import { FC, } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Character } from "../../entities/characters";
import { fetchCharacters } from "../../fetch/fetchCharacters";
import { RatingBox } from "../../components/RatingBox/RatingBox";
import { setScore } from "../../features/favorite/favoriteSlice"
import { useSelector, useDispatch } from 'react-redux'


export const DetailPage: FC = () => {
  const dispatch = useDispatch()
  const { id } = useParams();
  const score = useSelector((state:{favorite: Record<number, number>}) => state.favorite[ Number(id)] ?? 0)
  const { isLoading, isError, data } = useQuery<Character>({
    queryKey: ["characters", id],
    queryFn: () => fetchCharacters({ id: Number(id) }),
  });
  const handleRatingChange = (score: number) => {
    dispatch(setScore({score, id }))
    localStorage[`character-${id}`] = score;
  };
  if (isLoading) return <span className="loader"></span>;
  if (isError) return <div className="error"></div>;
  return (
    <div>
      <h1>{data?.name}</h1>
       <button onClick={() => history.back()}>Back</button>
      <img src={data?.image} />
      <div>species: {data?.species}</div>
      <div style={{ fontSize: "20px" }}>
        gender: {data?.gender.toLowerCase() === "male" ? "♂️" : "♀️"}
      </div>
      <RatingBox
        onChange={handleRatingChange}
        rating={score ?? 0}
      />
    </div>
  );
};

export default DetailPage;
