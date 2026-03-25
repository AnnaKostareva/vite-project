import { Card } from "antd";
import { useNavigate } from "react-router-dom";
import { Input, Select } from "antd";
import { useState } from "react";
import { Checkbox, Button } from "antd";
import { TableRow } from "@material-ui/core";
import { Pagination } from "antd";
import { PictureOutlined } from "@ant-design/icons";



export const ListingsPage = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("new");
  const navigate = useNavigate();
  const [category, setCategory] = useState<string | null>(null);
  const [onlyProblems, setOnlyProblems] = useState(false);
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const filteredListings = listings
  .filter((item) => {
    // поиск
    if (
      search &&
      !item.title.toLowerCase().includes(search.toLowerCase())
    ) {
      return false;
    }

    // категория
    if (category && item.category !== category) {
      return false;
    }

    // только проблемные
    if (onlyProblems && !checkNeedsImprovement(item)) {
      return false;
    }

    return true;
  }
);
const sortedListings = [...filteredListings].sort((a, b) => {
  if (sort === "price_asc") {
    return a.price - b.price;
  }

  if (sort === "price_desc") {
    return b.price - a.price;
  }

  // по новизне (пока просто по id)
  return b.id - a.id;
});
  const paginatedListings = sortedListings.slice(
    (page - 1) * pageSize,
    page * pageSize
);

  return (
    <div style={{ display: "flex", gap: 20 }}>
    <div style={{  paddingTop: 0, padding:32 }}>
      <div style={{ marginBottom: 20 }}>
        <div style={{ paddingLeft:12 }}>
  <h1 style={{ fontSize: 28 }}>Мои объявления </h1><h2 style={{color: 'Gray', fontSize:20}}>{listings.length} объявлений</h2>
  </div>
  <div style={{ display: "flex", gap: 10, backgroundColor:"#FFFFFF"}}>
    <div style = {{paddingLeft:10,display: "flex", alignItems: "center", width: 1335, height:56,backgroundColor:"#FFFFFF"}}>
    <Input
      style={{ width: 1000, height:32, backgroundColor:"#F7F5F8" }}
      placeholder="Найти объявление..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
    
    <Select
      value={sort}
      onChange={setSort}
      style={{ width: 240 }}
      options={[
        { value: "new", label: "По новизне" },
        { value: "price_asc", label: "Цена ↑" },
        { value: "price_desc", label: "Цена ↓" },
      ]}
    />
    </div>
  </div>
</div>
<div style = {{display: "flex", gap: 24, width:1335}}>


<div
  style={{
    width: 260,
    padding: 16,
    background: "#fff",
    borderRadius: 8,
    height: "fit-content",
  }}
>
  <h3 style={{ marginBottom: 16 }}>Фильтры</h3>

  
  <div style={{ marginBottom: 20 }}>
    <p style={{ marginBottom: 8 }}>Категория</p>

    <div
      style={{
        display: "grid",
        gap: 8,
      }}
    >
      {["Электроника", "Авто", "Недвижимость"].map((cat) => (
        <Button
          key={cat}
          type={category === cat ? "primary" : "default"}
          onClick={() => setCategory(cat)}
          block
        >
          {cat}
        </Button>
      ))}
    </div>
  </div>

  
  <div style={{ marginBottom: 20 }}>
    <Checkbox
      checked={onlyProblems}
      onChange={(e) => setOnlyProblems(e.target.checked)}
    >
      Только требующие доработок
    </Checkbox>
  </div>

  
  <Button
    block
    onClick={() => {
      setCategory(null);
      setOnlyProblems(false);
    }}
  >
    Сбросить фильтры
  </Button>
</div>
      
      <div style={{ display: "grid",
         gridTemplateColumns:"repeat(5,1fr)",
         gap: 10,
         width:1055 }}>
        {paginatedListings.map((item) => (
          <Card
  key={item.id}
  onClick={() => navigate(`/listing/${item.id}`)}
  style={{
    width: "100%",
    
  }}
  bodyStyle={{ padding: 12 }}
>
  
    <div
      style={{
        width: "100%",
        height: 140,
        background: "#f5f5f5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
      }}
    >
      <PictureOutlined style={{ fontSize: 28, color: "#bbb" }} />
    </div>

    
    <p style={{ fontSize: 12, color: "#888", margin: 0 }}>
      {item.category}
    </p>

    
    <p style={{ fontWeight: 500, margin: "4px 0" }}>
      {item.title}
    </p>

    
    <p style={{ fontWeight: 600 }}>{item.price} ₽</p>

    
    {checkNeedsImprovement(item) && (
      <p style={{ color: "orange", fontSize: 12, backgroundColor:"#F9F1E6" }}>
        Требует доработок
      </p>
    )}
  </Card>
        ))}
      </div>
      
    </div>
    <div style={{ marginTop: 10, paddingLeft:300 }}>
  <Pagination
    current={page}
    pageSize={pageSize}
    total={sortedListings.length}
    onChange={(p) => setPage(p)}
  />
</div>
    </div>
    </div>
  );
}; 


const checkNeedsImprovement = (item: any) => {
  return (
    !item.title ||
    !item.price ||
    !item.description ||
    !item.color ||
    !item.condition
  );
};
const listings = [
  {
    id: 1,
    title: "MacBook Pro 16",
    price: 64000,
    category: "Электроника",
    description: "Продам",
    color: "Черный", 
    condition: "Новое",
    
  },
  {
    id: 2,
    title: "Volkswagen Polo",
    price: 1100000,
    category: "Авто",
    
  },
  {
    id: 3,
    title: "Студия 25м²",
    price: 15000000,
    category: "Недвижимость",
    
  },
  {
    id: 4,
    title: "1-кк, 44м2",
    price: 19000000,
    category: "Недвижимость",
    
  },
  {
    id: 5,
    title: "MAJOR VI",
    price: 20000,
    category: "Электроника",
    description: "Продам",
    color: "Черный", 
    condition: "Новое",
    
  },
  {
    id: 6,
    title: "MacBook Pro 16",
    price: 64000,
    category: "Электроника",
    
  },
  {
    id: 7,
    title: "Volkswagen Polo",
    price: 1100000,
    category: "Авто",
    
  },
  {
    id: 8,
    title: "Студия 25м²",
    price: 15000000,
    category: "Недвижимость",
    description: "Продам",
    color: "Черный", 
    condition: "Новое",
    
  },
  {
    id: 9,
    title: "1-кк, 44м2",
    price: 19000000,
    category: "Недвижимость",
    description: "Продам",
    color: "Черный", 
    condition: "Новое",
    
  },
  {
    id: 10,
    title: "MAJOR VI",
    price: 20000,
    category: "Электроника",
    description: "Продам",
    color: "Черный", 
    condition: "Новое",
    
  },
  {
    id: 11,
    title: "MacBook Pro 16",
    price: 64000,
    category: "Электроника",
    
  },
  {
    id: 12,
    title: "Volkswagen Polo",
    price: 1100000,
    category: "Авто",
    description: "Продам",
    color: "Черный", 
    condition: "Новое",
    
  },
  {
    id: 13,
    title: "Студия 25м²",
    price: 15000000,
    category: "Недвижимость",
    
  },
  {
    id: 14,
    title: "1-кк, 44м2",
    price: 19000000,
    category: "Недвижимость",
    description: "Продам",
    color: "Черный", 
    condition: "Новое",
    
  },
  {
    id: 15,
    title: "MAJOR VI",
    price: 20000,
    category: "Электроника",
    description: "Продам",
    color: "Черный", 
    condition: "Новое",
    
  },
  
  
];

