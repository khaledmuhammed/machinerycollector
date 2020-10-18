const { mongo } = require('mongoose');

require('dotenv').config();
const mongoUri = process.env.MONGO_URI;

const websiteData = [
    {
    url:['https://www.justheavyequipment.com.au/equipment-for-sale/search',
        'https://www.justheavyequipment.com.au/equipment-for-sale/search?p=2'],
    productSelector:'div.product-listing-item--normal',
    nameSelector:'h2.product-listing-item__title',
    priceSelector:'div.product-listing-item__cost',
    linkSelector:'a.product-listing-item__enquire',
    imgSelector:'img.c-lazy',
    country:'Australia',
    domain:'https://www.justheavyequipment.com.au/'
    },
    {
        url:['https://www.gumtree.com.au/s-construction-vehicles-equipment/c21129',
        'https://www.gumtree.com.au/s-construction-vehicles-equipment/page-2/c21129'],
        productSelector:'div.user-ad-collection-new-design__wrapper--row a.user-ad-row-new-design',
        nameSelector:'span.user-ad-row-new-design__title-span',
        priceSelector:'span.user-ad-price-new-design__price',
        linkSelector:'a.user-ad-row-new-design',
        imgSelector:'img.user-ad-image__thumbnail',
        country:'Australia',
        domain:'https://www.gumtree.com.au/'
    },
    {
        url:['https://www.machines4u.com.au/search/excavator/?wizardlabelfacet=Machinery+%26+Equipment&pdid=7&',
        'https://www.machines4u.com.au/search/excavator/?wizardlabelfacet=Machinery+%26+Equipment&pdid=7&p=2'],
        productSelector:'div.tiled_results ',
        nameSelector:'a.equip_link',
        priceSelector:'span.price_container',
        linkSelector:'a.equip_link',
        imgSelector:'div.photo_container > img',
        country:'Australia',
        domain:'https://www.machines4u.com.au/'
    },
    {
        url:['https://www.tradeearthmovers.com.au/search/type-loaders',
            'https://www.tradeearthmovers.com.au/search/type-loaders/page-2'],
        productSelector:'div.reswrap ',
        nameSelector:'div.reswrap-title span.left',
        priceSelector:'div.reswrap-title span.right',
        linkSelector:'a.view-button',
        imgSelector:'div.res-img img.lazyload',
        country:'Australia',
        domain:'https://www.tradeearthmovers.com.au/'
    },
    {
        url:['https://constructiondealers.com.au/buy/used-construction-earth-moving-machinery/',
        'https://constructiondealers.com.au/buy/used-construction-earth-moving-machinery/'],
        productSelector:'div.truck-result',
        nameSelector:'h2.details-title',
        priceSelector:'span.price',
        linkSelector:'a.view-item',
        imgSelector:'span.truck-thumb img',
        country:'Australia',
        domain:'https://constructiondealers.com.au/'
    },
];
exports.websiteData = websiteData;
exports.mongoUri = mongoUri;