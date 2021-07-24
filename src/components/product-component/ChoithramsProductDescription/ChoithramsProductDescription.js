import React from 'react';
import '../../../assets/styles/product-styles/ProductDescription.scss';
import {productDescriptionBanners,productDetails,cookingDirections,toolsSection,ratingsAndReviews,commentsSection, nutritions} from '../../../mocks/product-mocks/productDescription-component-mocks/productDescription-mocks';
import favourite from '../../../assets/images/product-assets/favourite/favourite.png';
// import choithramsAddToCart from '../../../assets/images/product-assets/choithramsAddToCart/choithramsAddToCart.png';
// import share from '../../../assets/images/product-assets/share/share.png';
// import reviews from '../../../assets/images/product-assets/reviews/reviews.png';
import starEmpty from '../../../assets/images/product-assets/starRatings/starEmpty.png';
import starFilled from '../../../assets/images/product-assets/starRatings/starFilled.png';
import greenColoredDownArrow from '../../../assets/images/user-assets/arrows/greenColoredDownArrow.png';
import greenCertification from '../../../assets/images/product-assets/greenCertification/greenCertification.png';
import Header from '../../../common-components/Header/Header';
import Footer from '../../../common-components/Footer/Footer';
import RelatedRecipes from '../../recipe-component/RelatedRecipes/RelatedRecipes';


export default function ChoithramsProductDescription(){
    return(
        <React.Fragment>
            {/* <Header/> */}

            <div className = 'productDescriptionContainer'>
               <div className = 'imageAndProductDetails'>
                   {productDescriptionBanners.map((item,index)=>{
                       return(
                            <div className = 'leftSide' key = {index}>
                                <img src = {item.image} alt='no-alt'/>
                            </div>
                        )
                   })}
                                  
                    <div className = 'productDescriptionContainer'>
                        <div className = 'productSiteIcons'>
                            <img src = {favourite} alt='no-alt'/>
                            <img src = {favourite} alt='no-alt'/>
                            <img src = {favourite} alt='no-alt'/>
                            <img src = {favourite} alt='no-alt'/>
                            <img src = {greenCertification} alt='no-alt'/>
                        </div>

                        {productDetails.map((detail,index)=>{
                            return(
                                <React.Fragment>
                                    <div className = 'productDescriptionSection' key = {index}>
                                        <p>{detail.brandName}</p>
                                        <p>{detail.title}</p>
                                        <p>{detail.description}</p>
                                    
                                        <div className = 'borderSection'>
                                            {detail.deliveryInfo.map((info,index)=>{
                                                return(
                                                    <div className = 'deliveryItems' key = {index}>
                                                        <img src = {info.image} alt='no-alt'/>
                                                        <p>{info.title}</p>
                                                    </div>
                                                )
                                            })}
                                        </div>

                                        <div className = 'ingredientSection'>
                                            <p>{detail.deliveryTitle}</p>
                                            {detail.ingredients.map((item,index)=>{
                                                return(
                                                    <div className = 'ingredients'>
                                                        <img src = {item.image} alt="no-alt" />
                                                        <p>{item.name}</p>
                                                        <p>{item.dots}</p>
                                                        <p>{item.quantity}</p>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <button>Add To Cart</button>                                            
                                    </div>                                       
                                </React.Fragment>                                
                            )
                        })}

                    </div>
               </div>

               <div className = 'nutritionsSection'>
                   <div className = 'nutritionsHeader'>
                       <div>
                            <p>Nutritions</p>
                            <p>Epic deals from your favourite category</p>
                       </div>
                   </div>
                   
                    <div className = 'nutritionDetailsSection'> 
                    {nutritions.map((item,index)=>{
                        return(
                            <React.Fragment>
                            <div className = 'nutritionDetailSec' key = {index}>
                                <p>{item.calorieValue}</p>
                                <p>{item.calorieLabel}</p>
                                <p>{item.calorieItemName}</p>
                                <p>{item.caloriePercentage}</p>
                            </div>                        
                            </React.Fragment>
                        )
                    })}

                    </div>
               </div>

               <div className = 'cookingDirectionsSection'>
                   <div className = 'cookingHeader'>
                       <div>
                            <p>Cooking Directions</p>
                            <p>Epic deals from your favourite category</p>
                       </div>
                   </div>
                   

                    {cookingDirections.map((item,index)=>{
                        return(
                            <div className = 'directionDetailSection' key = {index}>
                                <div className = 'directionLeft'>
                                    <img src = {item.image} alt='no-alt' width = '100%' height = 'auto'/>
                                </div>

                                {item.dishDetails.map((detail,index)=>{
                                    return(
                                        <React.Fragment>
                                        <div className = 'directionRight' key = {index}>
                                            <p>{detail.step}</p>
                                            <p>{detail.dishName}</p>
                                            <p>{detail.dishDescription}</p>
                                            <button>{detail.next}</button>
                                        </div>
                                        </React.Fragment>
                                    )
                                })}
                            </div>
                        )
                    })}

                    <div className = 'arrowAndView'>
                        <img src = {greenColoredDownArrow} alt='no-alt'/>
                        <p>View 6 More Step</p>
                    </div>                    
               </div>

               <div className = 'toolsAndEquipmentsSection'>
                    <div className = 'toolsHeader'>
                        <div>
                            <p>Tools & Equipments</p>
                            <p>Epic deals from your favourite category</p>
                        </div>
                    </div>

                    <div className = 'toolsSection'>
                    {toolsSection.map((item,index)=>{
                        return(
                            <div className = 'tools' key = {index}>
                                <p>{item.title}</p>
                            </div>
                        )
                    })}

                    </div>                   
               </div>

               <div className = 'ratingsSection'>
                   {ratingsAndReviews.map((item,index)=>{
                       return(
                           <div className = 'ratingsAndTitle' key = {index}>
                               <p>{item.title}</p>
                               <div className = 'ratings'>
                                    <img src = {starFilled} alt='no-alt'/>
                                    <img src = {starFilled} alt='no-alt'/>
                                    <img src = {starFilled} alt='no-alt'/>
                                    <img src = {starFilled} alt='no-alt'/>
                                    <img src = {starEmpty} alt='no-alt'/>
                               </div>
                               <p>{item.starReviews}</p>
                               <p>{item.writeReview}</p>
                           </div>
                       )
                   })}

                   <div className = 'borderSec'>
                   </div>

                   <div className = 'commentsAndReviewsSection'>
                       {commentsSection.map((item,index)=>{
                           return(
                                <React.Fragment>
                                    <div className = 'commentsSection' key = {index}>
                                        <div className = 'firstSection'>
                                            <div className = 'firstSectionGrid'>
                                                <div className = 'left'>
                                                    <img src = {item.reviewImage} alt='no-alt'/>

                                                </div>
                                                <div className = 'right'>
                                                    <p>{item.reviewName}</p>
                                                    <p>{item.reviewDate}</p>
                                                <div className = 'ratingSec'>
                                                        <img src = {starFilled} alt='no-alt'/>
                                                        <img src = {starFilled} alt='no-alt'/>
                                                        <img src = {starFilled} alt='no-alt'/>
                                                        <img src = {starFilled} alt='no-alt'/>
                                                        <img src = {starEmpty} alt='no-alt'/>
                                                </div>
                                                </div>                                             
                                            </div>

                                        </div>
                                        <div className = 'secondSection'>
                                            <p>{item.reviewDescription}</p>

                                        </div>
                                        <div className = 'thirdSection'>
                                            <img src = {item.reviewThumbsUpImage} alt='no-alt'/>
                                            <img src = {item.reviewFlagImage} alt='no-alt'/>

                                        </div>
                                    </div>                                    
                                </React.Fragment>
                            )
                       })}

                       <div className = 'view'>
                           <button>View All</button>
                       </div>
                   </div>                   
               </div>
               <RelatedRecipes/>
            </div>
            {/* <Footer/> */}
        </React.Fragment>
    )
}