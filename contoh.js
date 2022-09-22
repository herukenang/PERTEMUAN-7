// async function user() {
//    await console.log("data user");
// }

// const dataUser = async () => {
//     await user();
//     // console.log(data1);
//     // return data1
// }
// console.log(dataUser);

async function cek() {
    var user = 'hui';
    var pass = 1234;
    const cek = await cekuser(user, pass);
    console.log(cek);
}

async function cekuser(user, pass) {
    // console.log(user, pass);
    try {
        var user1 = 'hui', pass = 1234;
        if ('hui' === user && pass === 1234) {
            console.log('benar');
        } else {
            console.log('salah');
        }
    } catch (err) {
        throw new Error({ message: 'input ssalah' });
    }
}  
cek();