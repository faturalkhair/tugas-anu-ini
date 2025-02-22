// 16 november 2024
// console.log(Sapa());
// var nama = 'JOKOWI';
// var kampus = 'UMM';

// function Sapa(){
//     var jurusan = 'IT'
//     return `Halo saya ${nama} kuliah di ${kampus} jurusan ${jurusan}`
// }

// console.log(Sapa(kampus));

// console.log(Sapa());
// var nama = 'JOKOWI';
// var kampus = 'UMM';

// function Sapa(kampus){
//     console.log(arguments);
//     var jurusan = 'IT'
//     return `Halo saya ${nama} kuliah di ${kampus} jurusan ${jurusan}`
// }

// console.log(Sapa('unhas', 'uin', 'unm'));



// var bil =1;
// function tambah (){
//     var bil = 2
//     return bil + 2;

// }
// function kurang (){
//     var bil = 3
//     return bil - 2;

// }
// function kali (bil){
//     // var bil = 3
//     return bil * tambah() + kurang();

// }

// console.log(tambah());
// console.log(kurang());
// console.log(kali(2));


function a(){
    console.log('ini a');

    function b(){
        console.log('ini b');

        function c(){
            console.log('ini c');
        }
        c()
    }
    b()
}
a()

 