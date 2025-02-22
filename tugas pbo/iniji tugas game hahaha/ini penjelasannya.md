 CLASS dan METHod 

Class `Player` adalah pemain dengan properti `name`, `score` (default: 0), dan `choice`.  

Method:  
  - `setChoice(choice)`: untuk mengatur pilihan pemain (misalnya, "gunting", "batu", atau "kertas").  
  - `getChoice()`: untuk memilih pilihan pemain saat ini.  
  - `addScore()`: untuk memberi skor pemain sebesar 1.  
  - `getScore()`: untuk mengambil skor pemain saaat ini.  

Class `Game` untuk mengatur loogika dengan properti `playerA`, `playerB`, `choices` (opsi valid), dan `icons` (ikon untuk pilihan).  

Method:  
  - `randomChoice()`: untuk pilihan acak seperti "gunting", "batu", atau "kertas".  
  - `determineWinner()`: Menentukan pemenang berdasarkan aturan permainan.  
 
   `getChoice()` mengambil pilihan pemain, misalnya:  
   console.log(playerA.getChoice()); // Output: "batu"
   `getScore()` mengambil skor pemain, misalnya:  
   console.log(playerA.getScore()); // Output: 0
 
 

 .. Faturrohman Al-Khair
 .. 105841107021
 