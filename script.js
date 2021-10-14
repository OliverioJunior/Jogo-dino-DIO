const dino = document.querySelector('.dino')
const background = document.querySelector('.background')
let isJumpping = false;
let position = 0;
function handleKeyup(e){
    if(e.keyCode === 32){
      if(!isJumpping) {
        jump()
      }
      
    }
}

function jump() {
  
  isJumpping = true;

  let upInterval = setInterval(() =>{
    if( position > 150) {
      clearInterval(upInterval)
      let downInterval = setInterval(()=>{
         if(position <= 0){
          clearInterval(downInterval)
          isJumpping = false 
         } else {
           position -= 20
           dino.style.bottom = position + 'px';
         }
      },20)
    } else{
      position += 20;
      dino.style.bottom = position + 'px';
    }
    

  },20)
}

function createCactos() {
    const cactus = document.createElement('div');
    let cactusPosition = 1000 
    let randomTime =  Math.random()*6000
    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(()=>{
        
        if(cactusPosition < -60 ){
          clearInterval(leftInterval)
          background.removeChild(cactus);
        } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60 ){
          clearInterval(leftInterval);
          document.body.innerHTML = '<h1 class = "game over"> Fim de Jogo</h1>'
        } else{
          cactusPosition -= 10;
          cactus.style.left =  cactusPosition + 'px';
        }
    },20)

    setTimeout(createCactos, randomTime)
}
createCactos()
document.addEventListener('keyup', handleKeyup)