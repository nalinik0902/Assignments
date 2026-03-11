function checkLoanEligibility(customerName:string,creditScore:number,income:number,isEmployed:boolean,debtToincomeRatio:number):void{
  
    if(creditScore>750){
        console.log("Loan is approved for " +customerName+ " due to high credit scrore");
    }
     else if(creditScore >= 650 && creditScore <= 750){

        if(income >= 50000 && isEmployed && debtToincomeRatio < 40){
            console.log("Loan is approved for " + customerName + " as eligibility met");
        }
        else{
            console.log("Loan is denied for " + customerName + " as eligibility not met");
        }

    }
    else{
        console.log("Loan is denied for " + customerName + " due to low credit score");
    }

}

checkLoanEligibility("JOhn Doe",639,55000,true,35);


