import { useParams } from "react-router-dom";

export const ListingViewPage = () => {
  const { id } = useParams();

  return (
    <div style={{ padding: 20 }}>
      <h1>Объявление {id}</h1>
    </div>
  );
};