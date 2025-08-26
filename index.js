let score= 85;
let studentName="Athira";
function calculateGrade(score)
{
    if (score >= 90) 
    {
        console.log("Grade: A+");
    }
     else if (score >= 80) 
    {
        console.log("Grade: A");
    }
     else if (score >= 70) 
    {
        console.log("Grade: B+");
    }
    else if(score>= 60)
    {
        console.log("Grade: B")
    }
    else
    {
        console.log("Grade: F")
    }

}
function displayResult(studentName,score)
{
    console.log("Student: "+studentName)
    console.log("Score: "+score)
    calculateGrade(score)
}

displayResult(studentName,score);
