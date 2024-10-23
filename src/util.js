export function formatName(name) {
  if (name.includes('_')) {
    return name.replaceAll('_', ' ');
  }
  return name.replaceAll(' ', '_');
}
