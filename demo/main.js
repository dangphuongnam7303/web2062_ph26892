import getData from "./user.js";

const names = document.querySelector("#name")

getData()
    .then((reponse)=>reponse.json())
    .then((data)=>{
        showUsers(data)
    }
    )
    

const showUsers = (data) =>{
    names.innerHTML = data.map((namer, index) =>{
         return `
        <tr>
        <td>${index+1}</td>
        <td>${namer.name}</td>
        <td>${namer.email}</td>
        </tr>
        `
    }).join("");

}
const showEmail =() =>{
       
            document.querySelector("body").innerHTML = `
            <form>
            <td>TUYENPH23232@GMAIL.COM</td>
            <td><button id="return">Quay lai</button></td>
            </form>
        `

        
}
