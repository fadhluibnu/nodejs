# Filesystem

Seluruh data di komputer dikelola dan diakses melalui filesystem. Ketika menjalankan kode JavaScript pada browser, sangat penting untuk melimitasi JavaScript dalam mengakses filesystem. Teknik ini dinamakan dengan sandboxing. Sandboxing melindungi kita dari program jahat serta tindakan pencurian yang dapat merampas privasi penggunanya.

Di back-end malah filesystem menjadi fitur esensial karena dalam pengembangan back-end akan sering sekali mengakses atau menulis sebuah berkas di dalam komputer. 

Node.js menyediakan core modules `fs` yang dapat mempermudah kita dalam mengakses filesystem. Setiap method yang ada di module `fs` tersedia dalam dua versi, yakni versi asynchronous (default) dan versi synchronous. 

Untuk mengakses berkas pada komputer kita dapat menggunakan method `fs.readFile()`. Method ini menerima tiga argumen yakni: lokasi berkas, encoding, dan callback function yang akan terpanggil bila berkas berhasil/gagal diakses.

```js
const fs = require('fs');
 
const fileReadCallback = (error, data) => {
    if(error) {
        console.log('Gagal membaca berkas');
        return;
    }
    console.log(data);
};
 
fs.readFile('todo.txt', 'UTF-8', fileReadCallback);
```

Sebagai alternatif, Anda juga bisa gunakan method versi synchronous fs.readFileSync().

```js
const fs = require('fs');
 
const data = fs.readFileSync('todo.txt', 'UTF-8');
console.log(data);
```

# Latihan: Filesystem

ditugaskan untuk membuat program JavaScript yang dapat membaca teks dari berkas .txt. Karena Anda sudah belajar filesystem, tentu ini tidak akan sulit.

Silakan buat folder baru dengan nama filesystem. Di dalamnya buat dua berkas, yakni index.js dan notes.txt.

- index.js

```js
const fs = require('fs')

const fileReadCallback = (error, data)=> {
    if(error){
        console.log(error)
        return
    }
    console.log(data)
}

fs.readFile('notes.txt', 'utf-8', fileReadCallback)
```

- notes.txt

```
Di hari minggu saya akan:
1. Berolahraga pagi.
2. Membersihkan halaman rumah.
3. Menonton film.
4. Membaca buku Laskar Pelangi.
```

Jalankan 

```bash
node index.js
```
