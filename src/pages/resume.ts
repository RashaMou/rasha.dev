import type { APIRoute } from "astro";
import * as fs from "fs";
import * as path from "path";

export const GET: APIRoute = async () => {
  const filePath = path.resolve("./public/RashaMoumneh2024.pdf");
  const file = await fs.promises.readFile(filePath);

  return new Response(file, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'inline; filename="Rasha_Moumneh_Resume_2024.pdf"',
    },
  });
};
