# Node Package Manager

Node Package Manager (NPM) merupakan pengelola package untuk JavaScript yang dapat memudahkan kita dalam mengelola package yang tersedia pada https://www.npmjs.com/. NPM merupakan standard package manager yang disediakan oleh Node.js dan sudah otomatis terpasang ketika memasang Node.js pada komputer kita. NPM dapat dioperasikan melalui CMD atau Terminal, Anda pun sudah mencobanya ketika membuat proyek JavaScript.

Selain untuk membuat proyek JavaScript, NPM dapat digunakan untuk memasang atau menghapus third party module (modul pihak ketiga). Modul yang dipasang melalui NPM akan disimpan pada folder node_modules.

Terdapat dua tipe pemasangan modul melalui NPM:

- Global : modul tersebut akan bersifat layaknya core module dan dapat digunakan di mana pun

- Lokal : hanya dapat digunakan pada cakupan project Node.js yang memasangnya saja

*Note : Hindari pemasangan modul secara global karena akan menyebabkan banyak masalah.*

## Mencoba memasang package

MomentJS merupakan salah satu modul pihak ketiga yang populer untuk mengelola waktu di Node.js. Untuk memasangnya secara lokal, jalankan perintah berikut pada Terminal di project Node.js Anda.

```bash
npm install moment
```

Setelah pemasangan selesai, Anda bisa menggunakan module moment pada proyek Node.js Anda.

```js
const moment = require('moment');
 
const date = moment().format("MMM Do YY");
console.log(date);
```
Package yang dipasang secara lokal melalui NPM akan tercatat di dalam file `package.json`, lebih tepatnya pada objek dependencies.

## Menghapus Modul Pihak Ketiga

Untuk menghapus modul yang telah kita install kita bisa gunakan pertinah

```
npm uninstall <package-name>
```

contoh

```bash
npm uninstall moment
```

# Latihan: Node Package Manager

Pada latihan kali ini kita akan mencoba memasang module lodash melalui NPM. Namun sebelum itu, buat dulu folder baru bernama node-package-manager dan berkas index.js di dalamnya.

Install Lodash

```bash
npm install lodash
```

Pada berkas index.js, tuliskan starter code berikut:

```js
const lodash = require('lodash');

const myOddEvenArray = lodash.partition([1,2,3,4,5,6], (n) => n % 2 )

console.log(myOddEvenArray);
```

jalankan

```bash
node index.js
```
