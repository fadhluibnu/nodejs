# Node.js Global Object

Di browser, JavaScript dapat mengontrol fungsionalitas browser seperti mengunjungi halaman, memuat ulang, menutup tabs, serta menampilkan alert dialog. JavaScript mampu melakukan itu karena browser menambahkan objek window pada JavaScript.

Di Node.js pun demikian, ia menambahkan objek global guna memberikan fungsionalitas lebih pada JavaScript. Hal ini bertujuan untuk mendukung pengembangan pada environment-nya. Contoh, melalui objek global kita dapat melihat berapa CPU yang digunakan pada komputer, modularisasi berkas JavaScript, menampilkan nilai pada console, dan hal lainnya.

Objek window pada browser dan objek global pada Node.js merupakan Global Object.

Pada Node.js Anda bisa melihat apa saja yang termasuk member dari global objek dengan menggunakan kode berikut. Coba jalankan pada REPL.

```js
Object.getOwnPropertyNames(global);
```