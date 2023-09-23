let pianoPanel = document.querySelector('.piano-panel');
const a = new Audio('./tunes/a.wav')
const s = new Audio('./tunes/s.wav')
const d = new Audio('./tunes/d.wav')
const f = new Audio('./tunes/f.wav')
// const a = new Audio('./tunes/a.wav')
// const a = new Audio('./tunes/a.wav')
// const a = new Audio('./tunes/a.wav')
// const a = new Audio('./tunes/a.wav')
// const a = new Audio('./tunes/a.wav')

pianoPanel.addEventListener('click' ,(e)=>{
    console.log(e.target);
    a.play();
    s.play()
    d.play()
    f.play()
})