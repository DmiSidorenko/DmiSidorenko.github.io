var btn = document.querySelector('#btn');
var out = document.querySelector('#out');
var price = document.querySelector('#price');
var amount = document.querySelector('#amount');
var p=price.value;
var a=amount.value;

function op()
{  document.querySelector('#price').style.borderColor="red";}
function oa()
{  document.querySelector('#amount').style.borderColor="red";}
function np()
{  document.querySelector('#price').style.borderColor="black";}
function na()
{  document.querySelector('#amount').style.borderColor="black";}
function ob()
{  document.querySelector('#price').style.borderColor="black";document.querySelector('#amount').style.borderColor="black";}

window.addEventListener('DOMContentLoaded', function (event) {
  console.log("DOM fully loaded and parsed");
 btn.onclick = function() {
  const reg = /-+?|\b0[0-9]+/;
  const reg1 = /\D+/;
  const reg2 = /^$/;
  var pro = parseInt(price.value) * parseInt(amount.value);
if((reg.test(price.value) || reg.test(amount.value))===true ) {
      alert("Ошибка: Число отрицательное или равно нулю :)")
   if(reg.test(price.value)===true && reg.test(amount.value)===true) {
     op();oa();
    }
   else if(reg.test(price.value)===true) {
    op();na();
   }
    else if(reg.test(amount.value)===true) {
     np();oa();
    }
}
else if((reg1.test(price.value) || reg1.test(amount.value))===true ) {
  alert(" Ошибка: Вы ввели букву, а не число :)")
 if(reg1.test(price.value)===true && reg1.test(amount.value)===true) {
  op();oa();
 }
 else if(reg1.test(price.value)===true) {
  op();na();
 }
 else if(reg1.test(amount.value)===true) {
  op();oa();
  }
}
else if((reg2.test(price.value) || reg2.test(amount.value))===true ) {
  alert(" Ошибка: Введите цифру в соответствующее поле :)")
 if(reg2.test(price.value)===true && reg2.test(amount.value)===true) {
  oc();ok();
 }
 else if(reg2.test(price.value)===true) {
  oc();nk();
 }
 else if(reg2.test(amount.value)===true) {
  on();ok();
 }
}
else {
 out.innerHTML = pro;
 }
}
});
