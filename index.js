const puppeteer = require('puppeteer');
const {extractProducts} = require('./productsScraper');
const {websiteData} = require('./data');
const compareAndSaveResults = require('./resultAnalysis');
(async()=>{
    const browser = await puppeteer.launch({headless:false,defaultViewport:null});
    const page = await browser.newPage();

    await extractProducts(websiteData[1],page,0).then((data)=>{
            console.log(data);
            compareAndSaveResults(data);
    });

    await page.close();
    await browser.close();
})();

