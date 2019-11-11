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

function OnCreate(){

}

function OnRead(){
    
}

function OnUpdate(){
    
}

function OnDelete(){
    
}