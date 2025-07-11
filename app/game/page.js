"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { gameItems } from "../data/gameData";

export default function GamesPage() {
  const [games, setGames] = useState([]);
  const router = useRouter();

  useEffect(() => {
    setGames(gameItems);
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Available Games</h1>
      {games.map((item) => (
        <div
          key={item.id}
          onClick={() => router.push(`/games/${item.id}`)}
          style={{
            cursor: "pointer",
            marginBottom: "20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "10px",
            maxWidth: "300px"
          }}
        >
          <h3>{item.name}</h3>
          <p>{item.desc}</p>
          <p>{item.price}</p>
          <img
            src={item.img}
            alt={item.name}
            style={{ width: "100%", height: "180px", objectFit: "cover" }}
          />
        </div>
      ))}
    </div>
  );
}
