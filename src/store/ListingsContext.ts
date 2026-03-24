import { createContext, useContext, useState } from "react";

type Listing = {
  id: number;
  title: string;
  price: number;
  category: string;
  createdAt: string;
  description?: string;
  image?: string | null;
  type?: string;
  brand?: string;
  model?: string;
  color?: string;
  condition?: string;
};

type ContextType = {
  listings: Listing[];
  updateListing: (id: number, data: Partial<Listing>) => void;
};

const ListingsContext = createContext<ContextType | null>(null);

export const ListingsProvider = ({ children }: any) => {
  const [listings, setListings] = useState<Listing[]>([
    {
      id: 1,
      title: "MacBook Pro 16”",
      price: 64000,
      category: "Электроника",
      createdAt: "2024-03-20",
    },
    {
      id: 2,
      title: "iPhone 15",
      price: 90000,
      category: "Электроника",
      createdAt: "2024-03-18",
    },
    {
      id: 3,
      title: "BMW X5",
      price: 3500000,
      category: "Авто",
      createdAt: "2024-03-10",
    },
    {
      id: 4,
      title: "Квартира",
      price: 12000000,
      category: "Недвижимость",
      createdAt: "2024-02-01",
    },
    {
      id: 5,
      title: "PlayStation 5",
      price: 50000,
      category: "Электроника",
      createdAt: "2024-03-05",
    },
    {
      id: 6,
      title: "Toyota Camry",
      price: 2500000,
      category: "Авто",
      createdAt: "2024-01-12",
    },
    {
      id: 7,
      title: "Наушники Sony",
      price: 15000,
      category: "Электроника",
      createdAt: "2024-03-02",
    },
    {
      id: 8,
      title: "Дом",
      price: 8000000,
      category: "Недвижимость",
      createdAt: "2024-02-20",
    },
    {
      id: 9,
      title: "Samsung TV",
      price: 70000,
      category: "Электроника",
      createdAt: "2024-03-11",
    },
    {
      id: 10,
      title: "Audi A6",
      price: 2800000,
      category: "Авто",
      createdAt: "2024-03-15",
    },
  ]);
}

  const updateListing = (id: number, data: Partial<Listing>) => {
    setListings((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, ...data } : item
      )
    );
  };

  

export const useListings = () => {
  const ctx = useContext(ListingsContext);
  if (!ctx) throw new Error("Нет провайдера");
  return ctx;
};
