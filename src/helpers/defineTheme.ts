function defineTheme() {
  const hour = new Date().getHours();
  if (hour >= 20 || hour < 8) return 'dark';
  return 'light';
}

export default defineTheme;