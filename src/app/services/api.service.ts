
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject , of} from 'rxjs';




@Injectable()
export class ApiService {

  seeFood() {
    return of([
      {
        "Modifiers": {
          "Toppings": [
             {
               "item" : 'Cheese',
              "Default": false,
              "Types": [
                {
                  "item" :  "American",
                  "Default": false,
                  "Price": 0.25,
                  "Image": "https://shop.honeyville.com/media/catalog/product/cache/10f519365b01716ddb90abc57de5a837/f/r/freeze-dried-cheddar-cheese-new-5.jpg",
                  "Quantity": 0
                },
               {
                  "item" :   "Mozarella" ,
                  "Default": false,
                  "Price": 0.25,
                  "Image": "https://cdnimg.webstaurantstore.com/images/products/large/427865/1587497.jpg",
                  "Quantity": 0
                }
              
              
               
               
              ]
            },
           {
             "item" :   "Cilantro",
              "Default": true,
              "Price": 10,
              "Image": "https://www.healthline.com/hlcmsresource/images/topic_centers/Food-Nutrition/732x549_Cilantro_Allergy.jpg",
              "Quantity": 0
            },
            {
              "item" :   "Cilantro",
               "Default": true,
               "Price": 10,
               "Image": "https://www.healthline.com/hlcmsresource/images/topic_centers/Food-Nutrition/732x549_Cilantro_Allergy.jpg",
               "Quantity": 0
             },
             {
              "item" :   "Cilantro",
               "Default": true,
               "Price": 10,
               "Image": "https://www.healthline.com/hlcmsresource/images/topic_centers/Food-Nutrition/732x549_Cilantro_Allergy.jpg",
               "Quantity": 0
             },
             {
              "item" :   "Cilantro",
               "Default": true,
               "Price": 10,
               "Image": "https://www.healthline.com/hlcmsresource/images/topic_centers/Food-Nutrition/732x549_Cilantro_Allergy.jpg",
               "Quantity": 0
             },
             {
              "item" :   "Cilantro",
               "Default": true,
               "Price": 10,
               "Image": "https://www.healthline.com/hlcmsresource/images/topic_centers/Food-Nutrition/732x549_Cilantro_Allergy.jpg",
               "Quantity": 0
             },
             {
              "item" :   "Cilantro",
               "Default": true,
               "Price": 10,
               "Image": "https://www.healthline.com/hlcmsresource/images/topic_centers/Food-Nutrition/732x549_Cilantro_Allergy.jpg",
               "Quantity": 0
             },
             {
              "item" :   "Cilantro",
               "Default": true,
               "Price": 10,
               "Image": "https://www.healthline.com/hlcmsresource/images/topic_centers/Food-Nutrition/732x549_Cilantro_Allergy.jpg",
               "Quantity": 0
             },

            
            
            ]
        },
        "Name": "Shrimp Tacos",
        "Price": 3.05,
        "Description": "The tacos are made with corn tortillas. The shrimp is grilled and the taco is garnished with onions, cilantro and hot sauce.",
        "Image": "https://i.imgur.com/4ouOeJs.jpg",
        "Quantity" : 0
      },
      {
        "Modifiers": {
          "Toppings": [
             {
               "item" : "Cheese",
              "Default": false,
              "Types": {  
                "American": {
                  "Default": false,
                  "Price": 0.25,
                  "Image": "https://shop.honeyville.com/media/catalog/product/cache/10f519365b01716ddb90abc57de5a837/f/r/freeze-dried-cheddar-cheese-new-5.jpg",
                  "Quantity": 0
                },
                "Mozarella": {
                  "Default": false,
                  "Price": 0.25,
                  "Image": "https://cdnimg.webstaurantstore.com/images/products/large/427865/1587497.jpg",
                  "Quantity": 11
                }
              }
            },
           {
             "item" :   "Cilantro",
              "Default": true,
              "Price": 10,
              "Image": "https://www.healthline.com/hlcmsresource/images/topic_centers/Food-Nutrition/732x549_Cilantro_Allergy.jpg",
              "Quantity": 0
            },
            
            
            ]
        },
        "Name": "Shrimp Tacos",
        "Price": 3.05,
        "Description": "The tacos are made with corn tortillas. The shrimp is grilled and the taco is garnished with onions, cilantro and hot sauce.",
        "Image": "https://i.imgur.com/4ouOeJs.jpg"
      }
      
    ]
    )
  }
  seeFoodItems() {
   return of({
      "Item_1" : {
        "Description" : "The tacos are made with corn tortillas. The shrimp is grilled and the taco is garnished with onions, cilantro and hot sauce.",
        "Name" : "Shrimp Tacos",
        "Modifiers" : {
          "Toppings" : {
            "Cheese" : {
              "Default" : false,
              "Types" : {
                "American" : {
                  "Default" : false,
                  "Price" : 0.25
                },
                "Mozarella" : {
                  "Default" : false,
                  "Price" : 0.25
                }
              }
            },
            "Cilantro" :  {
              "Default" : true,
              "Price" : 0
            },
            "Lettuce" :  {
              "Default" : false,
              "Price" : 0
            },
            "Onions" : {
              "Default" : true,
              "Price" : 0
            },
            "Pineapple" :  {
              "Default" : false,
              "Price" : 0.25
            },
            "Salsa" : {
              "Extra Salsa Roja" : {
                "Default" : false,
                "Price" : 0.25
              },
              "Extra Salsa Verde" : {
                "Default" : false,
                "Price" : 0.25
              },
              "Salsa Roja" : {
                "Default" : true,
                "Price" : 0.25
              },
              "Salsa Verde" : {
                "Default" : false,
                "Price" : 0.25
              }
            },
            "Tomatoes" : {
              "Default" : false,
              "Price" : 0.05
            },
            "Avocado" : {
              "Avocado Slices" : {
                "Default" : true,
                "Price" : 0
              },
              "Guacamole" : {
                "Default" : false,
                "Price" : 0.50
              }
            }
          }
        },
        "Price" : 3.05
      },
      "Item_2" : {
        "Description" : "Our Quesadilla Tacos are garnished with pieces of onions and cilantro and drizzled with hot sauce. Each taco is made with corn tortillas.",
        "Name" : "Shrimp Quesadilla Tacos",
        "Modifiers" : {
          "Toppings" : {
            "Cheese" : {
              "Default" : false,
              "Types" : {
                "American" : {
                  "Default" : false,
                  "Price" : 0.25
                },
                "Mozarella" : {
                  "Default" : false,
                  "Price" : 0.25
                }
              }
            },
            "Cilantro" :  {
              "Default" : true,
              "Price" : 0
            },
            "Lettuce" :  {
              "Default" : false,
              "Price" : 0
            },
            "Onions" : {
              "Default" : true,
              "Price" : 0
            },
            "Pineapple" :  {
              "Default" : false,
              "Price" : 0.25
            },
            "Salsa" : {
              "Extra Salsa Roja" : {
                "Default" : false,
                "Price" : 0.25
              },
              "Extra Salsa Verde" : {
                "Default" : false,
                "Price" : 0.25
              },
              "Salsa Roja" : {
                "Default" : true,
                "Price" : 0.25
              },
              "Salsa Verde" : {
                "Default" : false,
                "Price" : 0.25
              }
            },
            "Tomatoes" : {
              "Default" : false,
              "Price" : 0.05
            },
            "Avocado" : {
              "Avocado Slices" : {
                "Default" : true,
                "Price" : 0
              },
              "Guacamole" : {
                "Default" : false,
                "Price" : 0.50
              }
            }
          }
        },
        "Price" : 3.5
      },
      "Item_3" : {
        "Description" : "Each Taco Plate comes with 2 Shrimp Tacos and a side of rice and beans. The tacos are garnished with pieces of onions and cilantro and drizzled with hot sauce. Each taco is made with corn tortillas.",
        "Name" : "Shrimp Taco Combo",
        "Modifiers" : {
          "First Taco" : {
            "Toppings" : {
              "Cheese" : {
                "Default" : false,
                "Types" : {
                  "American" : {
                    "Default" : false,
                    "Price" : 0.25
                  },
                  "Mozarella" : {
                    "Default" : false,
                    "Price" : 0.25
                  }
                }
              },
              "Cilantro" :  {
                "Default" : true,
                "Price" : 0
              },
              "Lettuce" :  {
                "Default" : false,
                "Price" : 0
              },
              "Onions" : {
                "Default" : true,
                "Price" : 0
              },
              "Pineapple" :  {
                "Default" : false,
                "Price" : 0.25
              },
              "Jalapeños" :  {
                "Default" : false,
                "Price" : 0.25
              },
              "Salsa" : {
                "Extra Salsa Roja" : {
                  "Default" : false,
                  "Price" : 0.25
                },
                "Extra Salsa Verde" : {
                  "Default" : false,
                  "Price" : 0.25
                },
                "Salsa Roja" : {
                  "Default" : true,
                  "Price" : 0.25
                },
                "Salsa Verde" : {
                  "Default" : false,
                  "Price" : 0.25
                }
              },
              "Tomatoes" : {
                "Default" : false,
                "Price" : 0.05
              },
              "Avocado" : {
                "Avocado Slices" : {
                  "Default" : true,
                  "Price" : 0
                },
                "Guacamole" : {
                  "Default" : false,
                  "Price" : 0.50
                }
              }
            }
          },
          "Second Taco" : {
            "Toppings" : {
              "Cheese" : {
                "Default" : false,
                "Types" : {
                  "American" : {
                    "Default" : false,
                    "Price" : 0.25
                  },
                  "Mozarella" : {
                    "Default" : false,
                    "Price" : 0.25
                  }
                }
              },
              "Cilantro" :  {
                "Default" : true,
                "Price" : 0
              },
              "Lettuce" :  {
                "Default" : false,
                "Price" : 0
              },
              "Onions" : {
                "Default" : true,
                "Price" : 0
              },
              "Pineapple" :  {
                "Default" : false,
                "Price" : 0.25
              },
              "Jalapeños" :  {
                "Default" : false,
                "Price" : 0.25
              },
              "Salsa" : {
                "Extra Salsa Roja" : {
                  "Default" : false,
                  "Price" : 0.25
                },
                "Extra Salsa Verde" : {
                  "Default" : false,
                  "Price" : 0.25
                },
                "Salsa Roja" : {
                  "Default" : true,
                  "Price" : 0.25
                },
                "Salsa Verde" : {
                  "Default" : false,
                  "Price" : 0.25
                }
              },
              "Tomatoes" : {
                "Default" : false,
                "Price" : 0.05
              },
              "Avocado" : {
                "Avocado Slices" : {
                  "Default" : true,
                  "Price" : 0
                },
                "Guacamole" : {
                  "Default" : false,
                  "Price" : 0.50
                }
              }
            }
          }
        },
        "Price" : 8.99
      },
      "Item_4" : {
        "Description" : "We use a 12\" flour tortilla for each quesadilla. The quesadillas come with a layer of mixed Monterey and Cheddar cheese, grilled shrimp, onions, cilantro, hot sauce, shredded lettuce and another layer of cheese. We fold the tortilla in half, coat the top with mayonnaise and grill it until it becomes crunchy.",
        "Name" : "Shrimp Quesadilla",
        "Modifiers" : {
          "Toppings" : {
            "Cheese" : {
              "Default" : false,
              "Types" : {
                "American" : {
                  "Default" : false,
                  "Price" : 0.25
                },
                "Mozarella" : {
                  "Default" : false,
                  "Price" : 0.25
                }
              }
            },
            "Cilantro" :  {
              "Default" : true,
              "Price" : 0
            },
            "Lettuce" :  {
              "Default" : false,
              "Price" : 0
            },
            "Onions" : {
              "Default" : true,
              "Price" : 0
            },
            "Pineapple" :  {
              "Default" : false,
              "Price" : 0.25
            },
            "Salsa" : {
              "Extra Salsa Roja" : {
                "Default" : false,
                "Price" : 0.25
              },
              "Extra Salsa Verde" : {
                "Default" : false,
                "Price" : 0.25
              },
              "Salsa Roja" : {
                "Default" : true,
                "Price" : 0.25
              },
              "Salsa Verde" : {
                "Default" : false,
                "Price" : 0.25
              }
            },
            "Tomatoes" : {
              "Default" : false,
              "Price" : 0.05
            },
            "Avocado" : {
              "Avocado Slices" : {
                "Default" : true,
                "Price" : 0
              },
              "Guacamole" : {
                "Default" : false,
                "Price" : 0.50
              }
            }
          }
        },
        "Price" : 10.5
      },
      "Item_5" : {
        "Description" : "The Shrimp is grilled with onions, tomatoes, bell peppers and jalapeños. Once the shrimp and veggies are cooked, it's drizzled with a special red sauce. The plate comes with a side of rice and beans.",
        "Name" : "Camarones Rancheros",
        "Modifiers" : {
          "Toppings" : {
            "Cheese" : {
              "Default" : false,
              "Types" : {
                "American" : {
                  "Default" : false,
                  "Price" : 0.25
                },
                "Mozarella" : {
                  "Default" : false,
                  "Price" : 0.25
                }
              }
            },
            "Cilantro" :  {
              "Default" : true,
              "Price" : 0
            },
            "Lettuce" :  {
              "Default" : false,
              "Price" : 0
            },
            "Onions" : {
              "Default" : true,
              "Price" : 0
            },
            "Pineapple" :  {
              "Default" : false,
              "Price" : 0.25
            },
            "Salsa" : {
              "Extra Salsa Roja" : {
                "Default" : false,
                "Price" : 0.25
              },
              "Extra Salsa Verde" : {
                "Default" : false,
                "Price" : 0.25
              },
              "Salsa Roja" : {
                "Default" : true,
                "Price" : 0.25
              },
              "Salsa Verde" : {
                "Default" : false,
                "Price" : 0.25
              }
            },
            "Tomatoes" : {
              "Default" : false,
              "Price" : 0.05
            },
            "Avocado" : {
              "Avocado Slices" : {
                "Default" : true,
                "Price" : 0
              },
              "Guacamole" : {
                "Default" : false,
                "Price" : 0.50
              }
            }
          },
          "Side Items" : {
            "Rice" : {
              "Default" : true,
              "Price" : 0
            },
            "Beans" : {
              "Default" : true,
              "Price" : 0
            },
            "Double Rice" : {
              "Default" : false,
              "Price" : 0
            },
            "Double Beans" : {
              "Default" : false,
              "Price" : 0
            }
          }
        },
        "Price" : 11.5
      },
      "Item_6" : {
        "Description" : "The Shrimp is cooked with our Special Camarones A La Diabla Salsa Mix creating a delicious spicy soup. The plate comes with a side of rice and beans.",
        "Name" : "Camarones a la Diabla",
        "Modifiers" : {
          "Spice Level" : {
            "Normal" : {
              "Default" : true,
              "Price" : 0
            },
            "Uff" : {
              "Default" : false,
              "Warning Note" : "This item will be very spicy",
              "Price" : 0.25
            }
          },
          "Side Items" : {
            "Rice" : {
              "Default" : true,
              "Cheese" : {
                "Default" : false,
                "Types" : {
                  "American" : {
                    "Default" : false,
                    "Price" : 0
                  },
                  "Mozarella" : {
                    "Default" : false,
                    "Price" : 0
                  }
                }
              },
              "Price" : 0
            },
            "Beans" : {
              "Default" : true,
              "Cheese" : {
                "Default" : false,
                "Types" : {
                  "American" : {
                    "Default" : false,
                    "Price" : 0
                  },
                  "Mozarella" : {
                    "Default" : false,
                    "Price" : 0
                  }
                }
              },
              "Price" : 0
            },
            "Double Rice" : {
              "Default" : false,
              "Cheese" : {
                "Default" : false,
                "Types" : {
                  "American" : {
                    "Default" : false,
                    "Price" : 0
                  },
                  "Mozarella" : {
                    "Default" : false,
                    "Price" : 0
                  }
                }
              },
              "Price" : 0
            },
            "Double Beans" : {
              "Default" : false,
              "Cheese" : {
                "Default" : false,
                "Types" : {
                  "American" : {
                    "Default" : false,
                    "Price" : 0
                  },
                  "Mozarella" : {
                    "Default" : false,
                    "Price" : 0
                  }
                }
              },
              "Price" : 0
            }
          }
        },
        "Price" : 11.5
      },
      "Item_7" : {
        "Description" : "The Tostada de Camaron is made with shrimp, tomatoes, cucumbers, onions and cilantro, and mixed with our secret sauce.It comes with a side of tortilla chips.",
        "Name" : "Shrimp Tostada",
        "Modifiers" : {
          "Toppings" : {
            "Cilantro" :  {
              "Default" : true,
              "Price" : 0
            },
            "Onions" : {
              "Default" : true,
              "Price" : 0
            },
            "Cucumbers" :  {
              "Default" : true,
              "Price" : 0
            },
            "Spice Level" : {
              "Normal" : {
                "Default" : true,
                "Price" : 0
              },
              "No Sauce Mixture" : {
                "Default" : false,
                "Price" : 0
              },
              "Mild" : {
                "Default" : false,
                "Price" : 0
              },
              "Medium" : {
                "Default" : false,
                "Price" : 0
              },
              "Hot" : {
                "Default" : false,
                "Price" : 0
              },
              "Uff" : {
                "Default" : false,
                "Warning Note" : "This item will be very spicy",
                "Price" : 0.25
              }
            },
            "Tomatoes" : {
              "Default" : false,
              "Price" : 0
            },
            "Avocado" : {
              "Avocado Slices" : {
                "Default" : true,
                "Price" : 0
              },
              "Extra Avaocado" : {
                "Default" : false,
                "Price" : 1.00
              }
            }
          }
        },
        "Price" : 9.99
      },
      "Item_8" : {
        "Description" : "The shrimp cocktail is made with large shrimp, diced cucumber and tomatoes, onions, and cilantro. The shrimp and veggies are mixed in a special tomato juice and garnished with diced avocado.",
        "Name" : "Shrimp Cocktail",
        "Modifiers" : {
          "Toppings" : {
            "Cilantro" :  {
              "Default" : true,
              "Price" : 0
            },
            "Onions" : {
              "Default" : true,
              "Price" : 0
            },
            "Cucumbers" :  {
              "Default" : true,
              "Price" : 0
            },
            "Spice Level" : {
              "Normal" : {
                "Default" : true,
                "Price" : 0
              },
              "No Sauce Mixture" : {
                "Default" : false,
                "Price" : 0
              },
              "Mild" : {
                "Default" : false,
                "Price" : 0
              },
              "Medium" : {
                "Default" : false,
                "Price" : 0
              },
              "Hot" : {
                "Default" : false,
                "Price" : 0
              },
              "Uff" : {
                "Default" : false,
                "Warning Note" : "This item will be very spicy",
                "Price" : 0.25
              }
            },
            "Tomatoes" : {
              "Default" : false,
              "Price" : 0
            },
            "Avocado" : {
              "Avocado Slices" : {
                "Default" : true,
                "Price" : 0
              },
              "Extra Avaocado" : {
                "Default" : false,
                "Price" : 1.00
              }
            }
          }
        },
        "Price" : 10.99
      }
    })
  }

  mexicanFood() {
    return of([
      {
        "Description": "We use a 12\" flour tortilla for each burrito. The burritos come with your choice of meat, rice, beans, onions, cilantro, hot sauce, and shredded lettuce.",
        "Meat_Choices": "Carne Asada, Al Pastor, Barbacoa and Chicken",
        "Image": "https://i.imgur.com/Dh7fjnw.jpg",
        "Name": "Burrito",
        "Modifiers": {
          "Salsa" : [{
            "Item": "Extra Salsa Roja",
            "Default": false,
            "Price": 0.25,
            "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
            "Quantity": 0
          },
          {
            "Item": "Extra Salsa Verde",
            "Default": true,
            "Price": 0,
            "Image": "https://www.garlicandzest.com/wp-content/uploads/2017/04/Authentic-Spicy-Tomatillo-Salsa1-7.jpg",
            "Quantity": 5
          },
          {
            "Item": "Salsa Roja",
            "Default": true,
            "Price": 0,
            "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
            "Quantity": 5
          },
          {
            "Item": "Salsa Verde",
            "Default": true,
            "Price": 0,
            "Image": "https://www.garlicandzest.com/wp-content/uploads/2017/04/Authentic-Spicy-Tomatillo-Salsa1-7.jpg",
            "Quantity": 0
          }],
          "Meat": [
            {
              "Default": false,
              "Image": "https://downshiftology.com/wp-content/uploads/2018/04/carne-asada-recipe-500x500.jpg",
              "Price": 0,
              "Quantity": 8,
              "Item": "Carne Asada"
            },
            {
              "Default": false,
              "Image": "https://img.buzzfeed.com/video-api-prod/assets/7ae7e369f0b042ab9fdde41c89be6aec/BFV13345_HomemadeAlPastor-ThumbTextless1080.jpg",
              "Price": 0,
              "Quantity": 8,
              "Item": "Al Pastor"
            },
            {
              "Default": false,
              "Image": "https://cookinglsl.com/wp-content/uploads/2017/07/easy-Barbacoa-recipe-slow-cooker-3-1-660x924.jpg",
              "Price": 0,
              "Quantity": 8,
              "Item": "Barbacoa"
            },
            {
              "Default": false,
              "Image": "https://i0.wp.com/kristineskitchenblog.com/wp-content/uploads/2018/06/grilled-chicken-700-0400.jpg?fit=700%2C1050&ssl=1",
              "Price": 0,
              "Quantity": 8,
              "Item": "Chicken"
            },
            {
              "Default": false,
              "Image": "https://hips.hearstapps.com/del.h-cdn.co/assets/17/22/1496355937-skillet-garlic-cilantro-shrimp.jpg",
              "Price": 1,
              "Quantity": 8,
              "Item": "Shrimp"
            }
          ],
          "Toppings": [
            
              
               {
                 "Item" :  "American",
                  "Default": false,
                  "Price": 0.25,
                  "Image": "https://shop.honeyville.com/media/catalog/product/cache/10f519365b01716ddb90abc57de5a837/f/r/freeze-dried-cheddar-cheese-new-5.jpg",
                  "Quantity": 0
                },
                {
                 "Item" :  "Mozarella",
                  "Default": false,
                  "Price": 0.25,
                  "Image": "https://cdnimg.webstaurantstore.com/images/products/large/427865/1587497.jpg",
                  "Quantity": 11
                },
            {
              "Default": true,
              "Price": 0,
              "Image": "https://www.healthline.com/hlcmsresource/images/topic_centers/Food-Nutrition/732x549_Cilantro_Allergy.jpg",
              "Quantity": 5,
              "Item": "Cilantro"
            },
            {
              "Default": false,
              "Price": 0,
              "Image": "https://getinspiredeveryday.com/food/wp-content/uploads/sites/5/2015/04/Ancho-Chile-Chicken-Taco-Bowls-GI-365.jpg",
              "Quantity": 3,
              "Item": "Lettuce"
            },
            {
              "Default": true,
              "Price": 0,
              "Image": "http://cdn.shopify.com/s/files/1/0917/9396/products/diced_onions_grande.jpg?v=1459605830",
              "Quantity": 5,
              "Item": "Onions"
            },
            {
              "Default": false,
              "Price": 0.25,
              "Image": "https://www.seededatthetable.com/wp-content/uploads/2010/09/5010760134_be11b49c1b.jpg",
              "Quantity": 2,
              "Item": "Pineapple"
            },
           
                {
                  "Item": "Extra Salsa Roja",
                  "Default": false,
                  "Price": 0.25,
                  "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                  "Quantity": 0
                },
                {
                  "Item": "Extra Salsa Verde",
                  "Default": true,
                  "Price": 0,
                  "Image": "https://www.garlicandzest.com/wp-content/uploads/2017/04/Authentic-Spicy-Tomatillo-Salsa1-7.jpg",
                  "Quantity": 5
                },
                {
                  "Item": "Salsa Roja",
                  "Default": true,
                  "Price": 0,
                  "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                  "Quantity": 5
                },
                {
                  "Item": "Salsa Verde",
                  "Default": true,
                  "Price": 0,
                  "Image": "https://www.garlicandzest.com/wp-content/uploads/2017/04/Authentic-Spicy-Tomatillo-Salsa1-7.jpg",
                  "Quantity": 0
                }
            ,
            {
              "Default": false,
              "Price": 0.05,
              "Image": "https://1.bp.blogspot.com/-Ww87UTUssIY/VO3du9hvhoI/AAAAAAAAFws/y_2EPMLwhlQ/s1600/tomatoes.jpg",
              "Quantity": 2,
              "Item": "Tomatoes"
            },
         
                {
                  "Item": "Avocado",
                  "Default": true,
                  "Price": 0,
                  "Image": "https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_420,w_631/v1/img/upload/package/summerentertaining/H2_Slice_Avocado_Slices_6.jpg",
                  "Quantity": 2
                },
                {
                  "Item": "Guacamole",
                  "Default": false,
                  "Price": 0.5,
                  "Image": "https://www.mylatinatable.com/wp-content/uploads/2016/02/guacamole-foto-heroe.jpg",
                  "Quantity": 1
                }
           ,
            {
              "Image": "https://edge.bonnieplants.com/www/uploads/20180920003952/mammoth-jalapeno-hot-pepper.jpg",
              "Default": false,
              "Price": 0.05,
              "Quantity": 2,
              "Item": "Jalapenos"
            }
          ]
        },
        "Price": 5.5
      },
      {
        "Description": "The Tacos garnished with pieces of onions and cilantro and drizzled with hot sauce. Each taco is made with corn tortillas.",
        "Meat_Choices": "Carne Asada, Al Pastor, Barbacoa and Chicken",
        "Image": "https://i.imgur.com/kRpqzke.jpg",
        "Name": "Tacos",
        "Modifiers": {
          "Salsa" : [{
            "Item": "Extra Salsa Roja",
            "Default": false,
            "Price": 0.25,
            "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
            "Quantity": 0
          },
          {
            "Item": "Extra Salsa Verde",
            "Default": true,
            "Price": 0,
            "Image": "https://www.garlicandzest.com/wp-content/uploads/2017/04/Authentic-Spicy-Tomatillo-Salsa1-7.jpg",
            "Quantity": 5
          },
          {
            "Item": "Salsa Roja",
            "Default": true,
            "Price": 0,
            "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
            "Quantity": 5
          },
          {
            "Item": "Salsa Verde",
            "Default": true,
            "Price": 0,
            "Image": "https://www.garlicandzest.com/wp-content/uploads/2017/04/Authentic-Spicy-Tomatillo-Salsa1-7.jpg",
            "Quantity": 0
          }],
          "Meat": [
            {
              "Default": false,
              "Image": "https://downshiftology.com/wp-content/uploads/2018/04/carne-asada-recipe-500x500.jpg",
              "Price": 0,
              "Quantity": 8,
              "Item": "Carne Asada"
            },
            {
              "Default": false,
              "Image": "https://img.buzzfeed.com/video-api-prod/assets/7ae7e369f0b042ab9fdde41c89be6aec/BFV13345_HomemadeAlPastor-ThumbTextless1080.jpg",
              "Price": 0,
              "Quantity": 8,
              "Item": "Al Pastor"
            },
            {
              "Default": false,
              "Image": "https://cookinglsl.com/wp-content/uploads/2017/07/easy-Barbacoa-recipe-slow-cooker-3-1-660x924.jpg",
              "Price": 0,
              "Quantity": 8,
              "Item": "Barbacoa"
            },
            {
              "Default": false,
              "Image": "https://i0.wp.com/kristineskitchenblog.com/wp-content/uploads/2018/06/grilled-chicken-700-0400.jpg?fit=700%2C1050&ssl=1",
              "Price": 0,
              "Quantity": 8,
              "Item": "Chicken"
            },
            {
              "Default": false,
              "Image": "https://hips.hearstapps.com/del.h-cdn.co/assets/17/22/1496355937-skillet-garlic-cilantro-shrimp.jpg",
              "Price": 1,
              "Quantity": 8,
              "Item": "Shrimp"
            }
          ],
          "Toppings": [
            {
              "Default": false,
              "Types": {
                "American": {
                  "Default": false,
                  "Price": 0.25,
                  "Image": "https://shop.honeyville.com/media/catalog/product/cache/10f519365b01716ddb90abc57de5a837/f/r/freeze-dried-cheddar-cheese-new-5.jpg",
                  "Quantity": 0
                },
                "Mozarella": {
                  "Default": false,
                  "Price": 0.25,
                  "Image": "https://cdnimg.webstaurantstore.com/images/products/large/427865/1587497.jpg",
                  "Quantity": 11
                }
              },
              "Item": "Cheese"
            },
            {
              "Default": true,
              "Price": 0,
              "Image": "https://www.healthline.com/hlcmsresource/images/topic_centers/Food-Nutrition/732x549_Cilantro_Allergy.jpg",
              "Quantity": 5,
              "Item": "Cilantro"
            },
            {
              "Default": false,
              "Price": 0,
              "Image": "https://getinspiredeveryday.com/food/wp-content/uploads/sites/5/2015/04/Ancho-Chile-Chicken-Taco-Bowls-GI-365.jpg",
              "Quantity": 3,
              "Item": "Lettuce"
            },
            {
              "Default": true,
              "Price": 0,
              "Image": "http://cdn.shopify.com/s/files/1/0917/9396/products/diced_onions_grande.jpg?v=1459605830",
              "Quantity": 5,
              "Item": "Onions"
            },
            {
              "Default": false,
              "Price": 0.25,
              "Image": "https://www.seededatthetable.com/wp-content/uploads/2010/09/5010760134_be11b49c1b.jpg",
              "Quantity": 2,
              "Item": "Pineapple"
            },
            {
              "Item": "Salsa",
              "Type": [
             
              ]
            },
            {
              "Default": false,
              "Price": 0.05,
              "Image": "https://1.bp.blogspot.com/-Ww87UTUssIY/VO3du9hvhoI/AAAAAAAAFws/y_2EPMLwhlQ/s1600/tomatoes.jpg",
              "Quantity": 2,
              "Item": "Tomatoes"
            },
            {
              "Item": "Avocado",
              "Type": [
                {
                  "Item": "Avocado",
                  "Default": true,
                  "Price": 0,
                  "Image": "https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_420,w_631/v1/img/upload/package/summerentertaining/H2_Slice_Avocado_Slices_6.jpg",
                  "Quantity": 2
                },
                {
                  "Item": "Guacamole",
                  "Default": false,
                  "Price": 0.5,
                  "Image": "https://www.mylatinatable.com/wp-content/uploads/2016/02/guacamole-foto-heroe.jpg",
                  "Quantity": 1
                }
              ]
            },
            {
              "Image": "https://edge.bonnieplants.com/www/uploads/20180920003952/mammoth-jalapeno-hot-pepper.jpg",
              "Default": false,
              "Price": 0.05,
              "Quantity": 2,
              "Item": "Jalapenos"
            }
          ]
        },
        "Price": 2.05
      }
    ])
  }
  mexicanFoodItems() {
    return  of({
      "Item_1" : {
        "Description" : "We use a 12\" flour tortilla for each burrito. The burritos come with your choice of meat, rice, beans, onions, cilantro, hot sauce, and shredded lettuce.",
        "Meat_Choices" : "Carne Asada, Al Pastor, Barbacoa and Chicken",
        "Name" : "Burrito",
        "Modifiers" : {
          "Meat Choices" : {
            "Carne Asada" : 0,
            "Al Pastor" : 0,
            "Barbacoa" : 0,
            "Chicken" : 0,
            "Shrimp" : {
              "Extra" : {
                "Price" : 1.00
              }
            }
          },
          "Toppings" : {
            "Cheese" : {
             
              "Default" : false,
              "Types" : {
                "American" : {
                  "Default" : false,
                  "Price" : 0.25
                },
                "Mozarella" : {
                  "Default" : false,
                  "Price" : 0.25
                }
              }
            },
            "Cilantro" :  {
              "Default" : true,
              "Price" : 0
            },
            "Lettuce" :  {
              "Default" : false,
              "Price" : 0
            },
            "Onions" : {
              "Default" : true,
              "Price" : 0
            },
            "Pineapple" :  {
              "Default" : false,
              "Price" : 0.25
            },
            "Jalapeños" :  {
              "Default" : false,
              "Price" : 0.25
            },
            "Salsa" : {
              "Extra Salsa Roja" : {
                "Default" : false,
                "Price" : 0.25
              },
              "Extra Salsa Verde" : {
                "Default" : false,
                "Price" : 0.25
              },
              "Salsa Roja" : {
                "Default" : true,
                "Price" : 0.25
              },
              "Salsa Verde" : {
                "Default" : false,
                "Price" : 0.25
              }
            },
            "Tomatoes" : {
              "Default" : false,
              "Price" : 0.05
            },
            "Avocado" : {
              "Avocado Slices" : {
                "Default" : true,
                "Price" : 0
              },
              "Guacamole" : {
                "Default" : false,
                "Price" : 0.50
              }
            }
          }
        },
        "Price" : 5.5
      },
      "Item_2" : {
        "Description" : "The Tacos garnished with pieces of onions and cilantro and drizzled with hot sauce. Each taco is made with corn tortillas.",
        "Meat_Choices" : "Carne Asada, Al Pastor, Barbacoa and Chicken",
        "Name" : "Tacos",
        "Modifiers" : {
          "Meat Choices" : {
            "Carne Asada" : 0,
            "Al Pastor" : 0,
            "Barbacoa" : 0,
            "Chicken" : 0,
            "Shrimp" : {
              "Extra" : {
                "Price" : 1.00
              }
            }
          },
          "Toppings" : {
            "Cheese" : {
              "Default" : false,
              "Types" : {
                "American" : {
                  "Default" : false,
                  "Price" : 0.25
                },
                "Mozarella" : {
                  "Default" : false,
                  "Price" : 0.25
                }
              }
            },
            "Cilantro" :  {
              "Default" : true,
              "Price" : 0
            },
            "Lettuce" :  {
              "Default" : false,
              "Price" : 0
            },
            "Onions" : {
              "Default" : true,
              "Price" : 0
            },
            "Pineapple" :  {
              "Default" : false,
              "Price" : 0.25
            },
            "Jalapeños" :  {
              "Default" : false,
              "Price" : 0.25
            },
            "Salsa" : {
              "Extra Salsa Roja" : {
                "Default" : false,
                "Price" : 0.25
              },
              "Extra Salsa Verde" : {
                "Default" : false,
                "Price" : 0.25
              },
              "Salsa Roja" : {
                "Default" : true,
                "Price" : 0.25
              },
              "Salsa Verde" : {
                "Default" : false,
                "Price" : 0.25
              }
            },
            "Tomatoes" : {
              "Default" : false,
              "Price" : 0.05
            },
            "Avocado" : {
              "Avocado Slices" : {
                "Default" : true,
                "Price" : 0
              },
              "Guacamole" : {
                "Default" : false,
                "Price" : 0.50
              }
            }
          }
        },
        "Price" : 2.05
      },
      "Item_3" : {
        "Description" : "Our Quesadilla Tacos are garnished with pieces of onions and cilantro and drizzled with hot sauce. Each taco is made with corn tortillas.",
        "Meat_Choices" : "Carne Asada, Al Pastor, Barbacoa, and Chicken",
        "Name" : "Quesadilla Tacos",
        "Modifiers" : {
          "Meat Choices" : {
            "Carne Asada" : 0,
            "Al Pastor" : 0,
            "Barbacoa" : 0,
            "Chicken" : 0,
            "Shrimp" : {
              "Extra" : {
                "Price" : 1.00
              }
            }
          },
          "Toppings" : {
            "Cheese" : {
              "Default" : false,
              "Types" : {
                "American" : {
                  "Default" : false,
                  "Price" : 0.25
                },
                "Mozarella" : {
                  "Default" : false,
                  "Price" : 0.25
                }
              }
            },
            "Cilantro" :  {
              "Default" : true,
              "Price" : 0
            },
            "Lettuce" :  {
              "Default" : false,
              "Price" : 0
            },
            "Onions" : {
              "Default" : true,
              "Price" : 0
            },
            "Pineapple" :  {
              "Default" : false,
              "Price" : 0.25
            },
            "Jalapeños" :  {
              "Default" : false,
              "Price" : 0.25
            },
            "Salsa" : {
              "Extra Salsa Roja" : {
                "Default" : false,
                "Price" : 0.25
              },
              "Extra Salsa Verde" : {
                "Default" : false,
                "Price" : 0.25
              },
              "Salsa Roja" : {
                "Default" : true,
                "Price" : 0.25
              },
              "Salsa Verde" : {
                "Default" : false,
                "Price" : 0.25
              }
            },
            "Tomatoes" : {
              "Default" : false,
              "Price" : 0.05
            },
            "Avocado" : {
              "Avocado Slices" : {
                "Default" : true,
                "Price" : 0
              },
              "Guacamole" : {
                "Default" : false,
                "Price" : 0.50
              }
            }
          }
        },
        "Price" : 2.5
      },
      "Item_4" : {
        "Description" : "The chicken is cooked with onions, tomatoes, and jalapeños. Once the chicken and veggies are cooked, it's drizzled with a special red sauce. The plate comes with a side of rice,beans and a flour tortilla.",
        "Name" : "Fajitas de Pollo",
        "Modifiers" : {
          "Toppings" : {
            "Cheese" : {
              "Default" : false,
              "Types" : {
                "American" : {
                  "Default" : false,
                  "Price" : 0.25
                },
                "Mozarella" : {
                  "Default" : false,
                  "Price" : 0.25
                }
              }
            },
            "Cilantro" :  {
              "Default" : true,
              "Price" : 0
            },
            "Lettuce" :  {
              "Default" : false,
              "Price" : 0
            },
            "Onions" : {
              "Default" : true,
              "Price" : 0
            },
            "Jalapeños" :  {
              "Default" : true,
              "Price" : 0
            },
            "Pineapple" :  {
              "Default" : false,
              "Price" : 0.25
            },
            "Salsa" : {
              "Extra Salsa Roja" : {
                "Default" : false,
                "Price" : 0.25
              },
              "Extra Salsa Verde" : {
                "Default" : false,
                "Price" : 0.25
              },
              "Salsa Roja" : {
                "Default" : true,
                "Price" : 0
              },
              "Salsa Verde" : {
                "Default" : false,
                "Price" : 0.25
              }
            },
            "Tomatoes" : {
              "Default" : true,
              "Price" : 0
            },
            "Avocado" : {
              "Avocado Slices" : {
                "Default" : true,
                "Price" : 0
              },
              "Guacamole" : {
                "Default" : false,
                "Price" : 0.50
              }
            }
          }
        },
        "Price" : 10.99
      },
      "Item_5" : {
        "Description" : "The Carne Asada meat is cooked with onions, tomatoes, bell peppers and jalapeños. Once the meat and veggies are cooked, it's drizzled with a special red sauce. The plate comes with a side of rice, beans and a flour tortilla.",
        "Name" : "Steak Ranchero",
        "Modifiers" : {
          "Toppings" : {
            "Cheese" : {
              "Default" : false,
              "Types" : {
                "American" : {
                  "Default" : false,
                  "Price" : 0.25
                },
                "Mozarella" : {
                  "Default" : false,
                  "Price" : 0.25
                }
              }
            },
            "Cilantro" :  {
              "Default" : true,
              "Price" : 0
            },
            "Lettuce" :  {
              "Default" : false,
              "Price" : 0
            },
            "Onions" : {
              "Default" : true,
              "Price" : 0
            },
            "Jalapeños" :  {
              "Default" : true,
              "Price" : 0
            },
            "Pineapple" :  {
              "Default" : false,
              "Price" : 0.25
            },
            "Salsa" : {
              "Extra Salsa Roja" : {
                "Default" : false,
                "Price" : 0.25
              },
              "Extra Salsa Verde" : {
                "Default" : false,
                "Price" : 0.25
              },
              "Salsa Roja" : {
                "Default" : true,
                "Price" : 0
              },
              "Salsa Verde" : {
                "Default" : false,
                "Price" : 0.25
              }
            },
            "Tomatoes" : {
              "Default" : true,
              "Price" : 0
            },
            "Avocado" : {
              "Avocado Slices" : {
                "Default" : true,
                "Price" : 0
              },
              "Guacamole" : {
                "Default" : false,
                "Price" : 0.50
              }
            }
          }
        },
        "Price" : 10.99
      },
      "Item_6" : {
        "Description" : "We create layered nachos meaning that we first put a layer of chips, followed by the first layer of cheese, followed by another layer of chips. After the preparation layers are set, we put some beans, choice of meat, another layer of cheese to make sure it's a cheesey experience. We then add the toppings which are onions, cilantro, and hot sauce of choice to your nachos.",
        "Meat_Choices" : "Carne Asada, Al Pastor, Barbacoa, and Chicken",
        "Name" : "Super Nachos",
        "Modifiers" : {
          "Meat Choices" : {
            "Carne Asada" : 0,
            "Al Pastor" : 0,
            "Barbacoa" : 0,
            "Chicken" : 0,
            "Shrimp" : {
              "Extra" : {
                "Price" : 4.00
              }
            }
          },
          "Toppings" : {
            "Cheese" : {
              "Default" : false,
              "Types" : {
                "American" : {
                  "Default" : false,
                  "Price" : 0.25
                },
                "Mozarella" : {
                  "Default" : false,
                  "Price" : 0.25
                },
                "Nacho Cheese" : {
                  "Default" : false,
                  "Price" : 1.00
                }
              }
            },
            "Cilantro" :  {
              "Default" : true,
              "Price" : 0
            },
            "Lettuce" :  {
              "Default" : false,
              "Price" : 0
            },
            "Onions" : {
              "Default" : true,
              "Price" : 0
            },
            "Pineapple" :  {
              "Default" : false,
              "Price" : 0.25
            },
            "Jalapeños" :  {
              "Default" : false,
              "Price" : 1.00
            },
            "Salsa" : {
              "Extra Salsa Roja" : {
                "Default" : false,
                "Price" : 0.25
              },
              "Extra Salsa Verde" : {
                "Default" : false,
                "Price" : 0.25
              },
              "Salsa Roja" : {
                "Default" : true,
                "Price" : 0.25
              },
              "Salsa Verde" : {
                "Default" : false,
                "Price" : 0.25
              }
            },
            "Tomatoes" : {
              "Default" : false,
              "Price" : 0.05
            },
            "Avocado" : {
              "Avocado Slices" : {
                "Default" : true,
                "Price" : 0
              },
              "Guacamole" : {
                "Default" : false,
                "Price" : 0.50
              }
            }
          }
        },
        "Price" : 9.5
      },
      "Item_7" : {
        "Description" : "We use a 12\" flour tortilla for each quesadilla. The quesadillas come with a layer of mixed Monterey and Cheddar cheese, your choice of meat[Carne Asada, Al Pastor, or Pollo], onions, cilantro, hot sauce, shredded lettuce and another layer of cheese. We fold the tortilla in half, coat the top with mayonnaise and grill it until it becomes crunchy.",
        "Meat_Choices" : "Carne Asada, Al Pastor, Barbacoa, and Chicken",
        "Name" : "Super Quesadilla",
        "Modifiers" : {
          "Meat Choices" : {
            "Carne Asada" : 0,
            "Al Pastor" : 0,
            "Barbacoa" : 0,
            "Chicken" : 0,
            "Shrimp" : {
              "Extra" : {
                "Price" : 4.00
              }
            }
          },
          "Toppings" : {
            "Cheese" : {
              "Default" : false,
              "Types" : {
                "American" : {
                  "Default" : false,
                  "Price" : 0.25
                },
                "Mozarella" : {
                  "Default" : false,
                  "Price" : 0.25
                }
              }
            },
            "Cilantro" :  {
              "Default" : true,
              "Price" : 0
            },
            "Lettuce" :  {
              "Default" : false,
              "Price" : 0
            },
            "Onions" : {
              "Default" : true,
              "Price" : 0
            },
            "Pineapple" :  {
              "Default" : false,
              "Price" : 0.25
            },
            "Jalapeños" :  {
              "Default" : false,
              "Price" : 0.25
            },
            "Salsa" : {
              "Extra Salsa Roja" : {
                "Default" : false,
                "Price" : 0.25
              },
              "Extra Salsa Verde" : {
                "Default" : false,
                "Price" : 0.25
              },
              "Salsa Roja" : {
                "Default" : true,
                "Price" : 0.25
              },
              "Salsa Verde" : {
                "Default" : false,
                "Price" : 0.25
              }
            },
            "Tomatoes" : {
              "Default" : false,
              "Price" : 0.05
            },
            "Avocado" : {
              "Avocado Slices" : {
                "Default" : true,
                "Price" : 0
              },
              "Guacamole" : {
                "Default" : false,
                "Price" : 0.50
              }
            }
          }
        },
        "Price" : 6.5
      },
      "Item_8" : {
        "Description" : "Each Taco Plate comes with 3 Tacos with any meat choice and a side of rice and beans. The tacos are garnished with pieces of onions and cilantro and drizzled with hot sauce. Each taco is made with corn tortillas.",
        "Meat_Choices" : "Carne Asada, Al Pastor, Barbacoa and Chicken",
        "Name" : "Taco Combo",
        "Modifiers" : {
          "First Taco" : {
            "Meat Choices" : {
              "Carne Asada" : 0,
              "Al Pastor" : 0,
              "Barbacoa" : 0,
              "Chicken" : 0,
              "Shrimp" : {
                "Extra" : {
                  "Price" : 1.00
                }
              }
            },
            "Toppings" : {
              "Cheese" : {
                "Default" : false,
                "Types" : {
                  "American" : {
                    "Default" : false,
                    "Price" : 0.25
                  },
                  "Mozarella" : {
                    "Default" : false,
                    "Price" : 0.25
                  }
                }
              },
              "Cilantro" :  {
                "Default" : true,
                "Price" : 0
              },
              "Lettuce" :  {
                "Default" : false,
                "Price" : 0
              },
              "Onions" : {
                "Default" : true,
                "Price" : 0
              },
              "Pineapple" :  {
                "Default" : false,
                "Price" : 0.25
              },
              "Jalapeños" :  {
                "Default" : false,
                "Price" : 0.25
              },
              "Salsa" : {
                "Extra Salsa Roja" : {
                  "Default" : false,
                  "Price" : 0.25
                },
                "Extra Salsa Verde" : {
                  "Default" : false,
                  "Price" : 0.25
                },
                "Salsa Roja" : {
                  "Default" : true,
                  "Price" : 0.25
                },
                "Salsa Verde" : {
                  "Default" : false,
                  "Price" : 0.25
                }
              },
              "Tomatoes" : {
                "Default" : false,
                "Price" : 0.05
              },
              "Avocado" : {
                "Avocado Slices" : {
                  "Default" : true,
                  "Price" : 0
                },
                "Guacamole" : {
                  "Default" : false,
                  "Price" : 0.50
                }
              }
            }
          },
          "Second Taco" : {
            "Meat Choices" : {
              "Carne Asada" : 0,
              "Al Pastor" : 0,
              "Barbacoa" : 0,
              "Chicken" : 0,
              "Shrimp" : {
                "Extra" : {
                  "Price" : 1.00
                }
              }
            },
            "Toppings" : {
              "Cheese" : {
                "Default" : false,
                "Types" : {
                  "American" : {
                    "Default" : false,
                    "Price" : 0.25
                  },
                  "Mozarella" : {
                    "Default" : false,
                    "Price" : 0.25
                  }
                }
              },
              "Cilantro" :  {
                "Default" : true,
                "Price" : 0
              },
              "Lettuce" :  {
                "Default" : false,
                "Price" : 0
              },
              "Onions" : {
                "Default" : true,
                "Price" : 0
              },
              "Pineapple" :  {
                "Default" : false,
                "Price" : 0.25
              },
              "Jalapeños" :  {
                "Default" : false,
                "Price" : 0.25
              },
              "Salsa" : {
                "Extra Salsa Roja" : {
                  "Default" : false,
                  "Price" : 0.25
                },
                "Extra Salsa Verde" : {
                  "Default" : false,
                  "Price" : 0.25
                },
                "Salsa Roja" : {
                  "Default" : true,
                  "Price" : 0.25
                },
                "Salsa Verde" : {
                  "Default" : false,
                  "Price" : 0.25
                }
              },
              "Tomatoes" : {
                "Default" : false,
                "Price" : 0.05
              },
              "Avocado" : {
                "Avocado Slices" : {
                  "Default" : true,
                  "Price" : 0
                },
                "Guacamole" : {
                  "Default" : false,
                  "Price" : 0.50
                }
              }
            }
          },
          "Third Taco" : {
            "Meat Choices" : {
              "Carne Asada" : 0,
              "Al Pastor" : 0,
              "Barbacoa" : 0,
              "Chicken" : 0,
              "Shrimp" : {
                "Extra" : {
                  "Price" : 1.00
                }
              }
            },
            "Toppings" : {
              "Cheese" : {
                "Default" : false,
                "Types" : {
                  "American" : {
                    "Default" : false,
                    "Price" : 0.25
                  },
                  "Mozarella" : {
                    "Default" : false,
                    "Price" : 0.25
                  }
                }
              },
              "Cilantro" :  {
                "Default" : true,
                "Price" : 0
              },
              "Lettuce" :  {
                "Default" : false,
                "Price" : 0
              },
              "Onions" : {
                "Default" : true,
                "Price" : 0
              },
              "Pineapple" :  {
                "Default" : false,
                "Price" : 0.25
              },
              "Jalapeños" :  {
                "Default" : false,
                "Price" : 0.25
              },
              "Salsa" : {
                "Extra Salsa Roja" : {
                  "Default" : false,
                  "Price" : 0.25
                },
                "Extra Salsa Verde" : {
                  "Default" : false,
                  "Price" : 0.25
                },
                "Salsa Roja" : {
                  "Default" : true,
                  "Price" : 0.25
                },
                "Salsa Verde" : {
                  "Default" : false,
                  "Price" : 0.25
                }
              },
              "Tomatoes" : {
                "Default" : false,
                "Price" : 0.05
              },
              "Avocado" : {
                "Avocado Slices" : {
                  "Default" : true,
                  "Price" : 0
                },
                "Guacamole" : {
                  "Default" : false,
                  "Price" : 0.50
                }
              }
            }
          },
          "Side Items" : {
            "Rice" : {
              "Default" : true,
              "Price" : 0
            },
            "Beans" : {
              "Default" : true,
              "Price" : 0
            },
            "Double Rice" : {
              "Default" : false,
              "Price" : 0
            },
            "Double Beans" : {
              "Default" : false,
              "Price" : 0
            }
          }
        },
        "Price" : 8.99
      },
      "Item_9" : {
        "Description" : "The bread is toasted with mayonnaise, we put beans, your choice of meat, cheese, onions, cilantro, hot sauce, pieces of avocado and shredded lettuce.",
        "Meat_Choices" : "Carne Asada, Al Pastor, Barbacoa and Chicken",
        "Name" : "Tortas",
        "Modifiers" : {
          "Meat Choices" : {
            "Carne Asada" : 0,
            "Al Pastor" : 0,
            "Barbacoa" : 0,
            "Chicken" : 0,
            "Shrimp" : {
              "Extra" : {
                "Price" : 1.00
              }
            }
          },
          "Toppings" : {
            "Cheese" : {
              "Default" : false,
              "Types" : {
                "American" : {
                  "Default" : false,
                  "Price" : 0.25
                },
                "Mozarella" : {
                  "Default" : false,
                  "Price" : 0.25
                }
              }
            },
            "Cilantro" :  {
              "Default" : true,
              "Price" : 0
            },
            "Lettuce" :  {
              "Default" : false,
              "Price" : 0
            },
            "Onions" : {
              "Default" : true,
              "Price" : 0
            },
            "Pineapple" :  {
              "Default" : false,
              "Price" : 0.25
            },
            "Salsa" : {
              "Extra Salsa Roja" : {
                "Default" : false,
                "Price" : 0.25
              },
              "Extra Salsa Verde" : {
                "Default" : false,
                "Price" : 0.25
              },
              "Salsa Roja" : {
                "Default" : true,
                "Price" : 0.25
              },
              "Salsa Verde" : {
                "Default" : false,
                "Price" : 0.25
              }
            },
            "Tomatoes" : {
              "Default" : false,
              "Price" : 0.05
            },
            "Avocado" : {
              "Avocado Slices" : {
                "Default" : true,
                "Price" : 0
              },
              "Guacamole" : {
                "Default" : false,
                "Price" : 0.50
              }
            }
          }
        },
        "Price" : 5.5
      }
    })
  }

  dealFood(){
    return  of([
      
      
    ]
    )
  }

} 