// === TOGGLE CONTENT ===
// Get button and content elements
const btnProduksi = document.getElementById("btnProduksi");
const btnKesesuaian = document.getElementById("btnPeta");
const btnLayOut = document.getElementById("btnLayOut");
const btnKontur = document.getElementById("btnKontur");
const btnProfil = document.getElementById("btnProfil");

// Get content sections
const contentProduksi = document.getElementById("contentProduksi");
const contentKesesuaian = document.getElementById("contentKesesuaian");
const contentLayOut = document.getElementById("contentLayOut");
const contentKontur = document.getElementById("contentKontur");
const contentProfil = document.getElementById("contentProfil");

btnProduksi.addEventListener("click", () => {
  contentProduksi.classList.remove("d-none");
  contentProfil.classList.add("d-none");
  contentKesesuaian.classList.add("d-none");
  contentLayOut.classList.add("d-none");
  contentKontur.classList.add("d-none");
  btnProduksi.classList.add("active");
  btnKesesuaian.classList.remove("active");
  btnLayOut.classList.remove("active");
  btnKontur.classList.remove("active");
  btnProfil.classList.remove("active");
});

btnProfil.addEventListener("click", () => {
  contentProfil.classList.remove("d-none");
  contentProduksi.classList.add("d-none");
  contentKesesuaian.classList.add("d-none");
  contentLayOut.classList.add("d-none");
  contentKontur.classList.add("d-none");
  btnProfil.classList.add("active");
  btnKesesuaian.classList.remove("active");
  btnLayOut.classList.remove("active");
  btnKontur.classList.remove("active");
  btnProduksi.classList.remove("active");
});


btnLayOut.addEventListener("click", () => {
  contentLayOut.classList.remove("d-none");
  contentProfil.classList.add("d-none");
  contentKesesuaian.classList.add("d-none");
  contentProduksi.classList.add("d-none");
  contentKontur.classList.add("d-none");
  btnLayOut.classList.add("active");
  btnKesesuaian.classList.remove("active");
  btnProduksi.classList.remove("active");
  btnKontur.classList.remove("active");
  btnProfil.classList.remove("active");
});

btnKontur.addEventListener("click", () => {
  contentKontur.classList.remove("d-none");
  contentProfil.classList.add("d-none");
  contentKesesuaian.classList.add("d-none");
  contentProduksi.classList.add("d-none");
  contentLayOut.classList.add("d-none");
  btnKontur.classList.add("active");
  btnKesesuaian.classList.remove("active");
  btnProduksi.classList.remove("active");
  btnLayOut.classList.remove("active");
  btnProfil.classList.remove("active");
});

btnKesesuaian.addEventListener("click", () => {
  contentKesesuaian.classList.remove("d-none");
  contentProfil.classList.add("d-none");
  contentKontur.classList.add("d-none");
  contentProduksi.classList.add("d-none");
  contentLayOut.classList.add("d-none");
  btnKesesuaian.classList.add("active");
  btnKontur.classList.remove("active");
  btnProduksi.classList.remove("active");
  btnLayOut.classList.remove("active");
  btnProfil.classList.remove("active");
});

// === DATA PRODUKSI ===

// Data total tahunan
const dataProduksi = {
  total: {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt"],
    datasets: [{
      label: 'Produksi Hijauan (ton) Tahun 2025',
      data: [19, 17.1, 18.2, 13.1, 12.7, 9, 18.4, 13.4, 14, 6],
      backgroundColor: '#19875499',
      borderColor: '#198754',
      borderWidth: 1
    }]
  }
};

// Data produksi per blok tiap bulan
const dataPerBlokBulanan = {
  Jan: [0, 5, 2, 3, 0, 0, 0, 0, 0, 0, 1.5, 0, 0],
  Feb: [0, 9.9, 16.2, 10.7, 0, 0, 0, 0, 0, 0, 15.4, 0, 0],
  Mar: [0, 11.3, 17.1, 12.0, 0, 10.7, 18.0, 13.5, 0, 0, 17.6, 0, 0],
  Apr: [0, 10.4, 18.3, 13.2, 0, 9.8, 16.9, 12.8, 0, 0, 18.4, 0, 0],
  Mei: [0, 11.1, 19.0, 12.7, 0, 10.5, 17.2, 13.0, 0, 0, 19.1, 0, 0],
  Jun: [0, 10.9, 17.5, 11.5, 0, 9.7, 16.3, 11.8, 0, 0, 17.8, 0, 0],
  Jul: [0, 11.3, 18.1, 12.0, 0, 10.6, 17.6, 12.5, 0, 0, 18.2, 0, 0],
  Agu: [0, 10.7, 17.8, 11.6, 0, 9.9, 16.7, 11.9, 0, 0, 17.9, 0, 0],
  Sep: [0, 11.0, 18.3, 12.2, 0, 10.2, 17.1, 12.3, 0, 0, 18.5, 0, 0],
  Okt: [0, 11.4, 18.7, 12.5, 0, 10.8, 17.5, 12.6, 0, 0, 18.9, 0, 0]
};

// Data produksi per komoditas tiap bulan
const dataPerKomoditasBulanan = {
  Jan: [18.2, 9.5, 6.8, 12.1],
  Feb: [17.0, 10.3, 7.2, 11.4],
  Mar: [19.4, 9.8, 6.5, 13.3],
  Apr: [20.2, 10.5, 6.9, 12.6],
  Mei: [21.0, 11.0, 7.4, 13.0],
  Jun: [19.6, 10.2, 6.8, 11.9],
  Jul: [20.5, 10.8, 7.1, 12.4],
  Agu: [19.8, 10.1, 6.7, 11.8],
  Sep: [20.3, 10.4, 7.0, 12.2],
  Okt: [21.1, 10.9, 7.3, 12.5]
};

// === SETUP CHART PRODUKSI ===
const ctx = document.getElementById("chartProduksi").getContext("2d");
let chartProduksi = new Chart(ctx, {
  type: "bar",
  data: dataProduksi.total,
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: "Ton" }
      }
    }
  }
});

// === TOGGLE PRODUKSI + DROPDOWN BULAN ===
const toggleContainer = document.createElement("div");
toggleContainer.classList.add("d-flex", "align-items-center", "gap-2", "mb-3", "flex-wrap");
toggleContainer.innerHTML = `
  <div class="btn-group" role="group">
    <button class="btn btn-outline-success active" id="toggleTotal">Total</button>
    <button class="btn btn-outline-success" id="toggleBlok">Per Blok</button>
    <button class="btn btn-outline-success" id="toggleKomoditas">Per Komoditas</button>
  </div>
  <select id="selectBulan" class="form-select w-auto d-none">
    <option value="Jan">Januari</option>
    <option value="Feb">Februari</option>
    <option value="Mar">Maret</option>
    <option value="Apr">April</option>
    <option value="Mei">Mei</option>
    <option value="Jun">Juni</option>
    <option value="Jul">Juli</option>
    <option value="Agu">Agustus</option>
    <option value="Sep">September</option>
    <option value="Okt">Oktober</option>
  </select>
`;
document.querySelector("#contentProduksi").prepend(toggleContainer);

const btnTotal = document.getElementById("toggleTotal");
const btnBlok = document.getElementById("toggleBlok");
const btnKomoditas = document.getElementById("toggleKomoditas");
const selectBulan = document.getElementById("selectBulan");

// === FUNCTION UNTUK UPDATE CHART ===
function updateChart(type, bulan = "Jan") {
  chartProduksi.destroy();
  let newData;

  if (type === "blok") {
    newData = {
      labels: ["Blok A", "Blok B", "Blok C", "Blok D", "Blok E", "Blok F", "Blok G", "Blok H",
         "Blok I", "Blok J", "Blok K", "Blok L", "Blok M"],
      datasets: [{
        label: `Produksi (ton) per Blok (${bulan})`,
        data: dataPerBlokBulanan[bulan],
        backgroundColor: "#4caf5099",
        borderColor: "#4caf50",
        borderWidth: 1
      }]
    };
    selectBulan.classList.remove("d-none");
  } else if (type === "komoditas") {
    newData = {
      labels: ["Rumput Gajah", "Rumput Mulato", "Jagung"],
      datasets: [{
        label: `Produksi (ton) per Komoditas (${bulan})`,
        data: dataPerKomoditasBulanan[bulan],
        backgroundColor: "#81c78499",
        borderColor: "#388e3c",
        borderWidth: 1
      }]
    };
    selectBulan.classList.remove("d-none");
  } else {
    newData = dataProduksi.total;
    selectBulan.classList.add("d-none");
  }

  chartProduksi = new Chart(ctx, {
    type: "bar",
    data: newData,
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          title: { display: true, text: "Ton" }
        }
      }
    }
  });
}

// === EVENT LISTENER UNTUK TOGGLE & DROPDOWN ===
btnTotal.addEventListener("click", () => {
  updateChart("total");
  btnTotal.classList.add("active");
  btnBlok.classList.remove("active");
  btnKomoditas.classList.remove("active");
});

btnBlok.addEventListener("click", () => {
  updateChart("blok", selectBulan.value);
  btnBlok.classList.add("active");
  btnTotal.classList.remove("active");
  btnKomoditas.classList.remove("active");
});

btnKomoditas.addEventListener("click", () => {
  updateChart("komoditas", selectBulan.value);
  btnKomoditas.classList.add("active");
  btnTotal.classList.remove("active");
  btnBlok.classList.remove("active");
});

selectBulan.addEventListener("change", () => {
  if (btnBlok.classList.contains("active")) {
    updateChart("blok", selectBulan.value);
  } else if (btnKomoditas.classList.contains("active")) {
    updateChart("komoditas", selectBulan.value);
  }
});
