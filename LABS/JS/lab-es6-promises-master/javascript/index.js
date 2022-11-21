// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync

  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction("mashedPotatoes", 1, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
      getInstruction("mashedPotatoes", 2, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
        getInstruction("mashedPotatoes", 3, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
          getInstruction("mashedPotatoes", 4, (step5) => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
            document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
            getInstruction("mashedPotatoes", 5, (step6) => {
              document.querySelector("#mashedPotatoes").innerHTML += `<li>${step6}</li>`;
            }, (error) => console.log(error));
          }, (error) => console.log(error));
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
  

  
 
  
 
  
 



// Iteration 1 - using callbacks
// 

// Iteration 2 - using promises
// ...
obtainInstruction("steak", 0).then((paso) => {
  document.querySelector("#steak").innerHTML += `<li>${paso}</li>`
  return obtainInstruction("steak", 1).then((paso) => {
    document.querySelector("#steak").innerHTML += `<li>${paso}</li>`
    return obtainInstruction("steak", 2).then((paso) => {
      document.querySelector("#steak").innerHTML += `<li>${paso}</li>`
      return obtainInstruction("steak", 3).then((paso) => {
        document.querySelector("#steak").innerHTML += `<li>${paso}</li>`
        return obtainInstruction("steak", 4).then((paso) => {
          document.querySelector("#steak").innerHTML += `<li>${paso}</li>`
          return obtainInstruction("steak", 5).then((paso) => {
            document.querySelector("#steak").innerHTML += `<li>${paso}</li>`
            return obtainInstruction("steak", 6).then((paso) => {
              document.querySelector("#steak").innerHTML += `<li>${paso}</li>`
              return obtainInstruction("steak", 7).then((paso) => {
                document.querySelector("#steak").innerHTML += `<li>"Steak is ready!"</li>`;
                document.querySelector("#steakImg").removeAttribute("hidden");
                return obtainInstruction("steak", 8)
              }
  )})})})})})})
            });
// Iteration 3 using async/await
const getBroccoli = () => {
  getInstruction("broccoli", 0, (step1) => {
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;
    getInstruction("broccoli", 1, (step2) => {
      document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;
      getInstruction("broccoli", 2, (step3) => {
        document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;
        getInstruction("broccoli", 3, (step4) => {
          document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;
          getInstruction("broccoli", 4, (step5) => {
            document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;
            document.querySelector("#broccoliImg").removeAttribute("hidden");
            getInstruction("broccoli", 5, (step6) => {
              document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;
              getInstruction("broccoli", 6, (step7) => {
                document.querySelector("#broccoli").innerHTML += `<li>${step7}</li>`;
                getInstruction("broccoli", 7, (step8) => {
                  document.querySelector("#broccoli").innerHTML += `<li>${step8}</li>`;
                }, (error) => console.log(error));
              }, (error) => console.log(error));
            }, (error) => console.log(error));
          }, (error) => console.log(error));
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}

async function makeBroccoli() {
    const insertingBroccoli = await getBroccoli();
}

makeBroccoli();
// Bonus 2 - Promise all
// ...

const getSprouts = () => {
  getInstruction("brusselsSprouts", 0, (step1) => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step1}</li>`;
    getInstruction("brusselsSprouts", 1, (step2) => {
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${step2}</li>`;
      getInstruction("brusselsSprouts", 2, (step3) => {
        document.querySelector("#brusselsSprouts").innerHTML += `<li>${step3}</li>`;
        getInstruction("brusselsSprouts", 3, (step4) => {
          document.querySelector("#brusselsSprouts").innerHTML += `<li>${step4}</li>`;
          getInstruction("brusselsSprouts", 4, (step5) => {
            document.querySelector("#brusselsSprouts").innerHTML += `<li>${step5}</li>`;
            document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
            getInstruction("brusselsSprouts", 5, (step6) => {
              document.querySelector("#brusselsSprouts").innerHTML += `<li>${step6}</li>`;
              getInstruction("brusselsSprouts", 6, (step7) => {
                document.querySelector("#brusselsSprouts").innerHTML += `<li>${step7}</li>`;
                getInstruction("brusselsSprouts", 7, (step8) => {
                  document.querySelector("#brusselsSprouts").innerHTML += `<li>${step8}</li>`;
                }, (error) => console.log(error));
              }, (error) => console.log(error));
            }, (error) => console.log(error));
          }, (error) => console.log(error));
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}

  const getSprouts1 = new Promise((resolve, reject) => {
    resolve(getSprouts);
    reject(new Error('There are no Sprouts'))
  });
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });

