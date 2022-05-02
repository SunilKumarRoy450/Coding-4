// write js code here corresponding to matches.html
var mplArr=JSON.parse(localStorage.getItem("schedule"));
mplDetails(mplArr);
var favArr=JSON.parse(localStorage.getItem("favourites")) || []

function filterVenuePlace(){
var filter =document.querySelector("#filterVenue").value;

var filterVenue=mplArr.filter(function (ele){
    return ele.mplTeamvenue == filter;
});
console.log(filterVenue);
mplDetails(filterVenue);
}

function mplDetails(mplArr){
    document.querySelector("tbody").innerHTML ="";
    mplArr.forEach(function(ele){
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
        td6.innerText = "Add as Favourites";
        td6.style.color ="green";
        
        td6.addEventListener("click",function (){
            myFun(ele);
        })

        tr.append(td1,td2,td3,td4,td5,td6);

        document.querySelector("tbody").append(tr);
    });
}

function myFun(ele){
    console.log(ele)
    favArr.push(ele);
    localStorage.setItem("favourites",JSON.stringify(favArr));
    window.location.href="favourites.html"
}
