"use client";

export default function StravaWidget() {
  return (
    <div className="flex justify-center py-8">
      <iframe
        height="454"
        width="300"
        style={{ border: "none" }}
        loading="lazy"
        src="https://www.strava.com/athletes/133590098/latest-rides/e06d9350b08f0b10ba19ce41ba54d4bf45f66a06"
        className="rounded-lg shadow-lg"
        title="Strava Latest Rides"
      />
    </div>
  );
}
