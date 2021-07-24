import chatUs from '../../../assets/images/user-assets/chatUs/chatUs.png';
import contactUs from '../../../assets/images/user-assets/contactUs/contactUs.png';
import faqs from '../../../assets/images/user-assets/faqs/faqs.png';
import rightLineArrow from '../../../assets/images/user-assets/arrows/rightLineArrow/rightLineArrow.svg';


export const helpItems = [
    {
       "id": 1,
       "helpImage": chatUs,
       "helpTitle": "Chat With Us",
       "helpText" : "Our automated personal assistant or our support excecutives will be happy to help you",
       "helpLink": "Start Now",
       "helpArrow": rightLineArrow,
    },
    {
        "id": 2,
        "helpImage": faqs,
        "helpTitle": "FAQs",
        "helpLink": "See All Question Answer",
        "helpArrow": rightLineArrow
     },
     {
        "id": 3,
        "helpImage": contactUs,
        "helpTitle": "Contact Us",
        "helpText" : "For Any Further Queries Write To Us At ",
        "helpMail" : "Hello@Goshoppi.com"

     }
]