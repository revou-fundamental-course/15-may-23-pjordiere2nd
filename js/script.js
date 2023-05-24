function hitungLuas() {
    var sisiLuas = document.getElementById("sisi-luas").value;
    if (sisiLuas == ""){
        alert("Tidak boleh kosong ya ^^");
    } else {
    console.log(sisiLuas);
    document.getElementById("rumus-luas").innerHTML = "L = S x S";
    document.getElementById("perhitungan-luas").innerHTML = "L = "+'<span>'+sisiLuas+'</span>'+" x "+'<span>'+sisiLuas+'</span>';
    var resultLuas = sisiLuas*sisiLuas;
    document.getElementById("output_luas").innerHTML = "L = <span>"+ resultLuas +'</span>';    
}
}
//untuk mengeksekusi perhitungan luas persegi

function hitungKeliling() {
    var sisiKeliling = document.getElementById("sisi-keliling").value;
    if (sisiKeliling == ""){
        alert("Tidak boleh kosong ya ^^");
    } else {
    console.log(sisiKeliling);
    document.getElementById("rumus-keliling").innerHTML = "K = 4 x S";
    document.getElementById("perhitungan-keliling").innerHTML = "K = 4 x "+'<span>'+sisiKeliling+'</span>';
    var resultKeliling = 4*sisiKeliling;
    document.getElementById("output_keliling").innerHTML = "K = <span>"+ resultKeliling +'</span>';
}
}
//untuk mengeksekusi perhitungan keliling persegi

function resetLuas() {
    document.getElementById("sisi-luas").value = "";
    document.getElementById("rumus-luas").innerHTML = "";
    document.getElementById("perhitungan-luas").innerHTML = "";
    document.getElementById("output_luas").innerHTML = "";
}
//untuk mengeksekusi mereset tampilan rumus, perhitungan dan output perhitungan luas persegi

function resetKeliling() {
    document.getElementById("sisi-keliling").value = "";
    document.getElementById("rumus-keliling").innerHTML = "";
    document.getElementById("perhitungan-keliling").innerHTML = "";
    document.getElementById("output_keliling").innerHTML = "";
}
//untuk mengeksekusi mereset tampilan rumus, perhitungan dan output perhitungan keliling persegi

function hanyaAngka(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
  
      return false;
    return true;
  }
//untuk mengatur form input sisi persegi saat menulis hanya bisa menulis angka saja