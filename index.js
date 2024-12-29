function store()
{
    var a = document.getElementById("myname").value
    localStorage.setItem('Username',a)

    var b = document.getElementById("mail").value
    localStorage.setItem('mail',b)
}


