<script>
	var end  = 10;
    var counter = 1;
	for(var start=0; start < end; start++){
    	counter += start;
		console.log(counter);
        counter++;
	}
</script>

/**
******************* PROSES JALAN CODE ***************
var end 	= 10, variabel ini digunakan untuk kondisi berhentinya looping(di batasi sampai 10 kali looping saja)
var counter = 1,  variabel ini digunakan untuk couting hasilnya yg di butuhkan

Dari looping ini, start =0, dan end = 10, dari proses looping ini baca'y, sperti ini :
	Jika start < end [0 < 10], maka akan di looping, 
	Saat looping pertama kali berjalan BUKAN operator ini "start++" yg di jalankan, operator tersebut belum di jalankan, yg di jalankan dulu adalah :
		> proses 1 : counter += start;
					 yg artinya counter = counter + start
					 yg artinya 1 = 1 + 0 dan hasilnya 1
					 dari hasilnya 1 akan di tampung ke varibel counter
					 counter = 1
					 
		> proses 2 : cetak hasil, disini pakai console.log(counter)
					 > ini berarti cetak value varibel counter, dan hasil 1
					 
		> proses 3 : menjalankan operator ini : counter++ 
					 > ini artinya variabel counter + 1, dan jadinya seperti ini counter = 1+1
					   kemudian variable counter nilainya sekarang jdi 2, counter = 2
					   
		> proses 4 : menjalakan operatot ini : start++
					 > walaupun operator tersebut di devinisakan di awal, "for(var start=0; start < end; start++)"
					   bacanya bukan di jalankan di awal, tetapi berjalan setelah CONTENT/ISI yg ada di for itu sendiri
					   for{
						   CONTENT/ISI lopping
					   }
					  > jadi sekarang nilai varibel start=1 kenapa 1, soalnya nilai awal masih 0
					    start = start + 1 hasilnya 1
	Proses looping kembali ke atas lagi,
	sampai berhenti dengan kondisi ini 'nilai variabel start LEBIH BESAR dari nilai variabel end' otomatis berhenti loopingnya,
	jika nilai varibel start sudah mencapai nilai 11 maka looping berhenti
	
	Oke, (Y)
*/

