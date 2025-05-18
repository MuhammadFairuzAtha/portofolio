const textData = [
  { text: "Portofolio-MuhammadFairuzA", delay: 1000 },
  { text: "Sudah", delay: 120 },
  { text: "Terbiasa", delay: 120 },
  { text: "Terjadi", delay: 150 },
  { text: "Tanteeee", delay: 1000 },
  { text: "Teman", delay: 350 },
  { text: "Datang", delay: 400 },
  { text: "Ketika lagi", delay: 700 },
  { text: "Butuh saja", delay: 1000 },
  { text: "Coba kalau lagi susah", delay: 2000 },
  { text: "Mereka semua menghilang", delay: 2500 },
  { text: "Tanteeeee", delay: 6500 },
];

let currentIndex = 0;

function changeTitle() {
  // Set title dengan teks saat ini
  document.title = textData[currentIndex].text;
  
  // Dapatkan delay untuk teks saat ini
  const currentDelay = textData[currentIndex].delay;
  
  // Pindah ke teks berikutnya (dengan loop ke awal jika sudah di akhir)
  currentIndex = (currentIndex + 1) % textData.length;
  
  // Set timeout untuk perubahan berikutnya dengan delay yang sesuai
  setTimeout(changeTitle, currentDelay);
}

// Mulai proses
changeTitle();