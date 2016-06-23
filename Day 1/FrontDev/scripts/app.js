var employeesList= [
    {
        firstName: 'John',
        lastName: 'king',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Steven',
        lastName: 'Gerard',
        phone: '0123456789',
        salary:4500
    },
    {
        firstName: 'Diana',
        lastName: 'Ross',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Mike',
        lastName: 'Bob',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Emily',
        lastName: 'Hudson',
        phone: '0123456789',
        salary: 4500
    }
];

function showList(){
    var myTable= '<table border="1" class="table"><tr><th>First Name</th><th>Last Name</th><th>Phone</th><th>Salary</th><th>Vizualizare</th><th>Stergere</th></tr>';
    var suma=0;
    for (var i in employeesList) {
        suma+=employeesList[i].salary;
        myTable +=
            '<tr><td>' + employeesList[i].firstName + '</td><td>' + employeesList[i].lastName + '</td>' +
            '<td>+' + employeesList[i].phone + '</td><td>' + employeesList[i].salary + '</td>'+'<td><button onclick="vizualizare('+i+')">Vizualizare</button></td>' +
            '<td><button onclick="scoate('+i+')">Sterge</button> </td></tr>';
    }
    myTable += '<tr><td>'+getMostFrequentName()+'</td><td>'+getNumberOfUnique()+'</td><td>'+"tralala"+'</td><td>'+"tralala2"+'</td><td></td><td></td></tr>';
    myTable += '</table>';
    myTable += '<div>Total salary:'+suma+'</div>';
    var container=document.getElementById('listcontainer');
    container.innerHTML = myTable;
}

var Employee = function(firstName, lastName,phone,salary){
    this.firstName=firstName;
    this.lastName=lastName;
    this.phone=phone;
    this.salary=salary;
}

function addEmployee(){
    var firstName=document.getElementById("firstName").value;
    var lastName=document.getElementById("lastName").value;
    var phone=document.getElementById("phone").value;
    var salary=document.getElementById("salary").value;
    employeesList.push(new Employee(firstName, lastName, phone, salary));
    showList();
}

function deleteLastEmployee(){
    employeesList.pop();
    showList();
}

function vizualizare(index){
    alert("First name: "+employeesList[index].firstName+"\nLast Name: "+employeesList[index].lastName+"\nPhone: "+employeesList[index].phone+"\nSalary: "+employeesList[index].salary);
}

function scoate(index){
    employeesList.splice(index,1);
    showList();
}

function getMostFrequentName(){
    var mostFrequent=employeesList[0].firstName;
    var Frequency1=1;
    for(var i in employeesList){
        currentName=employeesList[i];
        Frequency2=0;
        for(var j in employeesList){
            if(employeesList[i].firstName.localeCompare(employeesList[j].firstName)==0){
                Frequency2++;
            }
        }
        if(Frequency2>Frequency1){
            mostFrequent=currentName;
            Frequency1=Frequency2;
        }
    }
    return mostFrequent;
}

function getNumberOfUnique(){

    var number=0;
    for(var i in employeesList){
        var current=employeesList[i].lastName;
        var nr=0;
        for(var j in employeesList){
            if(current.localeCompare(employeesList[j].lastName)==0){
                nr++;
            }
        }
        if(nr==1){
            number++;
        }
    }
    return number;
}