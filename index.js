let value_ini=document.querySelector("#inputbox");
console.log(value_ini)
let value_array=[]

let adding_value=document.querySelectorAll("button");
let intialize=[]
for(let i=0;i<adding_value.length;i++)
{
intialize.push(adding_value[i])
} 

intialize.forEach((values)=>
{
  values.addEventListener("click",function()
  { 
          
   let inner_values=values.innerHTML;
   adding_in(inner_values)
    
  })
}) 
function adding_in(values) {
  if (values >= 0 && values <= 9) 
   {
    value_ini.value += values;
  } 
  else if (values === "+" || values === "-" || values === "*"||values==="%" || values==="/") 
  {
    value_ini.value += values;
  } 
  else if (values === "Ac") {
    value_ini.value = "";
  }  
  
  else if (values === "=") {
    
      value_ini.value = eval(value_ini.value);
    
  }
}
