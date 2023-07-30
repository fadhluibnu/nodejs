# Menjalankan JavaScript Menggunakan Node.js

Terdapat dua cara dalam menjalankan kode JavaScript menggunakan Node.js. Yang pertama dengan memanfaatkan Node REPL dan yang kedua dengan mengeksekusi berkas berekstensi JS. Mari kita kupas keduanya!

## The Node.js REPL

Read-Eval-Print Loop sesuai namanya, fitur ini berfungsi untuk membaca kode JavaScript, mengevaluasi kode tersebut, kemudian mencetak hasil evaluasinya ke console. Nah, untuk loop, berarti proses tersebut selalu berulang.

untuk mengakses `REPL` gunakan perintah `node`

untuk mencoba jalanakan perintah ini `console.log(‘Hello NodeJS REPL’)`

## Running JavaScript File using Node.js

Cara lain untuk mengeksekusi kode JavaScript menggunakan Node.js adalah melalui berkas JS. Silakan buat berkas JavaScript pada proyek nodejs-basic. Gunakan VSCode agar lebih mudah yah. Buatlah berkas JavaScript dengan nama “index.js”.

lalu masukkan kode berikut

```js
const message = (name) => {
   console.log(`Hello ${name}`);
}
 
message('JavaScript');
```

dan untuk mengeksekusinya gunakan perintah

```bash
node index.js
```

maka akan muncul 

```
Hello JavaScript
```