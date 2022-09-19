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

const imgInfo = [
  /* ファイル名、表示するテキスト、alt属性の値 */
  ['works1.png', '新潟に訪れた際に、日本海の雄大さに魅了されて撮影した１枚','新潟の日本海'],
  ['works2.png','地元長野の木曽町から撮影した、冠雪した御獄山','長野の木曽町の御獄山'],
  ['works3.png','京都で撮影した、明け方の古き良き日本の町並み','京都の町並み']
];

for(let i=0;i < imgInfo.length;i++){
  document.getElementById('test').innerHTML += '<div><img src="img/' + imgInfo[i][0] + '" alt="' + imgInfo[i][2] +'" id="img' + (i + 1) + '"><p id="img-text' + (i + 1) + '"><p>' + imgInfo[i][1] + '</p></div>';
};

const img1btn = document.getElementById('img1');
const img2btn = document.getElementById('img2');
const img3btn = document.getElementById('img3');
const imgView = document.getElementById('img-view');
const imgBox = document.getElementById('img-box');
const imgDescription = document.getElementById('img-description');

img1btn.addEventListener('click',() => {
  imgBox.innerHTML = '<img src="img/' + imgInfo[0][0] + '" alt="' + imgInfo[0][2] + '">';
  imgDescription.textContent = imgInfo[0][1];
  imgView.style.display = 'flex';
});
img1btn.addEventListener('mouseover',()=>{
  img1btn.style.border = '1px solid #000000';
});
img1btn.addEventListener('mouseout',()=>{
  img1btn.style.border = 'none';
});

img2btn.addEventListener('click',() => {
  imgBox.innerHTML = '<img src="img/' + imgInfo[1][0] + '" alt="' + imgInfo[1][2] + '">';
  imgDescription.textContent = imgInfo[1][1];
  imgView.style.display = 'flex';
});
img2btn.addEventListener('mouseover',()=>{
  img2btn.style.border = '1px solid #000000';
});
img2btn.addEventListener('mouseout',()=>{
  img2btn.style.border = 'none';
});

img3btn.addEventListener('click',() => {
  imgBox.innerHTML = '<img src="img/' + imgInfo[2][0] + '" alt="' + imgInfo[2][2] + '">';
  imgDescription.textContent = imgInfo[2][1];
  imgView.style.display = 'flex';
});img3btn.addEventListener('mouseover',()=>{
  img3btn.style.border = '1px solid #000000';
});
img3btn.addEventListener('mouseout',()=>{
  img3btn.style.border = 'none';
});

/* ------------------- 拡大表示を閉じる×ボタン ------------------- */
const closeBtn = document.getElementById('close');

closeBtn.addEventListener('click',()=>{
  imgView.style.display = 'none';
});
  