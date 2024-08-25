// undefined and null, BigInt
let firstName;
console.log(typeof firstName)
firstName="Aryan ojhaji"
console.log(typeof firstName)




let myvar =null
console.log(typeof myvar) //this is bug of js which inidicates that type of data should be null but its showing object.
myvar= "asdf"
console.log(myvar, typeof myvar)



//Bigint
let dump = BigInt(12)
let dummy = 12n  // 12n and BigInt(12) is same
console.log(dump+dummy)
console.log(typeof dump)
let dum = 888888888
console.log(typeof dum)
console.log(Number.MAX_SAFE_INTEGER)
let nu= 900719925474099155
console.log(nu)