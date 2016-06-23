var employeesList= [
    {
        firstName: 'John',
        lastName: 'King',
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
    myTable += '<tr><td>'+getMostFrequentName()+'</td><td>'+getNumberOfUnique()+'</td><td>'+getFrequentDigits()+'</td><td>'+getAverageSalary()+'</td><td></td><td></td></tr>';
    myTable += '</table>';
    myTable += '<div>Total salary:'+suma+'</div>';
    myTable += "<div><input type='number' id='sorter'/><button onclick='sortEmployees()'>Sort Employees</button></div>";
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
        var currentName=employeesList[i].firstName;
        var Frequency2=0;
        for(var j in employeesList){
            if(currentName.localeCompare(employeesList[j].firstName)==0){
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

function getAverageSalary(){
  var c=0;
  var sum=0;
  for(var i in employeesList){
    sum =sum+ employeesList[i].salary;
    c++;
  }
  return sum/c;
}

function getFrequentDigits(){
  var digitCount=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (var i in employeesList){
    var phone=employeesList[i].phone;
    for(var j=1; j<=10;j++){
      var currentDigit=phone%10;
      digitCount[currentDigit]++;
      phone=Math.floor(phone/10);
    }
  }



  function getMaxPosition(array){
    var max=array[0];
    var position=0;
    for(var k in array){
      if(max<array[k]){
        max=array[k];
        position=k;
      }
    }
    array[position]=-1;
    return position;
  }

  return getMaxPosition(digitCount)+','+getMaxPosition(digitCount)+','+getMaxPosition(digitCount)+','+getMaxPosition(digitCount)+','+getMaxPosition(digitCount);
}

function sortEmployees(){
  var x=document.getElementById("sorter").value;
  if(x==1){
    employeesList.sort(function(a,b){
      var num1=a.firstName;
      var num2=b.firstName;
      if(num1<num2){return -1;}
      if(num1>num2){return 1;}
      return 0;
    })
    showList();
  }
  if(x==2){
    employeesList.sort(function(a,b){
      var num1=a.lastName;
      var num2=b.lastName;
      if(num1<num2){return -1;}
      if(num1>num2){return 1;}
      return 0;
    })
    showList();
  }
  if(x==3){
    employeesList.sort(function(a,b){
      var num1=a.phone;
      var num2=b.phone;
      if(num1<num2){return -1;}
      if(num1>num2){return 1;}
      return 0;
    })
    showList();
  }
  if(x==4){
    employeesList.sort(function(a,b){
      var num1=a.salary;
      var num2=b.salary;
      if(num1<num2){return -1;}
      if(num1>num2){return 1;}
      return 0;
    })
    showList();
  }
}
