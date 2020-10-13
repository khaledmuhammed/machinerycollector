const scraper = require('./scraper');
const {performance} = require('perf_hooks');
const { getHeapCodeStatistics } = require('v8');
scrape = new scraper();

let products = (async () => {
    const response = await scrape.scrapeSite('https://www.justheavyequipment.com.au/equipment-for-sale/search');
    return response;
  })()

products.then((data)=>{
    console.log(data);
})


