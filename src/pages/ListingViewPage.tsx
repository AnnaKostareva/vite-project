import { useParams, useNavigate } from "react-router-dom";
import { Button, Card } from "antd";

const listing = {
  id: 1,
  title: "MacBook Pro 16”",
  price: 64000,
  description:
    "Продаю свой MacBook Pro 16\" (2021) на чипе M1 Pro. Состояние отличное, работал бережно.",
  category: "Электроника",
  needsImprovement: true,
};

export const ListingViewPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div style={{ padding: 24 }}>
      
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h1>{listing.title}</h1>

          <Button
            type="primary"
            onClick={() => navigate(`/listing/${id}/edit`)}
          >
            Редактировать
          </Button>
        </div>

        <h2>{listing.price} ₽</h2>
      </div>

      
      {listing.needsImprovement && (
        <Card
          style={{
            marginTop: 20,
            background: "#fff7e6",
            border: "1px solid orange",
          }}
        >
          <b>Требуются доработки</b>
          <p>У объявления не заполнены поля:</p>
          <ul>
            <li>Цвет</li>
            <li>Состояние</li>
          </ul>
        </Card>
      )}

      
      <div
        style={{
          display: "flex",
          gap: 40,
          marginTop: 30,
        }}
      >
        
        <div
          style={{
            width: 200,
            height: 150,
            background: "#eee",
          }}
        />

        
        <div>
          <h3>Характеристики</h3>

          <p>Тип: Ноутбук</p>
          <p>Бренд: Apple</p>
          <p>Модель: M1 Pro</p>
        </div>
      </div>

      
      <div style={{ marginTop: 40 }}>
        <h3>Описание</h3>
        <p>{listing.description}</p>
      </div>
    </div>
  );
};