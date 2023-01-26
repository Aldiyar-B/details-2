const factorial = (n) => n === 1 ? n : n * factorial(n-1)

const cacheFunc = (func)=>{
    const cache = new Map() 
    return (...args) =>{
        if (cache.has(args)){
			return cache.get(args);	
        }
        result = func(args)
        cache.set(args , result)
		return result
    }
}

const myCache = cacheFunc(factorial)
console.log(myCache(10))
console.log(myCache(7))
console.log(myCache(7))
console.log(myCache(13))
console.log(myCache(15))
