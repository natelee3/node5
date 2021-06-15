const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Input file: ", (inputFile => {
    rl.question("Output file: ", (outputFile => {
        fs.readFile(inputFile, 'utf8', (err, data) => {
            if (err) {
                console.error(err)
                return
            }
            let newData = data.toUpperCase()
            fs.writeFile(outputFile, newData, function (err) {
                if (err) {
                    console.error(err)
                    return
                }
                console.log("\nWrote to file", outputFile);
                console.log(`As a result, ${outputFile} should now contain the text ${newData}`)
                rl.close()
            })
        })    
    }))
}))