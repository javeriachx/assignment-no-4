document.getElementById("checkStatusBtn").addEventListener("click", () => {
    savePromises();
  });
async function savePromises(){
    try{
        const res = await new Promise((resolve,reject)=>
        {
            setTimeout(()=>{
                resolve("Success");
            },3000);
        });
        alert(res);
    } catch(err) {
        console.log(err);
        alert("Error while generating response");
      }finally {
        alert("Operation completed");
      }
}
        
    


