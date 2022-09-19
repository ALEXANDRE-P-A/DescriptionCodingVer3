let flag = 0;
const footerScript = document.getElementById('footer-script');

setInterval(() => {
  flag += 1;
  if(flag % 2 == 0)
    footerScript.style.display = 'block';
  else
    footerScript.style.display = 'none';
}, 500);

/* ------------------- 画像をクリックしたら拡大表示させる ------------------- */
const img1btn = document.getElementById('img1');
const img2btn = document.getElementById('img2');
const img3btn = document.getElementById('img3');
const imgView = document.getElementById('img-view');
const imgBox = document.getElementById('img-box');
const imgLink = [
  '<img src="img/works1.png" alt="新潟の日本海">',
  '<img src="img/works2.png" alt="長野の木曽町の御獄山">',
  '<img src="img/works3.png" alt="京都の町並み">'
];
const imgDescription = document.getElementById('img-description');
const imgText = [
  document.getElementById('img-text1').textContent,
  document.getElementById('img-text2').textContent,
  document.getElementById('img-text3').textContent,
];

img1btn.addEventListener('click',() => {
  imgBox.innerHTML = imgLink[0];
  imgDescription.textContent = imgText[0];
  imgView.style.display = 'flex';
});
img1btn.addEventListener('mouseover',()=>{
  img1btn.style.border = '1px solid #000000';
});
img1btn.addEventListener('mouseout',()=>{
  img1btn.style.border = 'none';
});

img2btn.addEventListener('click',() => {
  imgBox.innerHTML = imgLink[1];
  imgDescription.textContent = imgText[1];
  imgView.style.display = 'flex';
});
img2btn.addEventListener('mouseover',()=>{
  img2btn.style.border = '1px solid #000000';
});
img2btn.addEventListener('mouseout',()=>{
  img2btn.style.border = 'none';
});

img3btn.addEventListener('click',() => {
  imgBox.innerHTML = imgLink[2];
  imgDescription.textContent = imgText[2];
  imgView.style.display = 'flex';
});img3btn.addEventListener('mouseover',()=>{
  img3btn.style.border = '1px solid #000000';
});
img3btn.addEventListener('mouseout',()=>{
  img3btn.style.border = 'none';
});

const closeBtn = document.getElementById('close');

closeBtn.addEventListener('click',()=>{
  imgView.style.display = 'none';
});