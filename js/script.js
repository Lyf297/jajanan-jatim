const modal = document.getElementById("modal");
const closeModalBtn = modal.querySelector(".close");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const modalDaerah = document.getElementById("modal-daerah");
const modalResep = document.getElementById("modal-resep");
const modalCara = document.getElementById("modal-cara");

const container = document.getElementById("cardScroll");
const judul = document.getElementById("judul-daerah");
const btnLeft = document.getElementById("left");
const btnRight = document.getElementById("right");

function bukaModal(item) {
  modalImg.src = item.gambar;
  modalImg.alt = item.nama;
  modalTitle.textContent = item.nama;
  modalDesc.textContent = item.deskripsi || "Deskripsi belum tersedia.";
  modalDaerah.textContent = "Asal: " + item.daerah;

  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  lastFocusedElement = document.activeElement;
  closeModalBtn.focus();

modalResep.innerHTML = "";
modalCara.innerHTML = "";

if (item.resep && item.resep.length > 0) {
  item.resep.forEach(bahan => {
    const li = document.createElement("li");
    li.textContent = bahan;
    modalResep.appendChild(li);
  });
}

if (item.cara && item.cara.length > 0) {
  item.cara.forEach(step => {
    const li = document.createElement("li");
    li.textContent = step;
    modalCara.appendChild(li);
  });
}

}


function tutupModal() {
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  if (lastFocusedElement) lastFocusedElement.focus();
}

modalImg.onerror = function() {
  modalImg.src = "img/placeholder.jpg";
  modalImg.alt = "Gambar tidak tersedia";
};


closeModalBtn.addEventListener("click", tutupModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) tutupModal();
});

document.addEventListener("keydown", (e) => {
  if (modal.getAttribute("aria-hidden") === "false" && e.key === "Escape") {
    tutupModal();
  }
});

let lastFocusedElement = null;

function tampilkanJajanan(daerah) {
  judul.textContent = "Jajanan dari " + daerah;
  container.innerHTML = "";

  const hasil = jajanan.filter(item => item.daerah === daerah);

  if (hasil.length === 0) {
    container.innerHTML = "<p>Tidak ada data untuk daerah ini.</p>";
    return;
  }

  hasil.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.tabIndex = 0; 
    card.innerHTML = `
      <img src="${item.gambar}" alt="${item.nama}" loading="lazy" onerror="this.src='img/placeholder.jpg'; this.alt='Gambar tidak tersedia'">
      <p>${item.nama}</p>
    `;

    card.addEventListener("click", () => bukaModal(item));

    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        bukaModal(item);
      }
    });

    container.appendChild(card);
  });
}

// Scroll kiri-kanan
btnLeft.addEventListener("click", () => {
  container.scrollBy({ left: -250, behavior: "smooth" });
});
btnRight.addEventListener("click", () => {
  container.scrollBy({ left: 250, behavior: "smooth" });
});
