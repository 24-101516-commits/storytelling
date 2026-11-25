let langBtn = document.getElementById("lang");
let language = "en";
let elements = document.querySelectorAll("[data-en]");
let images = document.querySelectorAll("[data-alt-en]");
langBtn.onclick = function(){
if(language == "en"){
language = "ar";
langBtn.textContent = "EN";
document.documentElement.lang = "ar";
document.documentElement.dir = "rtl";
document.title = "سنو وايت - كتاب الحكايات المسحورة";
}else{
language = "en";
langBtn.textContent = "AR";
document.documentElement.lang = "en";
document.documentElement.dir = "ltr";
document.title = "Snow White - The Enchanted Storybook";
}
for(let i = 0; i < elements.length; i++){
elements[i].textContent = elements[i].getAttribute("data-" + language);
}
for(let i = 0; i < images.length; i++){
images[i].alt = images[i].getAttribute("data-alt-" + language);
}
showScene();
};
let chapters = [
{
title:"Once Upon a Time",
title_ar:"بداية الحكاية",
summary:"Snow White lives with her jealous stepmother, the Queen. Despite her hardships, she remains kind and dreams of happiness.",
summary_ar:"تعيش سنو وايت مع زوجة أبيها الملكة الغيورة. ورغم الصعوبات تظل طيبة وتحلم بالسعادة."
},
{
title:"Mirror, Mirror",
title_ar:"المرآة السحرية",
summary:"The magic mirror declares Snow White the fairest of all. Overcome with jealousy, the Queen plots against her.",
summary_ar:"تعلن المرآة السحرية أن سنو وايت هي الأجمل. فتشتعل غيرة الملكة وتدبر لها مكيدة."
},
{
title:"Escape from the Castle",
title_ar:"الهروب من القصر",
summary:"The Queen sends a huntsman to harm Snow White. He takes pity on her and tells her to escape into the forest.",
summary_ar:"ترسل الملكة صيادًا لإيذاء سنو وايت. لكنه يشفق عليها ويطلب منها الهرب إلى الغابة."
},
{
title:"The Enchanted Forest",
title_ar:"الغابة المسحورة",
summary:"Lost and frightened, Snow White meets friendly woodland animals. They comfort her and guide her to safety.",
summary_ar:"تضل سنو وايت طريقها وتلتقي بحيوانات الغابة الودودة. فتطمئنها وتقودها إلى مكان آمن."
},
{
title:"The Hidden Cottage",
title_ar:"الكوخ الخفي",
summary:"Snow White discovers a little cottage in the woods. With her animal friends, she cleans it and finds shelter.",
summary_ar:"تكتشف سنو وايت كوخًا صغيرًا في الغابة. تنظفه بمساعدة الحيوانات وتجد فيه مأوى."
},
{
title:"The Seven Dwarfs",
title_ar:"الأقزام السبعة",
summary:"Seven dwarfs return from their mine and discover Snow White. They hear her story and promise to protect her.",
summary_ar:"يعود الأقزام السبعة من المنجم ويكتشفون سنو وايت. يستمعون إلى قصتها ويعدونها بالحماية."
},
{
title:"A Moment of Happiness",
title_ar:"لحظة من السعادة",
summary:"Snow White and the dwarfs sing and dance together. Their joyful evenings make the cottage feel like home.",
summary_ar:"تغني سنو وايت وترقص مع الأقزام. وتملأ أمسياتهم السعيدة الكوخ بالدفء."
},
{
title:"The Queen's Transformation",
title_ar:"تحول الملكة",
summary:"The Queen discovers that Snow White is alive. She prepares a potion and transforms herself into an old woman.",
summary_ar:"تكتشف الملكة أن سنو وايت لا تزال حية. فتحضر جرعة سحرية وتحول نفسها إلى امرأة عجوز."
},
{
title:"The Poisoned Apple",
title_ar:"التفاحة المسمومة",
summary:"Disguised as an old woman, the Queen visits the cottage. She offers Snow White an apple carrying a sleeping curse.",
summary_ar:"تزور الملكة الكوخ متنكرة في هيئة عجوز. وتقدم لسنو وايت تفاحة تحمل لعنة النوم."
},
{
title:"The Sleeping Princess",
title_ar:"الأميرة النائمة",
summary:"Snow White bites the apple and falls into a magical sleep. The grieving dwarfs lay her in a glass coffin surrounded by flowers.",
summary_ar:"تقضم سنو وايت التفاحة وتغرق في نوم سحري. ويضعها الأقزام الحزينون في تابوت زجاجي تحيط به الزهور."
},
{
title:"Breaking the Curse",
title_ar:"كسر اللعنة",
summary:"The Prince finds Snow White and the sleeping curse is broken. She awakens, bringing hope back to her friends.",
summary_ar:"يجد الأمير سنو وايت وتنكسر لعنة النوم. فتستيقظ ويعود الأمل إلى أصدقائها."
},
{
title:"Happily Ever After",
title_ar:"النهاية السعيدة",
summary:"Snow White says goodbye to the dwarfs and begins a new life with the Prince. Together they travel toward a beautiful castle.",
summary_ar:"تودع سنو وايت الأقزام وتبدأ حياة جديدة مع الأمير. ويتجهان معًا نحو قصر جميل."
}
];
let sequences = [[1,2],[4,5],[6],[7],[8],[9,10],[11,12],[13,14,15],[16,17],[18],[19,20],[21,22]];
let shots = [];
let index = 0;
let playing = true;
let duration = 2000;
let storyImage = document.getElementById("story-image");
let chapterTitle = document.getElementById("chapter-title");
let chapterDescription = document.getElementById("chapter-description");
let chapterLabel = document.getElementById("chapter-label");
let filmCount = document.getElementById("film-count");
let filmProgress = document.getElementById("film-progress");
let film = document.getElementById("film");
let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");
let playBtn = document.getElementById("play-film");
let chapterButtons = document.querySelectorAll(".chapter-btn");
let restartBtn = document.getElementById("restart-story");
for(let i = 0; i < sequences.length; i++){
for(let j = 0; j < sequences[i].length; j++){
shots.push({
image:sequences[i][j],
chapter:i
});
}
}
function showScene(){
let currentShot = shots[index];
let currentChapter = chapters[currentShot.chapter];
storyImage.src = "img/img " + currentShot.image + ".png";
storyImage.style.animation = "none";
storyImage.offsetWidth;
storyImage.style.animation = "cinematicScene " + duration + "ms linear both";
if(playing == false){
storyImage.style.animationPlayState = "paused";
}else{
storyImage.style.animationPlayState = "running";
}
if(language == "ar"){
chapterTitle.textContent = currentChapter.title_ar;
chapterDescription.textContent = currentChapter.summary_ar;
chapterLabel.textContent = "الفصل " + (currentShot.chapter + 1);
storyImage.alt = currentChapter.title_ar;
prevBtn.setAttribute("aria-label","المشهد السابق");
nextBtn.setAttribute("aria-label","المشهد التالي");
}else{
chapterTitle.textContent = currentChapter.title;
chapterDescription.textContent = currentChapter.summary;
chapterLabel.textContent = "CHAPTER " + (currentShot.chapter + 1);
storyImage.alt = currentChapter.title;
prevBtn.setAttribute("aria-label","Previous scene");
nextBtn.setAttribute("aria-label","Next scene");
}
filmCount.textContent = (index + 1) + " / " + shots.length;
filmProgress.style.width = ((index + 1) / shots.length * 100) + "%";
updateChapters();
updatePlayButton();
}
function nextScene(){
if(index < shots.length - 1){
index++;
}else{
index = 0;
}
showScene();
}
function previousScene(){
if(index > 0){
index--;
}else{
index = shots.length - 1;
}
showScene();
}
function updatePlayButton(){
if(playing == true){
playBtn.textContent = "Ⅱ";
if(language == "ar"){
playBtn.setAttribute("aria-label","إيقاف الحكاية مؤقتًا");
}else{
playBtn.setAttribute("aria-label","Pause story");
}
}else{
playBtn.textContent = "▶";
if(language == "ar"){
playBtn.setAttribute("aria-label","تشغيل الحكاية");
}else{
playBtn.setAttribute("aria-label","Play story");
}
}
}
nextBtn.onclick = function(){
nextScene();
};
prevBtn.onclick = function(){
previousScene();
};
playBtn.onclick = function(){
if(playing == true){
playing = false;
storyImage.style.animationPlayState = "paused";
}else{
playing = true;
storyImage.style.animationPlayState = "running";
}
updatePlayButton();
};
function updateChapters(){
let currentChapter = shots[index].chapter;
for(let i = 0; i < chapterButtons.length; i++){
chapterButtons[i].classList.remove("active");
chapterButtons[i].removeAttribute("aria-current");
if(i == currentChapter){
chapterButtons[i].classList.add("active");
chapterButtons[i].setAttribute("aria-current","true");
}
}
}
function selectChapter(chapterNumber){
for(let i = 0; i < shots.length; i++){
if(shots[i].chapter == chapterNumber){
index = i;
break;
}
}
showScene();
}
for(let i = 0; i < chapterButtons.length; i++){
chapterButtons[i].onclick = function(){
selectChapter(i);
film.scrollIntoView({
behavior:"smooth",
block:"center"
});
};
}
restartBtn.onclick = function(){
index = 0;
playing = true;
showScene();
film.scrollIntoView({
behavior:"smooth",
block:"center"
});
};
document.onkeydown = function(event){
let position = film.getBoundingClientRect();
if(event.target.tagName == "INPUT" || event.target.tagName == "TEXTAREA" || event.target.tagName == "BUTTON" || event.target.tagName == "A"){
return;
}
if(position.top < window.innerHeight && position.bottom > 0){
if(event.key == "ArrowRight"){
event.preventDefault();
nextScene();
}
if(event.key == "ArrowLeft"){
event.preventDefault();
previousScene();
}
if(event.key == " "){
event.preventDefault();
playBtn.click();
}
}
};
setInterval(function(){
let position = film.getBoundingClientRect();
if(playing == true && position.top < window.innerHeight && position.bottom > 0){
nextScene();
}
},duration);
showScene();
let newsletter = document.getElementById("newsletter");
let email = document.getElementById("email");
let formStatus = document.getElementById("form-status");
newsletter.onsubmit = function(event){
event.preventDefault();
if(language == "ar"){
formStatus.textContent = "شكرًا! تم تسجيل اشتراكك تجريبيًا.";
}else{
formStatus.textContent = "Thank you! Your demo subscription is complete.";
}
email.value = "";
};
langBtn.addEventListener("click",function(){
if(language == "ar"){
email.placeholder = "أدخل بريدك الإلكتروني";
email.setAttribute("aria-label","البريد الإلكتروني");
}else{
email.placeholder = "Enter your email";
email.setAttribute("aria-label","Email address");
}
formStatus.textContent = "";
});
let music = document.getElementById("bg-music");
let musicBtn = document.getElementById("music-btn");
musicBtn.onclick = function(){
if(music.paused){
music.play();
musicBtn.textContent = "Ⅱ";
}else{
music.pause();
musicBtn.textContent = "♫";
}
};