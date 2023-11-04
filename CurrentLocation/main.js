const ipAddress = document.getElementById("ip");
const map = document.getElementById("map");
const currentTimeZone = document.getElementById("currentTimeZone");
const currentDate = document.getElementById("currentDate");
const pincode = document.getElementById("pincode");
const Lat = document.getElementById("Lat");
const long = document.getElementById("long");
const city = document.getElementById("city");
const Region = document.getElementById("Region");
const org = document.getElementById("org");
const host = document.getElementById("host");
const massage = document.getElementById("massage");
const postList = document.getElementsByClassName("post-list")[0];
let globleList = [];

// get the ip address function using fetch
async function getIpAddres() {
  const url = `https://api.ipify.org/?format=json`;
  let data = await fetch(url);
  let res = await data.json();
  return res.ip;
}

// get the information about PC using the IP address...
async function getInfo(IP) {
  const url = ` https://ipapi.co/${IP}/json/ `;
  let data = await fetch(url);
  let resp = await data.json();
  // render info
  Lat.innerHTML = resp.latitude;
  long.innerHTML = resp.longitude;
  city.innerHTML = resp.city;
  Region.innerHTML = resp.region;
  org.innerHTML = resp.org;
  host.innerHTML = resp.asn;

  return resp;
}

// this function will get the list of post offices near postal
async function getPostOffice(postal) {
  const url = `https://api.postalpincode.in/pincode/${postal}`;
  let res = await fetch(url);
  let data = await res.json();

  // add massage...
  massage.innerHTML = data[0].Message;
  globleList = data[0].PostOffice; //  globle list ...
  renderPostOffice(data[0].PostOffice); // array;
}

// this function will add the map and locaton of current
function renderMap(data) {
  map.src = `https://maps.google.com/maps?q=${data.latitude}, ${data.longitude}&z=15&output=embed`;
}

// this function get the currnet time zone and add it
function getTimeZone(data) {
  // datetime in "America/Chicago" timezone in the "en-US" locale
  let str = new Date().toLocaleString(data.continent_code, {
    timeZone: data.timezone,
  });

  // "3/22/2021, 5:05:51 PM"
  currentTimeZone.innerHTML = data.timezone;
  currentDate.innerHTML = str;
  pincode.innerHTML = data.postal;
  //   render date and time
}

// this function will add or render the list of postals
function renderPostOffice(list) {
  postList.innerHTML = ""; // clear all box
  list.forEach((ele) => {
    let box = document.createElement("div");
    box.className = "post-box";
    box.innerHTML = ` <p>Name : <span class="value"> ${ele.Name}</span> </p>
        <p>Branch Type : <span class="value"> ${ele.BranchType}</span> </p>
        <p>Delivery Status : <span class="value"> ${ele.DeliveryStatus}</span> </p>
        <p>District : <span class="value"> ${ele.District}</span> </p>
        <p>Division : <span class="value"> ${ele.Division}</span> </p>`;

    postList.appendChild(box);
  });
}

// filter function of postal
function filterPostoffice(event) {
  let search = event.value;
  let list = globleList.filter((ele) => {
    return ele.Name.toLowerCase().includes(search.toLowerCase());
  });
  renderPostOffice(list);
}

// call ip addres when load
// save it in ip veriable promise, access it using .then -->
const ip = getIpAddres();
ip.then((IP) => {
  ipAddress.innerHTML = IP;
  let ipInfo = getInfo(IP);
  ipInfo.then((data) => {
    renderMap(data); // render the current location on the map...
    getTimeZone(data); // get the timezone...
    getPostOffice(data.postal); // get the postal and render data of post offices...
  });
}).catch((error) => {
  alert(error);
});

// $.getJSON("https://api.ipify.org?format=json", function (data) {
//   // Setting text of element P with id gfg
//   $("#gfg").html(data.ip);
// });
