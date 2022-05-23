let prod_data=JSON.parse(localStorage.getItem("products"));
console.log(prod_data);
prod_data.map(function(el,i){
    let box=document.createElement("div")
    let button=document.createElement("button");
    button.innerText="Remove Product";
    button.setAttribute("id","remove_product");
    let p_type=document.createElement("h2");
    p_type.innerText=el.type;
    let p_desc=document.createElement("h3");
    p_desc.innerText=el.desc;
    let p_price=document.createElement("h2");
    p_price.innerText=el.price;
    let p_image=document.createElement("img");
    p_image.src=el.image;
    box.append(p_image,p_type,p_desc,p_price,button);
    document.getElementById("all_products").append(box);
    button.addEventListener("click",function(){
        removeProd(el,i);
        location.reload();
    })

})
function removeProd(el,i){
    prod_data.splice(i,1);
    localStorage.setItem("products",JSON.stringify(prod_data));

}

