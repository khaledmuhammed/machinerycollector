const { mongo } = require('mongoose');

require('dotenv').config();
const mongoUri = process.env.MONGO_URI;

const blacklistedWords = ['hire','manual','parts','book','part','book','bucket','attachments']

const machineData = [
    {
        brand:'Caterpillar',
        category:'wheel loader',
        machineName:'972H'
    },
    {
        brand:'Caterpillar',
        category:'wheel loader',
        machineName:'966D'
    },
    {
        brand:'Caterpillar',
        category:'wheel loader',
        machineName:'950E'
    },
]

const websiteData = [
    {
        searchUrl:'https://www.justheavyequipment.com.au/equipment-for-sale/search?keyword=',
        insertPos:72,
        productSelector:'div.product-listing-item--normal',
        nameSelector:'h2.product-listing-item__title',
        priceSelector:'div.product-listing-item__cost',
        linkSelector:'a.product-listing-item__enquire',
        imgSelector:'img.c-lazy',
        country:'Australia',
        domain:'https://www.justheavyequipment.com.au/'
    },
    {
        //
        searchUrl:'https://www.gumtree.com.au/s-automotive//k0c9299',
        insertPos:40,
        productSelector:'div.user-ad-collection-new-design__wrapper--row a.user-ad-row-new-design',
        nameSelector:'span.user-ad-row-new-design__title-span',
        priceSelector:'span.user-ad-price-new-design__price',
        linkSelector:'a.user-ad-row-new-design',
        imgSelector:'img.user-ad-image__thumbnail',
        country:'Australia',
        domain:'https://www.gumtree.com.au/'
    },
    {
        searchUrl:'https://www.machines4u.com.au/search//',
        insertPos:37,
        productSelector:'div.tiled_results ',
        nameSelector:'a.equip_link',
        priceSelector:'span.price_container',
        linkSelector:'a.equip_link',
        imgSelector:'div.photo_container > img',
        country:'Australia',
        domain:'https://www.machines4u.com.au/'
    },
    {
        searchUrl:'https://www.ezymachinesales.com.au/search/?search_word=',
        insertPos:55,
        productSelector:'div.product-list-summary ',
        nameSelector:'div.center-cont h5.sec-title',
        priceSelector:'span.amount',
        linkSelector:'div.right-cont a.btn',
        imgSelector:'div.img-pad img',
        country:'Australia',
        domain:'https://www.ezymachinesales.com.au/'
    },
    {
        searchUrl:'https://www.tradeearthmovers.com.au/search/keywords-',
        insertPos:52,
        productSelector:'div.reswrap',
        nameSelector:'div.reswrap-title span.left',
        priceSelector:'div.reswrap-title span.right',
        linkSelector:'a.view-button',
        imgSelector:'div.img-large img',
        country:'Australia',
        domain:'https://www.tradeearthmovers.com.au/'
    },
    {
        searchUrl:'https://truckdealers.com.au/buy/results/?keyword=',
        insertPos:49,
        productSelector:'div.truck-result',
        nameSelector:'h2.details-title a',
        priceSelector:'span.price',
        linkSelector:'a.view-item',
        imgSelector:'span.truck-thumb img',
        country:'Australia',
        domain:'https://truckdealers.com.au/'
    },
    {
        searchUrl:'https://www.truckworld.com.au/search/?query=k~-v~1-z~15-',
        insertPos:46,
        productSelector:'div.search-result',
        nameSelector:'p.item-desc',
        priceSelector:'p.list-price',
        linkSelector:'a.list-title',
        imgSelector:'div.listing-slider img',
        country:'Australia',
        domain:'https://www.truckworld.com.au/'
    },
    {
        searchUrl:'https://www.plantandequipment.com/en-au/machinery?search_string=',
        insertPos:64,
        productSelector:'div.ad-item-js:not(.sold-label-on)',
        nameSelector:'h5.equipment_title a',
        priceSelector:'a.make-offer-js',
        linkSelector:'h5.equipment_title a',
        imgSelector:'img.seach-result-list__item__image',
        country:'Australia',
        domain:'https://www.plantandequipment.com/en-au'
    },
    {
        searchUrl:'https://www.kitmondo.com/listing/search/?query=&countries=AU',
        insertPos:47,
        productSelector:'div.category-product-inner',
        nameSelector:'h3.name a',
        priceSelector:'a.price',
        linkSelector:'h3.name a',
        imgSelector:'div.product-image img',
        country:'Australia',
        domain:'https://www.plantandequipment.com/en-au'
    },
    {
        searchUrl:'https://www.rockanddirt.com/search?method=search&db=equipdb&aucflg=exclude&country=AUS&model=',
        insertPos:93,
        productSelector:'div#result',
        nameSelector:'ul#result_header li.main a',
        priceSelector:'li.price h3',
        linkSelector:'ul#result_header li.main a',
        imgSelector:'div#img_area img.listpic',
        country:'Australia',
        domain:'https://www.rockanddirt.com/'
    },
];
exports.websiteData = websiteData;
exports.mongoUri = mongoUri;
exports.blacklistedWords = blacklistedWords;
exports.machineData = machineData;