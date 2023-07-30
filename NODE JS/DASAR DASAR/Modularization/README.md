# Modularization

Semakin kompleks program yang dikembangkan, semakin kompleks juga kode yang dituliskan. Jika kode dituliskan dalam satu berkas saja, maka akan sangat sulit untuk membaca serta memelihara kode tersebut. Idealnya, satu berkas JavaScript hanya memiliki satu tanggung jawab saja. Bila lebih dari satu, itu berarti Anda perlu berkenalan dengan modularisasi.

Modularisasi dalam pemrograman merupakan teknik pemisahan kode menjadi modul-modul yang bersifat independen namun bisa saling digunakan untuk membentuk suatu program yang kompleks.

Pada Node.js, setiap berkas JavaScript adalah modul. Anda bisa membagikan nilai variabel, objek, class, atau apa pun itu antar modul. Untuk melakukannya, Anda perlu mengekspor nilai pada module tersebut.

Untuk mengekspornya, simpanlah nilai tersebut pada properti `module.exports`. Contoh seperti ini:

```js
const coffee = {
    name: 'Tubruk',
    price: 15000,
}

module.exports = coffee;
```

Setelah itu nilai `coffee` dapat digunakan pada berkas JavaScript lain dengan cara mengimpor nilainya melalui fungsi global `require()`.

```js
const coffee = require('./coffee');
 
console.log(coffee);
```

Parameter dari `require()` adalah lokasi dari modul target dan ingat harus unakan tanda `./` diawal kalimat. Dan tanda `../` untuk keluar satu level folder.

Dalam melakukan impor dan ekspor nilai, kita bisa memanfaatkan object literal dan object destructuring agar dapat mengimpor dan mengekspor lebih dari satu nilai pada sebuah modul. Contoh:

```js
const firstName = 'Harry';
const lastName = 'Potter';
 
 
/* gunakan object literal
untuk mengekspor lebih dari satu nilai. */
module.exports = { firstName, lastName };
```

## Import Core Module

Disediakan oleh Node.js yang Digunakan untuk memudahkan develoer dalam proses pengembangan. Kita bisa mengimpor core modules dengan dungsi yang sama, yakni `require()`

```js
// Mengimpor core module http
const http = require('http'); 
```

## Macam Modul Node.js

Ada 3 jenis modul pada Node.js, Anda sudah mengetahui dua di antaranya. Berikut rinciannya:

- `local module` : module yang dibuat secara lokal berlokasi pada Node.js project Anda.

- `core module` : module bawaan Node.js berlokasi di folder lib di mana Node.js terpasang pada komputer Anda. Core module dapat digunakan di mana saja.

- `third party module` : module yang dipasang melalui Node Package Manager. Bila third party module dipasang secara lokal, maka modul akan disimpan pada folder node_modules di Node.js project Anda. Bila dipasang secara global, ia akan disimpan pada folder node_modules di lokasi Node.js dipasang.


# Latihan: Modularization

Buat folder baru dengan nama modularization pada proyek nodejs-basic dan di dalamnya buat tiga berkas JavaScript baru yakni Tiger.js, Wolf.js, dan index.js.

- Tiger.js

```js
class Tiger {
    constructor(){
        this.strength = Math.floor(Math.random() * 100)
    }

    growl(){
        console.log('grrrr!')
    }
}

module.exports = Tiger
```

- Wolf.js

```js
class Wolf{
    constructor(){
        this.strength = Math.floor(Math.random() * 100)
    }

    howl(){
        console.log('owooo!')
    }
}

module.exports = Wolf
```

- index.js

```js
const Tiger = require('./Tiger')
const Wolf = require('./Wolf')

const fighting = (tiger, wolf)=>{
    if(tiger.strength > wolf.strength){
        tiger.growl()
        return;
    }

    if (wolf.strength > tiger.strength){ 
        wolf.howl()
        return
    }

    console.log(`Tiger and Wolf hava same strength`)
}

const tiger = new Tiger()
const wolf = new Wolf()

fighting(tiger, wolf)
```

lalu jalankan dengan perintah

```bash
node index.js
```