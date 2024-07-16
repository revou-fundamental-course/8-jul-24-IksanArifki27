const kalkulasi = () => {
  const pria = document.querySelector("#pria");
  const wanita = document.querySelector("#wanita");
  const tinggi = parseInt(document.querySelector("#tinggi_badan").value);
  const berat = parseInt(document.querySelector("#berat_badan").value);
  const usia = parseInt(document.querySelector("#usia").value);
  const hasilBMI = document.querySelector("#hasil-bmi");
  const hasilDeskripsi = document.querySelector("#hasil-deskripsi");
  const deskripsiHasilBMI = document.querySelector(".deskripsi-hasil-bmi");
  const keterangan = document.querySelector(".keterangan");
  const hasilDisplay = document.querySelector(".hasil-display");

  let bmi = (berat / ((tinggi * tinggi) / 10000)).toFixed(2);

  if (bmi < 18.5) {
    hasilBMI.innerHTML = `${bmi}`;
    hasilDeskripsi.innerHTML = "Kekurangan berat Badan";
    deskripsiHasilBMI.innerHTML =
      "Anda berada dalam kategori kekurangan berat badan Hubungi dokter lebih lanjut mengenai pola makan dan gizi yang baik untuk meningkatkan kesehatan.";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    hasilBMI.innerHTML = `${bmi}`;
    hasilDeskripsi.innerHTML = "Normal (Ideal)";
    deskripsiHasilBMI.innerHTML =
      "Anda berada dalam kategori berat badan yang normal Tetap pertahankan berat badan Anda dan jaga berat badan Anda dengan mengatur keseimbangan antara pola makan dan aktivitas fisik Anda";
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    hasilBMI.innerHTML = `${bmi}`;
    hasilDeskripsi.innerHTML = "Kelebihan berat badan";
    deskripsiHasilBMI.innerHTML =
      "Anda berada dalam kategori overweight atau berat badan berlebih.Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga.";
  } else if (bmi >= 30.0) {
    hasilBMI.innerHTML = `${bmi}`;
    hasilDeskripsi.innerHTML = "Kegemukan (Obestias)";
    deskripsiHasilBMI.innerHTML =
      "Anda berada dalam kategori obesitas. Usahakan untuk menurunkan berat badan dan menerapkan pola hidup sehat dengan menjaga makan dan aktivitas fisik.";
  }

  hasilDisplay.style.display = "block";
};
