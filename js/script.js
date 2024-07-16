const pria = document.querySelector("#pria");
const wanita = document.querySelector("#wanita");
const tinggi = parseFloat(document.querySelector("#tinggi_badan").value);
const berat = parseFloat(document.querySelector("#berat_badan").value);
const usia = parseInt(document.querySelector("#usia").value);
const hasilBMI = document.querySelector("#hasil-bmi");
const hasilDeskripsi = document.querySelector("#hasil deskripsi");
const keterangan = document.querySelector(".keterangan");
const hasilDisplay = document.querySelector(".hasil-display");

const kalkulasi = () => {
  let bmi = berat / ((tinggi * tinggi) / 100);

  let hasil = "";
  if (bmi < 18.5) {
    hasilBMI.innerHTML = `${bmi}`;
    hasil.innerHTML = "Kekurangan berat Badan";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    hasilBMI.innerHTML = `${bmi}`;
    hasil.innerHTML = "Normal (Ideal)";
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    hasilBMI.innerHTML = `${bmi}`;
    hasil.innerHTML = "Kelebihan berat badan";
  } else if (bmi >= 30.0) {
    hasilBMI.innerHTML = `${bmi}`;
    hasil.innerHTML = "Kegemukan (Obestias)";
  }

  hasilDisplay.style.display = "block";
};
