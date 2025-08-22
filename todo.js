let input = document.querySelector('input');
let btn = document.querySelector('.btn');
let body = document.querySelector('body');
let ul = document.createElement('ul');
body.append(ul);


function enter() {
    let li = document.createElement('li');
    let rem = document.createElement('button');
    rem.innerText = 'Remove Task';
    rem.className = 'remove';
    h = input.value;
    li.innerText = `${h}`;
    ul.appendChild(li);
    ul.appendChild(rem);
    console.log(h);
    input.value = '';
    function remove() {
        li.style.display = 'none';
        rem.style.display = 'none';
    }
    rem.addEventListener('click',remove)
}
btn.addEventListener('click', enter);




