 const user={
    username:"Prabhat",
    id:33,

    message:function(){
        console.log(`${this.username}, this side`)
        // console.log(this)
    }
 }


 //this-> refers to the current context
 //this->used only within objects ,not any type of functions

//  user.message()
//  user.username="Ishita"
//  user.message()

// console.log(this)   // out-{}


//  const varify=()=>{
//     let username='prabhatv thakur';
//     console.log(this.username); // out - undefined
//  }
//  varify()

//+++++++++++++++ARROW Function+++++++++++++++

// const addTwo=(a,b)=>a+b; 
//const addTwo=(a,b)=>(a+b);  // method-1

const addTwo = (a,b) =>{     // method-2
    return a+b;
}
 
console.log(addTwo(2,3))

// NOTE-> with {}, use return keyword
//        without {} or with (), do not use return keyword

// const obj=()=>{username:'avadhesh'} 
//const obj=()=>({username:'avadhesh'} )   // can't access object in {}, so use () to solve this problem


function print(){
    console.log(argument);
}

print('amir',400,false)