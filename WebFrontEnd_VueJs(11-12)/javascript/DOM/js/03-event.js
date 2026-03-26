// function handleClick(){
//     alert("New clicked");
// }

// const btnClick = document.getElementById('btnClick');
// const re = document.getElementById('result');

// btnClick.onclick = ()=>{
//     re.innerHTML = "<h1>Hello text</h1>"
// };

// const click = document.getElementById('click');

// addEventListener('click',()=>{
//     click.innerHTML = "Clicked!"
// });

const btnImage = document.getElementById('btnImage');
const changeImage = document.getElementById('changeImage');

btnImage.addEventListener('click',()=>{
    changeImage.style.width="500px";
    // changeImage.style.height = "500px";
    changeImage.style.transform = "rotate(360deg)";
    changeImage.style.transition = "all .5s ease-in-out";
    changeImage.setAttribute("src","https://i.pinimg.com/736x/c4/51/d0/c451d06c72bd7d4f054e2c9a768bf2d0.jpg");
});