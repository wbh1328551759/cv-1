let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `
/* 你好，我叫吴炳浩
 * 接下来我要开始我的表演了
 * 首先来一个div
 */
#div1{
  border:1px solid red;
  width:200px;
  height:200px;
}
/*
 *接下来要把这个div变成一个八卦图
 *看好哦
 *首先把这个div变成一个圆的
 */
#div1{
  border-radius:50%;
  box-shadow:0 0 3px rgba(0,0,0,0.5);
  border:none;
}
/*
 *八卦分阴阳两极
 *一黑一白
 */
#div1{
  background: linear-gradient(90deg, rgba(255,255,255,1)0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*加上两个突如其来的小球*/
#div1::before{
  width:100px;
  height:100px;
  border: 1px solid red;
  position:absolute;
  left:25%;
  border-radius:50%;
  background:black;
  border:none;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 20%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 100%);
}
#div1::after{
  width:100px;
  height:100px;
  border: 1px solid red;
  position:absolute;
  left:25%;
  border-radius:50%;
  bottom:0;
  background:white;
  border:none;
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 20%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 100%);
}
`;
let string2 = "";
console.log(string.length);
let n = 1;

let step = () => {
  setTimeout(() => {
    if (string[n] === "\n") {
      // 如果是回车就加<br>
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp&nbsp";
    } else {
      // 如果不是回车就照搬
      string2 += string[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 99999);
    html.scrollTo(0, 99999);
    if (n < string.length - 1) {
      n = n + 1;
      step();
    }
  }, 50);
};

step();
