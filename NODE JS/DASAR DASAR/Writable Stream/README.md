# Writable Stream

Untuk membuat writable stream dalam menulis berkas gunakanlah method `createWriteStream()` dari core module `fs`.

```js
const fs = require('fs');
 
const writableStream = fs.createWriteStream('output.txt');
```

Fungsi ini menerima satu argumen yakni alamat berkas untuk menyimpan hasil data yang dituliskan. Berkas output akan dibuat secara otomatis jika tidak ada, namun bila berkas tersebut sudah ada, maka data sebelumnya akan tertimpa! Anda harus hati-hati yah!

Lalu untuk menuliskan data pada writable stream, gunakan method `write()`.

```js
const fs = require('fs');
 
const writableStream = fs.createWriteStream('output.txt');
 
writableStream.write('Ini merupakan teks baris pertama!\n');
writableStream.write('Ini merupakan teks baris kedua!\n');
writableStream.end();
```

Method end() digunakan untuk menandakan akhir dari writable stream sekaligus bisa digunakan sebagai penulisan writeable terakhir.

```js
const fs = require('fs');
 
const writableStream = fs.createWriteStream('output.txt');
 
writableStream.write('Ini merupakan teks baris pertama!\n');
writableStream.write('Ini merupakan teks baris kedua!\n');
writableStream.end('Akhir dari writable stream!');
```

# Latihan: Stream

buat dua berkas baru dengan nama index.js dan input.txt.

- input.txt

```
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
```

- index.js

```js
const fs = require('fs');

const readData = fs.readFileSync('input.txt', 'utf-8');

const writeData = fs.createWriteStream('output.txt');

writeData.write(readData)
writeData.end()
```

Jalankan dengan perintah

```bash
node index.js
```