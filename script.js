const API_URL = "https://6a2862e94e1e783349a57736.mockapi.io/kodekost";

fetch(API_URL)
  .then(response => response.json())
  .then(data => {

    const container = document.getElementById("list-kost");
    container.innerHTML = "";

    data.forEach(kost => {

      // hanya tampilkan data yang punya atribut nama
      if (!kost.nama) return;

      container.innerHTML += `
        <div class="card">
          <h2>${kost.nama}</h2>
          <p class="harga">Rp ${kost.harga}</p>
          <p>📍 ${kost.lokasi}</p>
          <p>${kost.deskripsi}</p>
          <p>⭐ ${kost.rating}</p>
        </div>
      `;
    });

  })
  .catch(error => {
    console.log(error);
  });