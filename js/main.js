//Change Color Menu 
function changeColorMenu() {
    const header = document.querySelector('.header') //Lấy phần tử header
    const schero = document.querySelector('.schero') //Lấy phần tử slider
    document.addEventListener('scroll', function () {
        let scrollY = window.pageYOffset //Lấy chiều cao đã scroll trong cửa sổ trình duyệt
        if (scrollY > schero.clientHeight / 2) { //Nếu scroll tới vị trí dưới phân nửa của slider
            header.classList.add('show') // Thêm class show vào header
        }
        else { // Nếu scroll đến vị trí trên nửa slider
            header.classList.remove('show') //Thu hồi class show trong header
        }
    })
}
changeColorMenu(); 


//Custom mouse 
const cursorRounded = document.querySelector('.cursor-outer');


// const moveCursor = (e)=> {
//   const mouseY = e.clientY;
//   const mouseX = e.clientX;
   
//   cursorRounded.style.transform = `translate3d(${mouseX - 56}px, ${mouseY - 56}px, 0)`;
  
 
// }

// window.addEventListener('mousemove', moveCursor)


//Back to top
function btnBackClick() {
    const btnback = document.querySelector('.totop'),
        btntotop = document.querySelector('.btn-back')
    window.addEventListener('scroll', function () {
        let scrollY = window.pageYOffset;
        let height = document.body.offsetHeight;
        let heightFooter = document.querySelector('.footer').offsetHeight;
        if (scrollY > height / 4) {
            btnback.classList.add('active')
        }
        else {
            btnback.classList.remove('active')
        }
    })
    btnback.addEventListener('click', function () {
        window.scrollTo({
            'top': 0,
            behavior: "smooth"
        })
    })
    btntotop.addEventListener('click', function () {
        window.scrollTo({
            'top': 0,
                        behavior: "smooth"
        })
    })
}
btnBackClick();