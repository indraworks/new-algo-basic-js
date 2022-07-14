/*
-splice adalah opersi big O(n ) karena opersi splice ini mengunakan index 
utk nambah pada index adress tertentu pada element aarray dan juga saman 
meremove index address tertentu pada element aray  
jadi operasi splice bisa utk remove dan tambah 
metodenya 
array.splice(start,removeCOunt,newItem,newItem,newItem)
start = diindex brapa 
removeCount = kalau 0 barti ini operasi add saja
              kalau ada 1 barrti 1 buah eleemnt di delete
              kalau ada 2 brrti ad 2 buah elemet ygdidelete mulai dari start index
 newItem adalah element baru yg akan ditambahkan dlm elemetn array yg lama 
 jadi urut newitem1,newitem2,....
 atau bisa lansung masuk dari bewItem1 = ['1','2','3,dts]       
 yaitu lansugn sbuah dereratna array ditambahkan  yg diwakilli variable pmbnetukanya     

*/

let myFruits = ["pisang", "jeruk", "srikaya"]
myFruits.splice(1, 1, "A", "B", "C")
console.log(myFruits) //jeruk diatas akan hilang diambl 1 eleemtn mulai
//dari index 1 dari situ "A" "B" "C" insert dan srikaya tergeser ke trakhir!
//("pisang", "A", "B", "C", "srikaya")
//jika ingin tambahkan saja utk operator ke 2 berisi nol (0) saja jadi tidak
//ada index yg dari statrt tadi didelete contoh
//mau tambahka di index di "B" berarti index2
//commadn: myFruits.splice(2,0,"nambah")
//hasil: ("pisang", "A", "nambah","B", "C", "srikaya")
myFruits.splice(2, 0, "nambah")
console.log(myFruits) //[ 'pisang', 'A', 'nambah', 'B', 'C', 'srikaya' ]
