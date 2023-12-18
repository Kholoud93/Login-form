var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteUrl");

var siteList;


if (localStorage.getItem("siteList") === null){
    siteList = [];
  }else{
  siteList = JSON.parse(localStorage.getItem("siteList"))
  displaySites(siteList);
  }

function createSite(){
   if (validateSiteName() === true) {
    var site = {
    
       name: siteName.value,
        url: siteUrl.value,
    };

    siteList.push(site)
    displaySites(siteList);
    console.log(siteList)
    localStorage.setItem("siteList", JSON.stringify(siteList));
    clearForm()

} else {
    alert (`"Site Name or Url is not valid, Please follow the rules below :

    Site name must contain at least 3 characters
    Site URL must be a valid one"`)
}
} 

function displaySites(list){
    var cartona = "" ;
    for (var i = 0; i < list.length; i++ ){
 cartona += `
 <tr>
 <td>${i}</td>
 <td>${list[i].name}</td>
 <td>${list[i].url}</td>
 <td><a href="${list[i].url}"><button class="btn fa-solid fa-eye" id="btn1">visit</button></a></td>
 <td><button class="btn fa-solid fa-trash-can" id="btn2" onclick='deleteSite(${i})'>Delete</button></td>
</tr>
`
}

document.getElementById("lists").innerHTML= cartona
}  

function deleteSite(index){
    siteList.splice(index,1)
    displaySites(siteList)
    localStorage.setItem("siteList", JSON.stringify(siteList));
}

function clearForm(){
    siteName.value = "";
    siteUrl.value = "";
}   

function validateSiteName(){
    var regex = /^[a-zA-Z]{3,8}$/
   
    if (regex.test(siteName.value)){
        siteName.classList.replace("is-invalid", "is-valid");
        return true;
    } else {
        siteName.classList.add("is-invalid");
        return false;
    }
}

function validateUrl(){
    var regex = /(www.)?^[a-zA-Z0-9]{3,}\.com$/
    if (regex.test(siteUrl.value)){
        siteUrl.classList.replace("is-invalid", "is-valid");
        return true;
    } else {
        siteUrl.classList.add("is-invalid");
        return false;
    
    }

}

