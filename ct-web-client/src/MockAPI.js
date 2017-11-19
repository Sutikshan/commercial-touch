function MockAPI(){

    let userList = [
        {
            id: 1,
            name: "Vilakshan Dubey",
            mobile: 9011988905,
            email: "vilakshan.dubey@gmail.com",
            password: "pass",
            confirmPassword: "pass",
            type: 0,
            companyDetails: {
                dealType: [1, 2],
                transactionType: [1, 2, 3],
                propertyType: [1, 2, 3, 4],
                operatingSince: new Date(),
                expertiseIn: "1",
                authorizedOf: "",
                valueAddedServices: [1, 2],
                tradeLicense: {
                    number: 'DA124',
                    dateOfIssue: new Date()
                },
                valuableClients: []
            }            
        }, {
            id: 2,
            name: "Sachin Tendulkar",
            mobile: 9890287569,
            email: "sachin@gmail.com",
            password: "pass",
            confirmPassword: "pass",
            type: 1
        }, {
            id: 3,
            name: "Virat Kohli",
            mobile: 7786439864,
            email: "virat@gmail.com",
            password: "pass",
            confirmPassword: "pass",
            type: 1
        }, {
            id: 4,
            name: "Kapil Dev",
            mobile: 9011925468,
            email: "kapil@gmail.com",
            password: "pass",
            confirmPassword: "pass",
            type: 1
        }, {
            id: 5,
            name: "Saurav Ganguli",
            mobile: 9890287569,
            email: "saurav@gmail.com",
            password: "pass",
            confirmPassword: "pass",
            type: 2
        }, {
            id: 6,
            name: "Rahul Dravid",
            mobile: 7786439864,
            email: "rahul@gmail.com",
            password: "pass",
            confirmPassword: "pass",
            type: 2
        }, {
            id: 7,
            name: "Shikhar Dhavan",
            mobile: 9890287569,
            email: "shikhar@gmail.com",
            password: "pass",
            confirmPassword: "pass",
            type: 2
        }, {
            id: 8,
            name: "Rohit Sharma",
            mobile: 7786439864,
            email: "rohit@gmail.com",
            password: "pass",
            confirmPassword: "pass",
            type: 3
        }, {
            id: 9,
            name: "Mahendra Singh Dhoni",
            mobile: 9011925468,
            email: "mahendra@gmail.com",
            password: "pass",
            confirmPassword: "pass",
            type: 3
        }, {
            id: 10,
            name: "Gautam Gambhir",
            mobile: 9890287569,
            email: "gautam@gmail.com",
            password: "pass",
            confirmPassword: "pass",
            type: 3
        }, {
            id: 11,
            name: "Yuvraj Singh",
            mobile: 7786439864,
            email: "yuvraj@gmail.com",
            password: "pass",
            confirmPassword: "pass",
            type: 4
        }, {
            id: 12,
            name: "Harbhajan Singh",
            mobile: 9890287569,
            email: "harbhajan@gmail.com",
            password: "pass",
            confirmPassword: "pass",
            type: 4
        }, {
            id: 13,
            name: "Ashwin",
            mobile: 7786439864,
            email: "ashwin@gmail.com",
            password: "pass",
            confirmPassword: "pass",
            type: 4
        }
    ];

    let planList = [
        {
            id: 1,
            name: "Gold",
            maxProperties: 100,
            duration: {
                value: 3,
                unit: 1
            },
            fee: {
                value: 25000,
                unit: 1
            }
        }, {
            id: 2,
            name: "Silver",
            maxProperties: 75,
            duration: {
                value: 2,
                unit: "months"
            },
            fee: {
                value: 20000,
                unit: "INR"
            }
        }, {
            id: 3,
            name: "Platinum",
            maxProperties: 150,
            duration: {
                value: 4,
                unit: "months"
            },
            fee: {
                value: 40000,
                unit: "INR"
            }
        }
    ];

    let propertyList = [
        // Land for sale
        {
            header: {
                id: 1,
                createdOn: new Date(),
                postType: 1,
                propertyType: 1
            },
            body: {
                location: {
                    projectName: "",
                    state: "Maharashtra",
                    city: "Pune",
                    locality: "Hadapsar",
                    areaInLocality: "Magarpatta city",
                    address: "Behind Tower6",
                    pinCode: "411028"
                },
                Area: {
                    plotArea: 5000,
                    plotLength: 50,
                    plotBreadth: 100,
                    isCornerPlot: true

                },
                commercials: {
                    expectedPrice: 10000000,
                    pricePerSqft: 1000, 
                    otherCharges: [],
                    isStampDutyRegChargesIncluded: true,
                    tokenAmount: 500000,
                    brokerage: "2%",
                },
                features: {},
                transaction: {},
                availability: {}
            }
        },
        // Land for rent
        {
            header: {
                id: 2,
                createdOn: new Date(),
                postType: 2,
                propertyType: 1
            },
            body: {
                location: {
                    projectName: "",
                    state: "Maharashtra",
                    city: "Pune",
                    locality: "Aundh",
                    areaInLocality: "Aundh Gaon",
                    address: "near balaji mandir",
                    pinCode: "411007"
                },
                Area: {
                    plotArea: 8000,
                    plotLength: 100,
                    plotBreadth: 80,
                    isCornerPlot: false

                },
                commercials: {
                    monthlyRent: 200000,
                    isElectricityAndWaterIncluded: true,
                    otherCharges: [],
                    securityAmount: 1000000,
                    brokerage: "2%",
                },
                features: {},
                transaction: {},
                availability: {}
            }
        },
        // Shop for sale
        {
            header: {
                id: 3,
                createdOn: new Date(),
                postType: 1,
                propertyType: 2
            },
            body: {
                location: {
                    projectName: "",
                    state: "Maharashtra",
                    city: "Pune",
                    locality: "Chandan Nagar",
                    areaInLocality: "",
                    address: "close to Hanuman Mandir",
                    pinCode: "411007"
                },
                Area: {
                    coveredArea: 8000,
                    plotArea: 8100,
                    carpetArea: 7980,

                },
                commercials: {
                    expectedPrice: 10000000,
                    pricePerSqft: 1000, 
                    otherCharges: [],
                    maintenanceCharges: 1000,
                    isPlcParkingChargesIncluded: true,
                    isStampDutyRegChargesIncluded: true,
                    tokenAmount: 500000,
                    brokerage: "2%",
                },
                features: {
                    buildingName: "Destination center",
                    furnishedStatus: "Unfurnished",
                    floorNumber: 2,
                    totalFloors: 4,
                    isPersonalWashroom: true,
                    pantry: "Not Available",
                    isCornerShop: true,
                    isMainRoadFacing: true                    
                },
                transactionAndAvailability: {
                    transactionType: "New",
                    isCurrentlyLeasedOut: false,
                    possessionStatus: "Under Construction",
                    availableFrom: new Date(),
                }
            }
        },
        // Shop for rent
        {
            header: {
                id: 4,
                createdOn: new Date(),
                postType: 2,
                propertyType: 2
            },
            body: {
                location: {
                    projectName: "Ashirwad Residency",
                    state: "Maharashtra",
                    city: "Pune",
                    locality: "Wakad",
                    areaInLocality: "",
                    address: "Wakad chawk",
                    pinCode: "411007"
                },
                Area: {
                    coveredArea: 8000,
                    plotArea: 8200,
                    carpetArea: 7800,

                },
                commercials: {
                    monthlyRent: 40000,
                    isElectricityAndWaterChargesIncluded: true,
                    otherCharges: [],
                    securityAmount: 100000,
                    brokerage: "2%",
                    maintenanceCharges: 2000
                },
                features: {
                    buildingName: "Destination center",
                    furnishedStatus: "Semi Furnished",
                    floorNumber: 2,
                    totalFloors: 4,
                    isPersonalWashroom: true,
                    pantry: "Dry",
                    isCornerShop: true,
                    isMainRoadFacing: true                    
                },
                transactionAndAvailability: {
                    availableFrom: new Date(),
                    constructionAge: 3,
                }
            }
        },
        // Showroom for sale
        {
            header: {
                id: 3,
                createdOn: new Date(),
                postType: 1,
                propertyType: 3
            },
            body: {
                location: {
                    projectName: "",
                    state: "Maharashtra",
                    city: "Pune",
                    locality: "Baner",
                    areaInLocality: "Near balewadi phata",
                    address: "",
                    pinCode: "411007"
                },
                Area: {
                    coveredArea: 18000,
                    plotArea: 18100,
                    carpetArea: 17800,

                },
                commercials: {
                    expectedPrice: 90000000,
                    pricePerSqft: 3000, 
                    otherCharges: [],
                    maintenanceCharges: 10000,
                    isPlcParkingChargesIncluded: true,
                    isStampDutyRegChargesIncluded: true,
                    tokenAmount: 1000000,
                    brokerage: "2%",
                },
                features: {
                    buildingName: "Infinity Mall",
                    furnishedStatus: "Unfurnished",
                    floorNumber: 1,
                    totalFloors: 4,
                    isPersonalWashroom: true,
                    pantry: "Wet",
                    isCornerShop: false,
                    isMainRoadFacing: false                    
                },
                transactionAndAvailability: {
                    transactionType: "Resale",
                    isCurrentlyLeasedOut: true,
                    possessionStatus: "Ready to move",
                    availableFrom: new Date(),
                }
            }
        },        
        // Showroom for rent
        {
            header: {
                id: 4,
                createdOn: new Date(),
                postType: 2,
                propertyType: 3
            },
            body: {
                location: {
                    projectName: "Futura mall",
                    state: "Maharashtra",
                    city: "Pune",
                    locality: "Wakad",
                    areaInLocality: "",
                    address: "Wakad chawk",
                    pinCode: "411007"
                },
                Area: {
                    coveredArea: 10000,
                    plotArea: 10100,
                    carpetArea: 9700,

                },
                commercials: {
                    monthlyRent: 90000,
                    isElectricityAndWaterChargesIncluded: true,
                    otherCharges: [],
                    securityAmount: 100000,
                    brokerage: "2%",
                    maintenanceCharges: 2000
                },
                features: {
                    buildingName: "Futura mall",
                    furnishedStatus: "unfurnished",
                    floorNumber: 2,
                    totalFloors: 4,
                    isPersonalWashroom: true,
                    pantry: "Wet",
                    isCornerShop: true,
                    isMainRoadFacing: true                    
                },
                transactionAndAvailability: {
                    availableFrom: new Date(),
                    constructionAge: 1,
                }
            }
        },        
        // Office space for sale
        {
            header: {
                id: 4,
                createdOn: new Date(),
                postType: 1,
                propertyType: 4
            },
            body: {
                location: {
                    projectName: "Pentagon3",
                    state: "Maharashtra",
                    city: "Pune",
                    locality: "Hadapsar",
                    areaInLocality: "Magarpatta city",
                    address: "Pantagon3",
                    pinCode: "411007"
                },
                Area: {
                    coveredArea: 10000,
                    plotArea: 10300,
                    carpetArea: 9850,

                },
                commercials: {
                    expectedPrice: 90000000,
                    pricePerSqft: 3000, 
                    otherCharges: [],
                    maintenanceCharges: 10000,
                    isPlcParkingChargesIncluded: true,
                    isStampDutyRegChargesIncluded: true,
                    tokenAmount: 1000000,
                    brokerage: "2%",
                },
                features: {
                    buildingName: "Futura mall",
                    furnishedStatus: "unfurnished",
                    floorNumber: 2,
                    totalFloors: 4,
                    noOfWashroom: 2,
                    isPersonalWashroom: true,
                    pantry: "Wet",
                    isSharedSpace: false,
                },
                transactionAndAvailability: {
                    transactionType: "Resale",
                    isCurrentlyLeasedOut: true,
                    possessionStatus: "Ready to move",
                    availableFrom: new Date(),
                }
            }
        },        
        // Office space for rent
        {
            header: {
                id: 4,
                createdOn: new Date(),
                postType: 2,
                propertyType: 4
            },
            body: {
                location: {
                    projectName: "Tower3",
                    state: "Maharashtra",
                    city: "Pune",
                    locality: "Hadapsar",
                    areaInLocality: "Magarpatta city",
                    address: "Inner circle",
                    pinCode: "411028"
                },
                Area: {
                    coveredArea: 10000,
                    plotArea: 10100,
                    carpetArea: 9700,

                },
                commercials: {
                    monthlyRent: 90000,
                    isElectricityAndWaterChargesIncluded: true,
                    otherCharges: [],
                    securityAmount: 100000,
                    brokerage: "2%",
                    maintenanceCharges: 2000
                },
                features: {
                    buildingName: "Futura mall",
                    noOfWashroom: 2,
                    furnishedStatus: "unfurnished",
                    floorNumber: 2,
                    totalFloors: 4,
                    lockInPeriod: 3,
                    isSharedSpace: false,
                    isPersonalWashroom: true,
                    isWillingToModifyInteriors: true,
                    pantry: "Wet",
                },
                transactionAndAvailability: {
                    availableFrom: new Date(),
                    constructionAge: 1,
                }
            }
        },         
        // Warehouse/Godown for sale
        {
            header: {
                id: 4,
                createdOn: new Date(),
                postType: 1,
                propertyType: 5
            },
            body: {
                location: {
                    projectName: "Pentagon3",
                    state: "Maharashtra",
                    city: "Pune",
                    locality: "Hadapsar",
                    areaInLocality: "Magarpatta city",
                    address: "Pantagon3",
                    pinCode: "411007"
                },
                Area: {
                    coveredArea: 9700,
                    plotArea: 10000,
                    plotLength: 100,
                    plotBreadth: 100,
                    isOnCornerPlot: false,
                },
                commercials: {
                    expectedPrice: 90000000,
                    pricePerSqft: 3000, 
                    otherCharges: [],
                    maintenanceCharges: 10000,
                    isPlcParkingChargesIncluded: true,
                    isStampDutyRegChargesIncluded: true,
                    tokenAmount: 1000000,
                    brokerage: "2%",
                },
                features: {
                    furnishedStatus: "unfurnished",
                    floorNumber: 2,
                    totalFloors: 4,
                },
                transactionAndAvailability: {
                    transactionType: "Resale",
                    isCurrentlyLeasedOut: true,
                    possessionStatus: "Ready to move",
                    availableFrom: new Date(),
                }
            }
        },         
        // Warehouse/Godown for rent    
        {
            header: {
                id: 4,
                createdOn: new Date(),
                postType: 2,
                propertyType: 5
            },
            body: {
                location: {
                    projectName: "Pentagon3",
                    state: "Maharashtra",
                    city: "Pune",
                    locality: "Hadapsar",
                    areaInLocality: "Magarpatta city",
                    address: "Pantagon3",
                    pinCode: "411007"
                },
                Area: {
                    coveredArea: 9700,
                    plotArea: 10000,
                    plotLength: 100,
                    plotBreadth: 100,
                    isOnCornerPlot: false,
                },
                commercials: {
                    monthlyRent: 90000,
                    isElectricityAndWaterChargesIncluded: true,
                    otherCharges: [],
                    securityAmount: 100000,
                    brokerage: "2%",
                    maintenanceCharges: 2000
                },
                features: {
                    furnishedStatus: "unfurnished",
                    floorNumber: 2,
                    totalFloors: 4,
                },
                transactionAndAvailability: {
                    availableFrom: new Date(),
                    constructionAge: 1,
                }
            }
        }        
    ];
    
    return {
        getSuperAdmin: function(){
            return userList.find((user) => user.type === 0);
        },          
        getAdminList: function(){
            return userList.filter((user) => user.type === 1);
        },
        getPlanList: function (){
            return planList;
        },
        getBuilderList: function (){
            return userList.filter((user) => user.type === 3);
        },
        getAgentList: function (){
            return userList.filter((user) => user.type === 2);
        },
        getUserList: function (){
            return userList.filter((user) => user.type === 4);
        },
        getAgentById: function (id){
            return userList.find((user) => user.id === parseInt(id));
        }
    }
};

export default MockAPI();