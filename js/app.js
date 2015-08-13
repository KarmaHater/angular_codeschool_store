// (function() {
  var app = angular.module('store', ['store-products']);

    app.controller('StoreController', function () {
    var gems = [
      {
        name: 'Azurite',
        price: 2.95,
        canPurchase: true,
        soldOut: false,
        description: "description for number 1",
        specifications: " specifications for number 1",
        images: [
          {
            thumb: "http://lorempixel.com/300/200/city/1/",
            full: "http://lorempixel.com/600/400/city/1/"
          }
        ],
        reviews: [
           {
            stars: 5,
            body: "I love product number 1",
            author: "written by author 1"
          },
           {
            stars: 4,
            body: "I love product number 1",
            author: "written by author 2"
          }
        ]
      },
      {
      name: 'Bloodstone',
      price: 5.95,
      canPurchase: true,
      soldOut: false,
      description: "description for number 2",
      specifications: " specifications for number 2",
      images: [
        {
          thumb: "http://lorempixel.com/300/200/city/2/",
          full: "http://lorempixel.com/600/400/city/2/"
        }
      ],
      reviews: [
        {
          stars: 5,
          body: "I love product number 3",
          author: "written by author 3"
        },
         {
          stars: 4,
          body: "I love product number 1",
          author: "written by author 2"
        }
      ]
    },
    {
      name: 'Zircon',
      price: 3.95,
      canPurchase: true,
      soldOut: false,
      description: "description for number 3",
      specifications: " specifications for number 3",
      images: [
        {
          thumb: "http://lorempixel.com/300/200/city/3/",
          full: "http://lorempixel.com/600/400/city/3/"
        }
      ],
      reviews: [
        {
          stars: 5,
          body: "I love product number 1",
          author: "written by author 1"
        }
      ]
    }
    ];
      this.products = gems;
    });

// })();