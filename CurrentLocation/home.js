const IP = document.getElementById("IP");
const bnt = document.getElementById('getStarted');


async function getIpAddres() {
 try{
    const url = `https://api.ipify.org/?format=json`;
    let data = await fetch(url);
    let res = await data.json();
    IP.innerHTML = res.ip
    return res.ip;
 }
 catch{
    alert('Ip not Found')
 }
}

getIpAddres()
bnt.addEventListener('click' ,()=>{
    location.href = './details/index.html'
})