const Singleton = (function() {
  let instance;

  function createInstance() {
    const object = new Object({name:'Heiko'});
    return object;
  }

  return {
    getInstance: function() {
      if(!instance) {
        instance = createInstance();
      }
      return instance;
    }
  }
})();

const instanceA = Singleton.getInstance();
console.log(instanceA);
// > Object { name: "Heiko" }
const instanceB = Singleton.getInstance();
console.log(instanceB);
// > Object { name: "Heiko" }

console.log(instanceA === instanceB);
// > true