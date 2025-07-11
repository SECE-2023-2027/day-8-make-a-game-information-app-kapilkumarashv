"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function MainPage() {
  const router = useRouter();

  useEffect(() => {
    const keys = Object.keys(localStorage);
    const loggedIn = keys.some(key => key.startsWith("user_") && localStorage.getItem(key));
    if (!loggedIn) {
      router.push("/");
    }
  }, [router]);

  return (
    <div>
      <h1>LGDB Replication by kapil</h1>
      <p>Find all games here!</p>
      <img src="https://marketplace.canva.com/EAFdImifr6Y/1/0/1600w/canva-green-white-creative-online-food-delivery-medium-banner-4S-4SdjHyVg.jpg" alt="banner" style={{ width: "100%", borderRadius: "8px" }} />
    </div>
  );
}
