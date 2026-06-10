import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { BRAND } from "@/lib/constants";

export const alt = `${BRAND.name} | ${BRAND.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoPath = join(process.cwd(), "public", BRAND.logo.replace(/^\//, ""));
  const logoData = await readFile(logoPath);
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#082217",
        }}
      >
        <img src={logoSrc} width={240} height={240} alt="" />
        <div
          style={{
            marginTop: 36,
            fontSize: 52,
            fontWeight: 700,
            color: "#e0b421",
            letterSpacing: "0.06em",
          }}
        >
          {BRAND.name}
        </div>
        <div
          style={{
            marginTop: 14,
            fontSize: 22,
            color: "rgba(255,255,255,0.72)",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
          }}
        >
          {BRAND.tagline}
        </div>
      </div>
    ),
    { ...size },
  );
}
