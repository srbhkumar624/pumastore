//store the products array in localstorage as "products"
let arr=JSON.parse(localStorage.getItem("products"))||[];
function product(t,d,p,i){
    this.type=t
    this.desc=d
    this.price=p
    this.image=i
}
function productDetails(){
    event.preventDefault();
    let form = document.getElementById("products");
    let type=form.type.value;
    let desc=form.desc.value;
    let price=form.price.value;
    let image=form.image.value;
    let data =new product(type,desc,price,image);
    console.log(data);
    arr.push(data);
    localStorage.setItem("products",JSON.stringify(arr));
}
