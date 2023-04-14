// name=document.querySelector(".name")
let xyz=document.querySelector(".about-us")
nameArray=["Purshotam ","Mritunjay","Muskan"]
sectionArray="Koc-DW"
imageArray=["./IMAGE AND VIDEO/office-Animated-Businessman-PNG-HD.png","./IMAGE AND VIDEO/office-Animated-Businessman-PNG-HD.png","./IMAGE AND VIDEO/OIP.jpeg"]

for(let i=0;i<3;i++){
    let image=document.createElement("span")
    image.setAttribute("class",`image image${i}`)
    xyz.appendChild(image) 
    let image1=document.createElement("img")
    image1.setAttribute("src",`${imageArray[i]}`)
    document.querySelector(`.image${i}`).appendChild(image1)

    let name1=document.createElement("span")
    name1.setAttribute("class",`name name${i}`)
    name1.textContent=nameArray[i];
    xyz.appendChild(name1)

    let sec=document.createElement("span")
    sec.setAttribute("class",`section section${i}`)
    sec.textContent=sectionArray
    xyz.appendChild(sec)
}
