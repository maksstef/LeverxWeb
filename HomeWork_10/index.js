class Computer{
    constructor(manufacturer, RAM, hard_disk, processor_type, graphic_card){
        let _manufacturer = manufacturer;
        let _RAM = RAM;
        let _hard_disk = hard_disk;
        let _processor_type = processor_type;
        let _graphic_card = graphic_card;

        this.getManufacturer = function(){
            return _manufacturer;
        }

        this.getRAM = function(){
            return _RAM;
        }

        this.getHardDisk = function(){
            return _hard_disk;
        }

        this.getProcessorType = function(){
            return _processor_type;
        }

        this.getGraphicCard = function(){
            return _graphic_card;
        }
    }
}

class Ultrabook extends Computer{
    constructor(manufacturer, RAM, hard_disk, processor_type, graphic_card){
        super(manufacturer, RAM, hard_disk, processor_type, graphic_card)
    }
}

class ComputingServer extends Computer{
    constructor(manufacturer, RAM, hard_disk, processor_type, graphic_card){
        super(manufacturer, RAM, hard_disk, processor_type, graphic_card)
    }
}

var u1 = new Ultrabook("HP", "8", "256", "Intel", "Intel HD")

console.log(u1.getManufacturer());
