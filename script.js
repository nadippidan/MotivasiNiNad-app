const quotes = [
  "Tugas memang banyak, tapi kamu lebih kuat dari itu.",
  "Ujian hanyalah langkah kecil menuju impian besar.",
  "PR hari ini adalah nilai bagus besok.",
  "Belajar sekarang, tenang saat ujian nanti.",
  "Nilai bagus dimulai dari usaha yang konsisten.",
  "Jangan tunda tugas, waktu tidak menunggu.",
  "Satu halaman materi hari ini lebih baik daripada tidak sama sekali.",
  "Kerjakan sedikit demi sedikit, jangan tunggu menumpuk.",
  "Belajar bukan tentang pintar, tapi tentang tekun.",
  "Ujian bukan untuk ditakuti, tapi untuk ditaklukkan.",
  "Fokus 30 menit sekarang lebih baik daripada panik semalaman.",
  "Disiplin belajar hari ini, bangga lihat rapor nanti.",
  "Kamu mungkin lelah, tapi cita-citamu tidak pernah lelah menunggumu.",
  "Nilai bukan segalanya, tapi usaha adalah segalanya.",
  "Jangan menyerah hanya karena soal terlihat sulit.",
  "Semester boleh berat, tapi tekadmu harus lebih kuat.",
  "Kerjakan tugas sebelum tugas mengerjakan kamu.",
  "Belajar pelan tidak apa-apa, asal jangan berhenti.",
  "Rasa malas hanya sementara, hasil kerja keras selamanya.",
  "Setiap latihan soal membuatmu lebih siap."
];

const colors = [
  "linear-gradient(135deg, #667eea, #764ba2)",
  "linear-gradient(135deg, #ff6ec4, #7873f5)",
  "linear-gradient(135deg, #43cea2, #185a9d)",
  "linear-gradient(135deg, #f7971e, #ffd200)",
  "linear-gradient(135deg, #00c6ff, #0072ff)",
  "linear-gradient(135deg, #ff9a9e, #fad0c4)",
  "linear-gradient(135deg, #a18cd1, #fbc2eb)",
  "linear-gradient(135deg, #ff9966, #ff5e62)"
];

const button = document.getElementById("btn");
const quoteText = document.getElementById("quote");

button.addEventListener("click", function() {

  quoteText.style.opacity = 0;

  setTimeout(() => {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    let randomColor = Math.floor(Math.random() * colors.length);

    quoteText.innerText = quotes[randomIndex];
    document.body.style.background = colors[randomColor];

    quoteText.style.opacity = 1;
  }, 300);

});
