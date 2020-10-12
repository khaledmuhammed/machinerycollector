const { url } = require('inspector');
const puppeteer = require('puppeteer-extra');
const fs = require('fs');
const readline = require('readline');

class scraper{
    constructor(){
        this.productsList = new Array();
        this.fileName = 'Australia.txt';
    };
    

    async readWebsites() {
    let list = []
    const fileStream = fs.createReadStream(this.fileName);
        const rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity
        });
        for await (const line of rl) {
            // Each line in input.txt will be successively available here as `line`.
            list.push(line);
        }
        return list;
    }


    async scrapeProducts(page,x=1){
        

        const products_names = await page.$$('h2.product-listing-item__title');
        const products_prices = await page.$$('div.product-listing-item__cost');
        const products_images = await page.$$('img.c-lazy');
        const products_links = await page.$$('a.product-listing-item__enquire');

        for (let index = 0; index < products_names.length; index++) {

            const product_name_el = await products_names[index].getProperty('textContent');
            const product_name = await product_name_el.jsonValue();
      
            const products_image_el = await products_images[index].getProperty('src');
            const product_image = await products_image_el.jsonValue();
      
            const products_prices_el = await products_prices[index].getProperty('textContent');
            const product_price = await products_prices_el.jsonValue();
      
            const products_links_el = await products_links[index].getProperty('href');
            const product_link = await products_links_el.jsonValue();
      
            let product = {};
            product.name = product_name;
            product.image = product_image;
            product.price = product_price;
            product.link = product_link;
      
            this.productsList.push(product);
          }
          
    };
    async scrapeSite(url){
        const browser = await puppeteer.launch({headless:false,defaultViewport:null});
        const page = await browser.newPage();
        await page.goto(url);
        await this.delay(2000);
        await this.autoScroll(page);
        await this.scrapeProducts(page);
        const nextBtn = await page.$('#search-content > div > div.sk-pagination-navigation.is-numbered > div > div:nth-child(6)');
        await nextBtn.evaluate(nextBtn => nextBtn.click({delay:2000}));
        await this.scrapeProducts(page,2);
        await page.close();
        await browser.close();
        
        return await this.productsList;
    }
    delay(time) {
        return new Promise(function(resolve) { 
            setTimeout(resolve, time)
        });
     }
    async autoScroll(page){
        
        await page.evaluate(async () => {
            await new Promise((resolve, reject) => {
                var totalHeight = 0;
                var distance = 100;
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
}
module.exports = scraper;