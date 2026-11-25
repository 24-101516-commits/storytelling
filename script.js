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
};