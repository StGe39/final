//변수 선언
const design = document.querySelector("#design");
const publishing = document.querySelector("#publishing");
const plan = document.querySelector("#plan");
const profile = document.querySelector("#profile");

const designLeft = document.querySelector(".designLeft");
const publishingLeft = document.querySelector(".publishingLeft");
const planLeft = document.querySelector(".planLeft");
const profileLeft = document.querySelector(".profileLeft");

const designPaper = designLeft.querySelector(".coverLeft>.paperLeft>img");
const publishingPaper = publishingLeft.querySelector(".coverLeft>.paperLeft>img");
const planPaper = planLeft.querySelector(".coverLeft>.paperLeft>img");
const profilePaper = profileLeft.querySelector(".coverLeft>.paperLeft>img");

const designLock = document.querySelector(".designRight>.coverRight>.coverLock>img");
const publishingLock = document.querySelector(".publishingRight>.coverRight>.coverLock>img");
const planLock = document.querySelector(".planRight>.coverRight>.coverLock>img");
const profileLock = document.querySelector(".profileRight>.coverRight>.coverLock>img");

const designList = document.querySelector(".designLeft>.coverLeft>.listArea");

let chk =true;

function designOpen(){
  if(chk === true){
    publishing.style.transform= "translateX(3000px)";
    plan.style.transform= "translate(3000px)";
    profile.style.transform= "translate(3000px)";

    designLeft.style.transformOrigin = "0";
    design.style.transform = "scale(3) translateX(50%)";
    designLeft.style.transform = "rotateX(0deg)";
    designLeft.style.transformOrigin = "100% 0";
    designPaper.style.zIndex = "2000";

    designLock.style.transformOrigin = "100% 0";
    designLock.style.transform = "rotateY(90deg)" 
    
    chk = false;
  }
  else{
    publishing.style.transform = "translateX(-25%)";
    plan.style.transform = "translateX(-25%)";
    profile.style.transform= "translateX(-25%)";

    designLeft.style.transformOrigin = "0";
    design.style.transform = "scale(1) translateX(-25%)";
    designLeft.style.transform = "rotateY(180deg)";
    designLeft.style.transformOrigin = "100% 0";
    designPaper.style.zIndex = "0";

    designLock.style.transformOrigin = "100% 0";
    designLock.style.transform = "rotateY(0deg)"
    designList.style.display = "none"; 

    chk = true;
  }
}

function publishingOpen(){
  if(chk === true){
    design.style.transform= "translateX(3000px)";
    plan.style.transform= "translate(3000px)";
    profile.style.transform= "translate(3000px)";

    publishingLeft.style.transformOrigin = "0";
    publishing.style.transform = "scale(3) translateX(17%)";
    publishingLeft.style.transform = "rotateX(0deg)";
    publishingLeft.style.transformOrigin = "100% 0";
    publishingPaper.style.zIndex = "2000";

    publishingLock.style.transformOrigin = "100% 0";
    publishingLock.style.transform = "rotateY(90deg)" 
    chk = false;
  }
  else{
    design.style.transform = "translateX(-25%)";
    plan.style.transform = "translateX(-25%)";
    profile.style.transform= "translateX(-25%)";

    publishingLeft.style.transformOrigin = "0";
    publishing.style.transform = "scale(1) translateX(-25%)";
    publishingLeft.style.transform = "rotateY(180deg)";
    publishingLeft.style.transformOrigin = "100% 0";
    publishingPaper.style.zIndex = "0";

    publishingLock.style.transformOrigin = "100% 0";
    publishingLock.style.transform = "rotateY(0deg)" 
    chk = true;
  }
}


function planOpen(){
  if(chk === true){
    publishing.style.transform= "translateX(3000px)";
    design.style.transform= "translate(3000px)";
    profile.style.transform= "translate(3000px)";

    planLeft.style.transformOrigin = "0";
    plan.style.transform = "scale(3) translateX(-17%)";
    planLeft.style.transform = "rotateX(0deg)";
    planLeft.style.transformOrigin = "100% 0";
    planPaper.style.zIndex = "2000";

    planLock.style.transformOrigin = "100% 0";
    planLock.style.transform = "rotateY(90deg)" 
    chk = false;
  }
  else{
    publishing.style.transform = "translateX(-25%)";
    design.style.transform = "translateX(-25%)";
    profile.style.transform= "translateX(-25%)";

    planLeft.style.transformOrigin = "0";
    plan.style.transform = "scale(1) translateX(-25%)";
    planLeft.style.transform = "rotateY(180deg)";
    planLeft.style.transformOrigin = "100% 0";
    planPaper.style.zIndex = "0";

    planLock.style.transformOrigin = "100% 0";
    planLock.style.transform = "rotateY(0deg)" 
    chk = true;
  }
}


function profileOpen(){
  if(chk === true){
    publishing.style.transform= "translateX(3000px)";
    plan.style.transform= "translate(3000px)";
    design.style.transform= "translate(3000px)";

    profileLeft.style.transformOrigin = "0";
    profile.style.transform = "scale(3) translateX(-50%)";
    profileLeft.style.transform = "rotateX(0deg)";
    profileLeft.style.transformOrigin = "100% 0";
    profilePaper.style.zIndex = "2000";

    profileLock.style.transformOrigin = "100% 0";
    profileLock.style.transform = "rotateY(90deg)"

    chk = false;
  }
  else{
    publishing.style.transform = "translateX(-25%)";
    plan.style.transform = "translateX(-25%)";
    design.style.transform= "translateX(-25%)";

    profileLeft.style.transformOrigin = "0";
    profile.style.transform = "scale(1) translateX(-25%)";
    profileLeft.style.transform = "rotateY(180deg)";
    profileLeft.style.transformOrigin = "100% 0";
    profilePaper.style.zIndex = "0";

    profileLock.style.transformOrigin = "100% 0";
    profileLock.style.transform = "rotateY(0deg)" 

    chk = true;
  }
}


design.addEventListener("click",designOpen);
publishing.addEventListener("click",publishingOpen);
plan.addEventListener("click",planOpen);
profile.addEventListener("click",profileOpen);