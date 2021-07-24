import recipieBanner from '../../../assets/images/product-assets/recipieBanner/recipieBanner.png';
// import favourite from '../../../assets/images/product-assets/favourite/favourite.png';
// import addIcon from '../../../assets/images/product-assets/add/addIcon.png';
// import share from '../../../assets/images/product-assets/share/share.png';
// import reviews from '../../../assets/images/product-assets/reviews/reviews.png';
// import greenCertification from '../../../assets/images/product-assets/greenCertification/greenCertification.png';
import warmFood from '../../../assets/images/product-assets/warmFood/warmFood.png';
import clock from '../../../assets/images/product-assets/clock/clock.png';
import tree from '../../../assets/images/product-assets/tree/tree.png';
import dollor from '../../../assets/images/product-assets/dollor/dollor.png';
import wheatDough from '../../../assets/images/product-assets/wheatDough/wheatDough.png';
import wheatFlour from '../../../assets/images/product-assets/wheatFlour/wheatFlour.png';
// import starEmpty from '../../../assets/images/product-assets/starRatings/starEmpty.png';
// import starFilled from '../../../assets/images/product-assets/starRatings/starFilled.png';
import flag from '../../../assets/images/product-assets/flag/flag.png';
import like from '../../../assets/images/product-assets/like/like.png';
import profile from '../../../assets/images/product-assets/profile/profile.png';

import greenColoredAddIcon from '../../../assets/images/product-assets/greenColoredAddIcon/greenColoredAddIcon.png';



export const productDescriptionBanners = [
    {
        "id" : 1,
        "image" : recipieBanner    
    }
]

export const productDetails = [
    {
        "id" : 1,
        "brandName" : "CHINESE-SIDES",
        "title" : "Refreshing Watermelon, Feta Mela And Mint Salad",
        "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        "deliveryTitle" : "Ingredients",
        "deliveryInfo": [
            {
                "id" : 1,
                "image" : warmFood,
                "title" : "4 People"
            },
            {
                "id" : 2,
                "image" : clock,
                "title" : "30 Min"
            },
            {
                "id" : 3,
                "image" : tree,
                "title" : "9 Items"
            },
            {
                "id" : 4,
                "image" : dollor,
                "title" : "AED 50.00"
            }
        ],
        "ingredients" : [
            {
                "id" : 1,
                "image" : greenColoredAddIcon,
                "name" : "Cucumber",
                "dots": "",
                "quantity": "350gms"
            },
            {
                "id" : 2,
                "image" : greenColoredAddIcon,
                "name" : "Onion",
                "dots": "",
                "quantity": "350gms"
            },
            {
                "id" : 3,
                "image" : greenColoredAddIcon,
                "name" : "Tomatoes",
                "dots": "",
                "quantity": "350gms"
            },
            {
                "id" : 4,
                "image" : greenColoredAddIcon,
                "name" : "Parsley",
                "dots": "",
                "quantity": "350gms"
            },
            {
                "id" : 5,
                "image" : greenColoredAddIcon,
                "name" : "Mint Leaves",
                "dots": "",
                "quantity": "350gms"
            },
            {
                "id" : 6,
                "image" : greenColoredAddIcon,
                "name" : "Olive oil2",
                "dots": "",
                "quantity": "350gms"
            },
            {
                "id" : 7,
                "image" : greenColoredAddIcon,
                "name" : "Saltpinch",
                "dots": "",
                "quantity": "350gms"
            },
            {
                "id" : 8,
                "image" : greenColoredAddIcon,
                "name" : "Lemon juice",
                "dots": "",
                "quantity": "350gms"
            },
            {
                "id" : 9,
                "image" : greenColoredAddIcon,
                "name" : "Pepperpinch",
                "dots": "",
                "quantity": "350gms"
            },
        ]
        

    }
]

export const cookingDirections = [
    {
        "id" : 1,
        "image" : wheatFlour,
        "dishDetails" : [
            {
                "id" : 1,
                "step" : "Step 1 of 8",
                "dishName" : "REFRESHING WATERMELON, FETA MELA AND MINT SALAD",
                "dishDescription" : "Preheat the oven to 375 F",
                "next" : "Next Step"
            }
        ]
    },
    {
        "id" : 2,
        "image" : wheatDough,
        "dishDetails" : [
            {
                "id" : 1,
                "step" : "Step 2",
                "dishName" : "REFRESHING WATERMELON, FETA MELA AND MINT SALAD",
                "dishDescription" : "Bake the cod on the middle rack of the oven until the crust golden brown and the fish flakes easily with a fork, 10-20 min, depending on the thickness of the fillets",
                "next" : "Next Step"
            }
        ]
    }
]

export const toolsSection = [
    {
        "id" : 1,
        "title" : "Baking Sheet"
    },
    {
        "id" : 2,
        "title" : "Parchment Paper"
    },
    {
        "id" : 3,
        "title" : "Measuring Spoons"
    },
    {
        "id" : 4,
        "title" : "Mix Bowl"
    },
    {
        "id" : 5,
        "title" : "Fork"
    },
    {
        "id" : 6,
        "title" : "Oven Mitts"
    },
    {
        "id" : 7,
        "title" : "Spatula"
    },
    {
        "id" : 8,
        "title" : "Plates"
    },
    {
        "id" : 9,
        "title" : "Spoons"
    },
    {
        "id" : 10,
        "title" : "Baking Powder"
    },
]

export const ratingsAndReviews = [
   {
       "id" : 1,
       "title": "Ratings & Reviews",
       "starReviews" : "8 comments",
       "writeReview" : "Write A Review",


   }
]

export const commentsSection = [
    {
        "id" : 1,
        "reviewImage" : profile,
        "reviewName" : "TOBY MARKSON",
        "reviewDate" : "12 March, 2020",
        "reviewDescription":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        "reviewThumbsUpImage" : like,
        "reviewFlagImage" : flag

    },
    {
        "id" : 2,
        "reviewImage" : profile,
        "reviewName" : "ZOYA KHAN",
        "reviewDate" : "12 March, 2020",
        "reviewDescription":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        "reviewThumbsUpImage" : like,
        "reviewFlagImage" : flag

    },
    {
        "id" : 3,
        "reviewImage" : profile,
        "reviewName" : "VIRAT",
        "reviewDate" : "12 March, 2020",
        "reviewDescription":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        "reviewThumbsUpImage" : like,
        "reviewFlagImage" : flag

    },
    {
        "id" : 4,
        "reviewImage" : profile,
        "reviewName" : "ARJUN",
        "reviewDate" : "12 March, 2020",
        "reviewDescription":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        "reviewThumbsUpImage" : like,
        "reviewFlagImage" : flag

    },
    {
        "id" : 5,
        "reviewImage" : profile,
        "reviewName" : "VINCENT.N",
        "reviewDate" : "12 March, 2020",
        "reviewDescription":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        "reviewThumbsUpImage" : like,
        "reviewFlagImage" : flag

    },

]

export const nutritions = [
    {
        "id" : 1,
        "calorieValue" : "600",
        "calorieLabel" : "CALORIES",
        "calorieItemName": "",
        "caloriePercentage" : "",
        "calorieQuantity" : "",
    },
    {
        "id" : 2,
        "calorieValue" : "",
        "calorieLabel" : "",
        "calorieItemName": "SODIUM",
        "caloriePercentage" : "124% DV",
        "calorieQuantity" : "2980mg",
    },
    {
        "id" : 3,
        "calorieValue" : "",
        "calorieLabel" : "",
        "calorieItemName": "FAT",
        "caloriePercentage" : "48% DV",
        "calorieQuantity" : "31gm",
    },
    {
        "id" : 4,
        "calorieValue" : "",
        "calorieLabel" : "",
        "calorieItemName": "PROTEIN",
        "caloriePercentage" : "48% DV",
        "calorieQuantity" : "31gm",
    },
    {
        "id" : 5,
        "calorieValue" : "",
        "calorieLabel" : "",
        "calorieItemName": "CARBS",
        "caloriePercentage" : "4% DV",
        "calorieQuantity" : "31gm",
    },
    {
        "id" : 6,
        "calorieValue" : "",
        "calorieLabel" : "",
        "calorieItemName": "FIBER",
        "caloriePercentage" : "4% DV",
        "calorieQuantity" : "31gm",
    }

]

