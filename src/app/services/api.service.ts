
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject , of} from 'rxjs';




@Injectable()
export class ApiService {

  seeFood() {
    return of(
      [
        {
          "Name": "Shrimp Tacos",
          "Price": 3.05,
          "Description": "The tacos are made with corn tortillas. The shrimp is grilled and the taco is garnished with onions, cilantro and hot sauce.",
          "Image": "https://i.imgur.com/4ouOeJs.jpg",
          "Modifiers": {
            "Toppings": [
              {
                "Item": "American",
                "Default": false,
                "Price": 0.25,
                "Image": "https://shop.honeyville.com/media/catalog/product/cache/10f519365b01716ddb90abc57de5a837/f/r/freeze-dried-cheddar-cheese-new-5.jpg",
                "Quantity": 0
              },
              {
                "Item": "Mozarella",
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
              },
              {
                "Image": "https://edge.bonnieplants.com/www/uploads/20180920003952/mammoth-jalapeno-hot-pepper.jpg",
                "Default": false,
                "Price": 0.05,
                "Quantity": 2,
                "Item": "Jalapenos"
              }
            ]
          }
        },
        {
          "Description": "Our Quesadilla Tacos are garnished with pieces of onions and cilantro and drizzled with hot sauce. Each taco is made with corn tortillas.",
          "Name": "Shrimp Quesadilla Tacos",
          "Image": "https://i.imgur.com/XeMEDX2.jpg",
          "Modifiers": {
          "Toppings": [
              {
                "Item": "American",
                "Default": false,
                "Price": 0.25,
                "Image": "https://shop.honeyville.com/media/catalog/product/cache/10f519365b01716ddb90abc57de5a837/f/r/freeze-dried-cheddar-cheese-new-5.jpg",
                "Quantity": 0
              },
              {
                "Item": "Mozarella",
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
      ]
      
    )
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


  dealFood(){
    return  of([
      {
         
          "Content" : "4 Tacos and a Drink",
          "Meat Choices" : "Carne Asada, Al Pastor, Barbacoa, and Chicken",
          "Image" : "https://i.imgur.com/kRpqzke.jpg",
      "Modifiers": {
            "First Taco": {
              "Meat Choices": {
                "Carne Asada": {
                  "Default": false,
                  "Image": "https://downshiftology.com/wp-content/uploads/2018/04/carne-asada-recipe-500x500.jpg",
                  "Cost": 0,
                  "Quantity": 8
                },
                "Al Pastor": {
                  "Default": false,
                  "Image": "https://img.buzzfeed.com/video-api-prod/assets/7ae7e369f0b042ab9fdde41c89be6aec/BFV13345_HomemadeAlPastor-ThumbTextless1080.jpg",
                  "Cost": 0,
                  "Quantity": 8
                },
                "Barbacoa": {
                  "Default": false,
                  "Image": "https://cookinglsl.com/wp-content/uploads/2017/07/easy-Barbacoa-recipe-slow-cooker-3-1-660x924.jpg",
                  "Cost": 0,
                  "Quantity": 8
                },
                "Chicken": {
                  "Default": false,
                  "Image": "https://i0.wp.com/kristineskitchenblog.com/wp-content/uploads/2018/06/grilled-chicken-700-0400.jpg?fit=700%2C1050&ssl=1",
                  "Cost": 0,
                  "Quantity": 8
                },
                "Shrimp": {
                  "Default": false,
                  "Image": "https://hips.hearstapps.com/del.h-cdn.co/assets/17/22/1496355937-skillet-garlic-cilantro-shrimp.jpg",
                  "Cost": 1,
                  "Quantity": 8
                }
              },
              "Toppings": {
                "Cheese": {
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
                "Cilantro": {
                  "Default": true,
                  "Price": 0,
                  "Image": "https://www.healthline.com/hlcmsresource/images/topic_centers/Food-Nutrition/732x549_Cilantro_Allergy.jpg",
                  "Quantity": 5
                },
                "Lettuce": {
                  "Default": false,
                  "Price": 0,
                  "Image": "https://getinspiredeveryday.com/food/wp-content/uploads/sites/5/2015/04/Ancho-Chile-Chicken-Taco-Bowls-GI-365.jpg",
                  "Quantity": 3
                },
                "Onions": {
                  "Default": true,
                  "Price": 0,
                  "Image": "http://cdn.shopify.com/s/files/1/0917/9396/products/diced_onions_grande.jpg?v=1459605830",
                  "Quantity": 5
                },
                "Pineapple": {
                  "Default": false,
                  "Price": 0.25,
                  "Image": "https://www.seededatthetable.com/wp-content/uploads/2010/09/5010760134_be11b49c1b.jpg",
                  "Quantity": 2
                },
                "Salsa": {
                  "Extra Salsa Roja": {
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                    "Quantity": 0
                  },
                  "Extra Salsa Verde": {
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.garlicandzest.com/wp-content/uploads/2017/04/Authentic-Spicy-Tomatillo-Salsa1-7.jpg",
                    "Quantity": 5
                  },
                  "Salsa Roja": {
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                    "Quantity": 5
                  },
                  "Salsa Verde": {
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.garlicandzest.com/wp-content/uploads/2017/04/Authentic-Spicy-Tomatillo-Salsa1-7.jpg",
                    "Quantity": 0
                  }
                },
                "Tomatoes": {
                  "Default": false,
                  "Price": 0.05,
                  "Image": "https://1.bp.blogspot.com/-Ww87UTUssIY/VO3du9hvhoI/AAAAAAAAFws/y_2EPMLwhlQ/s1600/tomatoes.jpg",
                  "Quantity": 2
                },
                "Avocado": {
                  "Avocado Slices": {
                    "Default": true,
                    "Price": 0,
                    "Image": "https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_420,w_631/v1/img/upload/package/summerentertaining/H2_Slice_Avocado_Slices_6.jpg",
                    "Quantity": 2
                  },
                  "Guacamole": {
                    "Default": false,
                    "Price": 0.5,
                    "Image": "https://www.mylatinatable.com/wp-content/uploads/2016/02/guacamole-foto-heroe.jpg",
                    "Quantity": 1
                  }
                },
                "Jalapenos": {
                  "Image": "https://edge.bonnieplants.com/www/uploads/20180920003952/mammoth-jalapeno-hot-pepper.jpg",
                  "Default": false,
                  "Price": 0.05,
                  "Quantity": 2
                }
              }
            },
            "Second Taco": {
              "Meat Choices": {
                "Carne Asada": {
                  "Default": false,
                  "Image": "https://downshiftology.com/wp-content/uploads/2018/04/carne-asada-recipe-500x500.jpg",
                  "Cost": 0,
                  "Quantity": 8
                },
                "Al Pastor": {
                  "Default": false,
                  "Image": "https://img.buzzfeed.com/video-api-prod/assets/7ae7e369f0b042ab9fdde41c89be6aec/BFV13345_HomemadeAlPastor-ThumbTextless1080.jpg",
                  "Cost": 0,
                  "Quantity": 8
                },
                "Barbacoa": {
                  "Default": false,
                  "Image": "https://cookinglsl.com/wp-content/uploads/2017/07/easy-Barbacoa-recipe-slow-cooker-3-1-660x924.jpg",
                  "Cost": 0,
                  "Quantity": 8
                },
                "Chicken": {
                  "Default": false,
                  "Image": "https://i0.wp.com/kristineskitchenblog.com/wp-content/uploads/2018/06/grilled-chicken-700-0400.jpg?fit=700%2C1050&ssl=1",
                  "Cost": 0,
                  "Quantity": 8
                },
                "Shrimp": {
                  "Default": false,
                  "Image": "https://hips.hearstapps.com/del.h-cdn.co/assets/17/22/1496355937-skillet-garlic-cilantro-shrimp.jpg",
                  "Cost": 1,
                  "Quantity": 8
                }
              },
              "Toppings": {
                "Cheese": {
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
                "Cilantro": {
                  "Default": true,
                  "Price": 0,
                  "Image": "https://www.healthline.com/hlcmsresource/images/topic_centers/Food-Nutrition/732x549_Cilantro_Allergy.jpg",
                  "Quantity": 5
                },
                "Lettuce": {
                  "Default": false,
                  "Price": 0,
                  "Image": "https://getinspiredeveryday.com/food/wp-content/uploads/sites/5/2015/04/Ancho-Chile-Chicken-Taco-Bowls-GI-365.jpg",
                  "Quantity": 3
                },
                "Onions": {
                  "Default": true,
                  "Price": 0,
                  "Image": "http://cdn.shopify.com/s/files/1/0917/9396/products/diced_onions_grande.jpg?v=1459605830",
                  "Quantity": 5
                },
                "Pineapple": {
                  "Default": false,
                  "Price": 0.25,
                  "Image": "https://www.seededatthetable.com/wp-content/uploads/2010/09/5010760134_be11b49c1b.jpg",
                  "Quantity": 2
                },
                "Salsa": {
                  "Extra Salsa Roja": {
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                    "Quantity": 0
                  },
                  "Extra Salsa Verde": {
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.garlicandzest.com/wp-content/uploads/2017/04/Authentic-Spicy-Tomatillo-Salsa1-7.jpg",
                    "Quantity": 5
                  },
                  "Salsa Roja": {
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                    "Quantity": 5
                  },
                  "Salsa Verde": {
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.garlicandzest.com/wp-content/uploads/2017/04/Authentic-Spicy-Tomatillo-Salsa1-7.jpg",
                    "Quantity": 0
                  }
                },
                "Tomatoes": {
                  "Default": false,
                  "Price": 0.05,
                  "Image": "https://1.bp.blogspot.com/-Ww87UTUssIY/VO3du9hvhoI/AAAAAAAAFws/y_2EPMLwhlQ/s1600/tomatoes.jpg",
                  "Quantity": 2
                },
                "Avocado": {
                  "Avocado Slices": {
                    "Default": true,
                    "Price": 0,
                    "Image": "https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_420,w_631/v1/img/upload/package/summerentertaining/H2_Slice_Avocado_Slices_6.jpg",
                    "Quantity": 2
                  },
                  "Guacamole": {
                    "Default": false,
                    "Price": 0.5,
                    "Image": "https://www.mylatinatable.com/wp-content/uploads/2016/02/guacamole-foto-heroe.jpg",
                    "Quantity": 1
                  }
                },
                "Jalapenos": {
                  "Image": "https://edge.bonnieplants.com/www/uploads/20180920003952/mammoth-jalapeno-hot-pepper.jpg",
                  "Default": false,
                  "Price": 0.05,
                  "Quantity": 2
                }
              }
            },
            "Third Taco": {
              "Meat Choices": {
                "Carne Asada": {
                  "Default": false,
                  "Image": "https://downshiftology.com/wp-content/uploads/2018/04/carne-asada-recipe-500x500.jpg",
                  "Cost": 0,
                  "Quantity": 8
                },
                "Al Pastor": {
                  "Default": false,
                  "Image": "https://img.buzzfeed.com/video-api-prod/assets/7ae7e369f0b042ab9fdde41c89be6aec/BFV13345_HomemadeAlPastor-ThumbTextless1080.jpg",
                  "Cost": 0,
                  "Quantity": 8
                },
                "Barbacoa": {
                  "Default": false,
                  "Image": "https://cookinglsl.com/wp-content/uploads/2017/07/easy-Barbacoa-recipe-slow-cooker-3-1-660x924.jpg",
                  "Cost": 0,
                  "Quantity": 8
                },
                "Chicken": {
                  "Default": false,
                  "Image": "https://i0.wp.com/kristineskitchenblog.com/wp-content/uploads/2018/06/grilled-chicken-700-0400.jpg?fit=700%2C1050&ssl=1",
                  "Cost": 0,
                  "Quantity": 8
                },
                "Shrimp": {
                  "Default": false,
                  "Image": "https://hips.hearstapps.com/del.h-cdn.co/assets/17/22/1496355937-skillet-garlic-cilantro-shrimp.jpg",
                  "Cost": 1,
                  "Quantity": 8
                }
              },
              "Toppings": {
                "Cheese": {
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
                "Cilantro": {
                  "Default": true,
                  "Price": 0,
                  "Image": "https://www.healthline.com/hlcmsresource/images/topic_centers/Food-Nutrition/732x549_Cilantro_Allergy.jpg",
                  "Quantity": 5
                },
                "Lettuce": {
                  "Default": false,
                  "Price": 0,
                  "Image": "https://getinspiredeveryday.com/food/wp-content/uploads/sites/5/2015/04/Ancho-Chile-Chicken-Taco-Bowls-GI-365.jpg",
                  "Quantity": 3
                },
                "Onions": {
                  "Default": true,
                  "Price": 0,
                  "Image": "http://cdn.shopify.com/s/files/1/0917/9396/products/diced_onions_grande.jpg?v=1459605830",
                  "Quantity": 5
                },
                "Pineapple": {
                  "Default": false,
                  "Price": 0.25,
                  "Image": "https://www.seededatthetable.com/wp-content/uploads/2010/09/5010760134_be11b49c1b.jpg",
                  "Quantity": 2
                },
                "Salsa": {
                  "Extra Salsa Roja": {
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                    "Quantity": 0
                  },
                  "Extra Salsa Verde": {
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.garlicandzest.com/wp-content/uploads/2017/04/Authentic-Spicy-Tomatillo-Salsa1-7.jpg",
                    "Quantity": 5
                  },
                  "Salsa Roja": {
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                    "Quantity": 5
                  },
                  "Salsa Verde": {
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.garlicandzest.com/wp-content/uploads/2017/04/Authentic-Spicy-Tomatillo-Salsa1-7.jpg",
                    "Quantity": 0
                  }
                },
                "Tomatoes": {
                  "Default": false,
                  "Price": 0.05,
                  "Image": "https://1.bp.blogspot.com/-Ww87UTUssIY/VO3du9hvhoI/AAAAAAAAFws/y_2EPMLwhlQ/s1600/tomatoes.jpg",
                  "Quantity": 2
                },
                "Avocado": {
                  "Avocado Slices": {
                    "Default": true,
                    "Price": 0,
                    "Image": "https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_420,w_631/v1/img/upload/package/summerentertaining/H2_Slice_Avocado_Slices_6.jpg",
                    "Quantity": 2
                  },
                  "Guacamole": {
                    "Default": false,
                    "Price": 0.5,
                    "Image": "https://www.mylatinatable.com/wp-content/uploads/2016/02/guacamole-foto-heroe.jpg",
                    "Quantity": 1
                  }
                },
                "Jalapenos": {
                  "Image": "https://edge.bonnieplants.com/www/uploads/20180920003952/mammoth-jalapeno-hot-pepper.jpg",
                  "Default": false,
                  "Price": 0.05,
                  "Quantity": 2
                }
              }
            },
            "Fourth Taco": {
              "Meat Choices": {
                "Carne Asada": {
                  "Default": false,
                  "Image": "https://downshiftology.com/wp-content/uploads/2018/04/carne-asada-recipe-500x500.jpg",
                  "Cost": 0,
                  "Quantity": 8
                },
                "Al Pastor": {
                  "Default": false,
                  "Image": "https://img.buzzfeed.com/video-api-prod/assets/7ae7e369f0b042ab9fdde41c89be6aec/BFV13345_HomemadeAlPastor-ThumbTextless1080.jpg",
                  "Cost": 0,
                  "Quantity": 8
                },
                "Barbacoa": {
                  "Default": false,
                  "Image": "https://cookinglsl.com/wp-content/uploads/2017/07/easy-Barbacoa-recipe-slow-cooker-3-1-660x924.jpg",
                  "Cost": 0,
                  "Quantity": 8
                },
                "Chicken": {
                  "Default": false,
                  "Image": "https://i0.wp.com/kristineskitchenblog.com/wp-content/uploads/2018/06/grilled-chicken-700-0400.jpg?fit=700%2C1050&ssl=1",
                  "Cost": 0,
                  "Quantity": 8
                },
                "Shrimp": {
                  "Default": false,
                  "Image": "https://hips.hearstapps.com/del.h-cdn.co/assets/17/22/1496355937-skillet-garlic-cilantro-shrimp.jpg",
                  "Cost": 1,
                  "Quantity": 8
                }
              },
              "Toppings": {
                "Cheese": {
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
                "Cilantro": {
                  "Default": true,
                  "Price": 0,
                  "Image": "https://www.healthline.com/hlcmsresource/images/topic_centers/Food-Nutrition/732x549_Cilantro_Allergy.jpg",
                  "Quantity": 5
                },
                "Lettuce": {
                  "Default": false,
                  "Price": 0,
                  "Image": "https://getinspiredeveryday.com/food/wp-content/uploads/sites/5/2015/04/Ancho-Chile-Chicken-Taco-Bowls-GI-365.jpg",
                  "Quantity": 3
                },
                "Onions": {
                  "Default": true,
                  "Price": 0,
                  "Image": "http://cdn.shopify.com/s/files/1/0917/9396/products/diced_onions_grande.jpg?v=1459605830",
                  "Quantity": 5
                },
                "Pineapple": {
                  "Default": false,
                  "Price": 0.25,
                  "Image": "https://www.seededatthetable.com/wp-content/uploads/2010/09/5010760134_be11b49c1b.jpg",
                  "Quantity": 2
                },
                "Salsa": {
                  "Extra Salsa Roja": {
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                    "Quantity": 0
                  },
                  "Extra Salsa Verde": {
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.garlicandzest.com/wp-content/uploads/2017/04/Authentic-Spicy-Tomatillo-Salsa1-7.jpg",
                    "Quantity": 5
                  },
                  "Salsa Roja": {
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                    "Quantity": 5
                  },
                  "Salsa Verde": {
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.garlicandzest.com/wp-content/uploads/2017/04/Authentic-Spicy-Tomatillo-Salsa1-7.jpg",
                    "Quantity": 0
                  }
                },
                "Tomatoes": {
                  "Default": false,
                  "Price": 0.05,
                  "Image": "https://1.bp.blogspot.com/-Ww87UTUssIY/VO3du9hvhoI/AAAAAAAAFws/y_2EPMLwhlQ/s1600/tomatoes.jpg",
                  "Quantity": 2
                },
                "Avocado": {
                  "Avocado Slices": {
                    "Default": true,
                    "Price": 0,
                    "Image": "https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_420,w_631/v1/img/upload/package/summerentertaining/H2_Slice_Avocado_Slices_6.jpg",
                    "Quantity": 2
                  },
                  "Guacamole": {
                    "Default": false,
                    "Price": 0.5,
                    "Image": "https://www.mylatinatable.com/wp-content/uploads/2016/02/guacamole-foto-heroe.jpg",
                    "Quantity": 1
                  }
                },
                "Jalapenos": {
                  "Image": "https://edge.bonnieplants.com/www/uploads/20180920003952/mammoth-jalapeno-hot-pepper.jpg",
                  "Default": false,
                  "Price": 0.05,
                  "Quantity": 2
                }
              }
            },
            "Drinks" :{
              "Sizes": {
                "20oz": 0,
                "32oz" : 1.00
              }
            }
          },
          "Name" : "Deal 1",
          "Price" : 8.99
        }

    ]
    )
  }

} 