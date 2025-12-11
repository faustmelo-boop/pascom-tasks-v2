export function formatName(full) {
  if (!full) return "";
  const p = full.trim().split(" ");
  if (p.length <= 2) return full;
  return `${p[0]} ${p[1]}`;
}
