/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { gameItems } from "../../data/gameData";
 // ✅ Adjust if your path is different
import { notFound } from "next/navigation";

export default function GameDetails({ params }) {
  const router = useRouter();
  const [game, setGame] = useState(null);

  useEffect(() => {
    const foundGame = gameItems.find((g) => g.id === params.id);
    if (foundGame) {
      setGame(foundGame);
    } else {
      notFound(); // show 404 if not found
    }
  }, [params.id]);

  if (!game) return <p>Loading game details...</p>;

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "auto" }}>
      <button
        onClick={() => router.back()}
        style={{
          marginBottom: "20px",
          padding: "6px 12px",
          cursor: "pointer",
          borderRadius: "5px",
          border: "1px solid #ccc",
          backgroundColor: "#eee"
        }}
      >
        ← Back
      </button>

      <h1>{game.name}</h1>
      <img
        src={game.img}
        alt={game.name}
        style={{
          width: "100%",
          height: "auto",
          maxHeight: "400px",
          objectFit: "cover",
          borderRadius: "10px",
          marginBottom: "20px"
        }}
      />

      <p>
        <strong>Category:</strong> {game.cat}
      </p>
      <p>
        <strong>Description:</strong> {game.desc}
      </p>
      <p>
        <strong>Price:</strong> {game.price}
      </p>

      <div style={{ marginTop: "30px" }}>
        <h2>Trailer</h2>
        <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", borderRadius: "10px" }}>
          <iframe
            src={game.trailer}
            title={`${game.name} Trailer`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%"
            }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}
