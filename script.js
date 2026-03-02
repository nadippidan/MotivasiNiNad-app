const quotes = [
  "Tugas memang banyak, tapi kamu lebih kuat dari itu.",
  "Ujian hanyalah langkah kecil menuju impian besar.",
  "PR hari ini adalah nilai bagus besok.",
  "Belajar sekarang, tenang saat ujian nanti.",
  "Nilai bagus dimulai dari usaha yang konsisten.",
  "Jangan tunda tugas, waktu tidak menunggu.",
  "Kerjakan sedikit demi sedikit, jangan tunggu menumpuk.",
  "Belajar bukan tentang pintar, tapi tentang tekun.",
  "Ujian bukan untuk ditakuti, tapi untuk ditaklukkan.",
  "Disiplin belajar hari ini, bangga lihat rapor nanti.",
  "Semester boleh berat, tapi tekadmu harus lebih kuat.",
  "Rasa malas hanya sementara, hasil kerja keras selamanya."
];

const button = document.getElementById("btn");
const quoteText = document.getElementById("quote");
const counter = document.getElementById("count");

let totalKlik = 0;

button.addEventListener("click", function() {

  quoteText.style.opacity = 0;

  setTimeout(() => {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.innerText = quotes[randomIndex];
    quoteText.style.opacity = 1;
  }, 300);

  totalKlik++;
  counter.innerText = totalKlik;
});
