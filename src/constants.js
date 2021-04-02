// All constants here

const customers = [
    'botan',
    'pekora',
    'fubuki',
    'ina',
    'subaru'
]

const products = [
    'biscuits',
    'bathing soap',
    'shaving blade',
    'dish washing soap',
    'candy',
    'energy bar',
    'detergent',
    'toothbrush',
    'tooth paste',
    'shampoo',
    'toor dal',
    'moong dal',
    'chana dal',
    'sunflower oil',
    'seseme oil',
    'til oil',
    'groundnut oil',
    'coconut oil',
    'groundnuts',
    'sugar',
    'almonds',
    'cashue nuts',
    'wallnuts',
    'instant noodles',
    'tomato kechup',
    'chilli souse',
    'soya souce',
    'wheat',
    'rice',
    'tea',
    'coffee',
    'shaving cream',
    'garam masala',
    'chaat masala',
    'pav bhaaji masala',
    'lal mirchi masala',
    'haldi masala',
    'pooha',
    'bhagar',
    'sabudana',
    'besan flour',
    'mosqueto repelent',
    'ghee',
    'corn flour',
    'maida',
    'farsan',
    'ginger garlic paste',
    'matchbox',
    'jagery'
]

const Xindex = [
    'every week',
    'every 2 weeks',
    'every 3 weeks',
    'every 4 weeks',
    'every 6 weeks',
    'every 8 weeks',
    'every 13 weeks',
    'every 26 weeks',
    'every 52 weeks'
]

const bills = [
    {
       customer: 0,
       products:[ // index of this represents xIndex
            {    
                prod:[  // values in this represents products purchased at the given xIndex value
                    {
                        p:4,
                        q:2
                    },
                    {
                        p:8,
                        q:3
                    },
                    {
                        p:1,
                        q:5
                    },
                    {
                        p:3,
                        q:7
                    },
                    {
                        p:7,
                        q:3
                    }
                ],
            },
            {
                prod:[  // values in this represents products purchased at the given xIndex value
                    {
                        p:2,
                        q:1
                    },
                    {
                        p:9,
                        q:8
                    },
                    {
                        p:10,
                        q:2
                    }
                ],
            },
            {
                prod: [
                    {
                        p: 15,
                        q: 2
                    },
                    {
                        p: 45,
                        q: 6
                    }
                ],
            }
        ]
    },
    {
        customer: 1,
        products: [
            {
                prod:[
                    {
                        p: 4,
                        q: 2
                    },
                    {
                        p: 5,
                        q: 8
                    },
                    {
                        p: 2,
                        q: 3
                    },
                    {
                        p: 1,
                        q: 5
                    },
                    {
                        p: 41,
                        q: 10
                    },
                    {
                        p: 22,
                        q: 12
                    },
                    {
                        p: 12,
                        q: 3
                    },
                    {
                        p: 6,
                        q: 3
                    }
                ],
            },
            {
                prod: [
                    {
                        p: 7,
                        q: 3
                    },
                    {
                        p: 3,
                        q: 2
                    },
                    {
                        p: 10,
                        q: 2
                    }
                ],
            },
            {
                prod: [
                    {
                        p:18,
                        q:5
                    },
                    {
                        p: 45,
                        q: 2
                    },
                    {
                        p:26,
                        q: 3
                    },
                    {
                        p: 20,
                        q: 6
                    }
                ]
            }
        ]
    },
    {
        customer: 2,
        products : [
            {
                prod: [
                    {
                        p: 7,
                        q: 5
                    },
                    {
                        p: 5,
                        q: 7
                    },
                    {
                        p: 6,
                        q: 3
                    },
                    {
                        p: 2,
                        q: 6
                    },
                    {
                        p: 1,
                        q: 3
                    },
                    {
                        p: 4,
                        q: 8
                    },
                    {
                        p: 9,
                        q: 4
                    }
                ]
            },
            {
                prod: [
                    {
                        p: 42,
                        q: 7
                    },
                    {
                        p:41,
                        q: 6 
                    },
                    {
                        p: 40,
                        q: 3
                    }
                ]
            },
            {
                prod: [
                    {
                        p: 36,
                        q: 3
                    },
                    {
                        p: 39,
                        q: 5
                    },
                    {
                        p: 1,
                        q: 3
                    }
                ]
            }
        ]
    },
    {
        customer: 3,
        products: [
            {
                prod: [
                    {
                        p: 7,
                        q: 2
                    },
                    {
                        p: 2,
                        q: 8
                    },
                    {
                        p: 1,
                        q: 3
                    },
                    {
                        p: 6,
                        q:8
                    },
                    {
                        p: 5,
                        q: 2
                    }
                ]
            },
            {
                prod: [
                    {
                        p: 9,
                        q: 2
                    },
                    {
                        p: 11,
                        q: 3
                    },
                    {
                        p: 15,
                        q: 3
                    },
                    {
                        p: 16,
                        q: 8
                    }
                ]
            },
            {
                prod: [
                    {
                        p: 48,
                        q: 3
                    },
                    {
                        p: 22,
                        q: 6
                    },
                    {
                        p: 36,
                        q: 9
                    }
                ]
            }
        ]
    },
    {
        customer: 4,
        products: [
            {
                prod: [
                    {
                        p: 2,
                        q: 8
                    },
                    {
                        p: 1,
                        q: 3
                    },
                    {
                        p: 6,
                        q: 8
                    },
                    {
                        p: 3,
                        q: 7
                    }
                ]
            },
            {
                prod: [
                    {
                        p: 8,
                        q: 2
                    },
                    {
                        p: 11,
                        q: 8
                    },
                    {
                        p: 9,
                        q: 7
                    },
                    {
                        p: 6,
                        q: 5
                    },
                    {
                        p: 7,
                        q: 3
                    }
                ]
            },
            {
                prod: [
                    {
                        p: 5,
                        q: 3
                    },
                    {
                        p: 22,
                        q: 10
                    },
                    {
                        p:36,
                        q: 9
                    }
                ]
            }
        ]
    }
]

/*
    NOTE:
    FOR EVERYTHING:
        Index value is the key value
        In bills index value curruspondes to the customers' index
    FOR XINDEX:
        festival indices will be added after the 'every 52 weeks' index
*/

const Constants = {}

Constants.customers = customers;
Constants.bills = bills;
Constants.xIndex = Xindex;
Constants.products = products;

module.exports = Constants