const {Cluster} = require('puppeteer-cluster');
const {extractProducts} = require('./productsScraper');
const {websiteData} = require('./data');
const compareAndSaveResults = require('./resultAnalysis');


(async()=>{
    const cluster = await Cluster.launch({
        concurrency: Cluster.CONCURRENCY_PAGE,
        maxConcurrency: 5,
        timeout: 5*60*1000,
        puppeteerOptions:{headless:true,defaultViewport:null}
    });
    
    await cluster.task(async ({page,data:webData})=>{
        await extractProducts(webData,page,0).then(async (data)=>{
                console.log("finished scraping :"+webData.domain);
                compareAndSaveResults(data);
        });
    });

    for(index in websiteData){
        cluster.execute(websiteData[index]);
    }

    await cluster.idle();
    await cluster.close();
})();

