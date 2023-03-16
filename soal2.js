let klik = document.getElementById("Klik");
let mouse = document.getElementById("Mouse");
let remove = document.getElementById("Remove");

klik.addEventListener("click", function () {
    document.getElementById("demo").innerHTML = "Berhasil";
});

klik.addEventListener("dblclick", function(){
    alert("Tombol Di kilk 2 Kali")
});

mouse.addEventListener("mouseenter", function(){
    
   const h1 = document.createElement("h1");
    const textNode = document.createTextNode("X RPL");
    h1.appendChild(textNode);
    document.body.appendChild(h1);
    h1.style.color = "red";
})

mouse.addEventListener("mouseout", function(){
    const h1 = document.createElement("h1");
    const textNode = document.createTextNode("X RPL");
    h1.appendChild(textNode);
    document.body.appendChild(h1);
    h1.style.color = "green";
})

remove.addEventListener("click", function(){
    document.write();
})



