function validate(){
    var User_id=document.getElementById("User id").value;
    var Password=document.getElementById("Password").value;
    if(User_id="admin" && Password="user")
    {
        alert("login successfully");
        return false;
    }
    else
    {
        alert("login failed");
    }
}