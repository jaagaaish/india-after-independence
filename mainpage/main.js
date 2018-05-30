var text = ["Vande Matram","","sujalam suphalam", "","malayaja sheetalam","", "Shasyashyamalam maataram vande","", "Shubhra jyotsna pulakitayaaminim","","Phulla kusumita drumadalashobhinim","","Suhaasinim sumadhurabhaashhinim","","Sukhadaam varadaam maataram",""];
var counter = 0;
var elem = document.getElementById("fading-text");
elem.innerHTML = text[counter];
counter++;
var interval = 2500;
var inst = setInterval(change, interval);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}