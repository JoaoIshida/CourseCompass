// Landing
"use client";
import TimedCarousel from "@/components/TimedCarousel";
import Link from "next/link";

export default function Home() {
  return (
    <main style={{ overflowY: 'hidden', overflowX: 'hidden' }}>
      {/* <h1>Welcome</h1>
    <Link href="/CoursesPage">courses</Link> */}
      <TimedCarousel />
    </main>
  );
}
