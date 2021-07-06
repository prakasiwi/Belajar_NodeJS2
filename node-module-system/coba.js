// const nama = 'Blek';
// const cetakNama = (nama) => `Hi, nama saya ${nama}`;
// console.log(cetakNama('Blek'));
// console.log('Jess');

function cetakNama(nama) {
    return `hai, nama saya ${nama}`;
}

const PI = 3.14

const siswa = {
    nama: 'Budi', 
    umur: 19,
    cetakSis() {
        return `Hai, nama saya ${this.nama} dana saya umur ${this.umur} tahun`
    }

};

class Orang {
    constructor() {
        console.log('kelas orang telah dibuat')
    }
};

// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.siswa = siswa;
// module.exports.Orang = Orang;

module.exports = { cetakNama, PI, siswa, Orang}