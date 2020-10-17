const autoscroll = require('./utils');

const extractProducts = async (websiteData,page,index) =>{
    if(index>websiteData.url.length-1){
        return []
    }else{
        
        await page.goto(websiteData.url[index],{waitUntil:'networkidle0',timeout:0});
        await autoscroll(page);

        let products = await page.evaluate((webData) => Array.from(document.querySelectorAll(webData.productSelector)).map(compact => (
            {
                title: compact.querySelector(webData.nameSelector) ? compact.querySelector(webData.nameSelector).innerText.trim() : '',
                link: (compact.querySelector(webData.linkSelector)) ? compact.querySelector(webData.linkSelector).href : compact.href,
                price: compact.querySelector(webData.priceSelector) ? compact.querySelector(webData.priceSelector).innerText.trim() : '',
                image: compact.querySelector(webData.imgSelector) ? compact.querySelector(webData.imgSelector).src : '',
                domain:webData.domain,
                country:webData.country
            }
            )),
            websiteData);
        return products.concat(await extractProducts(websiteData,page,index+=1));
    }
};
exports.extractProducts = extractProducts;