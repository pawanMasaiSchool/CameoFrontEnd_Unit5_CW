
const initialFilters = {
    delivery_24:false,
    businessCameo:false,
    sortingFilter:{
        Recommended: true,
        PriceHighToLow: false,
        PriceLowToHigh: false,
        NumberOfReviews: false,
        Newest: false,
        Alphabetical: false,
    },
    pricingFilter:{
        Zero_Hund:false,
        Hund_TwoHund: false,
        TwoHund_ThrHund: false,
        ThrHund_FourHund:false,
        FourHund_FiveHund:false,
        FiveHundPlus:false
    },
    ratingFilter:{
        Four : false,
        Three:false,
        Two: false,
        One:false,
    }
}

const CategoryReducer = (currentFilters = initialFilters, action) => {
    switch(action.type){
        case ("DELIVERY_24H") :{
            return {...currentFilters, delivery_24: action.payload.delivery_24}
        }
        case("BUSINESS_CAMEO"):{
            return {...currentFilters, businessCameo: action.payload.businessCameo }
        }
        case("SORTING_FILTER"):{
            let sorting = currentFilters.sortingFilter;
            for(let key in sorting){
                if(key === action.name){
                    sorting[key] = true
                }
                else{
                    sorting[key] = false
                }
            }
            return {...currentFilters, sortingFilter: {...sorting } }
        }
        case("PRICING_FILTER"):{
            let pricing = currentFilters.pricingFilter;
            for(let key in pricing){
                if(key === action.name){
                    pricing[key] = true
                }
                else{
                    pricing[key] = false
                }
            }
            return {...currentFilters, pricingFilter: {...pricing } }
        }
        case("RATING_FILTER"):{
            let rating = currentFilters.ratingFilter;
            for(let key in rating){
                if(key === action.name){
                    rating[key] = true
                }
                else{
                    rating[key] = false
                }
            }
            return {...currentFilters, ratingFilter: {...rating } }
        }
        default:{
            return currentFilters
        }
    }
}

export default CategoryReducer