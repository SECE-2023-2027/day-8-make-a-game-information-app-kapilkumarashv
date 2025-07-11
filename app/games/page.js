/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { gameItems } from "../data/gameData";

export default function GamesPage() {
  const [games, setGames] = useState([]);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      setGames(gameItems.filter((g) => g.cat.toLowerCase() === category.toLowerCase()));
    } else {
      setGames(gameItems);
    }
  }, [searchParams]);

  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Available Games</h1>
      <div
        className="game-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px"
        }}
      >
        {games.map((game) => (
          <div
            key={game.id}
            className="game-card"
            onClick={() => router.push(`/games/${game.id}`)}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
              cursor: "pointer",
              background: "#f8f8f8",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)"
            }}
          >
            <img
              src={game.img}
              alt={game.name}
              style={{
                width: "100%",
                height: "160px",
                objectFit: "cover",
                borderRadius: "6px"
              }}
            />
            <div className="info" style={{ marginTop: "10px" }}>
              <h3 style={{ fontSize: "1.2rem", margin: "0 0 5px" }}>{game.name}</h3>
              <p style={{ margin: "0 0 5px", color: "#555" }}>{game.desc}</p>
              <p style={{ margin: "0", fontWeight: "bold" }}>{game.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
