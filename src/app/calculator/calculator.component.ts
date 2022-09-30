import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  currentNumber = '0';
  toshow ='';
  // firstOperand = null;
  // operator = null;
  // waitForSecondNumber = false;
        

  getNumber (value:string){
    // if(this.toshow == '0'){
    //   this.toshow = value;
    // }
    // if(this.toshow != '0'){
     
    // }
   
    this.toshow = this.toshow + value;
   
    this.currentNumber = this.toshow;
  }
    
  getEqual(){
    if(this.toshow.charAt(0) == '0'){
      let response = this.toshow.slice(1)
      this.currentNumber = eval(response);
   }
   else{
    this.toshow = eval(this.currentNumber);
    this.currentNumber = this.toshow;
   }
   
  }
  back(){
    this.currentNumber = this.currentNumber.slice(0,-1)
    this.toshow= this.currentNumber
    if(this.currentNumber ==''){this.currentNumber='0'}
    
  }
  calcvalue(solve:string){
    if(solve.charAt(0) == '0'){
      let result = solve.slice(1)
     this.currentNumber = eval(result);
    }
    else{
      this.currentNumber = eval(solve);
    }
    
  }
  // public getNumber(v: string){
  //   console.log(v);
  //   if(this.waitForSecondNumber)
  //   {
  //     this.currentNumber = v;
  //     this.waitForSecondNumber = false;
  //   }else{
  //     this.currentNumber === '0'? this.currentNumber = v: this.currentNumber += v;

  //   }
  // }
 

  getDecimal(){
    if(!this.currentNumber.includes('.')){
        this.currentNumber += '.'; 
    }
  }

  // private doCalculation(op:any , secondOp:any){
  //   switch (op){
  //     case '+':
  //     return this.firstOperand += secondOp; 
  //     case '-': 
  //     return this.firstOperand -= secondOp; 
  //     case '*': 
  //     return this.firstOperand *= secondOp; 
  //     case '/': 
  //     return this.firstOperand /= secondOp; 
  //     case '=':
  //     return secondOp;
  //   }
  // } 

  // public getOperation(op: string){
  //   console.log(op);

  //   if(this.firstOperand === null){
  //     this.firstOperand = Number(this.currentNumber);

  //   }else if(this.operator){
  //     const result = this.doCalculation(this.operator , Number(this.currentNumber))
  //     this.currentNumber = String(result);
  //     this.firstOperand = result;
  //   }
  //   this.operator = op;
  //   this.waitForSecondNumber = true;

  //   console.log(this.firstOperand);

  // }

  public clear(){
    this.currentNumber = '0';
    this.toshow = "";
    // this.firstOperand = null;
    // this.operator = null;
    // this.waitForSecondNumber = false;
  }


}

