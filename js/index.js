let name = document.getElementsByClassName('name-choose');
let img = document.querySelector('.right .img-wrapper img');
let key = 0, keyInterval = 0;
let circle = document.getElementById('circle-check');

keyChange(key);
name[0].onclick= function(){
    key = 0;
    keyChange(key);
    openCloseImage(key);
    keyInterval = 4;
}
name[1].onclick= function(){
    key = 1;
    keyChange(key);
    openCloseImage(key);
    keyInterval = 4;
}
name[2].onclick= function(){
    key = 2;
    keyChange(key);
    openCloseImage(key);
    keyInterval = 4;
}
name[3].onclick= function(){
    key = 3;
    keyChange(key);
    openCloseImage(key);
    keyInterval = 4;
}

function keyChange(key){
    if(key==0){
        document.getElementsByClassName('name')[0].style.color = "#333";
        document.getElementsByClassName('name')[1].style.color = null;
        document.getElementsByClassName('name')[2].style.color = null;
        document.getElementsByClassName('name')[3].style.color = null;
        circle.style.left = "11%";
        circle.style.transition = "0.5s ease-out"
        document.getElementById('name-sub-text').innerHTML = "Vazy, ipsum dolor sit amet consectetur adipisicing elit. Error esse repellendus porro quo vitae accusantium rem est, veritatis debitis incidunt dolores. Illo neque odit, temporibus pariatur voluptate itaque eius eligendi.";
    }
    if(key==1){
        document.getElementsByClassName('name')[0].style.color = null;
        document.getElementsByClassName('name')[1].style.color = "#333";
        document.getElementsByClassName('name')[2].style.color = null;
        document.getElementsByClassName('name')[3].style.color = null;
        circle.style.left = "38%";
        circle.style.transition = "0.5s ease-out"
        document.getElementById('name-sub-text').innerHTML = "MeomaikA, ipsum dolor sit amet consectetur adipisicing elit. Error esse repellendus porro quo vitae accusantium rem est, veritatis debitis incidunt dolores. Illo neque odit, temporibus pariatur voluptate itaque eius eligendi.";
    }
    if(key==2){
        document.getElementsByClassName('name')[0].style.color= null;
        document.getElementsByClassName('name')[1].style.color= null;
        document.getElementsByClassName('name')[2].style.color = "#333";
        document.getElementsByClassName('name')[3].style.color= null;
        circle.style.left = "62%";
        circle.style.transition = "0.5s ease-out"
        document.getElementById('name-sub-text').innerHTML = "Tracy, ipsum dolor sit amet consectetur adipisicing elit. Error esse repellendus porro quo vitae accusantium rem est, veritatis debitis incidunt dolores. Illo neque odit, temporibus pariatur voluptate itaque eius eligendi.";
    }
    if(key==3){
        document.getElementsByClassName('name')[0].style.color= null;
        document.getElementsByClassName('name')[1].style.color= null;
        document.getElementsByClassName('name')[2].style.color= null;
        document.getElementsByClassName('name')[3].style.color = "#333";
        circle.style.bottom = "0";
        circle.style.left = "86%";
        circle.style.transition = "0.5s ease-out"
        document.getElementById('name-sub-text').innerHTML = "LoqCa, ipsum dolor sit amet consectetur adipisicing elit. Error esse repellendus porro quo vitae accusantium rem est, veritatis debitis incidunt dolores. Illo neque odit, temporibus pariatur voluptate itaque eius eligendi.";
    }
}
function keyImage(key){
    if(key==0){
        img.src = "img/vazy-art.png";
        img.alt = "Vazy";
    }
    if(key==1){
        img.src = "img/meomaika-art.jpg";
        img.alt = "MeomaikA";
    }
    if(key==2){
        img.src = "img/tracy-art.png";
        img.alt = "Tracy";
    }
    if(key==3){
        img.src = "img/longca-art.jpg";
        img.alt = "LoqCa";
    }
}
function openCloseImage(x){
    myCallBack(x); 
    
}
function myCallBack(x){
    setTimeout(function(){
        document.getElementById('hidden-box').style.display="block";
    },100)
    document.getElementById('hidden-box').style.display="none";
    setTimeout(function(){
        keyImage(x); 
    },500) 
}

function autoChangeImange(){
    setInterval(function(){
        if(keyInterval<=3){
            keyInterval++;
            openCloseImage(keyInterval);
            keyChange(keyInterval);
            if(keyInterval==3){
                keyInterval=-1;
            }
        }    
    }, 3000);
}
autoChangeImange();


