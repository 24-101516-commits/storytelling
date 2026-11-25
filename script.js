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
storyImage.style.animation = "storyZoom 2s linear both";
if(playing == false){
storyImage.style.animationPlayState = "paused";
}
if(language == "ar"){
chapterTitle.textContent = currentChapter.title_ar;
chapterDescription.textContent = currentChapter.summary_ar;
chapterLabel.textContent = "الفصل " + (currentShot.chapter + 1);
storyImage.alt = currentChapter.title_ar;
}else{
chapterTitle.textContent = currentChapter.title;
chapterDescription.textContent = currentChapter.summary;
chapterLabel.textContent = "CHAPTER " + (currentShot.chapter + 1);
storyImage.alt = currentChapter.title;
}
filmCount.textContent = (index + 1) + " / " + shots.length;
filmProgress.style.width = ((index + 1) / shots.length * 100) + "%";
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
nextBtn.onclick = function(){
nextScene();
};
prevBtn.onclick = function(){
previousScene();
};
playBtn.onclick = function(){
if(playing == true){
playing = false;
playBtn.textContent = "▶";
storyImage.style.animationPlayState = "paused";
}else{
playing = true;
playBtn.textContent = "Ⅱ";
storyImage.style.animationPlayState = "running";
}
};
setInterval(function(){
let position = film.getBoundingClientRect();
if(playing == true && position.top < window.innerHeight && position.bottom > 0){
nextScene();
}
},duration);
showScene();