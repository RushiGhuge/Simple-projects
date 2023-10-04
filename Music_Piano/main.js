let pianoPanel = document.querySelector('.piano-panel');
const a = new Audio('./tunes/a.wav')
const s = new Audio('./tunes/s.wav')
const d = new Audio('./tunes/d.wav')
const f = new Audio('./tunes/f.wav')
const g = new Audio('./tunes/g.wav')
const h = new Audio('./tunes/h.wav')
const j = new Audio('./tunes/j.wav')
const k = new Audio('./tunes/k.wav')
const l = new Audio('./tunes/l.wav')

pianoPanel.addEventListener('click' ,(e)=>{
    console.log(e.target);
    a.play();
    // s.play()
    // d.play()
    // f.play()
})

addEventListener('keyup',(e)=>{
   if(e.key == 'a'){
    a.play();
   }
   else if(e.key == 's'){
    s.play();
   }
   else if(e.key == 'd'){
    d.play();
   }
   else if(e.key == 'f'){
    f.play();
   }
   else if(e.key == 'g'){
    g.play();
   }
   else if(e.key == 'h'){
    h.play();
   }
   else if(e.key == 'j'){
    j.play();
   }
   else if(e.key == 'k'){
    k.play();
   }
   else if(e.key == 'l'){
    l.play();
   }
})
