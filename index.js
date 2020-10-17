const {Cluster} = require('puppeteer-cluster');
const {extractProducts} = require('./productsScraper');
const {websiteData} = require('./data');
const {compareAndSaveResults} = require('./resultAnalysis');
(async()=>{
    const cluster = await Cluster.launch({puppeteerOptions:{headless:false},    concurrency: Cluster.CONCURRENCY_PAGE, maxConcurrency: 2})
    

    await cluster.task(async ({page,data:webData})=>{
        await extractProducts(webData,page,0).then(async (data)=>{
            console.log(data);
            // await compareAndSaveResults(data);
        });
    });

    for(index in websiteData){
        cluster.queue(websiteData[index]);
    }
            
    await cluster.idle();
    await cluster.close();        
})();

