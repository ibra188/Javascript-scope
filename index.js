var warrio = {
  name: "ibra",
  type: "black",
  weapon: "soul blade",
  agility: 75,
  strong: true,
}//Global Scope


//this also is global scope
var screamWarrio = () =>{
  let warrio2 = "sumari";
  warrio3 = "vikins";
  return{
    shoortWarrio: () => {
      return console.log(warrio, warrio2);
    }
  }
}


const newWarrio = screamWarrio();
newWarrio.shoortWarrio();

//chanllage
//clobal scope 
const myWarrios = [
  {
    name: "ibra",
    type: "black",
    weapon: "soul blade",
    agility: 75,
    strong: true,
  },
  {
    name: "ibra",
    type: "black",
    weapon: "soul blade",
    agility: 75,
    strong: true,
  },
  {
    name: "ibra",
    type: "black",
    weapon: "soul blade",
    agility: 75,
    strong: true,
  },
];

//gloaba scope (it can be accesd from anywhere)
const warriosScreaming = () => {
  console.log(myWarrios);
}
warriosScreaming();

//final challange 

const myWarrios1 = [
  {
    name: "ibra",
    type: "black",
    weapon: "soul blade",
    agility: 75,
    strong: true,
  },
  {
    name: "ibra",
    type: "black",
    weapon: "soul blade",
    agility: 75,
    strong: true,
  },
  {
    name: "ibra",
    type: "black",
    weapon: "soul blade",
    agility: 75,
    strong: true,
  },
];
const myWarriosScreame1 = () => {
  //glabal varriable myWarrios1 is available
  console.log(myWarrios1);
  myWarrios1.map((soldias) => {
    if(soldias.agility === 75){
      //block-scope agility
      const agility = myWarrios1.agility;
      console.log(`${myWarrios1.name} who is a ${myWarrios1.type} has a gaility of ${agility}`);
    }
    //block scope agility is not available in here
  })
}
myWarriosScreame1();