import { redirect } from "next/navigation";

export default async function LegacySurahRedirect({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolved = await params;
  redirect(`/quran/${resolved.id}`);
}