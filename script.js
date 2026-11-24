let menu1=document.querySelector("#menu1");
let menu2=document.querySelector("#menu2");
let menu3=document.querySelector("#menu3");
let menu4=document.querySelector("#menu4");
let menu5=document.querySelector("#menu5");

        //마우스 올렸을 때
        menu1.addEventListener("mouseover", function(){
        menu1.style.backgroundColor="gray";
        });
        menu2.addEventListener("mouseover", function(){
        menu2.style.backgroundColor="gray";
        });
        menu3.addEventListener("mouseover", function(){
        menu3.style.backgroundColor="gray";
        });
        menu4.addEventListener("mouseover", function(){
        menu4.style.backgroundColor="gray";
        });
        menu5.addEventListener("mouseover", function(){
        menu5.style.backgroundColor="gray";
        });

        //마우스 벗어났을 때
        menu1.addEventListener("mouseout", function(){
        menu1.style.backgroundColor="black";
        });
        menu2.addEventListener("mouseout", function(){
        menu2.style.backgroundColor="black";
        });
        menu3.addEventListener("mouseout", function(){
        menu3.style.backgroundColor="black";
        });
        menu4.addEventListener("mouseout", function(){
        menu4.style.backgroundColor="black";
        });
        menu5.addEventListener("mouseout", function(){
        menu5.style.backgroundColor="black";
        });

let quick=document.querySelector("#quick");

        //마우스 올렸을 때
        quick.addEventListener("mouseover", function(){
        quick.style.backgroundColor="skyblue";
        });

        //마우스 벗어났을 때
        quick.addEventListener("mouseout", function(){
        quick.style.backgroundColor="white";
        });

let quick2=document.querySelector("#quick2");

        //마우스 올렸을 때
        quick2.addEventListener("mouseover", function(){
        quick2.style.backgroundColor="skyblue";
        });

        //마우스 벗어났을 때
        quick2.addEventListener("mouseout", function(){
        quick2.style.backgroundColor="white";
        });