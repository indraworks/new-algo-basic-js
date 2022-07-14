/*
dibawan ini adalah pola big O n kwadrat dimana sbuah kalang lopp
diisi kalang loop lain dimana dia tidak sejajar sprti drop(n) 
tapi ini adalah (n^2) atau sebanyak apapun itu artinya ada loop dalam kalang loop
yg lain  jika n^2 maka ada 2 kalang loop ,
jika n^3 maka adalah 3 kalang loop 
ini harus /wajib dihindari pola ini sbb contoh 
*/

function nKwadrat(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        console.log(i, j, k)
      }
    }
  }
}

nKwadrat(10)
/*
pola itk K =0 sd 10 itu j belum mulai 
nah nnti j di col ke 2 diakan trus loop hasilkan 0 sd 9 
jika col-2 sudah 9 angka maka baru col-1 si i akan kluar
angka0  sd 9
inicotoh pola awal itungan k baru mulai
0 0 0
0 0 1
0 0 2
0 0 3
0 0 4
0 0 5
0 0 6
0 0 7
0 0 8
0 0 9

*/
/*
ksimpulan pola kwdrat n adala contoh big o yg buruk yg harus dihindari !
bisa
*/
