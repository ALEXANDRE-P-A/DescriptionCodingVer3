let flag = 0;
const footerScript = document.getElementById('footer-script');

setInterval(() => {
  flag += 1;
  if(flag % 2 == 0)
    footerScript.style.display = 'block';
  else
    footerScript.style.display = 'none';
}, 500);