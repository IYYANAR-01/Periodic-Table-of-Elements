
let arr = ["H", "", "", "Li", "Be", "", "Na","Mg","","K","Ca","Sc","Rb","Sr","Y","Cs","Ba","La","Fr","Ra","Ac"]


 for (let i = 0; i < 21; i++) {               // 1 st  container
    let box = document.createElement("div");
    box.setAttribute("class", "classRoot1");
    box.setAttribute("id", "root1Box"+i);
    document.getElementById("root1").appendChild(box);
    document.getElementById("root1Box"+i).innerText = arr[i];
}

let a = 3;

while(a<19){                                // 1 st container color
    let b = a+1;
    document.getElementById("root1Box"+a).style.backgroundColor = "red";
    document.getElementById("root1Box"+b).style.backgroundColor = "rgb(243, 86, 88)";
    a = a+3;
}



let arr2 = ["Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg","Rf","Db","Sg","Bh","Hs","Mt","Ds","Rg","Cn"]


for (let i = 0; i < 36; i++) {               // 2 st  container
    let box = document.createElement("div");
    box.setAttribute("class", "classRoot2");
    box.setAttribute("id", "root2Box"+i);
    document.getElementById("root2").appendChild(box);
    document.getElementById("root2Box"+i).innerText = arr2[i];

    if(i>31){
        document.getElementById("root2Box"+i).style.backgroundColor = "rgb(120, 143, 209)";
    }

}

let b=8;

while(b<36){
    document.getElementById("root2Box"+b).style.backgroundColor = "rgb(181, 217, 28)";
    b=b+9;
}





let arr3 = ["","","","","","","He","B","C","N","O","F","Ne","AI","Si","P","S","Ci","Ar","Ga","Ge","As","Se","Br","Kr","In","Sn","Sb","Te","I","Xe","TI","Pb","Bi","Po","At","Rn","Nh","Fi","Mc","Lv","Ts","Og",""]


for (let i = 1; i < 43; i++) {               // 3 st  container
    let box = document.createElement("div");
    box.setAttribute("class", "classRoot3");
    box.setAttribute("id", "root3Box"+i);
    document.getElementById("root3").appendChild(box);
    document.getElementById("root3Box"+i).innerText = arr3[i];

    if(i%6==0){
        document.getElementById("root3Box"+i).style.backgroundColor = "rgb(60, 135, 207)";
    }

    if(i>36){
        document.getElementById("root3Box"+i).style.backgroundColor = "rgb(120, 143, 209)";
    }
    if(i<6){
        document.getElementById("root3Box"+i).style.backgroundColor = "aliceblue";
    }
    if((i>7 && i<12)||(i>14 && i<18)||(i>21 && i<24)||(i==29)){
        document.getElementById("root3Box"+i).style.backgroundColor = "rgb(72, 191, 233)";
    }
    if((i%7==0 && i!=42)||(i==20 || i==27)){
        document.getElementById("root3Box"+i).style.backgroundColor = "rgb(118, 201, 44)";
    }
}





let arr4 = ["Cr","Pe","Nd","Pm","Sm","Ev","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu","Th","Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm","Md","No","Lr"]



for (let i = 0; i < 28; i++) {               // 4 st  container
    let box = document.createElement("div");
    box.setAttribute("class", "classRoot4");
    box.setAttribute("id", "root4Box"+i);
    document.getElementById("root4").appendChild(box);
    document.getElementById("root4Box"+i).innerText = arr4[i];

    if(i>13){
        document.getElementById("root4Box"+i).style.backgroundColor = "rgb(247, 133, 60)";
    }

}