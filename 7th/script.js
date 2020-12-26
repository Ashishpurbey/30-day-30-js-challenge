const people=[
    {name:'wes',year:1988},
    {name:'kait',year:1986},
    {name:'irv',year:1970},
    {name:'Lux',year:2015},
];

const comments=[
    {text:'love this',id:894954},
    {text:'super good',id:459438},
    {text:'you are the best',id:45497},
    {text:'ramen is my fav food ever', id:12334},
    {text:'Nice Nice Nice!',id:224556}
];

// some and Every checks
// Array.prototype.some() //is at least one person 19?
const isAdult = people.some(function(person){
      const currentYear=new Date().getFullYear();
      if(currentYear-person.year>=19){
          return true;
      }
});
console.log({isAdult});

//Array.prototype.every() //is everyone 19?
const allAdult = people.every(function(person){
    const currentYear=new Date().getFullYear();
    if(currentYear-person.year>=19){
        return true;
    }
});
console.log({allAdult});

//Array.prototype.find()
//Find is like filter,but instead returns just the first one you are looking for
//find the comment with the Id of 459438

const comment=comments.find(function(comment){
    if(comment.id===459438){
        return true;
    }
});
console.log(comment);
            //    or
const commentt=comments.find((comment)=>comment.id===459438);
console.log(commentt);


//Array.prototype.findIndex()
//Find the comment with this ID
//delete the comment with the ID of 224556

const index = comments.findIndex(comment=>comment.id===224556);
console.log(index);



