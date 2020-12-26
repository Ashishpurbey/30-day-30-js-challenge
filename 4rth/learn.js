 const inventors=[
     {first:'Albert',last:'Einstein',year:1879,passed:1955},
     {first:'Isaac',last:'Newton',year:1079,passed:1155},
     {first:'Galileo',last:'Galilei',year:1579,passed:1655},
     {first:'Marie',last:'Curie',year:1581,passed:1632},
     {first:'Johannes',last:'Kepler',year:1571,passed:1640},
     {first:'Nicolaus',last:'Copernicus',year:1473,passed:1543},
     {first:'Max',last:'Planck',year:1859,passed:1947},
 ];

//Array.prototype.filter()
//1.Filter the list of inventors for those who were born in the 1500's

// var data=inventors.filter(function(value){
//     if(value.year>1500 && value.year<1600){
//         return 1;
//     }
// });


                        //or
// var data=inventors.filter((value)=>(value.year>1500 && value.year<1600))
// console.log(data);


//Array.prototype.map()
//2.Give us an array of the inventory first and last names
// const fullnames= inventors.map(inventor => inventor.first+" "+inventor.last);
// console.log(fullnames);


                       //or
//   const fullnames=inventors.map(inventor=>`${inventor.first} ${inventor.last}`);    


//Array.prototype.sort()
//3.Sort the inventors by bithdate,oldest to youngest

// var data=inventors.sort(function(a,b){
//     if(a.year>b.year){
//         return true;
//     }
// });


        //  or
    // var data=inventors.sort((a,b)=>(a.year>b.year));
    // console.log(data);


//Array.prototype.reduce()
//4.How many years did all the inventors live?
// var total=0;
// inventors.forEach(element => {
//     total+=element.passed-element.year;
// });
// console.log(total);

//                 // or
//                
//     var data=inventors.reduce((totall,inventor)=>{
//         console.log(totall);
//         return totall+(inventor.passed-inventor.year);
//     },0); 
//     console.log(data);           



//5. Sort the inventors by years lived
// const oldest=inventors.sort(function(a,b){
//     const lastGuy=a.passed-a.year;
//     const nextGuy=b.passed-b.year;
//     return lastGuy>nextGuy?false:true;
// });
// console.log(oldest);


//6.Create a list of Boulevards in paris that contain 'de' anywhere in the name
//https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris


// const Category = document.querySelector('.mw-category');
// const links=Array.from(Category.querySelectorAll('a'));
// const de=links
//               .map(link=>link.textContent)
//               .filter(streetName=>streetName.includes('de'));




//7.sort Exercise
//sort the people alphabetically by last name
const people=['Beck, Glenn','Becker, Carl','Beckett, Samuel','Beddoes, Mick'
,'Beecher, Henry','Beethoven, Ludwig','Begin, Menachem','Belloc, Hilaire',
'Bellow, Saul','Benchley, Robert','Benenson, Peter','Ben-gurion, David',
'Benjamin, Walter','Benjemin, walter','Ben, Ten','Big, Ban','Tony, Stark',
'Capitan, America','Spider, Man','Super, Man','Hanu, Man'];

// const alpha =people.sort(function(lastOne,nextOne){
//     const [aFirst,aLast] =lastOne.split(', ');
//     const [bFirst,bLast] =nextOne.split(', ');
//     return aLast >bLast?1:-1;
// });
// console.log(alpha);






 
 //8.Reduce Exercise
 //sum up the instances of each of these
 const dataa=['car','car','car','truck','truck','bike','walk','walk','van',
'truck','bike','motorcar','van','jeep','jeep','van'];


const transportation =dataa.reduce(function(obj,item){
    if(!obj[item]){
        obj[item]=0;
    }
    obj[item]++;
    return obj;
},{});

console.log(transportation);