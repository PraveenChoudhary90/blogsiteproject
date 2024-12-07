async function fet_data()
{
    let res = await fetch("http://localhost:4000/students");
    let data = await res.json();
    console.log(data);
    let result = data.map((e)=>`
     <tr>
    <td>${e.id}</td>
    <td>${e.name}</td>
    <td>${e.email}</td>
    <td>${e.number}</td>
    <td>${e.city}</td>
    <td><button onclick= "deletedata('${e.id}');">Delete</button></td>
    <td><button onclick= "Updatedata('${e.id}');">Update</button></td>
    </tr>
    `).join("");
    document.querySelector("#showdata").innerHTML = result;
}
fet_data();

function deletedata(id){

fetch(`http://localhost:4000/students/${id}`,{
        method:'DELETE'
       
    })
     .then(res=>alert("delete data sucessfully...........!!!!!!!!!!!"))

}


function showForm(){
  document.getElementById("addForm").style.display= "block"
}

function hideForm(){
  document.getElementById("addForm").style.display= "none"

}


function Addingdata()
{
 let sum = {
    name:document.querySelector("#name").value,
    email:document.querySelector("#email").value,
    number:document.querySelector("#number").value,
    city:document.querySelector("#city").value
 }

 fetch(`http://localhost:4000/students`,{
    method:'POST',
    headers:{'content-type':'Application/json'},
    body:JSON.stringify(sum)
    })
    .then(res=>alert("Added and create data sucessfully...........!!!!!!!!!!!!"))
}





async function  Updatedata(id){
    let mydata = await fetch(`http://localhost:4000/students/${id}`);
    let senddata = await mydata.json();
    let finaldata =
    `

    <form  style="position: absolute; top: 100px; left: 500px; z-index: 10; background-color: red; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
    <label for="image" style="display: block; margin-bottom: 5px; font-weight: bold;">Enter Your name</label>
    <input type="text" placeholder="enter Your full name" value="${senddata.name}" id="name1" style="width: 100%; padding: 10px; margin-bottom: 15px; border: 1px solid #ccc; border-radius: 4px;">
    
    <label for="product" style="display: block; margin-bottom: 5px; font-weight: bold;">Enter Your Email</label>
    <input type="text" placeholder="Enter Your Email Address" value="${senddata.email}" id="email1" style="width: 100%; padding: 10px; margin-bottom: 15px; border: 1px solid #ccc; border-radius: 4px;">
    
    <label for="brand" style="display: block; margin-bottom: 5px; font-weight: bold;">Enter your number</label>
    <input type="text" placeholder="Enter Your number" value="${senddata.number}" id="number1" style="width: 100%; padding: 10px; margin-bottom: 15px; border: 1px solid #ccc; border-radius: 4px;">
    
    <label for="price" style="display: block; margin-bottom: 5px; font-weight: bold;">Enter your city</label>
    <input type="text" placeholder="Enter the Address"  value="${senddata.city}" id="city1" style="width: 100%; padding: 10px; margin-bottom: 15px; border: 1px solid #ccc; border-radius: 4px;">
    
    <button onclick = "finalupdate('${senddata.id}')"  style="background-color: #28a745; color: white; padding: 10px 15px; border: none; border-radius: 4px; cursor: pointer; font-size: 16px;">Add data</button>
    <button onclick="hideForm();" style="background-color: white; color:red; padding: 10px 15px; border: none; border-radius: 4px; cursor: pointer; font-size: 16px;">Close</button>
</form>
    `
    document.querySelector("#edittabel").innerHTML = finaldata;
}

function finalupdate(id)
{
 let result = {
    name:document.querySelector("#name1").value,
    email:document.querySelector("#email1").value,
    number:document.querySelector("#number1").value,
    city:document.querySelector("#city1").value,
 }

 fetch(`http://localhost:4000/students/${id}`,{
    method:'PUT',
    headers:{'content-type':'application/json'},
    body:JSON.stringify(result)
 })
 .then(res=>alert("Update data sucessfully..........!!!!!!!!!!!!!!!!!"))
}



