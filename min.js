

// Hoisting
// console.log(x);
// Excution Context => حيز التنفيذ

//CRUD Opration
// C => Create
// R => Read , Display
// U => Update 
// D => Delete

// Todo List => قائمه مهامات


var productName = document.getElementById('productName')
var productDesc = document.getElementById('productDesc')
var productPrice = document.getElementById('productPrice')
var minBtn = document.getElementById('minBtn')
var search = document.getElementById('search')

var idProduct = 0;


var productContainer=[];


if(localStorage.getItem('productContainer') != null){
    var data = JSON.parse(localStorage.getItem('productContainer'))
    productContainer = data;
    displayProducts(productContainer)
}else{
    productContainer=[]
}


function add(){
    if(minBtn.innerHTML == "update"){
        editProduct()
    }else{
        addProduct();
    }
}

function addProduct(){
    productContainer.push({
            product_Name:productName.value,
            product_Desc:productDesc.value,
            product_Price:productPrice.value});


            localStorage.setItem('productContainer', JSON.stringify(productContainer));
    displayProducts(productContainer);
    clearForm();

}



function displayProducts(list){
    var tableDataPro = document.getElementById('tableDataPro');
    var data =``;
    for (let i = 0; i < list.length; i++) {

        // data += '<tr><td>'+i+'</td><td>'+productContainer[i].product_Name+'</td><td>'+productContainer[i].product_Desc+'</td><td>'+productContainer[i].product_Price+'</td></tr>';

        data += `
                <tr>
                    <td>${i}</td>
                    <td>${list[i].product_Name}</td>
                    <td>${list[i].product_Desc}</td>
                    <td>${list[i].product_Price}</td>
                    <td><button onclick="deleteProduct(${i})" type="button" class="btn btn-danger">Delete</button></td>
                    <td><button onclick="updateProduct(${i})" type="button" class="btn btn-info">Update</button></td>
                </tr>
                `;
        
    }
    tableDataPro.innerHTML = data;
}

function clearForm(){
    productName.value=""
    productDesc.value=""
    productPrice.value=""
}



function deleteProduct(idProduct){
    productContainer.splice(idProduct,1);
    localStorage.setItem('productContainer', JSON.stringify(productContainer));
    displayProducts(productContainer);

}




function updateProduct(indexPro){
    productName.value = productContainer[indexPro].product_Name
    productDesc.value = productContainer[indexPro].product_Desc
    productPrice.value = productContainer[indexPro].product_Price
    minBtn.innerHTML= "update"

    idProduct = indexPro
}

function editProduct(){
    productContainer[idProduct].product_Name = productName.value
    productContainer[idProduct].product_Desc = productDesc.value
    productContainer[idProduct].product_Price = productPrice.value
    localStorage.setItem('productContainer', JSON.stringify(productContainer));
    displayProducts(productContainer);
    clearForm();
    minBtn.innerHTML= "Add Product"
}




function searchProduct(valueInput){
    var data =[];
    for (let i = 0; i < productContainer.length; i++) {
        if(productContainer[i].product_Name.toLowerCase().includes(valueInput.toLowerCase()) == true){
            data.push(productContainer[i])
        }
    }
    displayProducts(data)
}












