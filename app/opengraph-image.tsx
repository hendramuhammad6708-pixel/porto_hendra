import { ImageResponse } from "next/og";
import { profile } from "@/data/portfolio";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%", display: "flex", flexDirection: "column",
          justifyContent: "space-between", padding: 72, background: "#0a0e1f", color: "#eef1fc",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#8b93ff" }}>Portofolio · Politeknik Negeri Padang</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 800, lineHeight: 1.05 }}>{profile.name}</div>
          <div style={{ fontSize: 38, color: "#8b93ff", marginTop: 16 }}>{profile.role}</div>
          <div style={{ fontSize: 28, color: "#a7b1d3", marginTop: 28, maxWidth: 940 }}>{profile.tagline}</div>
        </div>
      </div>
    ),
    size,
  );
}
