// EX3.: Create a table with 4 rows and 5 columns (ID, Name, Surname, Age, Email)
const infos = [
    {ID: "2121", Name: "Jo", Surname: "Doe", Age: 28, Email: "jo@hotmail.com"},
    {ID: "1121", Name: "Joe", Surname: "Dory", Age: 58, Email: "joe@gmail.com"},
    {ID: "9121", Name: "John", Surname: "Dan", Age: 38, Email: "john@email.com"},
    {ID: "0121", Name: "Jose", Surname: "Dani", Age: 48, Email: "jose@gmail.com"}

]
 function aTableHead(table, data){
     let thead = table.createTHead();
     let row = thead.insertRow();
     for (let key of data){
         let th = document.createElement("th");
         let text = document.createTextNode(key);
         th.appendChild(text);
         row.appendChild(th)
     }
 }

//populating the info to the table

function aTable(table, data){
    for (let elem of data){
        let row = table.insertRow();
        for (key in elem){
            let cell = row.insertCell();
            let text = document.createTextNode(elem[key])
            cell.appendChild(text)
        }
    }
}

 let table = document.querySelector("table")
 let data = Object.keys(infos[0])
 aTableHead(table, data)
 aTable(table, infos)
// EX4.: Add a link to a Facebook profile for each of the IDs
function link(){
    let firstRow = document.getElementsByTagName("tr")
    // console.log(firstRow)
    for (let i = 1; i < firstRow.length; i++){
        let row = firstRow[i].children[0]
        let random = Math.floor(Math.random()*100)
        // console.log(random)
        row.innerHTML = `<a href="https://www.facebook.com/">${random}</a>`
    
    }
}
link()
// EX5.: Add a text input "textChange" for plain text
// EX6.: Add a button next to "textChange", when pressed the title and the H1 of the page must be changed with the content of "textChange"

// console.log(imput)
let button = document.querySelector(".btn1")
button.addEventListener("click", function(){
    let imput = document.getElementById("txt").value
    let h1 = document.querySelector("h2")
    let title = document.getElementsByTagName("title")[0]
    if (imput.length === 0){
        alert("Its Empty. Write something")
    } else {
        h1.innerText = imput
        title.innerText = imput
    }
    
})
// EX7.: When the button is pressed, if "textChange" is empty, alert the user with a message
// EX8.: Add a new section with title "Enrolled Students"

// EX9.: Add an empty UL or DIV inside this new section
// EX10.: Add an extra column to the Table named "actions"
let newTable = document.querySelector("section")

// EX11.: Add a button in each "action cell" with a "+" sign. When the button is pressed a new line must appear inside the "UL / DIV" in the enrolled section list
// EX12.: Add button for each item of the list. When pressed, the student is removed from the list. 
// EX13.: Create a simple form with 5 fields: ID, Name, Surname, Age, Email
// EX14.: Create a button "add students" which adds a new row to the table
// EX15.: Add a "counter section" in which there is always the number of items in the List

// EX16.: Add somewhere a button, on click, it changes the color of each item in the list in RED
// EX17.: Add somewhere a button, on click, it counts the number of entry in the list and shows it in a newly created paragraph
// EX18.: Add somewhere a button, on click, it swaps HEADER and Subtitle
// EX19.: Add somewhere a button, on click, change the table background to a random color
// EX20.: Add a "color picker" to the page, when the color changes, apply it to the header
// EX21.: Add a dropdown (<select> tag), with your fav movies. When one is selected, change the heading of the page with the selected value