import {BUSINESS_CAMEO, DELIVERY_24H, PRICING_FILTER, SORTING_FILTER, RATING_FILTER } from "./actionTypes";



export const Delivery_24h = (delivery_24) => ({
    type: DELIVERY_24H,
    payload:{
        delivery_24
    }
});

export const Business_Cameo = (businessCameo) => ({
    type: BUSINESS_CAMEO,
    payload:{
        businessCameo
    }
})

export const SortingFilter = (fieldName) => ({
    type: SORTING_FILTER,
    name:fieldName
})

export const PricingFilter = (fieldName) => ({
    type: PRICING_FILTER,
    name:fieldName
})

export const RatingFilter = (fieldName) => ({
    type: RATING_FILTER,
    name:fieldName
})