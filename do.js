// name=document.querySelector(".name")
nameArray=["Purshotam ","Mritunjay","Muskan"]
sectionArray="Koc-DW"
imageArray={girl:"./IMAGE AND VIDEO/OIP.jpeg",boy:"./IMAGE AND VIDEO/office-Animated-Businessman-PNG-HD.png"}

for(let i=0;i<3;i++){
    let image=document.createElement("span")
    image.setAttribute("class",`image image${i}`)
    document.querySelector(".about-us").appendChild(image) 
    image1=document.querySelector(`.image${i}`).createElement("img")
    image1.setAttribute("src",`${imageArray.girl}`)
    document.setAttribute(`.image${i}`).appendChild(image1)

    let name1=document.createElement("span")
    name1.setAttribute("class",`name name${i}`)
    name1.textContent=nameArray[i];
    document.querySelector(".about-us").appendChild(name1)

    let sec=document.createElement("span")
    sec.setAttribute("class",`section section${i}`)
    sec.textContent=sectionArray
    document.querySelector(".about-us").appendChild(sec)
}
