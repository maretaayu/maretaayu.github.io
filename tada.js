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

// Agenda data array
const agendaData = [
  {
    time: "09.00 - 09.30",
    value: "Registration, Guided networking session",
    category: "agenda",
    speakers: [
      {
        photo:
          "https://loyaltyrewards-conference.com/wp-content/uploads/2023/07/Photo-Speaker-2.png",
        name: "Antonius Taufan",
        position: "CEO & Managing Director Tada",
      },
      {
        photo:
          "https://loyaltyrewards-conference.com/wp-content/uploads/2023/07/Photo-Speaker-2.png",
        name: "Antonius Taufan",
        position: "CEO & Managing Director Tada",
      },
      {
        photo:
          "https://loyaltyrewards-conference.com/wp-content/uploads/2023/07/Photo-Speaker-2.png",
        name: "Antonius Taufan",
        position: "CEO & Managing Director Tada",
      },
      {
        photo:
          "https://loyaltyrewards-conference.com/wp-content/uploads/2023/07/Photo-Speaker-2.png",
        name: "Antonius Taufan",
        position: "CEO & Managing Director Tada",
      },
    ],
  },
  {
    time: "09.30 - 10.00",
    value: "Keynote Session",
    category: "agenda",
    speakers: [
      {
        photo:
          "https://loyaltyrewards-conference.com/wp-content/uploads/2023/07/Photo-Speaker-2.png",
        name: "John Doe",
        position: "CEO",
      },
    ],
  },
  {
    time: "10.00 - 10.30",
    value: "Executive Lunch",
    category: "break",
    speakers: [],
  },
  {
    time: "09.30 - 10.00",
    value: "Keynote Session",
    category: "agenda",
    speakers: [
      {
        photo:
          "https://loyaltyrewards-conference.com/wp-content/uploads/2023/07/Photo-Speaker-2.png",
        name: "John Doe",
        position: "CEO",
      },
    ],
  },
  {
    time: "10.00 - 10.30",
    value: "Coffee Break and Networking",
    category: "networking",
    speakers: [],
  },
];

// Generate the HTML markup using the agenda data
function generateAgendaMarkup() {
  const groupAgendaElement = document.querySelector(".group-agenda");
  for (const agendaItem of agendaData) {
    const boxAgendaElement = document.createElement("div");
    boxAgendaElement.classList.add("box-agenda", agendaItem.category);

    const timeElement = document.createElement("div");
    timeElement.classList.add("agenda-time");
    const timeText = document.createElement("p");
    timeText.classList.add(
      "paragraph-regular-16",
      getTextColorClass(agendaItem.category)
    );
    timeText.textContent = agendaItem.time;
    timeElement.appendChild(timeText);

    const valueElement = document.createElement("div");
    valueElement.classList.add(
      "agenda-value",
      getTextColorClass(agendaItem.category)
    );
    const valueTitleElement = document.createElement("div");
    valueTitleElement.classList.add("agenda-title");
    const valueTitleText = document.createElement("p");
    valueTitleText.classList.add("paragraph-bold-18");
    valueTitleText.textContent = agendaItem.value;
    valueTitleElement.appendChild(valueTitleText);
    valueElement.appendChild(valueTitleElement);

    if (agendaItem.speakers.length > 0) {
      const speakersElement = document.createElement("div");
      speakersElement.classList.add("agenda-speaker");
      const speakersText = document.createElement("p");
      speakersText.classList.add("paragraph-regular-14");
      speakersText.textContent = "Speakers";
      speakersElement.appendChild(speakersText);

      const speakerListElement = document.createElement("div");
      speakerListElement.classList.add("agenda-speaker-list");

      for (const speaker of agendaItem.speakers) {
        const speakerItemElement = document.createElement("div");
        speakerItemElement.classList.add("agenda-speaker-item");

        const speakerPhotoElement = document.createElement("img");
        speakerPhotoElement.src = speaker.photo;
        speakerPhotoElement.alt = "Speaker";
        speakerItemElement.appendChild(speakerPhotoElement);

        const speakerDetailElement = document.createElement("div");
        speakerDetailElement.classList.add("agenda-speaker-detail");

        const speakerNameElement = document.createElement("p");
        speakerNameElement.classList.add("paragraph-bold-16");
        speakerNameElement.textContent = speaker.name;
        speakerDetailElement.appendChild(speakerNameElement);

        const speakerPositionElement = document.createElement("p");
        speakerPositionElement.classList.add("paragraph-regular-14");
        speakerPositionElement.textContent = speaker.position;
        speakerDetailElement.appendChild(speakerPositionElement);

        speakerItemElement.appendChild(speakerDetailElement);
        speakerListElement.appendChild(speakerItemElement);
      }

      speakersElement.appendChild(speakerListElement);
      valueElement.appendChild(speakersElement);
    }

    boxAgendaElement.appendChild(timeElement);
    boxAgendaElement.appendChild(valueElement);
    groupAgendaElement.appendChild(boxAgendaElement);
  }
}

// Function to get the text color class based on the category
function getTextColorClass(category) {
  if (category === "networking") {
    return "text-invert";
  } else {
    return "text-ink";
  }
}

// Call the function to generate the agenda markup and apply styling on page load
window.onload = function () {
  generateAgendaMarkup();
};
