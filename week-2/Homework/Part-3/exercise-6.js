  
/* Challenge Mentors
Write all your code at the end of the file
1. Loop through the array, and for each object, `console.log()` out the sentence only for
mentors that are in Barcelona and one of the skills is React
"Hi, my name is {firstName} {lastName}. I work in Barcelona and i know React."
2. To those that work in Barcelona, set "Jun1" in the class attribute, 
and add a new skill to the list "SQL".
To add elements in an array you can use .push()
var animals = ["dog","cat"];
animals.push("horse"); //["dog","cat","horse"]
let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// → [1, 2, 3, 4, 5]
3. Create an object method with the name .addSkill() to be able to add skills from it
4. Create a function to add a skill to all members in a list of mentors
function addSkill(mentors,newSkill){
  //your code here
}
5. Create a function to remove a skill to all members in a list of mentors
function removeSkill(mentors,newSkill){
  //your code here
}
6. Create a function mentorWithMoreSkills() that returns the name of the mentor with more number of skills
7. Create an object method .addStudentLikes() that increments by one the attribute studentLikes
8. Create a function that adds a student like to all mentors in the array
function addStudentLikes(mentors){
  //your code here
}
*/ 

var mentors = [
  {
    firstName: "Antonio",
    lastName: "Miranda",
    skills: ["JS","React","Node"],
    class: "Mar1",
    studentLikes: 0,
    job:
      {
        company: "Google",
        position: "Senior developer",
        city: "Barcelona"
      }
  },
  {
    firstName: "Leo",
    lastName: "Messi",
    skills: ["Play football"],
    class: "Mar3",
    studentLikes: 0,
    job:
      {
        company: "FC Barcelona",
        position: "Player",
        city: "Barcelona"
      }
  },
  {
    firstName: "John",
    lastName: "VanDamme",
    skills: ["React","Angular","Python","Node"],
    class: "Mar4",
    studentLikes: 0,
    job:
      {
        company: "Facebook",
        position: "Software Manager",
        city: "Chicago"
      }
  },  
  {
    firstName: "Giorgio",
    lastName: "Polvara",
    skills: ["HTML","JS","React"],
    class: "Mar2",
    studentLikes: 0,
    job:
      {
        company: "Amazon",
        position: "Senior developer",
        city: "Barcelona"
      }
  },

];

//YOUR CODE HERE
// 1. Loop through the array, and for each object, `console.log()` out the sentence only for
// mentors that are in Barcelona and one of the skills is React
// "Hi, my name is {firstName} {lastName}. I work in Barcelona and i know React."
mentors
.filter( mentor => mentor.job.city === 'Barcelona' && mentor.skills.includes('React'))
.forEach( mentor => console.log(`Hi, my name is ${mentor.firstName} ${mentor.lastName}. I work in Barcelona and i know React.`))

// 2. To those that work in Barcelona, set "Jun1" in the class attribute, 
// and add a new skill to the list "SQL".
// To add elements in an array you can use .push()
// var animals = ["dog","cat"];
// animals.push("horse"); //["dog","cat","horse"]

mentors
.filter( mentor => mentor.job.city === 'Barcelona').forEach(mentor => {mentor.skills.push('SQL'); mentor.class = 'Jun1'})


// 3. Create an object method with the name .addSkill() to be able to add skills from it

mentors.forEach( mentor => { 
  mentor.addSkill = function(newSkill){ this.skills.push(newSkill); }
})

// 4. Create a function to add a skill to all members in a list of mentors

function addSkill(mentors,skill){
  mentors.forEach(mentor => {
   mentor.skills.push(skill);
  })
};

// 5. Create a function to remove a skill to all members in a list of mentors

// function removeSkill(mentors,newSkill){
//   //your code here
// }

function removeSkill(mentors,skill){
  mentors.forEach(mentor => {
   const skillPosition = mentor.skills.findIndex(mentorSkill => mentorSkill === skill);
   if(skillPosition != -1){
     mentor.skills.splice(skillPosition,1);
   }
  })
};

// 6. Create a function mentorWithMoreSkills() that returns the name of the mentor with more number of skills

function mentorWithMoreSkills (mentors) {
  let result = 0;
  let indexMentor = 0;
  mentors.forEach((mentor,index) =>  {
    if(result < mentor.skills.length){
      result = mentor.skills.length;
      indexMentor = index;
    }
  })
  return mentors[indexMentor];
};

// 7. Create an object method .addStudentLikes() that increments by one the attribute studentLikes

mentors.forEach(mentor => {
  mentor.addStudentLikes = function() {
     this.studentLikes++;
  }
});

// 8. Create a function that adds a student like to all mentors in the array

// function addStudentLikes(mentors){
//   //your code here
// }
//

function addStudentLike(mentors){
  mentors.forEach(mentor => {
   mentor.studentLikes++;
  })
};