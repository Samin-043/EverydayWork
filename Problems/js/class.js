

class webDeveloper{
    // property
    name;
    age;
    
    webportfolio(){
        console.log('please ensure nice front-end development');
    }
    task(){
        console.log('Web development...');
    }
}

class softwareTester{
    name;
    age;
    testCapability(){
        console.log('Nice testing');
    }
    task(){
        console.log('Software test...');
    }
} 

const employeeOne=new webDeveloper();
console.log(employeeOne.task());

const employeeTwo=new softwareTester();
console.log(employeeTwo.task());




