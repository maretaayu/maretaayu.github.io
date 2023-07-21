let images1 = [
  "https://www.usetada.com/wp-content/uploads/2023/07/Photo-2.png",
  "https://www.usetada.com/wp-content/uploads/2023/07/Photo-2.png",
  "https://www.usetada.com/wp-content/uploads/2023/07/Photo-2.png",
  "https://www.usetada.com/wp-content/uploads/2023/07/Photo-4.png",
  "https://www.usetada.com/wp-content/uploads/2023/07/Photo-5.png",
];
let images2 = [
  "https://www.usetada.com/wp-content/uploads/2023/07/Photo-5.png",
  "https://www.usetada.com/wp-content/uploads/2023/07/Photo-5.png",
  "https://www.usetada.com/wp-content/uploads/2023/07/Photo-4.png",
  "https://www.usetada.com/wp-content/uploads/2023/07/Photo-2.png",
  "https://www.usetada.com/wp-content/uploads/2023/07/Photo-2.png",
];

function changeImages() {
  for (let i = 1; i <= 5; i++) {
    let block = document.getElementById("block" + i);
    let bg = block.querySelector(".bg");

    if (
      !bg.style.backgroundImage ||
      bg.style.backgroundImage.includes(images1[i - 1])
    ) {
      bg.style.backgroundImage = "url(" + images2[i - 1] + ")";
    } else {
      bg.style.backgroundImage = "url(" + images1[i - 1] + ")";
    }
  }
}

setInterval(changeImages, 3500);

// countdown
const targetDate = new Date("September 14, 2023 09:00:00").getTime();

// Update countdown setiap detik
const countdownTimer = setInterval(function () {
  // Tanggal saat ini
  const now = new Date().getTime();

  // Hitung selisih antara sekarang dengan target
  const timeRemaining = targetDate - now;

  // Hitung hari, jam, menit, dan detik
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Tampilkan countdown
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  // Jika waktu sudah habis
  if (timeRemaining <= 0) {
    clearInterval(countdownTimer);
    document.getElementById("countdown").innerHTML =
      "Conference telah berakhir";
  }
}, 1000);

// slider participant
function endlessScroll(carouselID, speed) {
  let carousel = document.getElementById(carouselID);

  setInterval(() => {
    if (speed > 0) {
      if (carousel.scrollLeft < carousel.scrollWidth - carousel.clientWidth) {
        carousel.scrollLeft += speed;
      } else {
        carousel.scrollLeft = 0;
      }
    } else {
      if (carousel.scrollLeft > 0) {
        carousel.scrollLeft += speed; // speed is a negative value
      } else {
        carousel.scrollLeft = carousel.scrollWidth;
      }
    }
  }, 20);
}

endlessScroll("carousel1", 0.5); // carousel1 bergerak ke arah kanan
endlessScroll("carousel2", -0.5); // carousel2 bergerak ke arah kiri

// speakers
const speakers = [
  {
    img: "https://loyaltyrewards-conference.com/wp-content/uploads/2023/07/headshot-AT-no_back-2.png",
    name: "Shalini Gopalan",
    position: "Founder & CEO of LoyaltyHub",
  },
  {
    img: "https://loyaltyrewards-conference.com/wp-content/uploads/2023/07/HPW2-1.png",
    name: "Hans Prawira    ",
    position: "CEO of Alfamart",
  },
  {
    img: "https://www.usetada.com/wp-content/uploads/2023/07/Photo-2.png",
    name: "Hilda Kitti",
    position: "VP Marketing Tokopedia",
  },
  {
    img: "https://loyaltyrewards-conference.com/wp-content/uploads/2023/07/headshot-AT-no_back-1.png",
    name: "Antonius Taufan",
    position: "CEO & Managing Director Tada",
  },
  {
    img: "https://www.usetada.com/wp-content/uploads/2023/07/Photo-2.png",
    name: "Hilda Kitti",
    position: "VP Marketing Tokopedia",
  },
  {
    img: "https://www.usetada.com/wp-content/uploads/2023/07/Photo-2.png",
    name: "Hilda Kitti",
    position: "VP Marketing Tokopedia",
  },
  {
    img: "https://loyaltyrewards-conference.com/wp-content/uploads/2023/07/headshot-AT-no_back-4-1.png",
    name: "Yongki Susilo    ",
    position: "Retail and Consumer Strategist ",
  },
  {
    img: "https://loyaltyrewards-conference.com/wp-content/uploads/2023/07/headshot-AT-no_back-3-1.png",
    name: "Adrian Baskoro",
    position: "Route to Market.id",
  },
];

const speakersDiv = document.getElementById("speakerGrid");

speakers.forEach((speaker) => {
  const speakerDiv = document.createElement("div");
  speakerDiv.className = "speaker";
  speakerDiv.innerHTML = `
        <img src="${speaker.img}" alt="${speaker.name}">
        <h3>${speaker.name}</h3>
        <p>${speaker.position}</p>
    `;
  speakersDiv.appendChild(speakerDiv);
});
