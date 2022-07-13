
// Test Performance 
let p1 = performance.now();
//==================================   add Section 4  =================================  
let sec4section = document.createElement("section");
sec4section.setAttribute("id" , "section4");
sec4section.setAttribute("data-nav" , "Section 4");

let sec4div = document.createElement("div");
sec4div.setAttribute("class" , "landing__container");
sec4div.style.textAlign = "right";
//inside Div 
let sec4heading = document.createElement("h2");
sec4heading.textContent = "Section 4";
sec4div.appendChild(sec4heading);
let sec4p1 = document.createElement("p");
sec4p1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.";
let sec4p2 = document.createElement("p");
sec4p2.textContent = "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.";

sec4div.appendChild(sec4p1);
sec4div.appendChild(sec4p2);


sec4section.appendChild(sec4div);
let appendonsection3 = document.getElementById("section3");
appendonsection3.parentElement.appendChild(sec4section);


// =====================================  Nav Bar ============================ 
let navbarui = document.getElementById('navbar__list');

let navbaritem1 = document.createElement('li');
navbaritem1.textContent = "Section 1";
let navbaritem2 = document.createElement('li');
navbaritem2.textContent = "Section 2";
let navbaritem3 = document.createElement('li');
navbaritem3.textContent = "Section 3";
let navbaritem4 = document.createElement('li');
navbaritem4.textContent = "Section 4";

 // --------------------------------  Nav Bar Styling ----------------- 

navbarui.appendChild(navbaritem1);
navbarui.appendChild(navbaritem2);
navbarui.appendChild(navbaritem3);
navbarui.appendChild(navbaritem4);

// ------------------------------------- Scroll Into A Section ------------------------
navbaritem4.addEventListener('click' , function(){
   sec4section.scrollIntoView({behavior: "smooth"});
});
navbaritem3.addEventListener('click' , function(){
    sec3section.scrollIntoView({behavior: "smooth"});
 });
 navbaritem2.addEventListener('click' , function(){
    sec2section.scrollIntoView({behavior: "smooth"});
 });
 navbaritem1.addEventListener('click' , function(){
    sec1section.scrollIntoView({behavior: "smooth"});
 });
// -------------------------- Find All Sections ------------------- 


sec1section = document.getElementById('section1');
sec2section = document.getElementById('section2');
sec3section = document.getElementById('section3');



// ----------------------------------- Active Section ---------------------------------   
document.addEventListener('scroll' , function(){
    if(sec4section.getBoundingClientRect().top < 120   )
    {
        sec4section.classList.add("your-active-class");
        navbaritem4.setAttribute('style' , " background-color: black ; color: white;")
    }
    else    
    {
        sec4section.classList.remove("your-active-class");
        navbaritem4.setAttribute('style' , "  display: inline-block ;font-family: 'Fira Sans', sans-serif;font-weight: bold;padding: 20px;")

    }
   

    if(sec1section.getBoundingClientRect().top < 470  &&sec1section.getBoundingClientRect().top  > -28)
    {
        sec1section.classList.add("your-active-class");
        navbaritem1.setAttribute('style' , " background-color: black ; color: white;")
    }
    else   
    {
    sec1section.classList.remove("your-active-class");
    navbaritem1.setAttribute('style' , "   display: inline-block;font-family: 'Fira Sans', sans-serif;font-weight: bold;padding: 20px;")
    }
    if(sec2section.getBoundingClientRect().top < 177 && sec2section.getBoundingClientRect().top  > -222 )
    {
    sec2section.classList.add("your-active-class");
    navbaritem2.setAttribute('style' , " background-color: black ; color: white;")
    }
    else  
    {
        sec2section.classList.remove("your-active-class");
        navbaritem2.setAttribute('style' , "   display: inline-block;font-family: 'Fira Sans', sans-serif;font-weight: bold;padding: 20px;")
    }  
   

    if(sec3section.getBoundingClientRect().top < 170  && sec3section.getBoundingClientRect().top >-221|| sec3section.getBoundingClientRect().top == 0)
    {
        sec3section.classList.add("your-active-class");
        navbaritem3.setAttribute('style' , " background-color: black ; color: white;")
    }
    
    else    
    {
        sec3section.classList.remove("your-active-class");
        navbaritem3.setAttribute('style' , "   display: inline-block;font-family: 'Fira Sans', sans-serif;font-weight: bold;padding: 20px;")
    }
    
})
//test Performance 
let p2 = performance.now();
console.log("Performance Is : " + (p2 - p1) );