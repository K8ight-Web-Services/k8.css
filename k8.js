// Get the Sidebar
var mySidebar = document.getElementById("mySidebar");

// Get the DIV with overlay effect
var overlayBg = document.getElementById("myOverlay");

// Toggle between showing and hiding the sidebar, and add overlay effect
function k8_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
    overlayBg.style.display = "none";
  } else {
    mySidebar.style.display = 'block';
    overlayBg.style.display = "block";
  }
}
/*let footerHash = "";

crypto.subtle.digest(
  "SHA-256",
  new TextEncoder().encode(
    document.querySelector("footer").innerHTML
  )
).then(b => {
  footerHash = [...new Uint8Array(b)]
    .map(x => x.toString(16).padStart(2, "0"))
    .join("");
if(footerHash !=="19067cba05d1d56d094cb71380a25124dc088cfe1386448579c51cb5ccfa7f0c"){
	 document.querySelector("body").innerHTML="<h1 class='k8-text-red k8-padding'>License void — base code tampered. Refer: KOSLv1 <a href='https://raw.githubusercontent.com/k8ight/k8ight/refs/heads/main/LICENSE' class='k8-text-blue'>https://raw.githubusercontent.com/k8ight/k8ight/refs/heads/main/LICENSE</a></h1>";
}
});*/

const formatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
}); 
 /*multi curency demo format.in.format(1234567.89);*/
const format = {
  in: new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
  }),

  us: new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }),

  eu: new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR'
  }),

  ru: new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB'
  }),

  jp: new Intl.NumberFormat('ja-JP', {
    style: 'currency',
    currency: 'JPY'
  }),

  cn: new Intl.NumberFormat('zh-CN', {
    style: 'currency',
    currency: 'CNY'
  })
};
 /*multi curency demo format.in.format(1234567.89);*/
function toggleDropdown(el) {
 let dropdown = el.nextElementSibling;
  if (dropdown) {
    dropdown.classList.toggle("k8-hide");
    console.log("Dropdown toggled!"); // Debugging log
  } else {
    console.error("Dropdown element not found!");
  }
   let icon = el.querySelector("i");
   if (dropdown.classList.contains("k8-hide")) {
      icon.classList.replace("fa-caret-down", "fa-caret-right");
    } else {
      icon.classList.replace("fa-caret-right", "fa-caret-down");
    }
  
  
}

function date(format, epoch = null, tzOffset = 330) { //PHP DATE FUNCTION IN JS WITH TZ OFFSET 330 munites = +5:30 IST
  let timestamp = epoch ? Number(epoch) : Date.now();

  // Convert seconds to milliseconds
  if (timestamp.toString().length === 10) timestamp *= 1000;

  // Apply timezone offset (in minutes)
  // JS Date is always in local/UTC, so we shift timestamp manually
  timestamp += tzOffset * 60 * 1000;

  const d = new Date(timestamp);

  const pad = (n, c = 2) => String(n).padStart(c, '0');

  // ISO week number
  const getISOWeek = (date) => {
    const target = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
    const dayNr = (target.getUTCDay() + 6) % 7;
    target.setUTCDate(target.getUTCDate() - dayNr + 3);
    const firstThursday = new Date(Date.UTC(target.getUTCFullYear(), 0, 4));
    return 1 + Math.round((target - firstThursday) / (7 * 86400000));
  };

  // ISO year
  const getISOYear = (date) => {
    const week = getISOWeek(date);
    let year = date.getUTCFullYear();
    if (week === 1 && date.getUTCMonth() === 11) year += 1;
    if (week >= 52 && date.getUTCMonth() === 0) year -= 1;
    return year;
  };

  const map = {
    // Day
    d: pad(d.getUTCDate()),
    D: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][d.getUTCDay()],
    j: d.getUTCDate(),
    l: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][d.getUTCDay()],
    N: d.getUTCDay() === 0 ? 7 : d.getUTCDay(),
    S: (() => {
      const day = d.getUTCDate();
      if (day % 10 === 1 && day !== 11) return 'st';
      if (day % 10 === 2 && day !== 12) return 'nd';
      if (day % 10 === 3 && day !== 13) return 'rd';
      return 'th';
    })(),
    w: d.getUTCDay(),
    z: Math.floor((d - Date.UTC(d.getUTCFullYear(), 0, 0)) / 86400000),

    // Week
    W: getISOWeek(d),

    // Month
    F: ['January','February','March','April','May','June','July','August','September','October','November','December'][d.getUTCMonth()],
    m: pad(d.getUTCMonth() + 1),
    M: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][d.getUTCMonth()],
    n: d.getUTCMonth() + 1,
    t: new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + 1, 0)).getUTCDate(),

    // Year
    L: ((d.getUTCFullYear() % 4 === 0 && d.getUTCFullYear() % 100 !== 0) || (d.getUTCFullYear() % 400 === 0)) ? 1 : 0,
    o: getISOYear(d),
    Y: d.getUTCFullYear(),
    y: String(d.getUTCFullYear()).slice(-2),

    // Time
    a: d.getUTCHours() < 12 ? 'am' : 'pm',
    A: d.getUTCHours() < 12 ? 'AM' : 'PM',
    g: d.getUTCHours() % 12 || 12,
    G: d.getUTCHours(),
    h: pad(d.getUTCHours() % 12 || 12),
    H: pad(d.getUTCHours()),
    i: pad(d.getUTCMinutes()),
    s: pad(d.getUTCSeconds()),
    u: pad(d.getUTCMilliseconds() * 1000, 6),
  };

  return format.replace(/\\?([a-zA-Z])/g, (_, char) =>
    map[char] !== undefined ? map[char] : char
  );
}
/*auto modal*/
(function ensureModal() {
  function addModal() {
    if (document.getElementById('modal')) return;

    const html = `
<div id="modal" class="k8-popup k8-white">
  <div class="head k8-indigo k8-padding">
    <div class="title">Dynamic Window</div>
    <button class="k8-btn k8-red" onclick="closeModal(this);">
      <i class="fa fa-xmark"></i>
    </button>
  </div>

  <div class="body k8-white k8-border k8-custom-border">
    <i class="fa fa-spinner"></i>
  </div>
</div>`;

    document.body.insertAdjacentHTML('beforeend', html);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addModal);
  } else {
    addModal();
  }
})();


/*auto modal*/
//dynamyc form handeler
function form_handel(id="",trigger="",callback = null,url="./",success="✅ Table saved successfully!",failed="❌ Failed to save table!") {
  const form = document.getElementById(id);
  var notice = document.querySelector('#modal #notice');
  success="<span class='k8-text-green k8-strong'>"+success+"</span>";
  failed="<span class='k8-text-red k8-strong'>"+failed+"</span>";
  
  if (!id || !trigger ) {
    console.warn(
      "❌ form_handel() usage error:\n" +
      "Required parameters missing.\n\n" +
      "Correct usage:\n" +
      "form_handel(formid, php $_REQUEST/POST['trigger'], callback [ default null ], url[ default ./ ], success text, failed text)"
    );
    return;
  }
  
  if (form.dataset.bound) return;
form.dataset.bound = "true";
  
  form.addEventListener("submit", async function(e) {
    e.preventDefault();
       if (!form.reportValidity()) {
      return; // Stop if invalid
    }
	const btn = form.querySelector("button[type='submit']");
	if (!notice){
	  notice = document.createElement('div');
	  notice.id="notice";
      notice.className = 'k8-small k8-strong k8-padding-small';
      notice.style.width = '100%'; 
      btn.insertAdjacentElement('beforebegin', notice);
  }
	
    const formData = new FormData(form);
    formData.append(trigger, '1');	
	
    
    btn.disabled = true;  

    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData
      });
      const result = await response.text();
      
      notice.innerHTML = "";

      if (result.trim() === "200") {
    notice.innerHTML = success;

    // 🔥 Transform submit button → Close button
    btn.type = "button";

    // remove existing color classes (safe reset)
    btn.classList.remove("k8-green","k8-red","k8-blue","k8-orange");
    btn.classList.add("k8-indigo");

    btn.innerHTML = "<i class='fa fa-xmark'></i> Close Window";

    // remove old submit behavior just in case
    btn.onclick = null;

    // attach close modal action
    btn.addEventListener("click", function () {
        closeModal(this);
    });

    if (callback && typeof callback === "function") {
        await callback();
    }
} else {
        notice.innerHTML = failed;
      }
    } catch (error) {
      console.error("Error saving table:", error);
    } finally {
      btn.disabled = false;
      
	  //console.clear();
    }
  });
}

function closeModal(el) {
  const modal = el.closest('#modal, .k8-popup');
  if (!modal) return;
   v_blur();
 document.querySelector('#modal .body').innerHTML=` <span class="xloader">L &nbsp; ading</span>`;
  modal.style.display = 'none';
}

function epoachjs(epochTime){
	const date = new Date(epochTime * 1000); // Convert seconds to milliseconds

        // Extract date components
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
        const day = String(date.getDate()).padStart(2, '0');

        // Extract time components
        let hours = date.getHours();
        const minutes = String(date.getMinutes()).padStart(2, '0');

        // Determine AM or PM
        const ampm = hours >= 12 ? 'PM' : 'AM';

        // Convert to 12-hour format
        //hours = hours % 12 || 12; // Convert 0 to 12 for midnight

        // Format as "YYYY-MM-DD HH:mm AM/PM"
        return `${day}-${month}-${year}, ${hours}:${minutes} ${ampm}`;

}

function selectElement(id, valueToSelect) {    
    let element = document.getElementById(id);
    element.value = valueToSelect;
}
// Close the sidebar with the close button
function k8_close() {
  mySidebar.style.display = "none";
  overlayBg.style.display = "none";
}

function v_blur(){
const blr=document.getElementsByClassName('k8-blur');
for (let i = 0; i < blr.length; i++) { 
if(blr[i].style.display==="block"){
	blr[i].style.display="none";
}else{
blr[i].style.display="block";
}}}
 function openInNewTab(imageElement) {
	 //console.log(imageElement.src);
      window.open(imageElement.src, '_blank');
    }
function wclose(el){
	el.parentNode.parentNode.remove();
}

function cfm(el){
	var qs=el.getAttribute('data-q');
	var atrue=el.getAttribute('data-true');
	var afalse=el.getAttribute('data-false');
	var dp='"none"';
	var html=qs +"<a href='"+atrue+"' class='k8-btn k8-green' style='margin-left:8px;'>YES</a><a href='"+afalse+"' style='margin-left:8px;' onclick='this.parentNode.parentNode.parentNode.parentNode.parentNode.style.display="+dp+";' class='k8-btn k8-red'>NO</a>";
	
	
	document.getElementsByClassName("ddata")[0].innerHTML=html;
	document.getElementsByClassName("tnot")[0].style.display="block";
	
}
function pview(el){ /*PASSWORD VIEW*/
if(el.previousElementSibling.type==="password"){
	el.previousElementSibling.type="text";
	el.children[0].classList.remove("fa-eye");
	el.children[0].classList.add("fa-eye-slash");
}else{
	el.previousElementSibling.type="password";
	el.children[0].classList.remove("fa-eye-slash");
	el.children[0].classList.add("fa-eye");
}

}
function confirm_action(el){
	var qs=el.getAttribute('data-qs');
	var atrue=el.getAttribute('data-true');
	var afalse=el.getAttribute('data-false');
	var dp='"none"';
	var html=qs +"<a href='"+atrue+"' class='k8-btn k8-green' style='margin-left:8px;'>YES</a><a href='"+afalse+"' style='margin-left:8px;' onclick='this.parentNode.parentNode.parentNode.parentNode.parentNode.style.display="+dp+";' class='k8-btn k8-red'>NO</a>";
	
	
	document.getElementsByClassName("ddata")[0].innerHTML=html;
	document.getElementsByClassName("tnot")[0].style.display="block";
	
}


window.addEventListener('load', () => {
  const loader = document.querySelector('.k8-loader');
  if (!loader) return;

  loader.style.transition = 'opacity 0.4s ease';

  setTimeout(() => {
    loader.style.opacity = '0';
    setTimeout(() => loader.style.display = 'none', 400);
  }, 1000);
});
	
$(document).ready(function() { 
   setTimeout(function() { 
    $('.autoHide').hide(); 
  }, 10000);	
  
});

function makeDragable(dragHandle) {

  let dragObj = null;
  let xOffset = 0;
  let yOffset = 0;

  const handles = document.querySelectorAll(dragHandle);

  handles.forEach(handle => {
    const target = handle.closest("#modal");
    target.style.zIndex = target.style.zIndex || "200";

    handle.addEventListener("mousedown", startDrag);
    handle.addEventListener("touchstart", startDrag, { passive: false });

    function startDrag(e) {
      e.preventDefault();
      e.stopPropagation();

      dragObj = target;
      dragObj.style.position = "fixed";
      dragObj.style.transform = "none";

      const rect = dragObj.getBoundingClientRect();

      if (e.type === "mousedown") {
        xOffset = e.clientX - rect.left;
        yOffset = e.clientY - rect.top;
        dragObj.style.zIndex = (+dragObj.style.zIndex || 200) + 1;

        window.addEventListener("mousemove", dragMove);
        window.addEventListener("mouseup", stopDrag);
      } else {
        xOffset = e.touches[0].clientX - rect.left;
        yOffset = e.touches[0].clientY - rect.top;
        dragObj.style.zIndex = (+dragObj.style.zIndex || 200) + 1;

        window.addEventListener("touchmove", dragMove, { passive: false });
        window.addEventListener("touchend", stopDrag);
      }
    }
  });

  function dragMove(e) {
    if (!dragObj) return;

    e.preventDefault();

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    const maxX = window.innerWidth - dragObj.offsetWidth;
    const maxY = window.innerHeight - dragObj.offsetHeight;

    dragObj.style.left = Math.max(0, Math.min(clientX - xOffset, maxX)) + "px";
    dragObj.style.top  = Math.max(0, Math.min(clientY - yOffset, maxY)) + "px";
  }

  function stopDrag() {
    dragObj = null;
    window.removeEventListener("mousemove", dragMove);
    window.removeEventListener("mouseup", stopDrag);
    window.removeEventListener("touchmove", dragMove);
    window.removeEventListener("touchend", stopDrag);
  }
}




function show(formId) {
    document.getElementById(formId).style.display = 'block';
	
}

function hide(formId) {
    document.getElementById(formId).style.display = 'none';
}

function showimg(el){
document.getElementsByClassName("k8-box")[0].style.display="block";	
document.getElementsByClassName("k8-box")[0].querySelector(".wbody").style="text-align:center;";
document.getElementsByClassName("k8-box")[0].querySelector(".wbody").innerHTML="<img src='data:image/jpeg;base64,"+ el.value+"' style='width:100%;height:100%;border:1px solid #eee;object-fit: contain;'/>";
}

function addwin(el){
document.getElementsByClassName("k8-box")[0].style.display="block";	
document.getElementsByClassName("k8-box")[0].querySelector(".whead").querySelector("SPAN").innerHTML=el.getAttribute('data-title');
document.getElementsByClassName("k8-box")[0].querySelector(".wbody").style="text-align:center;";
document.getElementsByClassName("k8-box")[0].querySelector(".wbody").innerHTML=el.getAttribute('data-html');
}

function userform(el){
document.getElementsByClassName("k8-box")[0].style.display="block";	
document.getElementsByClassName("k8-box")[0].querySelector(".whead").querySelector("SPAN").innerHTML='EDIT USER -'+el.getAttribute('data-uid');
document.getElementsByClassName("k8-box")[0].querySelector(".wbody").style="text-align:center;";
var html;
html=''+atob(el.getAttribute('data-addr'))+el.getAttribute('data-fname')+el.getAttribute('data-uname')+atob(el.getAttribute('data-gid'))+el.getAttribute('data-type')+el.getAttribute('data-verify');
document.getElementsByClassName("k8-box")[0].querySelector(".wbody").innerHTML=html;
}

//SEARCH TABLE TABLE DIVS
function searchTableDivs(input) {
    var filter, found, containers, rows, cols, i, j;
    filter = input.value.toUpperCase(); // convert input to uppercase
    var inputs = document.getElementsByClassName("filter");
    var index = Array.from(inputs).indexOf(input);
    containers = document.getElementsByClassName("sctable"); // container for div "table"

    if(!containers[index]){
        index = 0;    
    }

    rows = containers[index].getElementsByClassName("k8-row");

    for (i = 0; i < rows.length; i++) {
        cols = rows[i].getElementsByClassName("k8-col");
        found = false;
        for (j = 0; j < cols.length; j++) {
            if(cols[j].textContent.toUpperCase().indexOf(filter) > -1){
                found = true;
                break;
            }
        }
        rows[i].style.display = found ? "" : "none";
    }
}
document.addEventListener("click", function(e){
  const openBtn = e.target.closest("[data-k8-modal]");
  if(openBtn){
    const target = document.querySelector(openBtn.dataset.k8Modal);
    if(target) target.style.display = "block";
  }

  const closeBtn = e.target.closest("[data-k8-close]");
  if(closeBtn){
    closeBtn.closest(".k8-modal, .k8-popup").style.display = "none";
  }
});
function k8Tabs(container){
  const tabs = container.querySelectorAll("[data-k8-tab]");
  const panels = container.querySelectorAll("[data-k8-panel]");

  tabs.forEach(tab=>{
    tab.addEventListener("click", ()=>{
      const target = tab.dataset.k8Tab;

      tabs.forEach(t=>t.classList.remove("k8-theme"));
      panels.forEach(p=>p.style.display="none");

      tab.classList.add("k8-theme");
      container.querySelector(target).style.display="block";
    });
  });
}

document.querySelectorAll(".k8-tabs").forEach(k8Tabs);
document.addEventListener("click", e=>{
  const head = e.target.closest(".k8-acc-header");
  if(!head) return;

  const item = head.parentElement;
  item.classList.toggle("active");
});
function k8Toast(msg,type="theme",time=3000){
  const box = document.createElement("div");
  box.className = `k8-toast k8-${type}`;
  box.innerHTML = msg;

  document.body.appendChild(box);

  setTimeout(()=>box.remove(), time);
}
function k8Drawer(id){
  const el = document.querySelector(id);
  el.classList.toggle("active");
}
document.addEventListener("mouseover", e=>{
  const el = e.target.closest("[data-k8-tip]");
  if(!el) return;

  const tip = document.createElement("div");
  tip.className = "k8-tooltip-text";
  tip.innerText = el.dataset.k8Tip;
  el.appendChild(tip);
});

function searchTable(input) {
    var  filter, found, table, tr, td, i, j;
    filter = input.value.toUpperCase();
	var inputs = document.getElementsByClassName("filter");
	index = Array.from(inputs).indexOf(input);
	 table = document.getElementsByClassName("sctable");
	 
	 
	if(!table[index]){
	index = 0;	    
	}
		
    tr = table[index].getElementsByTagName("tr");
	
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td");
        for (j = 0; j < td.length; j++) {
            if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
                found = true;
            }
        }
        if (found) {
            tr[i].style.display = "";
            found = false;
        } else {
            tr[i].style.display = "none";
        }
    }
}

function setfilter(el){
document.getElementById("filter").value=el.id;	
searchTable();
}

