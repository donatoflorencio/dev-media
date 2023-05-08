let nav = document.getElementById('menu-nav')
let aprendendo = false

function Click() {
  aprendendo = !aprendendo


  if(aprendendo) {

    nav.style.left = '50%'

    nav.style.animationName = "aprendendo"
  } else{
    nav.style.left = '-50%'

    nav.style.animationName = ""
  }
}

function nClick() {

  if(aprendendo) {
  
    Click()
  
  }
  
  }












// function Click() {
//   if (menuOpen.style.left = '-50%') {
//     menuOpen.style.left = '50%'
//     menuOpen.style.animationName = 'aprendendo'


//   }else {
//     menuOpen.style.left = '-50%'
//     menuOpen.style.animationName= ''
//   }
// }

// function nClick() {
//   menuOpen.style.left = '-50%'
// }

