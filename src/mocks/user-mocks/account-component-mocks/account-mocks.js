import creditCard from '../../../assets/images/user-assets/creditCard/creditCard.png';
import otherPayments from '../../../assets/images/user-assets/otherPayments/otherPayments.png';
import paymentLogo from '../../../assets/images/user-assets/paytm/paytmLogo.png';
import rightLineArrow from '../../../assets/images/user-assets/arrows/rightLineArrow/rightLineArrow.svg';


export const accountItems = [
    {
        "id" : 1,
        "image" : paymentLogo,
        "accountDescription" : "Link your paytm account to use the method",
        "paymentLink" : "LINK NOW",
        "paymentIcon" : rightLineArrow
    },
    {
        "id" : 2,
        "image" : creditCard,
        "accountLabel" : "Credit, Debit & ATM Cards",
        "paymentLink" : "ADD YOUR CARD",
        "paymentIcon" : rightLineArrow

    },
    {
        "id" : 3,
        "image" : otherPayments,
        "accountLabel" : "Other Payment Mode"
    }
]

