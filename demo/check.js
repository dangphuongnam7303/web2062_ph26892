const btnEmail = document.querySelector(".btn-show-email");
console.log(btnEmail)
btnEmail.addEventListener("click",function(){
            return showEmail();
        })
        const showEmail =() =>{
       
            document.querySelector("body").innerHTML = `
            <form>
            <td>TUYENPH23232@GMAIL.COM</td>
            <td><button id="return">Quay lai</button></td>
            </form>
        `    
}