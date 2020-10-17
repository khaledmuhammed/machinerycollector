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
    nextPagePattern:/(p=)(\d+)$/,
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
        nextPagePattern:/(page-)(\d+)/,
        country:'Australia',
        domain:'https://www.gumtree.com.au/'
    }
];
exports.websiteData = websiteData;
exports.mongoUri = mongoUri;