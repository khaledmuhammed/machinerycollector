const {machineData} = require('./data');

const autoScroll = async(page) => {
    await page.evaluate(async () => {
        await new Promise((resolve, reject) => {
            var totalHeight = 0;
            var distance = 150;
            var timer = setInterval(() => {
                var scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;

                if(totalHeight >= scrollHeight){
                    clearInterval(timer);
                    resolve();
                }
            }, 75);
        });
    });
}
const constructUrls = (searchUrl,insertPos) => {
    let machines = []
    for(index in machineData){
        machines.push({
            url:[searchUrl.slice(0, insertPos), machineData[index].machineName, searchUrl.slice(insertPos)].join(''),
            brand:machineData[index].brand,
            category:machineData[index].category,
            machineName:machineData[index].machineName
        })
    }
    return machines;
}
module.exports = {autoScroll,constructUrls};
//[searchUrl.slice(0, insertPos), machineData[index].machineName, searchUrl.slice(insertPos)].join('')