// 1. Pastikan Teman Teman Sudah Menginstall Node JS

// 2. Teman - Teman Buatlah File di Folder javascript teman teman sebuah file dengan nama file tugas12.js

// 3. Buatlah Program Dengan Spesifikasi dibawah ini :

// Teman teman buatlah sebuah variabel array dengan 4 buah nama buah buahan pisang , jeruk , apel dan mangga
// Setelah itu teman teman tampilkan nilai awal array tersebut, lakukan perintah pop dan shift sehingga hasilnya akan seperti ini :


// Hint : Jangan Lupa Console.log()

// 4. Happy Codding :)
function fruit(){
    var buah = ['pisang', 'jeruk','apel', 'mangga'];
    console.log(buah);
    buah.pop();
    console.log(buah);
    buah.shift();
    console.log(buah); 
}
fruit();