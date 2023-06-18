const input = document.getElementById('input');
const btnadd = document.getElementById('add');
const list = document.querySelector('.list');


btnadd.onclick = function() {
    if(input.value.trim()===""){
        alert('please entre your value. ');
        return;
    }
   
   list.innerHTML += `<li>${input.value} <i onclick='removei( event)' class="fa-solid fa-trash-can"> </li>`;
   input.value ="";
   input.focus();
};
function removei(e){
    e.target.parentElement.remove();
}
