import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import SubSortBox from "../Components/SubSortBox";
import CelebCard from "../Components/CelebCard"


const sorting = {
    "Recommended": true,
    "PriceHighToLow": "",
    "PriceLowToHigh": "",
    "NumberOfReviews": "",
    "Newest": "",
    "Alphabetical": "",
}
const pricing = {
    "Zero_Hund":    false,
    "Hund_TwoHund": "",
    "TwoHund_ThrHund": "",
    "ThrHund_FourHund":"",
    "FourHund_FiveHund":"",
    "FiveHundPlus":""
}

const rating = {
    "Four" : false,
    "Three":"",
    "Two": "",
    "One":"",
}

const CategoryPage = () => {
    const [filter,setFilter] = useState(15);
    const [celebs, setCelebs] = useState(85);
    const handleFilterVisiblity = () => {
        if(filter === 15){
            setFilter(0);
            setCelebs(100);
        }
        if(filter === 0){
            setFilter(15);
            setCelebs(85);
        }
    }

    const [sortingFilter, setSortingFilter] = useState(sorting);

    const {Recommended, PriceHighToLow, PriceLowToHigh,NumberOfReviews,Newest,Alphabetical} = sortingFilter;

    const handleChangeInSortFilter = (e) => {
        let {name,checked} = e.target;
        let tempObj = sortingFilter;
        for(let key in tempObj){
            tempObj[key] = false;
        }
        setSortingFilter({...sortingFilter, [name]:checked});
    }

    const [delivery_24,setDelivery_24] = useState(false);
    const handleDeliveryChange = () => {
        setDelivery_24(!delivery_24);
    }
    const [businessCameo,setBusinessCameo] = useState(false);
    const handleBusinessCameoChange = () => {
        setBusinessCameo(!businessCameo);
    }

    const [pricingFilter, setPricingFilter] = useState(pricing);

    const { Zero_Hund, Hund_TwoHund, TwoHund_ThrHund, ThrHund_FourHund,FourHund_FiveHund, FiveHundPlus } = pricingFilter;

    const handleChangeInPriceFilter = (e) => {
        let {name,checked} = e.target;
        let tempObj = pricingFilter;
        for(let key in tempObj){
            tempObj[key] = false;
        }
        setPricingFilter({...pricingFilter, [name]:checked});
    }

    const [ratingFilter, setRatingFilter] = useState(rating);

    const {Four, Three, Two, One} = ratingFilter;

    const handleChangeInRatingFilter = (e) => {
        let {name,checked} = e.target;
        let tempObj = ratingFilter;
        for(let key in tempObj){
            tempObj[key] = false;
        }

        setRatingFilter({...ratingFilter, [name]:checked});
    }


    return (
        <>
        <Box sx={{
            background:"#101010",
            color:"white",
            padding:"100px 50px",
            width:"93%",
            margin:"auto",
            display:"flex"
        }}>
            <Box name="filter" sx={{
                width:`${filter}%`,
                // border:"1px solid red",
                height:"auto",
                overflow:"hidden",
            }}>
                <Box name="sortBy">
                    <h3 style={{color:"#4D4D4D",paddingLeft:"15px"}}>Sort by</h3>
                    
                    <SubSortBox 
                    name="Recommended" 
                    onChange={handleChangeInSortFilter} 
                    checked={Recommended}
                    pTag="Recommended"
                    />
                    <SubSortBox 
                    name="PriceHighToLow" 
                    onChange={handleChangeInSortFilter} 
                    checked={PriceHighToLow}
                    pTag="Price: High - Low"
                    />
                    <SubSortBox 
                    name="PriceLowToHigh" 
                    onChange={handleChangeInSortFilter} 
                    checked={PriceLowToHigh}
                    pTag="Price: Low - High"
                    />
                    <SubSortBox 
                    name="NumberOfReviews" 
                    onChange={handleChangeInSortFilter} 
                    checked={NumberOfReviews}
                    pTag="Number Of Reviews"
                    />
                    <SubSortBox 
                    name="Newest" 
                    onChange={handleChangeInSortFilter} 
                    checked={Newest}
                    pTag="Newest"
                    />
                    <SubSortBox 
                    name="Alphabetical" 
                    onChange={handleChangeInSortFilter} 
                    checked={Alphabetical}
                    pTag="Alphabetical"
                    />    
                </Box>
                <hr/>
                <Box name="24hr delivery">
                    <h3 style={{color:"#4D4D4D", paddingLeft:"15px"}}>24hr delivery</h3>
                    <SubSortBox
                    onChange={handleDeliveryChange} 
                    checked={delivery_24}
                    pTag="24hr delivery"
                    /> 
                </Box>
                <hr/>
                <Box name="BusinessCameo">
                    <h3 style={{color:"#4D4D4D", paddingLeft:"15px"}}>Business Cameo</h3>
                    <SubSortBox
                    onChange={handleBusinessCameoChange} 
                    checked={businessCameo}
                    pTag="Business Cameo"
                    /> 
                </Box>
                <hr/>

                <Box name="Price">
                    <h3 style={{color:"#4D4D4D",paddingLeft:"15px"}}>Price</h3>
                    
                    <SubSortBox 
                    name="Zero_Hund" 
                    onChange={handleChangeInPriceFilter} 
                    checked={Zero_Hund}
                    pTag="$0 - $100"
                    />
                    <SubSortBox 
                    name="Hund_TwoHund" 
                    onChange={handleChangeInPriceFilter} 
                    checked={Hund_TwoHund}
                    pTag="$100 - $200"
                    />
                    <SubSortBox 
                    name="TwoHund_ThrHund" 
                    onChange={handleChangeInPriceFilter} 
                    checked={TwoHund_ThrHund}
                    pTag="$200 - $300"
                    />
                    <SubSortBox 
                    name="ThrHund_FourHund" 
                    onChange={handleChangeInPriceFilter} 
                    checked={ThrHund_FourHund}
                    pTag="$300 - $400"
                    />
                    <SubSortBox 
                    name="FourHund_FiveHund" 
                    onChange={handleChangeInPriceFilter} 
                    checked={FourHund_FiveHund}
                    pTag="$400 - $500"
                    />
                    <SubSortBox 
                    name="FiveHundPlus" 
                    onChange={handleChangeInPriceFilter} 
                    checked={FiveHundPlus}
                    pTag="$500+"
                    />    
                </Box>
                <hr/>

                <Box name="AverageReviewRating">
                    <h3 style={{color:"#4D4D4D",paddingLeft:"15px"}}>Average Review Rating</h3>
                    
                    <SubSortBox 
                    name="Four" 
                    onChange={handleChangeInRatingFilter} 
                    checked={Four}
                    pTag="4 stars & up"
                    />
                    <SubSortBox 
                    name="Three" 
                    onChange={handleChangeInRatingFilter} 
                    checked={Three}
                    pTag="3 stars & up"
                    />
                    <SubSortBox 
                    name="Two" 
                    onChange={handleChangeInRatingFilter} 
                    checked={Two}
                    pTag="2 stars & up"
                    />
                    <SubSortBox 
                    name="One" 
                    onChange={handleChangeInRatingFilter} 
                    checked={One}
                    pTag="1 stars & up"
                    /> 
                </Box>
                <hr/>

            </Box>
            
            <Box name="celebs" sx={{
                width:`${celebs}%`,
                // border:"1px solid red",
                height:"auto",
                display:"flex",
                flexDirection:"column"
            }}>
                <Button sx={{
                    margin:"0px 20px 10px 90%",
                    width:"130px",
                    textTransform:"none"
                    }} 
                    onClick={handleFilterVisiblity} 
                    variant="contained" 
                    >Toggle Filters
                </Button>
                    <Box sx={{
                        // border:"1px solid red",
                        display:"flex",
                        width:"95%",
                        gap:"20px",
                        flexDirection:"row",
                        flexWrap:"wrap",
                        margin:"10px 15px 20px 70px",
                        padding:"10px 5px 20px 0px"
                    }}>
                        <CelebCard 
                        name="Shonali Nagrani"
                        profession="Bollywood Model/Actress"
                        price="150"
                        img_url="https://d31wcbk3iidrjq.cloudfront.net/VVIiX_Ijm_avatar-OrlzCZbOf.jpg?h=360&w=300&q=100" 
                        />
                        <CelebCard 
                        name="Shonali Nagrani"
                        profession="Bollywood Model/Actress"
                        price="150"
                        img_url="https://d31wcbk3iidrjq.cloudfront.net/VVIiX_Ijm_avatar-OrlzCZbOf.jpg?h=360&w=300&q=100" 
                        />
                        <CelebCard 
                        name="Shonali Nagrani"
                        profession="Bollywood Model/Actress"
                        price="150"
                        img_url="https://d31wcbk3iidrjq.cloudfront.net/VVIiX_Ijm_avatar-OrlzCZbOf.jpg?h=360&w=300&q=100" 
                        />
                        <CelebCard 
                        name="Shonali Nagrani"
                        profession="Bollywood Model/Actress"
                        price="150"
                        img_url="https://d31wcbk3iidrjq.cloudfront.net/VVIiX_Ijm_avatar-OrlzCZbOf.jpg?h=360&w=300&q=100" 
                        />
                        <CelebCard 
                        name="Shonali Nagrani"
                        profession="Bollywood Model/Actress"
                        price="150"
                        img_url="https://d31wcbk3iidrjq.cloudfront.net/VVIiX_Ijm_avatar-OrlzCZbOf.jpg?h=360&w=300&q=100" 
                        />
                        <CelebCard 
                        name="Shonali Nagrani"
                        profession="Bollywood Model/Actress"
                        price="150"
                        img_url="https://d31wcbk3iidrjq.cloudfront.net/VVIiX_Ijm_avatar-OrlzCZbOf.jpg?h=360&w=300&q=100" 
                        />
                        <CelebCard 
                        name="Shonali Nagrani"
                        profession="Bollywood Model/Actress"
                        price="150"
                        img_url="https://d31wcbk3iidrjq.cloudfront.net/VVIiX_Ijm_avatar-OrlzCZbOf.jpg?h=360&w=300&q=100" 
                        />
                        <CelebCard 
                        name="Shonali Nagrani"
                        profession="Bollywood Model/Actress"
                        price="150"
                        img_url="https://d31wcbk3iidrjq.cloudfront.net/VVIiX_Ijm_avatar-OrlzCZbOf.jpg?h=360&w=300&q=100" 
                        />
                        <CelebCard 
                        name="Shonali Nagrani"
                        profession="Bollywood Model/Actress"
                        price="150"
                        img_url="https://d31wcbk3iidrjq.cloudfront.net/VVIiX_Ijm_avatar-OrlzCZbOf.jpg?h=360&w=300&q=100" 
                        />
                        <CelebCard 
                        name="Shonali Nagrani"
                        profession="Bollywood Model/Actress"
                        price="150"
                        img_url="https://d31wcbk3iidrjq.cloudfront.net/VVIiX_Ijm_avatar-OrlzCZbOf.jpg?h=360&w=300&q=100" 
                        />
                        <CelebCard 
                        name="Shonali Nagrani"
                        profession="Bollywood Model/Actress"
                        price="150"
                        img_url="https://d31wcbk3iidrjq.cloudfront.net/VVIiX_Ijm_avatar-OrlzCZbOf.jpg?h=360&w=300&q=100" 
                        />
                        <CelebCard 
                        name="Shonali Nagrani"
                        profession="Bollywood Model/Actress"
                        price="150"
                        img_url="https://d31wcbk3iidrjq.cloudfront.net/VVIiX_Ijm_avatar-OrlzCZbOf.jpg?h=360&w=300&q=100" 
                        />
                        <CelebCard 
                        name="Shonali Nagrani"
                        profession="Bollywood Model/Actress"
                        price="150"
                        img_url="https://d31wcbk3iidrjq.cloudfront.net/VVIiX_Ijm_avatar-OrlzCZbOf.jpg?h=360&w=300&q=100" 
                        />
                        <CelebCard 
                        name="Shonali Nagrani"
                        profession="Bollywood Model/Actress"
                        price="150"
                        img_url="https://d31wcbk3iidrjq.cloudfront.net/VVIiX_Ijm_avatar-OrlzCZbOf.jpg?h=360&w=300&q=100" 
                        />
                        <CelebCard 
                        name="Shonali Nagrani"
                        profession="Bollywood Model/Actress"
                        price="150"
                        img_url="https://d31wcbk3iidrjq.cloudfront.net/VVIiX_Ijm_avatar-OrlzCZbOf.jpg?h=360&w=300&q=100" 
                        />
                    </Box>
            </Box>
            
        </Box>
        </>
    )
}

export default CategoryPage