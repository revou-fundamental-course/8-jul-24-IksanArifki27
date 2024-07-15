const pria = document.querySelector("#pria");
const wanita = document.querySelector("#wanita");
const tinggi = parseInt(document.querySelector("#tinggi_badan").value);
const berat = parseInt(document.querySelector("#berat_badan").value);
const usia = parseInt(document.querySelector("#usia").value);
const hasil = document.querySelector(".hasil");
const keterangan = document.querySelector(".keterangan");

const kalkulasi = () => {
  const check = [tinggi, berat, usia];
  if (pria.checked) {
    check.push("pria");
  } else if (wanita.checked) {
    check.push("wanita");
  }

  const bmi = (berat / ((tinggi * tinggi) / 10000)).toFixed(2);

  var hasil = "";
  if (bmi < 18.5) {
    hasil = "Kekurangan berat Badan";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    hasil = "Normal (Ideal)";
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    hasil = "Kelebihan berat badan";
  } else if (bmi >= 30.0) {
    hasil = "kegemukan (obesitas)";
  }

  console.log("hasil hitung BMi" + bmi);
  console.log(tinggi);
  console.log("hasil keterangan BMi" + hasil);
};
