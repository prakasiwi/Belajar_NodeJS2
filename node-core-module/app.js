//  core module
// file system
const fs = require('fs');

// menuliskan string ke file(synchronous)
// fs.writeFileSync('test.txt', 'Hello')

// menuliskan string ke file(asynchronous)
// fs.writeFile('test.txt', 'hello asyn', (e) =>{
//     console.log(e);
// });

// membaca syn
// const data = fs.readFileSync('test.txt', 'utf-8');
// console.log(data);

// membaca asyn
// fs.readFile('test.txt', 'utf-8', (err, data) => {
//     if(err) throw err;
//     console.log(data)
// });

// readline
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('masukkan nama anda : ', (nama) => {
    rl.question('masukkan no hp : ', (hp) => {
        const contact = { nama, hp};
        const file = fs.readFileSync('contacts.json', 'utf-8');
        const contacts = JSON.parse(file);

        contacts.push(contact);

        fs.writeFileSync('contacts.json', JSON.stringify(contacts))
        console.log('terima kasih sudah memasukkan data :)');
        rl.close();
    });
});
