import { permanentRedirect } from "next/navigation";

export default async function LegacySurahRedirect({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolved = await params;
  const num = parseInt(resolved.id, 10);
  if (isNaN(num) || num < 1 || num > 114) {
    permanentRedirect("/quran");
  }
  permanentRedirect(`/quran/${num}`);
}