import ProductAOne from "../../../assets/image/kidsclothesimg/images (2).jpeg";
import ProductATwo from "../../../assets/image/kidsclothesimg/images (3).jpeg";
import ProductAThree from "../../../assets/image/kidsclothesimg/images (1).jpeg";
import ProductAFour from "../../../assets/image/kidsclothesimg/images (4).jpeg";
import ProductAFive from "../../../assets/image/kidsclothesimg/images.jpeg";
import ProductASix from "../../../assets/image/kidsclothesimg/kids-t-shirt-500x500.jpeg";
import ProductASeven from "../../../assets/image/kidsclothesimg/s-l300.jpg";
import ProductAEight from "../../../assets/image/kidsclothesimg/s-l500.jpg";
import ProductANine from "../../../assets/image/kidsclothesimg/kids-wear02.jpg";
import ProductATen from "../../../assets/image/kidsclothesimg/wholesale-children-clothing-sets-fall-girl-long.jpg_350x350.jpg";
import ProductAEleven from "../../../assets/image/kidsclothesimg/designer-kids-wears-500x500.jpeg";
import ProductATwelve from "../../../assets/image/kidsclothesimg/2018-Wholesale-Girls-Print-Windproof-Jacket-with-Detachable-Hood-Kids-Wears-Windproof-Parka.jpg";
import productBOne from "../../../assets/image/FashionWomen/download (1).jpeg";
import productBTwo from "../../../assets/image/FashionWomen/download (2).jpeg";
import productBThree from "../../../assets/image/FashionWomen/download (3).jpeg";
import productBFour from "../../../assets/image/FashionWomen/download (4).jpeg";
import productBFive from "../../../assets/image/FashionWomen/download (5).jpeg";
import productBSix from "../../../assets/image/FashionWomen/download (6).jpeg";
import productBSeven from "../../../assets/image/FashionWomen/download (7).jpeg";
import productBEight from "../../../assets/image/FashionWomen/download (8).jpeg";
import ProductBNine from "../../../assets/image/FashionWomen/images (5).jpeg";
import ProductBTen from "../../../assets/image/FashionWomen/images (6).jpeg";
import ProductBEleven from "../../../assets/image/FashionWomen/images (7).jpeg";
import productBTwelve from "../../../assets/image/FashionWomen/images (8).jpeg";
import productBThirteen from "../../../assets/image/FashionWomen/images (9).jpeg";
import productBFourteen from "../../../assets/image/FashionWomen/images (10).jpeg";
import productBFifteeen from "../../../assets/image/FashionWomen/images (11).jpeg";
import productBSixteen from "../../../assets/image/FashionWomen/images (12).jpeg";
import productBSeventeen from "../../../assets/image/FashionWomen/images (13).jpeg";
import productBEighteen from "../../../assets/image/FashionWomen/images (14).jpeg";
import productBNineteen from "../../../assets/image/FashionWomen/images (15).jpeg";
import productBTwenty from "../../../assets/image/FashionWomen/images (16).jpeg";
import MenOne from "../../../assets/image/fashionMen/men1.jpg";
import MenTwo from "../../../assets/image/fashionMen/men2.jpeg";
import MenThree from "../../../assets/image/fashionMen/men3.jpg";
import MenFour from "../../../assets/image/fashionMen/men4.jpeg";
import MenFive from "../../../assets/image/fashionMen/men5.jpeg";
import MenSix from "../../../assets/image/fashionMen/men6.jpeg";
import MenSeven from "../../../assets/image/fashionMen/men7.jpeg";
import MenEight from "../../../assets/image/fashionMen/men8.jpeg";
import MenNine from "../../../assets/image/fashionMen/sandalmen.jpeg";
import MenTen from "../../../assets/image/fashionMen/sandalmen2.jpeg";
import MenEleven from "../../../assets/image/fashionMen/sandalunisex.jpeg";
import MenTwelve from "../../../assets/image/fashionMen/sandalunisex1.jpeg";
import MenThirteen from "../../../assets/image/fashionMen/sandalunisex2.jpeg";
import MenFourteen from "../../../assets/image/fashionMen/sneakersmen1.jpeg";
import MenFifteen from "../../../assets/image/fashionMen/sneakersmen2.jpeg";
import MenSixteen from "../../../assets/image/fashionMen/sneakersmen3.jpeg";
import MenSeventeen from "../../../assets/image/fashionMen/sneakersunisex.jpeg";
import MenEighteen from "../../../assets/image/fashionMen/topunisex.jpeg";
import MenNineteen from "../../../assets/image/fashionMen/topunisex1.jpeg";
import MenTwenty from "../../../assets/image/fashionMen/topunisex2.jpeg";
// import MenOne from "../../../assets/image/fashionMen/men1.jpg";
// import MenOne from "../../../assets/image/fashionMen/men1.jpg";
// import MenOne from "../../../assets/image/fashionMen/men1.jpg";

import {
  ADD_TO_CART,
  REMOVE_ITEM,
  VIEW_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  SHOW_VIEW
} from "../actions/action-types/cart-actions";

const initState = {
  //womn
  kids: [
    {
      id: "1",
      title: "kids(top & bottom)",
      desc:
        "Childeren within the the age bracket of four and five years old should wear this",
      price: 2500,
      img: ProductAOne
    },
    {
      id: "2",
      title: "Babies(top & bottom)",
      desc: "These are very good design and fabric for babies",
      price: 5500,
      img: ProductATwo
    },
    {
      id: "3",
      title: "Baby wear",
      desc: "Ideal for babies. Good fabric",
      price: 2900,
      img: ProductAThree
    },
    {
      id: "4",
      title: "top & bottom",
      desc: "Good product, great pricee",
      price: 3300,
      img: ProductAFour
    },
    {
      id: "5",
      title: "Pleated gown",
      desc: "These are for your female childeren between four and five",
      price: 2800,
      img: ProductAFive
    },
    {
      id: "6",
      title: "kids(Shirt & Shorts)",
      desc: "Unisex for kids between four and five",
      price: 2600,
      img: ProductASix
    },
    {
      id: "7",
      title: "Fitted Teens gown",
      desc: "Elastic for girls between thirteen and fifteen",
      price: 2000,
      img: ProductASeven
    },
    {
      id: "8",
      title: "Peplum gowns",
      desc: "Nice and free not suitable for kids above Ten",
      price: 3000,
      img: ProductAEight
    },
    {
      id: "9",
      title: "Baloon gowns",
      desc: "Nice for the season Age bracket ten and Twelve",
      price: 3500,
      img: ProductANine
    },
    {
      id: "10",
      title: "babies(complete)",
      desc:
        "Childeren within the the age bracket of three and four years old should wear this",
      price: 1500,
      img: ProductATen
    },
    {
      id: "11",
      title: "kids(top & pant)",
      desc:
        "Childeren within the the age bracket of two and three years old should wear this",
      price: 4500,
      img: ProductAEleven
    },
    {
      id: "12",
      title: "Jacket",
      desc: "Available in all sizes and colors",
      price: 7500,
      img: ProductATwelve
    }
  ],

  women: [
    {
      id: "1",
      title: "kids(top & bottom)",
      desc:
        "Childeren within the the age bracket of four and five years old should wear this",
      price: 2500,
      img: productBOne
    },
    {
      id: "2",
      title: "Babies(top & bottom)",
      desc: "These are very good design and fabric for babies",
      price: 5500,
      img: productBTwo
    },
    {
      id: "3",
      title: "Baby wear",
      desc: "Ideal for babies. Good fabric",
      price: 2900,
      img: productBThree
    },
    {
      id: "4",
      title: "top & bottom",
      desc: "Good product, great pricee",
      price: 3300,
      img: productBFour
    },
    {
      id: "5",
      title: "Pleated gown",
      desc: "These are for your female childeren between four and five",
      price: 2800,
      img: productBFive
    },
    {
      id: "6",
      title: "kids(Shirt & Shorts)",
      desc: "Unisex for kids between four and five",
      price: 2600,
      img: productBSix
    },
    {
      id: "7",
      title: "Fitted Teens gown",
      desc: "Elastic for girls between thirteen and fifteen",
      price: 2000,
      img: productBSeven
    },
    {
      id: "8",
      title: "Peplum gowns",
      desc: "Nice and free not suitable for kids above Ten",
      price: 3000,
      img: productBEight
    },
    {
      id: "9",
      title: "Baloon gowns",
      desc: "Nice for the season Age bracket ten and Twelve",
      price: 3500,
      img: ProductBNine
    },
    {
      id: "10",
      title: "babies(complete)",
      desc:
        "Childeren within the the age bracket of three and four years old should wear this",
      price: 1500,
      img: ProductBTen
    },
    {
      id: "11",
      title: "kids(top & pant)",
      desc:
        "Childeren within the the age bracket of two and three years old should wear this",
      price: 4500,
      img: ProductBEleven
    },
    {
      id: "12",
      title: "Jacket",
      desc: "Available in all sizes and colors",
      price: 7500,
      img: productBTwelve
    },
    {
      id: "13",
      title: "Jacket",
      desc: "Available in all sizes and colors",
      price: 7500,
      img: productBThirteen
    },
    {
      id: "14",
      title: "Jacket",
      desc: "Available in all sizes and colors",
      price: 7500,
      img: productBFourteen
    },
    {
      id: "15",
      title: "Jacket",
      desc: "Available in all sizes and colors",
      price: 7500,
      img: productBFifteeen
    },
    {
      id: "16",
      title: "Jacket",
      desc: "Available in all sizes and colors",
      price: 7500,
      img: productBSixteen
    },
    {
      id: "17",
      title: "Jacket",
      desc: "Available in all sizes and colors",
      price: 7500,
      img: productBSeventeen
    },
    {
      id: "18",
      title: "Jacket",
      desc: "Available in all sizes and colors",
      price: 7500,
      img: productBEighteen
    },
    {
      id: "19",
      title: "Jacket",
      desc: "Available in all sizes and colors",
      price: 7500,
      img: productBNineteen
    },
    {
      id: "20",
      title: "Jacket",
      desc: "Available in all sizes and colors",
      price: 7500,
      img: productBTwenty
    }
  ],
  men: [
    {
      id: "1",
      title: "Jacket",
      desc: "Available in all sizes and colors",
      price: 7500,
      img: MenOne
    },
    {
      id: "2",
      title: "Suit",
      desc: "Available in all sizes and colors",
      price: 7500,
      img: MenTwo
    },
    {
      id: "3",
      title: "Jacket",
      desc: "Available in all sizes and colors",
      price: 7500,
      img: MenThree
    },
    {
      id: "4",
      title: "Jacket",
      desc: "Available in all sizes and colors",
      price: 7500,
      img: MenFour
    },
    {
      id: "5",
      title: "Traditional Attire",
      desc: "Available in all sizes and colors",
      price: 7500,
      img: MenFive
    },
    {
      id: "6",
      title: "Office Shirt",
      desc: "Available in all sizes and colors",
      price: 7500,
      img: MenSix
    },
    {
      id: "7",
      title: "Office Shirt",
      desc: "Available in all sizes and colors",
      price: 7500,
      img: MenSeven
    },
    {
      id: "8",
      title: "Jacket",
      desc: "Available in all sizes and colors",
      price: 7500,
      img: MenEight
    },
    {
      id: "9",
      title: "Sandals",
      desc: "Available in all sizes and colors",
      price: 7500,
      img: MenNine
    },
    {
      id: "10",
      title: "Sandals",
      desc: "Available in all sizes and colors",
      price: 7500,
      img: MenTen
    },
    {
      id: "11",
      title: "Sandals",
      desc: "Available in all sizes and colors",
      price: 7500,
      img: MenEleven
    },
    {
      id: "12",
      title: "Sandals",
      desc: "Available in all sizes and colors",
      price: 7500,
      img: MenTwelve
    },
    {
      id: "13",
      title: "Sandals",
      desc: "Available in all sizes and colors",
      price: 7500,
      img: MenThirteen
    },
    {
      id: "14",
      title: "Sneakers",
      desc: "Available in all sizes and colors",
      price: 7500,
      img: MenFourteen
    },
    {
      id: "15",
      title: "Sneakers",
      desc: "Available in all sizes and colors",
      price: 7500,
      img: MenFifteen
    },
    {
      id: "16",
      title: "Sneakers",
      desc: "Available in all sizes and colors",
      price: 7500,
      img: MenSixteen
    },
    {
      id: "17",
      title: "Sneakers",
      desc: "Available in all sizes and colors",
      price: 7500,
      img: MenSeventeen
    },
    {
      id: "18",
      title: "Shirts",
      desc: "Available in all sizes and colors",
      price: 7500,
      img: MenEighteen
    },
    {
      id: "19",
      title: "Shirts",
      desc: "Available in all sizes and colors",
      price: 7500,
      img: MenNineteen
    },
    {
      id: "20",
      title: "Shirts",
      desc: "Available in all sizes and colors",
      price: 7500,
      img: MenTwenty
    }
  ],
  addedItems: [],
  total: 0,
  
  //   showView: false,
  //   viewValue: {}
};

const cartReducer = (state = initState, action) => {
  //INSIDE HOME COMPONENT
  //view

  if (action.type === VIEW_ITEM) {
    const data = action.data || {};
    let addedItem =
      data.type === "women"
        ? state.women.find(item => item.id === data.id)
        : data.type === "kids"
        ? state.kids.find(item => item.id === data.id)
        : data.type === "men"
        ? state.men.find(item => item.id === data.id)
        : {};

    return {
      ...state,
      viewValue: addedItem
      //   showView: true
    };
    
  }
   

  if (action.type === SHOW_VIEW) {
    return {
      ...state,
      viewValue: {},
      showView: false
    };

  }
  console.log(state.addedItems)

  if(action.type === ADD_TO_CART){
    let addedItem = (state.viewValue)
    //check if the action id exists in the addedItems
   let existed_item= state.addedItems.find(item=> action.id === item.id)
   console.log(state.addedItems)

   if(existed_item)
   {
      addedItem.quantity += 1 
       return{
          ...state,
           total: state.total + addedItem.price 
            }
  }
  
   else{
      addedItem.quantity = 1;
      //calculating the total
      let newTotal = state.total + addedItem.price 
    //   console.log(newTotal)
    //   console.log(addedItem)
    console.log(state.addedItems)
      return{
          ...state,
          addedItems: [...state.addedItems, addedItem],
          total : newTotal,
      }
  
      
  }

}
if(action.type === REMOVE_ITEM){
    let itemToRemove= state.addedItems.find(item=> action.id === item.id)
    let new_items = state.addedItems.filter(item=> action.id !== item.id)

    //calculating the total
    let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
    console.log(itemToRemove)
    return{
        ...state,
        addedItems: new_items,
        total: newTotal
    }
}
//INSIDE CART COMPONENT
if(action.type=== ADD_QUANTITY){
    let addedItem = (state.viewValue)
      addedItem.quantity += 1
      let newTotal = state.total + addedItem.price
      return{
          ...state,
          total: newTotal
      }
}
if(action.type=== SUB_QUANTITY){
    let addedItem = (state.viewValue)
    //if the qt == 0 then it should be removed
    if(addedItem.quantity === 1){
        let new_items = state.addedItems.filter(item=>item.id !== action.id)
        let newTotal = state.total - addedItem.price
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    else {
        addedItem.quantity -= 1
        let newTotal = state.total - addedItem.price
        return{
            ...state,
            total: newTotal
        }
    }

}
  // //INSIDE HOME COMPONENT
  // if(action.type === ADD_TO_CART){
  //       let addedItem = state.items.find(item=> item.id === action.id)
  //       //check if the action id exists in the addedItems
  //      let existed_item= state.addedItems.find(item=> action.id === item.id)
  //      if(existed_item)
  //      {
  //         addedItem.quantity += 1
  //          return{
  //             ...state,
  //              total: state.total + addedItem.price
  //               }
  //     }
  //      else{
  //         addedItem.quantity = 1;
  //         //calculating the total
  //         let newTotal = state.total + addedItem.price

  //         return{
  //             ...state,
  //             addedItems: [...state.addedItems, addedItem],
  //             total : newTotal
  //         }

  //     }
  // }

  // if(action.type === REMOVE_ITEM){
  //     let itemToRemove= state.addedItems.find(item=> action.id === item.id)
  //     let new_items = state.addedItems.filter(item=> action.id !== item.id)

  //     //calculating the total
  //     let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
  //     console.log(itemToRemove)
  //     return{
  //         ...state,
  //         addedItems: new_items,
  //         total: newTotal
  //     }
  // }
  // //INSIDE CART COMPONENT
  // if(action.type=== ADD_QUANTITY){
  //     let addedItem = state.items.find(item=> item.id === action.id)
  //       addedItem.quantity += 1
  //       let newTotal = state.total + addedItem.price
  //       return{
  //           ...state,
  //           total: newTotal
  //       }
  // }
  // if(action.type=== SUB_QUANTITY){
  //     let addedItem = state.items.find(item=> item.id === action.id)
  //     //if the qt == 0 then it should be removed
  //     if(addedItem.quantity === 1){
  //         let new_items = state.addedItems.filter(item=>item.id !== action.id)
  //         let newTotal = state.total - addedItem.price
  //         return{
  //             ...state,
  //             addedItems: new_items,
  //             total: newTotal
  //         }
  //     }
  //     else {
  //         addedItem.quantity -= 1
  //         let newTotal = state.total - addedItem.price
  //         return{
  //             ...state,
  //             total: newTotal
  //         }
  //     }

  // }
  // if(action.type === REMOVE_ITEM){
  //     let itemToRemove= state.addedItems.find(item=> action.id === item.id)
  //     let new_items = state.addedItems.filter(item=> action.id !== item.id)

  //     //calculating the total
  //     let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
  //     console.log(itemToRemove)
  //     return{
  //         ...state,
  //         addedItems: new_items,
  //         total: newTotal
  //     }
  // }
  // //INSIDE CART COMPONENT
  // if(action.type=== ADD_QUANTITY){
  //     let addedItem = state.items.find(item=> item.id === action.id)
  //       addedItem.quantity += 1
  //       let newTotal = state.total + addedItem.price
  //       return{
  //           ...state,
  //           total: newTotal
  //       }
  // }
  // if(action.type=== SUB_QUANTITY){
  //     let addedItem = state.items.find(item=> item.id === action.id)
  //     //if the qt == 0 then it should be removed
  //     if(addedItem.quantity === 1){
  //         let new_items = state.addedItems.filter(item=>item.id !== action.id)
  //         let newTotal = state.total - addedItem.price
  //         return{
  //             ...state,
  //             addedItems: new_items,
  //             total: newTotal
  //         }
  //     }
  //     else {
  //         addedItem.quantity -= 1
  //         let newTotal = state.total - addedItem.price
  //         return{
  //             ...state,
  //             total: newTotal
  //         }
  //     }

  // }
  return state;
};

export default cartReducer;
