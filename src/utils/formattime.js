export const formatWaktuRelative = (tanggal) => {
  const now = new Date();
  const then = new Date(tanggal);
  const diff = (now.getTime() - then.getTime()) / 1000; // dalam detik

  const units = [
    { max: 60, value: 1, name: "detik" },
    { max: 3600, value: 60, name: "menit" },
    { max: 86400, value: 3600, name: "jam" },
    { max: 604800, value: 86400, name: "hari" },
    { max: 2592000, value: 604800, name: "minggu" },
    { max: 31536000, value: 2592000, name: "bulan" },
    { max: Infinity, value: 31536000, name: "tahun" },
  ];

  for (const unit of units) {
    if (diff < unit.max) {
      const amount = Math.floor(diff / unit.value);
      return `${amount} ${unit.name} yang lalu`;
    }
  }

  return "Baru saja";
};
