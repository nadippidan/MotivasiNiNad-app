// ================== MOTIVASI RANDOM ==================

const btn = document.getElementById("btn");
const motivasiText = document.getElementById("motivasiText");

const motivasiList = [
  "Jangan menunda tugas, karena waktu tidak bisa diulang ⏳",
  "Ujian memang sulit, tapi kamu lebih kuat 💪",
  "Nilai bukan segalanya, usaha itu yang utama 🌟",
  "Belajar hari ini, sukses di masa depan 🚀",
  "Kerjakan tugas sedikit demi sedikit 📚",
  "Jangan takut bertanya saat tidak paham ✨",
  "Fokus sekarang, bangga nanti 🎓",
  "Disiplin adalah kunci keberhasilan 🔑",
  "Semangat sekolah hari ini! 🔥",
  "Kamu lebih hebat dari yang kamu kira 💙",
  "Belajar bukan beban, tapi investasi masa depan 💼",
  "Jangan menyerah hanya karena satu nilai jelek 📖",
  "Tugas selesai = pikiran tenang 😌",
  "Ujian hanya sementara, ilmu selamanya 🧠",
  "Rajin sekarang, santai kemudian 😉",
  "Kamu pasti bisa melewati semester ini 💯",
  "Sedikit demi sedikit, lama-lama jadi pintar 📘",
  "Bangun mimpi dari bangku sekolah 🎯",
  "Kerja keras tidak pernah mengkhianati hasil 🏆",
  "Hari ini belajar, besok jadi juara 🥇"
];

btn.addEventListener("click", function() {
  const random = Math.floor(Math.random() * motivasiList.length);
  motivasiText.innerText = motivasiList[random];
});

// ================== RUANG CURHAT ==================

const curhatBtn = document.getElementById("curhatBtn");
const curhatInput = document.getElementById("curhatInput");
const responseText = document.getElementById("responseText");

curhatBtn.addEventListener("click", function() {

  let text = curhatInput.value.toLowerCase();
  let response = "";

  if (text.includes("capek")) {
    response = "Kamu boleh capek, tapi jangan menyerah ya 💪 Istirahat sebentar lalu lanjut lagi!";
  }
  else if (text.includes("ujian")) {
    response = "Ujian memang menegangkan, tapi kamu sudah berusaha. Percaya diri ya ✨";
  }
  else if (text.includes("nilai")) {
    response = "Nilai bukan akhir segalanya. Terus belajar dan berkembang 📚";
  }
  else if (text.includes("malas")) {
    response = "Rasa malas itu wajar. Coba mulai 10 menit dulu ya 🔥";
  }
  else if (text.includes("tugas")) {
    response = "Kerjakan sedikit demi sedikit supaya tidak menumpuk 😉";
  }
  else {

    const defaultResponses = [
      "Terima kasih sudah berbagi 💙 Kamu kuat kok!",
      "Apa pun yang kamu hadapi, kamu tidak sendirian 🌟",
      "Tetap semangat ya! Kamu pasti bisa 💪",
      "Percaya diri, kamu lebih hebat dari yang kamu kira ✨",
      "Hari ini mungkin berat, tapi kamu lebih kuat 🚀"
    ];

    response = defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  }

  responseText.innerText = response;
});
