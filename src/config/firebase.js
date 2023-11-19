import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, addDoc, getDocs, getDoc, doc, QueryLimitConstraint } from "firebase/firestore"
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyADFe89abhZyTAf-OfBdlxFXG9zp_bmA6I",
  authDomain: "foodpanda-24808.firebaseapp.com",
  projectId: "foodpanda-24808",
  storageBucket: "foodpanda-24808.appspot.com",
  messagingSenderId: "172545180925",
  appId: "1:172545180925:web:e06c398c9d04011ca86a94"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore(app)

const restro_data = [
  {
    "restaurant_name": "Karachi Biryani House",
    "cuisine_type": "Pakistani",
    "address": {
      "street": "456 Food Street",
      "city": "Karachi",
      "state": "SD",
      "postal_code": "78901"
    },
    "phone": "555-789-1234",
    "image_url": "https://foodoplanet.com/wp-content/uploads/2019/10/wp3053381.jpg",
    "menu_categories": [
      {
        "category_name": "Starters",
        "items": [
          {
            "item": "Chicken Samosa",
            "price": 150,
            "item_image_url": "https://example.com/chicken_samosa.jpg&quot"
          },
          {
            "item": "Vegetable Pakora",
            "price": 120,
            "item_image_url": "https://example.com/vegetable_pakora.jpg&quot"
          }
        ]
      },
      {
        "category_name": "Main Courses",
        "items": [
          {
            "item": "Chicken Biryani",
            "price": 350,
            "item_image_url": "https://example.com/chicken_biryani.jpg&quot"
          },
          {
            "item": "Beef Karahi",
            "price": 300,
            "item_image_url": "https://example.com/beef_karahi.jpg&quot"
          }
        ]
      },
      {
        "category_name": "Desserts",
        "items": [
          {
            "item": "Gulab Jamun",
            "price": 80,
            "item_image_url": "https://example.com/gulab_jamun.jpg&quot"
          },
          {
            "item": "Kheer",
            "price": 100,
            "item_image_url": "https://example.com/kheer.jpg&quot"
          }
        ]
      }
    ],
    "opening_hours": {
      "monday": "11:00 AM - 10:00 PM",
      "tuesday": "11:00 AM - 10:00 PM",
      "wednesday": "11:00 AM - 10:00 PM",
      "thursday": "11:00 AM - 10:00 PM",
      "friday": "11:00 AM - 11:00 PM",
      "saturday": "12:00 PM - 11:00 PM",
      "sunday": "12:00 PM - 9:00 PM"
    }
  },
  {
    "restaurant_name": "Spice of Lahore",
    "cuisine_type": "Indian",
    "address": {
      "street": "789 Spice Avenue",
      "city": "Karachi",
      "state": "SD",
      "postal_code": "56789"
    },
    "phone": "555-234-5678",
    "image_url": "https://example.com/spice_of_lahore.jpg&quot",
    "menu_categories": [
      {
        "category_name": "Appetizers",
        "items": [
          {
            "item": "Paneer Tikka",
            "price": 250,
            "item_image_url": "https://example.com/paneer_tikka.jpg&quot"
          },
          {
            "item": "Samosa Chaat",
            "price": 180,
            "item_image_url": "https://example.com/samosa_chaat.jpg&quot"
          }
        ]
      },
      {
        "category_name": "Main Courses",
        "items": [
          {
            "item": "Butter Chicken",
            "price": 400,
            "item_image_url": "https://example.com/butter_chicken.jpg&quot"
          },
          {
            "item": "Dal Makhani",
            "price": 250,
            "item_image_url": "https://example.com/dal_makhani.jpg&quot"
          }
        ]
      },
      {
        "category_name": "Desserts",
        "items": [
          {
            "item": "Rasmalai",
            "price": 100,
            "item_image_url": "https://example.com/rasmalai.jpg&quot"
          },
          {
            "item": "Gulab Jamun",
            "price": 80,
            "item_image_url": "https://example.com/gulab_jamun_indian.jpg&quot"
          }
        ]
      }
    ],
    "opening_hours": {
      "monday": "12:00 PM - 9:00 PM",
      "tuesday": "12:00 PM - 9:00 PM",
      "wednesday": "12:00 PM - 9:00 PM",
      "thursday": "12:00 PM - 9:00 PM",
      "friday": "12:00 PM - 10:00 PM",
      "saturday": "1:00 PM - 10:00 PM",
      "sunday": "1:00 PM - 8:00 PM"
    }
  },
  {
    "restaurant_name": "Tandoori Delights",
    "cuisine_type": "Indian",
    "address": {
      "street": "123 Tandoori Lane",
      "city": "Karachi",
      "state": "SD",
      "postal_code": "45678"
    },
    "phone": "555-876-5432",
    "image_url": "https://example.com/tandoori_delights.jpg&quot",
    "menu_categories": [
      {
        "category_name": "Breads",
        "items": [
          {
            "item": "Naan",
            "price": 40,
            "item_image_url": "https://example.com/naan.jpg&quot"
          },
          {
            "item": "Roti",
            "price": 30,
            "item_image_url": "https://example.com/roti.jpg&quot"
          }
        ]
      },
      {
        "category_name": "Grilled Delights",
        "items": [
          {
            "item": "Tandoori Chicken",
            "price": 300,
            "item_image_url": "https://example.com/tandoori_chicken.jpg&quot"
          },
          {
            "item": "Seekh Kebab",
            "price": 250,
            "item_image_url": "https://example.com/seekh_kebab_tandoori.jpg&quot"
          }
        ]
      },
      {
        "category_name": "Desserts",
        "items": [
          {
            "item": "Gulab Jamun",
            "price": 80,
            "item_image_url": "https://example.com/gulab_jamun_tandoori.jpg&quot"
          },
          {
            "item": "Kulfi",
            "price": 90,
            "item_image_url": "https://example.com/kulfi.jpg&quot"
          }
        ]
      }
    ],
    "opening_hours": {
      "monday": "12:00 PM - 8:00 PM",
      "tuesday": "12:00 PM - 8:00 PM",
      "wednesday": "12:00 PM - 8:00 PM",
      "thursday": "12:00 PM - 8:00 PM",
      "friday": "12:00 PM - 9:00 PM",
      "saturday": "1:00 PM - 9:00 PM",
      "sunday": "1:00 PM - 7:00 PM"
    }
  },
  {
    "restaurant_name": "Ginsoy Extreme Chinese",
    "cuisine_type": "Chinese",
    "address": {
      "street": "46-1 Khyaban-e-Shahbaz",
      "city": "Karachi",
      "state": "SD",
      "postal_code": "45678"
    },
    "phone": "(021) 36721792-7 ",
    "image_url": "https://images.deliveryhero.io/image/fd-pk/LH/s7gg-hero.jpg",
    "menu_categories": [
      {
        "category_name": "Starters",
        "items": [
          {
            "item": "Dynamite Prawn",
            "price": 1000,
            "item_image_url": "https://images.deliveryhero.io/image/fd-pk/Products/1153034.jpg?width=%s"
          },
          {
            "item": "Chicken Corn Soup",
            "price": 500,
            "item_image_url": "https://order.ginsoy.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1654603105-Chicken%20Corn%20Soup.jpg&w=828&q=75"
          }
        ]
      },
      {
        "category_name": "Chicken MainCourse",
        "items": [
          {
            "item": "Classic Chicken Chilli Dry",
            "price": 1100,
            "item_image_url": "https://order.ginsoy.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1622201504-Classic-Chilli-Chicken-Dry--family.jpg&w=640&q=75"
          },
          {
            "item": "Sweet & Sour Chicken",
            "price": 850,
            "item_image_url": "https://order.ginsoy.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1622201813-Sweet-%26-Sour-Chicken--family.jpg&w=640&q=75"
          }
        ]
      },
      {
        "category_name": "Desserts",
        "items": [
          {
            "item": "Chocolate Fudge Cake",
            "price": 700,
            "item_image_url": "https://order.ginsoy.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1622207671-Chocolate-Fudge-Cake.jpg&w=828&q=75"
          },
          {
            "item": "Vanilla Icecream",
            "price": 500,
            "item_image_url": "https://www.cuisinart.com/globalassets/recipes/vanilla-ice-cream-w_mint_shutterstock_1698759373.jpg"
          }
        ]
      }
    ],
    "opening_hours": {
      "monday": "12:00 PM - 8:00 PM",
      "tuesday": "12:00 PM - 8:00 PM",
      "wednesday": "12:00 PM - 8:00 PM",
      "thursday": "12:00 PM - 8:00 PM",
      "friday": "12:00 PM - 9:00 PM",
      "saturday": "1:00 PM - 9:00 PM",
      "sunday": "1:00 PM - 7:00 PM"
    }
  },
  {
    "restaurant_name": "Kababjees Express",
    "cuisine_type": "Fastfood",
    "address": {
      "street": " Aqeela Arcade Main Shaheed-e-Millat",
      "city": "Karachi",
      "state": "SD",
      "postal_code": "45678"
    },
    "phone": "(021) 36721892-7 ",
    "image_url": "https://images.deliveryhero.io/image/fd-pk/LH/b7fl-hero.jpg?width=512&height=384&quality=45",
    "menu_categories": [
      {
        "category_name": "Starters",
        "items": [
          {
            "item": "Fish & Chips With Fries & tatar sauce",
            "price": 900,
            "item_image_url": "https://kababjeesexpress.com/_next/image?url=https%3A%2F%2Fmenu.indolj.pk%2Fupload%2F1686464830-fish.PNG&w=828&q=75"
          },
          {
            "item": "Plain Fries",
            "price": 300,
            "item_image_url": "https://kababjeesexpress.com/_next/image?url=https%3A%2F%2Fmenu.indolj.pk%2Fupload%2F1686124285-IMG_1481.jpg&w=384&q=75"
          }
        ]
      },
      {
        "category_name": "Fastfood",
        "items": [
          {
            "item": "Texas Chicken Burger",
            "price": 550,
            "item_image_url": "https://kababjeesexpress.com/_next/image?url=https%3A%2F%2Fmenu.indolj.pk%2Fupload%2F1686209989-Texas%20Chicken.jpg&w=828&q=75"
          },
          {
            "item": "Chicken Club Sandwich",
            "price": 600,
            "item_image_url": "https://kababjeesexpress.com/_next/image?url=https%3A%2F%2Fmenu.indolj.pk%2Fupload%2F1686210069-Chicken%20Club%20Sandwich.jpg&w=828&q=75"
          }
        ]
      },
      {
        "category_name": "BBQ",
        "items": [
          {
            "item": "Beef Seekh Kabab",
            "price": 700,
            "item_image_url": "https://kababjeesexpress.com/_next/image?url=https%3A%2F%2Fmenu.indolj.pk%2Fupload%2F1686211706-Seekh%20kabab.jpg&w=640&q=75"
          },
          {
            "item": "Chicken Malai boti",
            "price": 700,
            "item_image_url": "https://kababjeesexpress.com/_next/image?url=https%3A%2F%2Fmenu.indolj.pk%2Fupload%2F1686130871-Chicken%20Malai%20Boti.jpg&w=384&q=75"
          }
        ]
      }
    ],
    "opening_hours": {
      "monday": "12:00 PM - 8:00 PM",
      "tuesday": "12:00 PM - 8:00 PM",
      "wednesday": "12:00 PM - 8:00 PM",
      "thursday": "12:00 PM - 8:00 PM",
      "friday": "12:00 PM - 9:00 PM",
      "saturday": "1:00 PM - 9:00 PM",
      "sunday": "1:00 PM - 7:00 PM"
    }
  }
]

// function postRestaurants() {
//   try {
//     for (var i = 0; i < restro_data.length; i++) {
//       addDoc(collection(db, "restaurants"), restro_data[i])
//     }
//   } catch (e) {
//     alert(e.message)
//   }

// }

function signin() {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log(user)
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
}

async function getRestaurants() {
  const querySnapshot = await getDocs(collection(db, "restaurants"));
  const data = []
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    const item = doc.data()
    item.id = doc.id
    console.log('item', item)
    data.push(item)
  });

  return data
}

async function getSingleData(restro_id) {
  const docRef = doc(db, "restaurants", restro_id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    return docSnap.data()
  } else {
    console.log("No such document!");
  }
}

export {
  signin,
  // postRestaurants,
  getRestaurants,
  getSingleData
}