// write js code here corresponding to favourites.html
var favArr = JSON.parse(localStorage.getItem("favourites"));

mplDetails(favArr);

function mplDetails(favArr){
    favArr.forEach(function (ele, index){
        var tr=document.createElement("tr");

        var td1=document.createElement("td");
        td1.innerText = ele.mplTeamNum;

        var td2=document.createElement("td");
        td2.innerText = ele.mplTeamA;

        var td3=document.createElement("td");
        td3.innerText = ele.mplTeamB;

        var td4=document.createElement("td");
        td4.innerText = ele.mplTeamdate;

        var td5=document.createElement("td");
        td5.innerText = ele.mplTeamvenue;

        var td6=document.createElement("td");
        td6.innerText = "Delete";
        td6.style.color ="red";
        
        
        td6.addEventListener("click",function(){
            favfunction(ele,index)
        })

        tr.append(td1,td2,td3,td4,td5,td6);

        document.querySelector("tbody").append(tr);
    })
}

function favfunction(ele,index){
    favArr.splice(index,1);
    localStorage.setItem("favourites",JSON.stringify(favArr));
    window.location.reload();
}