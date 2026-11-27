let studentName="harish";

let marks=[51,60,70,80,90];


let total =0;

for(i=0;i<marks.length;i++){
    total=total+marks[i];
}
let average=total/marks.length;

let grade;

if(average>=90){
    grade = "A grade";

}else if(average>=80){
    grade ="B grade";
}
else if(average>=70){
    grade = "C grade";

}
else if(average>=50){
    grade ="D grade";
}
else{
    Console.log("Fail");
}

console.log("Student grading system");

console.log("Name:",studentName);
console.log("total:",total);
console.log("average:",average);
console.log("grade:",grade);