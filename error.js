setTimeout(() => {
   throw new Error('Oops') 
}, 300)

process.on('uncaughtException', () => {

})

process.on('unhandledRejection', () => {

})