"use client";
import { useRouter } from "next/navigation";

export default function CategoriesPage() {
  const router = useRouter();
  const categories = [
    "Action",
    "Adventure",
    "Puzzle",
    "Racing",
    "Sports",
    "Multiplayer",
    "RPG",
  ];

  return (
    <div>
      <h1>Game Categories</h1>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>
            <button onClick={() => router.push(`/games?category=${cat}`)}>
              {cat}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
