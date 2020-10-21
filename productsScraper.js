const {autoScroll} = require('./utils');
const extractProducts = async (websiteData,page,index) =>{
    if(index>websiteData.machines.length-1){
        return []
    }else{
        
        await page.goto(websiteData.machines[index].url,{waitUntil:'domcontentloaded',timeout:0});
        await autoScroll(page);

        let products = await page.evaluate((webData,index) => Array.from(document.querySelectorAll(webData.productSelector)).map(compact => (
            {
                title: compact.querySelector(webData.nameSelector) ? compact.querySelector(webData.nameSelector).innerText.trim() : '',
                link: (compact.querySelector(webData.linkSelector)) ? compact.querySelector(webData.linkSelector).href : compact.href,
                price: compact.querySelector(webData.priceSelector) ? compact.querySelector(webData.priceSelector).innerText.trim() : '',
                image: compact.querySelector(webData.imgSelector) ? compact.querySelector(webData.imgSelector).src : '',
                category:webData.machines[index].category,
                brand:webData.machines[index].brand,
                machineName:webData.machines[index].machineName,
                domain:webData.domain,
                country:webData.country
            }
            )),
            websiteData,index);
        return products.concat(await extractProducts(websiteData,page,index+=1));
    }
};
exports.extractProducts = extractProducts;