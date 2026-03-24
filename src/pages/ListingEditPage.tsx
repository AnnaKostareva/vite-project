import { useState } from "react";
import { Input, Button, Select } from "antd";
import { useNavigate } from "react-router-dom";

const { TextArea } = Input;

export const ListingEditPage = () => {
  const navigate = useNavigate();

  // 🧠 state (данные формы)
  const [title, setTitle] = useState("MacBook Pro 16”");
  const [price, setPrice] = useState("64000");
  const [category, setCategory] = useState("Электроника");
  const [brand, setBrand] = useState("Apple");
  const [model, setModel] = useState("M1 Pro");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [description, setDescription] = useState(
    "Продаю свой MacBook Pro 16\" (2021) на чипе M1 Pro. Состояние отличное, работал бережно."
  );

  
  const improveText = () => {
    setDescription(
      description +
        "\n\n✔ Отличное состояние\n✔ Без дефектов\n✔ Подходит для работы и учебы"
    );
  };

  return (
    <div style={{ padding: 24, maxWidth: 700 }}>
      <h1>Редактирование объявления</h1>

      {/* CATEGORY */}
      <div style={{ marginTop: 20 }}>
        <p>Категория</p>
        <Select
          value={category}
          style={{ width: "100%" }}
          onChange={setCategory}
          options={[
            { value: "Электроника", label: "Электроника" },
            { value: "Авто", label: "Авто" },
            { value: "Недвижимость", label: "Недвижимость" },
          ]}
        />
      </div>

      {/* TITLE */}
      <div style={{ marginTop: 20 }}>
        <p>* Название</p>
        <Input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>

      {/* PRICE */}
      <div style={{ marginTop: 20 }}>
        <p>* Цена</p>
        <Input value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>

      {/* CHARACTERISTICS */}
      <h3 style={{ marginTop: 30 }}>Характеристики</h3>

      <div style={{ marginTop: 10 }}>
        <p>Тип</p>
        <Select
          value="Ноутбук"
          style={{ width: "100%" }}
          options={[{ value: "Ноутбук", label: "Ноутбук" }]}
        />
      </div>

      <div style={{ marginTop: 10 }}>
        <p>Бренд</p>
        <Input value={brand} onChange={(e) => setBrand(e.target.value)} />
      </div>

      <div style={{ marginTop: 10 }}>
        <p>Модель</p>
        <Input value={model} onChange={(e) => setModel(e.target.value)} />
      </div>

      <div style={{ marginTop: 10 }}>
        <p>Цвет</p>
        <Input
          value={color}
          placeholder="Цвет"
          onChange={(e) => setColor(e.target.value)}
          style={{ borderColor: color ? undefined : "orange" }}
        />
      </div>

      <div style={{ marginTop: 10 }}>
        <p>Состояние</p>
        <Select
          value={condition || undefined}
          placeholder="Состояние"
          style={{
            width: "100%",
            border: !condition ? "1px solid orange" : undefined,
          }}
          onChange={setCondition}
          options={[
            { value: "Новое", label: "Новое" },
            { value: "Б/у", label: "Б/у" },
          ]}
        />
      </div>

      {/* DESCRIPTION */}
      <h3 style={{ marginTop: 30 }}>Описание</h3>

      <TextArea
        rows={5}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <Button
        style={{ marginTop: 10 }}
        onClick={improveText}
      >
        ✨ Улучшить описание
      </Button>

      {/* ACTIONS */}
      <div style={{ marginTop: 20, display: "flex", gap: 10 }}>
        <Button type="primary">Сохранить</Button>
        <Button onClick={() => navigate(-1)}>Отменить</Button>
      </div>
    </div>
  );
};