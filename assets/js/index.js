//this not private environment 
const input = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
if (input && searchBtn) {
const cards = document.querySelectorAll(".hero-card, .feed-card");
function cariBerita() {
const keyword = input.value.trim().toLowerCase();
cards.forEach(card => {
const isi = card.textContent.toLowerCase();
card.style.display =
keyword === "" || isi.includes(keyword)
? ""
: "none";
});
}
input.addEventListener("input", cariBerita);
searchBtn.addEventListener("click", cariBerita);
}

//this not private environment 
window.addEventListener("load", () => {
setTimeout(() => {
const loader = document.getElementById("loader");
if(loader){
loader.classList.add("hide");
}
},500);
});

//this not private environment 
const feedCards = document.querySelectorAll(".feed-card");
const pagination = document.getElementById("pagination");
if(feedCards.length > 0 && pagination){
const perPage = 5;
const pageLimit = 10;
let currentPage = 1;
function showPage(page){
currentPage = page;
feedCards.forEach((card,index)=>{
const start=(page-1)*perPage;
const end=start+perPage;
card.style.display =
(index>=start && index<end)
? "flex"
: "none";
});
renderPagination();
}
function renderPagination(){
const totalPages=Math.ceil(feedCards.length/perPage);
pagination.innerHTML="";
const currentGroup=Math.floor((currentPage-1)/pageLimit);
const startPage=currentGroup*pageLimit+1;
const endPage=Math.min(startPage+pageLimit-1,totalPages);
if(startPage>1){
const prev=document.createElement("button");
prev.textContent="←";
prev.onclick=()=>showPage(startPage-pageLimit);
pagination.appendChild(prev);
}
for(let i=startPage;i<=endPage;i++){
const btn=document.createElement("button");
btn.textContent=i;
if(i===currentPage){
btn.classList.add("active");
}
btn.onclick=()=>showPage(i);
pagination.appendChild(btn);
}
if(endPage<totalPages){
const next=document.createElement("button");
next.textContent="→";
next.onclick=()=>showPage(endPage+1);
pagination.appendChild(next);
}
}
showPage(1);
}

//this not private environment 
const pageUrl = encodeURIComponent(window.location.href);
const pageTitle = encodeURIComponent(document.title);
const wa = document.getElementById("share-whatsapp");
const tg = document.getElementById("share-telegram");
const fb = document.getElementById("share-facebook");
const x = document.getElementById("share-x");
if(wa){
wa.href=`https://wa.me/?text=${pageTitle}%20${pageUrl}`;
}
if(tg){
tg.href=`https://t.me/share/url?url=${pageUrl}&text=${pageTitle}`;
}
if(fb){
fb.href=`https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
}
if(x){
x.href=`https://twitter.com/intent/tweet?text=${pageTitle}&url=${pageUrl}`;
}

//this not private environment 
const article=document.querySelector(".article");
if(article){
const words=article.innerText.trim().split(/\s+/).length;
const minutes=Math.max(1,Math.ceil(words/200));
const reading=document.getElementById("reading-time");
if(reading){
reading.textContent=`⏱️ Dibaca sekitar ${minutes} menit`;
}
}

//this not private environment 
const copy=document.getElementById("copyLink");
if(copy){
copy.onclick=async()=>{
try{
await navigator.clipboard.writeText(window.location.href);
copy.textContent="✓ Link berhasil disalin";
setTimeout(()=>{
copy.textContent="Salin Link Berita";
},2000);
}catch(e){
alert("Browser tidak mendukung fitur salin.");
}
};
}

//this not private environment 
const topBtn=document.getElementById("topBtn");
if(topBtn){
window.addEventListener("scroll",()=>{
topBtn.style.display=
window.scrollY>300
? "block"
: "none";
});
topBtn.onclick=()=>{
window.scrollTo({
top:0,
behavior:"smooth"
});
};
}

//this not private environment 
document.addEventListener('copy', function(e) {
const selection = window.getSelection();
const selectedText = selection.toString();
const pageUrl = window.location.href;
const attribution = '\n\nSumber Informasi Terpercaya Anda: ' + pageUrl;
const finalText = selectedText + attribution;
e.clipboardData.setData('text/plain', finalText);
e.preventDefault();
});
