
var todoitem=JSON.parse(localStorage.getItem("todoData"));
var completed = JSON.parse(localStorage.getItem("completedtodo")) || [];
todoitem.map(function(ele){
var tr =document.createElement("tr");
var td1=document.createElement("td");
td1.innerText=ele.itemName
var td2 =document.createElement("td");
td2.innerText= ele.itemQty
var td3 = document.createElement("td"); 
td3.innerText=ele.itemPrior
var td4=document.createElement("td");
td4.innerText= "Marks As Completed";
td4.style.color="green";
td4.style.cursor="pointer"
td4.addEventListener("click",function() {
   markcompletedFunction(ele)
})
tr.append(td1,td2,td3,td4);
document.querySelector("#body").append(tr);
});
function markcompletedFunction(ele){
   completed.push(ele);
   localStorage.setItem("completedtodo", JSON.stringify(completed))
}