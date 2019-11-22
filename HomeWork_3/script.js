function Computer(manufacturer, RAM, hard_disk, processor_type, graphic_card){
    this.manufacturer = manufacturer;
    this.RAM = RAM;
    this.hard_disk = hard_disk;
    this.processor_type = processor_type;
    this.graphic_card = graphic_card;

    this.getManufacturer = function(){
        return this.manufacturer;
    }

    this.getRAM = function(){
        return this.RAM;
    }

    this.getHardDisk = function(){
        return this.hard_disk;
    }

    this.getProcessorType = function(){
        return this.processor_type;
    }

    this.getGraphicCard = function(){
        return this.graphic_card;
    }
}

function Ultrabook(){
    Computer.call(this);
}

function ComputingServer(){
    Computer.call(this);
}


// function OnCreate(){
//     console.log("hey");
   
//     var data = JSON.stringify({
//         "manufacturer": String(document.getElementById("manufacturer").value),
//         "RAM": String(document.getElementById("RAM").value),
//         "hardDisk": String(document.getElementById("hard_disk").value),
//         "processorType": String(document.getElementById("processor_type").value),
//         "graphicCard": String(document.getElementById("graphic_card").value)
//     });

//     console.log(data);
//     xhr = new XMLHttpRequest();
//     xhr.withCredentials = true;
//     xhr.addEventListener("readystatechange", function () {
//         if (this.readyState === 4) {
//             alert(this.responseText);
//             document.getElementById("createForm").dispatchEvent(new Event('submit'));
//         } 
//     });

//     xhr.open("POST", "http://localhost:2403/computer");
//     xhr.setRequestHeader("Content-Type", "application/json");
//     xhr.send(data);
// }

// function OnRead(){
    
// }

// function OnUpdate(){
    
// }

// function OnDelete(){
    
// }


function onCreate(ev) {
    ev.preventDefault();
   
    var data = JSON.stringify({
         "manufacturer": String(document.getElementById("manufacturer").value),
         "RAM": String(document.getElementById("RAM").value),
         "hardDisk": String(document.getElementById("hard_disk").value),
         "processorType": String(document.getElementById("processor_type").value),
         "graphicCard": String(document.getElementById("graphic_card").value)
    });

    console.log(data);
    xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            alert("Data added successfully!");
            document.getElementById("createForm").dispatchEvent(new Event('submit'));
        } 
    });

    xhr.open("POST", "http://localhost:2403/computer");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
}

function onRead() {
    xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            result=JSON.parse(this.response);
            var resultTBody=document.createElement('tbody');
            result.map(function(nthCPU){
                resultTBody.appendChild(parseCPUToTableRow(nthCPU));
            });

            var table=document.getElementById('rTBody').parentElement;
            table.replaceChild(resultTBody,document.getElementById('rTBody'));
            resultTBody.id='rTBody';
        }
    });

    xhr.open("GET", "http://localhost:2403/computer");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
}

function onPrepareUpdate(ev){

    ev.preventDefault();
    xhrids = new XMLHttpRequest();
    xhrids.withCredentials = true;

    xhrids.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            result=JSON.parse(this.response);
            var ids=document.createElement('select');
            ids.className='form-control';
            result.map(function(nthCPU){
                var id=document.createElement('option');
                id.innerHTML=nthCPU['id'];
                ids.appendChild(id);
            });
            var form=document.getElementById('uid').parentElement;
            form.replaceChild(ids,document.getElementById('uid'));
            ids.id='uid';
        }
    });
    xhrids.open("GET", "http://localhost:2403/computer/");
    xhrids.setRequestHeader("Content-Type", "application/json");
    xhrids.send();
}

function onUpdate(ev) {
    ev.preventDefault();

    var data = JSON.stringify({
        "manufacturer": String(document.getElementById("umanufacturer").value),
        "RAM": String(document.getElementById("uRAM").value),
        "hardDisk": String(document.getElementById("uhard_disk").value),
        "processorType": String(document.getElementById("uprocessor_type").value),
        "graphicCard": String(document.getElementById("ugraphic_card").value)
    });
    xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            alert("Data changed successfully!");
        }
    });

    xhr.open("PUT", "http://localhost:2403/computer/"+document.getElementById("uid").value);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
}

function onDelete(ev) {
    ev.preventDefault();
     xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            alert("Data deleted successfully!");
        }
    });

    xhr.open("DELETE", "http://localhost:2403/computer/"+document.getElementById("did").value);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
}

function parseCPUToTableRow(CPUs){
    var row=document.createElement('tr');

    id=document.createElement('th');
    id.innerText=CPUs['id'];
    row.appendChild(id);

    manufacturer=document.createElement('td');
    manufacturer.innerText=CPUs['manufacturer'];
    row.appendChild(manufacturer);

    RAM=document.createElement('td');
    RAM.innerText=CPUs['RAM'];
    row.appendChild(RAM);
   
    hardDisk=document.createElement('td');
    hardDisk.innerText=CPUs['hardDisk'];
    row.appendChild(hardDisk);
    
    processorType=document.createElement('td');
    processorType.innerText=CPUs['processorType'];
    row.appendChild(processorType);

    graphicCard=document.createElement('td');
    graphicCard.innerText=CPUs['graphicCard'];
    row.appendChild(graphicCard);
    return row;
}


(function () {
  
    document.getElementById('cbutton').addEventListener(
        'click', onCreate
    );
    document.getElementById('rbutton').addEventListener(
        'click', onRead
    );
    document.getElementById('ubutton').addEventListener(
        'click', onUpdate
    );
    document.getElementById('pubutton').addEventListener(
        'click', onPrepareUpdate
    );
    document.getElementById('dbutton').addEventListener(
        'click', onDelete
    );
    console.log('Handlers is set')
})()
