// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",mplSubmit);

var mplArr =JSON.parse(localStorage.getItem("schedule")) || [];

function mplSubmit() {
    event.preventDefault();

    var mplObj={
        mplTeamNum:masaiForm.matchNum.value,
        mplTeamA:masaiForm.teamA.value,
        mplTeamB:masaiForm.teamB.value,
        mplTeamdate:masaiForm.date.value,
        mplTeamvenue:masaiForm.venue.value,

    };
    mplArr.push(mplObj);
    console.log(mplArr);
    localStorage.setItem("schedule",JSON.stringify(mplArr));
    window.location.href ="matches.html";

}
