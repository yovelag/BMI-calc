function calculateBMI() {
    let weight = document.getElementById("weight").value;             //mengambil nilai 'berat' dari html
    let height = document.getElementById("height").value / 100;     //mengambil nilai 'tinggi' dari html
    let bmi = weight / (height * height);                            //memproses dan melakukan perhitungan
    let category = "";                   //deklarasi variable kategori
    let description = "";                 //deklarasi variable keterangan
    
    // proses perhitungan
    if (bmi < 18.5) {       // BMI dibawah 18,5
        category = "Berat badan kurang";
        description = "BMI kamu kurang dari 18,5.<br>Cara menambah berat badan paling baik adalah dengan mengatasi penyakit atau kondisi yang menjadi penyebab berkurangnya berat badan. Bila kondisi tersebut bisa diatasi, berat badan pun akan bertambah."
    } else if (bmi < 25) {  //BMI diantara 18,5 - 24,9
        category = "Berat badan normal";
        description = "BMI kamu normal diantara 18,5-24,9.<br>Memiliki berat badan yang ideal tidak harus dengan diet ekstrem yang menyiksa. Ada beberapa cara menjaga berat badan ideal dengan aman yang bisa kamu lakukan.<br>Diantaranya yaitu menyusun meal plan, bergerak aktif atau olahraga, dan jangan lewatkan sarapan"
    } else if (bmi < 30) {  //BMI diantara 25,0 - 29,9
        category = "Berat badan berlebih";
        description = "BMI kamu lebih dari 25,0 - 29,9.<br>Cara terbaik menurunkan berat badan adalah dengan berolahraga, menjaga pola makan tetap teratur."
    } else if (bmi > 30) {
        category = "Obesitas";  //BMI diatas 30
        description = "BMI kamu lebih dari 30.<br>Kamu dikategorikan kedalam Overweight dimana hal ini adalah sebuah penyakit yang kompleks. Overweight dapat dipengaruhi oleh pola makan yang tidak teratur, pola tidur yang tidak sehat, dan kurangnya olahraga."
    } else {
        category = "Tidak diketahui"
    }

    //melempar hasil perhitungan kembali ke halaman HTML
    let result = "BMI Kamu : <br>" + bmi.toFixed(1) + "<br> (" + category + ")";
    document.getElementById("result").innerHTML = result;
    document.getElementById("description").innerHTML = description;

    
}

function formReset() {  //fungsi tombol reset untuk mereset form kembali kosong
    clearRadioButtons();
    document.getElementById("age").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("description").innerHTML = "";
}

function clearRadioButtons(){   //fungsi untuk mereset radio button
    let ele = document.querySelectorAll("input[type=radio]");
     for(let i=0;i<ele.length;i++){
        ele[i].checked = false;
     }
}
