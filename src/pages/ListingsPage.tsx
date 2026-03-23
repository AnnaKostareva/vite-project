import { Card } from "antd";
import { useNavigate } from "react-router-dom";


export const ListingsPage = () => {
  const navigate = useNavigate();
  return (
    <div style={{ padding: 20 }}>
      <h1>Мои объявления</h1>

      <div style={{ display: "flex", gap: 16 }}>
        {listings.map((item) => (
          
          <Card
            key={item.id}
            title={item.title}
            style={{ width: 250, cursor: "pointer" }}
            onClick={() => navigate(`/listing/${item.id}`)}
          >
            <p>{item.category}</p>
            <p>{item.price} ₽</p>

            {item.needsImprovement && (
              <p style={{ color: "orange" }}>
                Требует доработок
              </p>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};

const listings = [
  {
    id: 1,
    title: "MacBook Pro 16",
    price: 64000,
    category: "Электроника",
    needsImprovement: true,
  },
  {
    id: 2,
    title: "Volkswagen Polo",
    price: 1100000,
    category: "Авто",
    needsImprovement: true,
  },
  {
    id: 3,
    title: "Студия 25м²",
    price: 15000000,
    category: "Недвижимость",
    needsImprovement: false,
  },
];

