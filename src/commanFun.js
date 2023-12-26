


export function convertTimeTo12Hour(time) {
    const [hours24, minutes] = time && time.split(":");
    const hours12 = (Number(hours24) % 12) || 12; // Handle 0 hours (midnight)
    const amPm = hours24 < 12 ? "am" : "pm";
    
    return `${hours12.toString().padStart(2, "0")}:${minutes} ${amPm}`;
}




export function getSuggestion(rashi) {
    switch (rashi) {
        case "Aries":
            return {
                "rudrakshaName": "Seven-Mukhi Rudraksha",
                "gemsName": "Sun stone",
                "braceletName":"Amethyst, Pukhraj(Yellow sapphire)", 
                "product":[
                    {
                        "name": "Seven-Mukhi Rudraksha",
                        "path": "https://gemsmantra.com/products/7-mukhi-rudraksha",
                        "imgPath" : "/assets/7-mukhi-rudraksha.webp",
                        "des": "it gives Wealth and Happiness also enhances the Spiritual Growth"
                    },
                    {
                        "name": "Sun stone",
                        "path": "https://gemsmantra.com/products/sunstone-bracelet",
                        "imgPath" : "/assets/sunstone.webp",
                        "des": "lighten up one's bad moods and can be a natural anti-depressant"
                    },
                    {
                        "name": "Pukhraj(Yellow sapphire)",
                        "path": "https://gemsmantra.com/collections/yellow-sapphire-pukhraj",
                        "imgPath" : "/assets/yellow-sapphire-pukhraj.webp",
                        "des": "Success in business, jobs, academics,Improved financial status"
                    },
                    {
                        "name": "Amethyst",
                        "path": "https://gemsmantra.com/products/amethyst-bracelet",
                        "imgPath" : "/assets/amethyst-bracelet.webp",
                        "des": " promote relaxation, relieving stress and anxiety"
                    },
                    
                ],
                
            }
        case "Taurus":
            return {
                "rudrakshaName": "Six-Mukhi Rudraksha",
                "gemsName": "Panna",
                "braceletName":"Amethyst, 7-chakra", 
                "product":[
                    {
                        "name": "Six-Mukhi Rudraksha",
                        "path": "https://gemsmantra.com/products/6-mukhi-rudraksha",
                        "imgPath" : "/assets/6-mukhi-rudraksha.webp",
                        "des": "It gives Health, Wealth and Happiness as well as Luxuries and Pleasures"
                    },
                    {
                        "name": "Panna",
                        "path":"https://gemsmantra.com/collections/emerald-panna",
                        "imgPath" : "/assets/emerald-panna.webp",
                        "des": "providing good health, wisdom, prosperity, creative skills and blissful marital life"
                    },
                    {
                        "name": "Amethyst",
                        "path": "https://gemsmantra.com/products/amethyst-bracelet",
                        "imgPath" : "/assets/amethyst-bracelet.webp",
                        "des": " promote relaxation, relieving stress and anxiety"
                    },
                    {
                        "name": "7-chakra",
                        "path": "https://gemsmantra.com/products/7-chakra-bracelet",
                        "imgPath" : "/assets/7-chakra-bracelet.webp",
                        "des": " promote relaxation, relieving stress and anxiety"
                    }
                    
                ],
                
            }
        case "Gemini":
            return {
                "rudrakshaName": "Four-Mukhi Rudraksha",
                "gemsName": "Panna",
                "braceletName":"Natural turquise, Amethyst", 
                "product":[
                    {
                        "name": "Four-Mukhi Rudraksha",
                        "path": "https://gemsmantra.com/products/4-mukhi-rudraksha",
                        "imgPath" : "/assets/4-mukhi-rudraksha.webp",
                        "des": "This Rudraksha positively affects speech of the person"
                    },
                    {
                        "name": "Panna",
                        "path": "https://gemsmantra.com/collections/emerald-panna",
                        "imgPath" : "/assets/emerald-panna.webp",
                        "des": "providing good health, wisdom, prosperity, creative skills and blissful marital life"
                    },
                    {
                        "name": "Natural turquise",
                        "path": "https://gemsmantra.com/products/turquoise-bracelet",
                        "imgPath" : "/assets/turquoise-bracelet.webp",
                        "des": "Enhances leadership qualities, courage, and self-confidence"
                    },
                    {
                        "name": "Amethyst",
                        "path": "https://gemsmantra.com/products/amethyst-bracelet",
                        "imgPath" : "/assets/amethyst-bracelet.webp",
                        "des": " promote relaxation, relieving stress and anxiety"
                    }
                ],
                
            }
        case "Cancer":
            return {
                "rudrakshaName": "Two-Mukhi Rudraksha",
                "gemsName": "Ruby",
                "braceletName":"Cat eye, Amethyst", 
                "product":[
                    {
                        "name": "Two-Mukhi Rudraksha",
                        "path": "https://gemsmantra.com/products/2-mukhi-rudraksha",
                        "imgPath" : "/assets/2-mukhi-rudraksha.webp",
                        "des": "Enhances leadership qualities, courage, and self-confidence"
                    },
                    {
                        "name": "Ruby",
                        "path": "https://gemsmantra.com/collections/ruby-manik",
                        "imgPath" : "/assets/ruby-manik.webp",
                        "des": "boost of self-confidence and passion toward life"
                    },
                    {
                        "name": "Cat eye",
                        "path": "https://gemsmantra.com/products/silliminate-bracelet",
                        "imgPath" : "/assets/silliminate-bracelet.webp",
                        "des": "enhancing its capacity for thought and decision-making"
                    },
                    {
                        "name": "Amethyst",
                        "path": "https://gemsmantra.com/products/amethyst-bracelet",
                        "imgPath" : "/assets/amethyst-bracelet.webp",
                        "des": " promote relaxation, relieving stress and anxiety"
                    }
                ],
                
            }
        case "Leo":
            return {
                "rudrakshaName": "Six-Mukhi Rudraksha",
                "gemsName": "Ruby",
                "braceletName":"Golden obsidian, Amethyst", 
                "product":[
                    {
                        "name": "Six-Mukhi Rudraksha",
                        "path": "https://gemsmantra.com/products/6-mukhi-rudraksha",
                        "imgPath" : "/assets/6-mukhi-rudraksha.webp",
                        "des": "It gives Health, Wealth and Happiness as well as Luxuries and Pleasures"
                    },
                    {
                        "name": "Ruby",
                        "path": "https://gemsmantra.com/collections/ruby-manik",
                        "imgPath" : "/assets/ruby-manik.webp",
                        "des": "boost of self-confidence and passion toward life"
                    },
                    {
                        "name": "Golden obsidian",
                        "path": "https://gemsmantra.com/products/golden-obsidian-bracelet",
                        "imgPath" : "/assets/golden-obsidian-bracelet.webp",
                        "des": "promote self-reflection and inner growth"
                    },
                    {
                        "name": "Amethyst",
                        "path": "https://gemsmantra.com/products/amethyst-bracelet",
                        "imgPath" : "/assets/amethyst-bracelet.webp",
                        "des": " promote relaxation, relieving stress and anxiety"
                    }
                ],
            }
        case "Virgo":
                return {
                    "rudrakshaName": "One-Mukhi Rudraksha",
                    "gemsName": "Neelam",
                    "braceletName":"Green aventurian, Amethyst", 
                    "product":[
                        {
                            "name": "One-Mukhi Rudraksha",
                            "path": "https://gemsmantra.com/products/1-mukhi-rudraksha",
                            "imgPath" : "/assets/1-mukhi-rudraksha.webp",
                            "des": "spiritual enlightenment, peace, prosperity, and good luck"
                        },
                        {
                            "name": "Neelam",
                            "path": "https://gemsmantra.com/collections/blue-sapphire-neelam",
                            "imgPath" : "/assets/blue-sapphire-neelam.webp",
                            "des": "provides protection from accidents and problems caused due to the natural disaster,"
                        },
                        {
                            "name": "Green aventurian",
                            "path": "https://gemsmantra.com/products/aventurine-bracelet",
                            "imgPath" : "/assets/aventurine-bracelet.webp",
                            "des": "acts as a money magnet as it attracts good luck, fortune and wealth"
                        },
                        {
                            "name": "Amethyst",
                            "path": "https://gemsmantra.com/products/amethyst-bracelet",
                            "imgPath" : "/assets/amethyst-bracelet.webp",
                            "des": " promote relaxation, relieving stress and anxiety"
                        }
                    ],
                    
                }
        case "Libra":
            return {
                "rudrakshaName": "Three-Mukhi Rudraksha",
                "gemsName": "Opal",
                "braceletName":"Rudraksh crystal, Amethyst", 
                "product":[
                    {
                        "name": "Three-Mukhi Rudraksha",
                        "path": "https://gemsmantra.com/products/3-mukhi-rudraksha",
                        "imgPath" : "/assets/3-mukhi-rudraksha.webp",
                        "des": "freed from sins, karmic debts and past life memories"
                    },
                    {
                        "name": "Opal",
                        "path": "https://gemsmantra.com/collections/opal-1",
                        "imgPath" : "/assets/opal-1.webp",
                        "des": "turns its wearer into a loving, caring and affectionate person."
                    },
                    {
                        "name": "Rudraksh crystal",
                        "path": "https://gemsmantra.com/products/rudraksha-crystal-bracelet",
                        "imgPath" : "/assets/rudraksha-crystal-bracelet.webp",
                        "des": "promotes overall health, invites wealth, abundance and prosperity"
                    },
                    {
                        "name": "Amethyst",
                        "path": "https://gemsmantra.com/products/amethyst-bracelet",
                        "imgPath" : "/assets/amethyst-bracelet.webp",
                        "des": " promote relaxation, relieving stress and anxiety"
                    }
                ],
                
            }
        case "Scorpio":
            return {
                "rudrakshaName": "Three-Mukhi Rudraksha",
                "gemsName": "Ruby",
                "braceletName":"Dalmatian, Amethyst", 
                "product":[
                    {
                        "name": "Three-Mukhi Rudraksha",
                        "path": "https://gemsmantra.com/products/3-mukhi-rudraksha",
                        "imgPath" : "/assets/3-mukhi-rudraksha.webp",
                        "des": "freed from sins, karmic debts and past life memories"
                    },
                    {
                        "name": "Ruby",
                        "path": "https://gemsmantra.com/collections/ruby-manik",
                        "imgPath" : "/assets/ruby-manik.webp",
                        "des": "boost of self-confidence and passion toward life"
                    },
                    {
                        "name": "Dalmatian",
                        "path": "https://gemsmantra.com/products/dalmatian-bracelet",
                        "imgPath" : "/assets/dalmatian-bracelet.webp",
                        "des": "It increases loyalty and is beneficial for long term relationships"
                    },
                    {
                        "name": "Amethyst",
                        "path": "https://gemsmantra.com/products/amethyst-bracelet",
                        "imgPath" : "/assets/amethyst-bracelet.webp",
                        "des": " promote relaxation, relieving stress and anxiety"
                    }
                ],
                
            }
        case "Sagittarius":
            return {
                "rudrakshaName": "Nine-Mukhi Rudraksha",
                "gemsName": "Pukhraj(Yellow sapphire)",
                "braceletName":"Rose quartz, Amethyst", 
                "product":[
                    {
                        "name": "Nine-Mukhi Rudraksha",
                        "path": "https://gemsmantra.com/products/9-mukhi-rudraksha",
                        "imgPath" : "/assets/9-mukhi-rudraksha.webp",
                        "des": "this Rudraksha protects from the malefic effects of all the 9 planets."
                    },
                    {
                        "name": "Pukhraj(Yellow sapphire)",
                        "path": "https://gemsmantra.com/collections/yellow-sapphire-pukhraj",
                        "imgPath" : "/assets/yellow-sapphire-pukhraj.webp",
                        "des": "Success in business, jobs, academics,Improved financial status"
                    },
                    {
                        "name": "Rose quartz",
                        "path": "https://gemsmantra.com/products/rose-quartz-bracelet",
                        "imgPath" : "/assets/rose-quartz-bracelet.webp",
                        "des": "Balances the heart chakra and helps in attracting potential love"
                    },
                    {
                        "name": "Amethyst",
                        "path": "https://gemsmantra.com/products/amethyst-bracelet",
                        "imgPath" : "/assets/amethyst-bracelet.webp",
                        "des": " promote relaxation, relieving stress and anxiety"
                    }
                ],
                
            }
        case "Capricorn":
            return {
                "rudrakshaName": "Seven-Mukhi Rudraksha",
                "gemsName": "Neelam",
                "braceletName":"Tiger eye, Amethyst", 
                "product":[
                    {
                        "name": "Seven-Mukhi Rudraksha",
                        "path": "https://gemsmantra.com/products/7-mukhi-rudraksha",
                        "imgPath" : "/assets/7-mukhi-rudraksha.webp",
                        "des": "it gives Wealth and Happiness also enhances the Spiritual Growth"
                    },
                    {
                        "name": "Neelam",
                        "path": "https://gemsmantra.com/collections/blue-sapphire-neelam",
                        "imgPath" : "/assets/blue-sapphire-neelam.webp",
                        "des": "Enhances leadership qualities, courage, and self-confidence"
                    },
                    {
                        "name": "Tiger eye",
                        "path": "https://gemsmantra.com/products/tigers-eye-bracelet",
                        "imgPath" : "/assets/tigers-eye-bracelet.webp",
                        "des": "help block out bad energy and increase your internal power"
                    },
                    {
                        "name": "Amethyst",
                        "path": "https://gemsmantra.com/products/amethyst-bracelet",
                        "imgPath" : "/assets/amethyst-bracelet.webp",
                        "des": " promote relaxation, relieving stress and anxiety"
                    }
                ],
                
            }
        case "Aquarius":
            return {
                "rudrakshaName": "Thirteen-Mukhi Rudraksha",
                "gemsName": "Amethyst",
                "braceletName":"Sodalite, Amethyst", 
                "product":[
                    {
                        "name": "Thirteen-Mukhi Rudraksha",
                        "path": "https://gemsmantra.com/products/13-mukhi-rudraksha",
                        "imgPath" : "/assets/13-mukhi-rudraksha.webp",
                        "des": "It helps to achieve perfection in Alchemy, Research work and Medicines"
                    },
                    {
                        "name": "Amethyst",
                        "path": "https://gemsmantra.com/collections/amethyst",
                        "imgPath" : "/assets/amethyst.webp",
                        "des": "protected from anxiety, anger, curses and jealousy"
                    },
                    {
                        "name": "Sodalite",
                        "path": "https://gemsmantra.com/products/sodalite-bracelet",
                        "imgPath" : "/assets/sodalite-bracelet.webp",
                        "des": "brings order and calmness to the mind"
                    },
                    {
                        "name": "Amethyst",
                        "path": "https://gemsmantra.com/products/amethyst-bracelet",
                        "imgPath" : "/assets/amethyst-bracelet.webp",
                        "des": " promote relaxation, relieving stress and anxiety"
                    }
                ],
                
            }
        case "Pisces":
            return {
                "rudrakshaName": "Two-Mukhi Rudraksha",
                "gemsName": "Pukhraj(Yellow sapphire)",
                "braceletName":"Hematite, Amethyst", 
                "product":[
                    {
                        "name": "Two-Mukhi Rudraksha",
                        "path": "https://gemsmantra.com/products/2-mukhi-rudraksha",
                        "imgPath" : "/assets/2-mukhi-rudraksha.webp",
                        "des": "Enhances leadership qualities, courage, and self-confidence"
                    },
                    {
                        "name": "Pukhraj(Yellow sapphire)",
                        "path": "https://gemsmantra.com/collections/yellow-sapphire-pukhraj",
                        "imgPath" : "/assets/yellow-sapphire-pukhraj.webp",
                        "des": "Success in business, jobs, academics,Improved financial status"
                    },
                    {
                        "name": "Hematite",
                        "path": "https://gemsmantra.com/products/hematite-gunmetal-bracelet",
                        "imgPath" : "/assets/hematite-gunmetal-bracelet.webp",
                        "des": "reducing stress and anxiety"
                    },
                    {
                        "name": "Amethyst",
                        "path": "https://gemsmantra.com/products/amethyst-bracelet",
                        "imgPath" : "/assets/amethyst-bracelet.webp",
                        "des": " promote relaxation, relieving stress and anxiety"
                    }
                ],   
            }
        default:
            break;
    }
}