import { BASE_URL } from "./fetchConfig";
import { postData } from "../helper/fetchHelper";
import { delay } from "../helper/asyncHelper";

const url = `${BASE_URL}/restaurants`;

export default {
  async findNearby(filters) {
    try {
      // return await postData(`${url}/all`, filters);
      return {
        html_attributions: [],
        next_page_token:
          "CrQCJQEAANKG5dKX7G5xx_V8o8vwX8W4_nFfVuiuJDUFNiNB_eYpd-ELjQt0YLTHQqK2cvJTb8yqKKWKIapeOLNx4i1p1QffRDbB4tVFnbc1ZAfxznscZP9reFJBytV7JEPv6S2IjjYY3q1fojyW0nGKPD29-na4Y9OFHv5uatTh4WU0cSeQNtLGYdXag1c9TZMWSz8x6Zi5OZ0mzJ4t8hNAbzEzQGemXQPBTqHNVAEa6svt-CnR5xzI1s8eArx0Swzur5PJSVKTrzyQdgxMGv_wEGSXLUWHf50Dnl32qBS9SNnmTI_SNsyQ4p5dTzJcyWcc4qBQyhEZT1Y4MKsObOY3oaNvUHK9RrGhTzDkYypuD-VvwyrVtzKolWTgKToZ2TR1ktQOcfh3oHUGMOqBj2HVllekU3gSEPdxEA5A8OLxdBA-55gdOWcaFLWpxxvcuntPzT1-FQI-ZwSOkjki",
        results: [
          {
            geometry: {
              location: {
                lat: 49.28857109999999,
                lng: -123.142681
              },
              viewport: {
                northeast: {
                  lat: 49.2899623802915,
                  lng: -123.1414008697085
                },
                southwest: {
                  lat: 49.2872644197085,
                  lng: -123.1440988302915
                }
              }
            },
            icon:
              "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
            id: "a5b4102716658839d6463b5f9eb62839630e0d4b",
            name: "Sylvia Hotel and Restaurant",
            opening_hours: {
              open_now: false
            },
            photos: [
              {
                height: 4032,
                html_attributions: [
                  '<a href="https://maps.google.com/maps/contrib/108118531937062628758/photos">Axel Brandt</a>'
                ],
                photo_reference:
                  "CmRaAAAAFIey-cVQxCF5uOgjGj8Dl-B_TIwrmQU9QNOp9cEHvTQKZSCacImBZMttSGBLqDQJPa0BzoFfAEkgUQ0ZfQsaHG54_8d4Kb4yKHFun81sU3pOlils6bVvb3iY9-07U9W5EhAcm-NfnszgedRzNDhYrX0wGhTLFq9ReUBl0fweH2bqwP50vgzyPQ",
                width: 3024
              }
            ],
            place_id: "ChIJQxM6DCZyhlQRCMLwTITyWEE",
            plus_code: {
              compound_code: "7VQ4+CW Vancouver, British Columbia, Canada",
              global_code: "84XR7VQ4+CW"
            },
            rating: 4.2,
            reference:
              "CmRRAAAA6TwPW0wCyvKgp0tpfEBI7U__5DbBA2zgH2aoJPOKuiRKV_bKGIV2dJy4CibA1ZOwlHuSpG7pknxSLiWj17lWkqvMq-pHTyGRRgE5VZ5i-BrCF_NitjiT9Jh9YpptTo27EhB_swh9uz8CZZ0SV6jGupiIGhSJjBkqDg5yxP3RNMDsS3rPKxLz-g",
            scope: "GOOGLE",
            types: [
              "lodging",
              "restaurant",
              "food",
              "point_of_interest",
              "establishment"
            ],
            vicinity: "1154 Gilford Street, Vancouver"
          },
          {
            geometry: {
              location: {
                lat: 49.19625449999999,
                lng: -123.1276811
              },
              viewport: {
                northeast: {
                  lat: 49.1974577802915,
                  lng: -123.1261037697085
                },
                southwest: {
                  lat: 49.1947598197085,
                  lng: -123.1288017302915
                }
              }
            },
            icon:
              "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
            id: "58199df8676861a9b3d74c1813c07237cdfe7aa2",
            name: "River Rock Casino Resort",
            opening_hours: {
              open_now: true
            },
            photos: [
              {
                height: 3024,
                html_attributions: [
                  '<a href="https://maps.google.com/maps/contrib/107992107054797923204/photos">森外隆雄</a>'
                ],
                photo_reference:
                  "CmRaAAAAymR_cNVZYfweGVe0ffPVdjr_ep_HIZeWEEI0BVrdeMorAMWvfNZXpBNqUAyNAMhX-eO7lvsbiA0JuSEiWPIujm9TvPdP_GJ8UZmz0c2yPJ2qq49ml2LXi6jY1AsH2yjHEhCFT9wm4Aja21a0vxKxxbvWGhTbQYmIMcyLCac8mMa45MEIYCbITg",
                width: 4032
              }
            ],
            place_id: "ChIJud95Kud0hlQRIdd23A7LyZQ",
            plus_code: {
              compound_code:
                "5VWC+GW Richmond, Greater Vancouver A, BC, Canada",
              global_code: "84XR5VWC+GW"
            },
            rating: 4,
            reference:
              "CmRSAAAAABzYHTHrwdrPjiN4jnVieeBwfKop8hmn4kUCH6PF0X7ycUXu-39kUv8teIxd1EgRymxHYPMHrdj7PffBTmEuNWgLVqoD1sRzeRR3K-LFCh2857-BBkDq2a4zyDkagCMiEhBqKcVKKYB7vXntafJhUhEhGhTYHvxUD49FkpvSy9I7U46-rN-Qdg",
            scope: "GOOGLE",
            types: [
              "casino",
              "lodging",
              "restaurant",
              "food",
              "point_of_interest",
              "establishment"
            ],
            vicinity: "8811 River Road, Richmond"
          },
          {
            geometry: {
              location: {
                lat: 49.2746307,
                lng: -123.1225589
              },
              viewport: {
                northeast: {
                  lat: 49.2760205802915,
                  lng: -123.1211477697085
                },
                southwest: {
                  lat: 49.2733226197085,
                  lng: -123.1238457302915
                }
              }
            },
            icon:
              "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
            id: "d2ab5e542d1ab8944cf5173665239289883fdd43",
            name: "OPUS Vancouver",
            opening_hours: {
              open_now: true
            },
            photos: [
              {
                height: 627,
                html_attributions: [
                  '<a href="https://maps.google.com/maps/contrib/113471843899054737985/photos">OPUS Vancouver</a>'
                ],
                photo_reference:
                  "CmRaAAAAbCaIaRMEC1Lln7633OsOdIFzLWKrXz-e11sXy-RyjFk7V6JgLJT6e82f99qhfSOBZxbmNkrSEGmTyg0OEp2KRVoSRe2-O-EeyVmJo-jQRzkh0p0czz55mJxZlXG9F4_3EhB7-wdBmfi-EzY9D5MRZzWmGhSUwGOKtf5VCYtE_RM0k6tr5JkJZg",
                width: 940
              }
            ],
            place_id: "ChIJkYNgwtZzhlQRDyKMepVlARQ",
            plus_code: {
              compound_code: "7VFG+VX Vancouver, British Columbia, Canada",
              global_code: "84XR7VFG+VX"
            },
            rating: 4.6,
            reference:
              "CmRRAAAA0jFbYXgl63Qmh40ABTiFCXq1t3Tm_6q3r-TvVBoBiNEhIOqm113x7kOpDTTqmFX0xLSp7yKpdabCq3TnFYyP4X4GM5Iq0pEUbRmWWK2O1-_sz1EwS2OSLO-4b-N1GXMIEhCvm26acWysrdYFt03Fww86GhSTqHiCUPOIky7k1GCQC-rZ0WpXpQ",
            scope: "GOOGLE",
            types: [
              "bar",
              "lodging",
              "restaurant",
              "food",
              "point_of_interest",
              "establishment"
            ],
            vicinity: "322 Davie Street, Vancouver"
          },
          {
            geometry: {
              location: {
                lat: 49.26753499999999,
                lng: -123.010614
              },
              viewport: {
                northeast: {
                  lat: 49.26832503029149,
                  lng: -123.0091738197085
                },
                southwest: {
                  lat: 49.26562706970849,
                  lng: -123.0118717802915
                }
              }
            },
            icon:
              "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
            id: "fb1881203d0f08e076095ca1011e4abf2b9b4a12",
            name: "Executive Suites Hotel Metro Vancouver",
            opening_hours: {
              open_now: true
            },
            photos: [
              {
                height: 375,
                html_attributions: [
                  '<a href="https://maps.google.com/maps/contrib/111314809760971467954/photos">Executive Suites Hotel Metro Vancouver</a>'
                ],
                photo_reference:
                  "CmRaAAAAt8hzZnESVJ5FKSDeGzpMMg5B0Xw90K0XiNDJ1WpM1GNsEcMYFNhzxiMGgSEWmZyJBfvmLToocaBoxcd1Q_H0GgxUKbMDQ5rQOjSZUIrMBx2uGI-an5XGE_bKTBaGOLtPEhDe10SdGVDZlcOqwSmDTLPkGhS-EHapHfoquGx0bZKIkGZWxE1zFA",
                width: 562
              }
            ],
            place_id: "ChIJMynigS53hlQR6A4nVHmYIsE",
            plus_code: {
              compound_code: "7X9Q+2Q Burnaby, British Columbia, Canada",
              global_code: "84XR7X9Q+2Q"
            },
            rating: 3.7,
            reference:
              "CmRSAAAAfN77k_KVU6E2N9XFaE8QFkV7eqNp9sgWuK5gWS-YLCUJvbjERxPZDxWTysYZWfxnOWjZ9OJ_bTWdw8Ygv18TzMyF9kVgfptimwdQczOBul-juHKCeZOM6LN7hlT8osGoEhBtrbGXjUpduUUzV-tjE1vMGhTjT-Aiwc4WV-Wq8Lll9U0_zEk1Kg",
            scope: "GOOGLE",
            types: [
              "cafe",
              "bar",
              "store",
              "lodging",
              "restaurant",
              "food",
              "point_of_interest",
              "establishment"
            ],
            vicinity: "4201 Lougheed Highway, Burnaby"
          },
          {
            geometry: {
              location: {
                lat: 49.27559369999999,
                lng: -123.1209341
              },
              viewport: {
                northeast: {
                  lat: 49.2768671302915,
                  lng: -123.1194722697085
                },
                southwest: {
                  lat: 49.2741691697085,
                  lng: -123.1221702302915
                }
              }
            },
            icon:
              "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
            id: "8539698016c27f7a1ef96e64e344b5bf61106450",
            name: "Yaletown Brewing Company",
            opening_hours: {
              open_now: false
            },
            photos: [
              {
                height: 2048,
                html_attributions: [
                  '<a href="https://maps.google.com/maps/contrib/112771893618789559970/photos">Yaletown Brewing Company</a>'
                ],
                photo_reference:
                  "CmRaAAAAUNEGWzOFcm6ESZ8VSIHOI2VfBx6L2JVOZFGzUnaVBifpk7LGi8Iq9jmfRctd8KaoJZy9mKLptoSxs9t7pspZdE63xe5Uo5fwUpBC6fWnNH0kdT2PJeLkTAH4hNBPVeOnEhBrHPncCkRzrgwHYkWokzqsGhSfYS1MZ-0u7VFM1bEkwsmxMc68qQ",
                width: 1365
              }
            ],
            place_id: "ChIJefmz9dZzhlQRCnVoCGiuGYs",
            plus_code: {
              compound_code: "7VGH+6J Vancouver, British Columbia, Canada",
              global_code: "84XR7VGH+6J"
            },
            rating: 3.9,
            reference:
              "CmRSAAAAQmYHaejpwIISRGhY7A60nCBN8QX8wszLVaRwHFq9FC--7foGU7OCOza0psm7JZCCSUUVKsS9i6pT2EfB8Co8LIrdqSLdCbxraPgTXRCV9PfONWKYB5kVBID-cRvHorCjEhAB55HXRzlL00-vzYn91EAzGhSiNKgpK-ndfN4qdK4DYPLORgUpQg",
            scope: "GOOGLE",
            types: [
              "bar",
              "restaurant",
              "food",
              "point_of_interest",
              "establishment"
            ],
            vicinity: "1111 Mainland Street, Vancouver"
          },
          {
            geometry: {
              location: {
                lat: 49.2811175,
                lng: -123.1206438
              },
              viewport: {
                northeast: {
                  lat: 49.2823946802915,
                  lng: -123.1191815197085
                },
                southwest: {
                  lat: 49.2796967197085,
                  lng: -123.1218794802915
                }
              }
            },
            icon:
              "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            id: "410be9c6556f542571f397130308cb51f0b91f1f",
            name: "ShuRaku Sake Bar + Bistro",
            opening_hours: {
              open_now: false
            },
            photos: [
              {
                height: 2988,
                html_attributions: [
                  '<a href="https://maps.google.com/maps/contrib/113515779922194981707/photos">Steve Kim</a>'
                ],
                photo_reference:
                  "CmRaAAAAqp5Z2CPtNxAAiKrgltc68UauBvSMPWS5rg7vf6j4gkPtYWHtrEol2LSKxQVxs_9vOMD_GDfcJARxKY5D71v8qOqFO6-KAYifyQiEe9mIyGt6nIaSqCK3So6eC8gvWL1UEhChBGkwSHKo5MT6BHlm5BW5GhQIdNXqsC75_1Om-azCcTpjlZ1-0g",
                width: 5312
              }
            ],
            place_id: "ChIJCTX3tn9xhlQR241iBtqOncw",
            plus_code: {
              compound_code: "7VJH+CP Vancouver, British Columbia, Canada",
              global_code: "84XR7VJH+CP"
            },
            rating: 4,
            reference:
              "CmRSAAAALg4G4rfezwc5zXdrCVv6S5X3Xe1bZGlkHq9t486YV4vyltBhJtkbt6eGEMPHsqchEgb5lfGrgcXw2Om47Hb32CGa8uECkNF8Aty2N2sS3tUOyN77XHgV8RzUve_i2vV8EhAwE1pjWwhodu8NQ5zi7vnRGhRBoWcMBw6vVYqIHcuV0Dt3e1LZBg",
            scope: "GOOGLE",
            types: ["restaurant", "food", "point_of_interest", "establishment"],
            vicinity: "833 Granville Street, Vancouver"
          },
          {
            geometry: {
              location: {
                lat: 49.27782799999999,
                lng: -123.125463
              },
              viewport: {
                northeast: {
                  lat: 49.2791267802915,
                  lng: -123.1240357697085
                },
                southwest: {
                  lat: 49.2764288197085,
                  lng: -123.1267337302915
                }
              }
            },
            icon:
              "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            id: "c9ff30d2d655cf6865d1be52b11f98543173e5e0",
            name: "Twisted Fork Bistro",
            opening_hours: {
              open_now: false
            },
            photos: [
              {
                height: 3036,
                html_attributions: [
                  '<a href="https://maps.google.com/maps/contrib/109036222534061197639/photos">Rodger Lo</a>'
                ],
                photo_reference:
                  "CmRaAAAAbNjNAZdKXH5iHCfenm917YgtCCqiySgIiTkaOODGFIeb-xgTl0CslMc-hyphPRgk4fHHcfGVZ7ohl211dIwvvUidO9KBHvXAsEAUwAj9qge7Tn7ikwXN5FS3YrlnMa-pEhClNlGRYxRO5ywcs7Ta7hS8GhSdiX3ZTH31GaOx0D-OmcMcQVrYQA",
                width: 4048
              }
            ],
            place_id: "ChIJM4XXRdRzhlQRU5tJVe7D8xY",
            plus_code: {
              compound_code: "7VHF+4R Vancouver, British Columbia, Canada",
              global_code: "84XR7VHF+4R"
            },
            rating: 4.3,
            reference:
              "CmRRAAAABIyOcuxKeTOhPY1EgzR0vthzNtkVtpr-JaQt3B8-x_pq1yjRpo1BG1ktS2hTQkQjYHde1Y4_osv8j3i2MYAz7idBghgq7nh2zTy4u7tr5wbngbOKCwHg5X2AvR1ruCPBEhA2tvYd2vzJBYH7RaQm7zvFGhSTbJLLem-4r9G20GY0AErizYcirg",
            scope: "GOOGLE",
            types: ["restaurant", "food", "point_of_interest", "establishment"],
            vicinity: "1147 Granville Street, Vancouver"
          },
          {
            geometry: {
              location: {
                lat: 49.28085369999999,
                lng: -123.1172788
              },
              viewport: {
                northeast: {
                  lat: 49.2821095302915,
                  lng: -123.1157844197085
                },
                southwest: {
                  lat: 49.2794115697085,
                  lng: -123.1184823802915
                }
              }
            },
            icon:
              "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            id: "26461be01c62a494ea14988abf40742d23f83043",
            name: "Kingston Taphouse & Grille",
            opening_hours: {
              open_now: false
            },
            photos: [
              {
                height: 2988,
                html_attributions: [
                  '<a href="https://maps.google.com/maps/contrib/109429521148910577521/photos">Par</a>'
                ],
                photo_reference:
                  "CmRaAAAAyJJSq5xIwVF1OMPrtlf8eOwM4w4Yx-6KqTFAbgrbaR5eQFH5avAmNtbKI1pvAmhg9WsmUpCNZ9Jii7hMbNpVYE9HVjIGM1vAGBKbG7xLEC0GKbB_dQbEMPZa1-ID5E00EhD9hYG528crNppnQkUoZ92SGhQDK8eRMiw7r1BpOrtWOlISatrILg",
                width: 5312
              }
            ],
            place_id: "ChIJ8b3N8H5xhlQReEClTNTtCAI",
            plus_code: {
              compound_code: "7VJM+83 Vancouver, British Columbia, Canada",
              global_code: "84XR7VJM+83"
            },
            price_level: 2,
            rating: 3.8,
            reference:
              "CmRRAAAAkrHiIM3N5Mwj95jCKdTe_TFKu04Im30mZX4beaAcwHjNsZXdpMs13JANuuh3HEvVVeCn2PszjVFo_98jG_5FCIvQEHsYCBWG4vfPxxaSK23Ubln94tgT8zoxBBOICdYLEhBQ0rJhjCLgTUo7ngLO4PWKGhTsnkj95XvayVcNtCtwZF7k_7AQBg",
            scope: "GOOGLE",
            types: [
              "bar",
              "restaurant",
              "food",
              "point_of_interest",
              "establishment"
            ],
            vicinity: "755 Richards Street, Vancouver"
          },
          {
            geometry: {
              location: {
                lat: 49.2805145,
                lng: -123.1168509
              },
              viewport: {
                northeast: {
                  lat: 49.28192338029149,
                  lng: -123.1155954197085
                },
                southwest: {
                  lat: 49.27922541970849,
                  lng: -123.1182933802915
                }
              }
            },
            icon:
              "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            id: "fe006b31cce416f15b1abe0aa5d59079c0f04ba9",
            name: "Medina",
            opening_hours: {
              open_now: false
            },
            photos: [
              {
                height: 3566,
                html_attributions: [
                  '<a href="https://maps.google.com/maps/contrib/103782386894984234594/photos">Ewa Zawitkowska</a>'
                ],
                photo_reference:
                  "CmRaAAAAThjj7rAFuyZz7gF3ZJnSQlVVZGswnPMoUW0T6_DAhcGJoOmqTOcoBNIXaaK6ALkQGWZSNSHw2bbQfZVcKecJvExwlkJYjlv7gF7rWpisJh5Dcj_PWJGp0R6L7OH7tvorEhAq1AnPQHzgcymQv9LhyuLcGhQbtbqzqkHD_xM2PaWWd1CT6YtYsw",
                width: 5349
              }
            ],
            place_id: "ChIJEa8g6HtxhlQRa_lcrLrlVQw",
            plus_code: {
              compound_code: "7VJM+67 Vancouver, British Columbia, Canada",
              global_code: "84XR7VJM+67"
            },
            price_level: 2,
            rating: 4.4,
            reference:
              "CmRRAAAAu-2Dev8LJlH5fkdl9M22SVykDAIQwaW_52ZzKDJW87FLgBVGUV2Y_qgcmolLwPTpl16keklMfvrSpIj4xsfJHjnr69qahYTI2l0ek0BJ-kd4diSulBLIPl14W9AHPB9ZEhBBxZjmJsPl-KIMMO0wVoP3GhRF0nma-KKtqSCOna99CnknHV5X0Q",
            scope: "GOOGLE",
            types: ["restaurant", "food", "point_of_interest", "establishment"],
            vicinity: "780 Richards Street, Vancouver"
          },
          {
            geometry: {
              location: {
                lat: 49.2643832,
                lng: -123.1727227
              },
              viewport: {
                northeast: {
                  lat: 49.2656250302915,
                  lng: -123.1713795197085
                },
                southwest: {
                  lat: 49.2629270697085,
                  lng: -123.1740774802915
                }
              }
            },
            icon:
              "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            id: "9b20f25a7f5f7ffca262d21c14ea97a222e3427f",
            name: "East Is East",
            opening_hours: {
              open_now: false
            },
            photos: [
              {
                height: 3024,
                html_attributions: [
                  '<a href="https://maps.google.com/maps/contrib/109922240171229086951/photos">Madhavan Sridhar</a>'
                ],
                photo_reference:
                  "CmRaAAAA_yAL2IrYJEpR1sKniRVYK1XX1XEBu27iAThBYyD8O6DUCr9M1X6YCfM4JbsRWjOC0nBaj2gBPGSNKbwnENLvIRaI7Zvj2IbTPeN-91rYqjnybbREjeXEje0KhmXpjGAzEhBh3p1S-6TZ-VW2Py_PXaDqGhSEEYrMs5Ghc6I_z6fW8b_1mvNvEw",
                width: 4032
              }
            ],
            place_id: "ChIJD64_2KpzhlQRZ4c_BsxnnUo",
            plus_code: {
              compound_code: "7R7G+QW Vancouver, British Columbia, Canada",
              global_code: "84XR7R7G+QW"
            },
            rating: 4.4,
            reference:
              "CmRRAAAACPTIm2yWr6ODQydKFGkRajKUHCsvz1WIxlEJot05g7gXGERQVNFdlZSYswr_I4g42cIDxg3mhZTaRkqx2-7P0iXD-OrVzuGJIPlSqTlZvfLkRoCy_J4UEcH93OdBK9WGEhDlyVpE-oMdkNxXkDHDcbr7GhTbQuEDlwmaZuT7FXOsAtqmBE4IdQ",
            scope: "GOOGLE",
            types: ["restaurant", "food", "point_of_interest", "establishment"],
            vicinity: "3035 West Broadway, Vancouver"
          },
          {
            geometry: {
              location: {
                lat: 49.2853923,
                lng: -123.1114258
              },
              viewport: {
                northeast: {
                  lat: 49.2866540802915,
                  lng: -123.1102127197085
                },
                southwest: {
                  lat: 49.28395611970851,
                  lng: -123.1129106802915
                }
              }
            },
            icon:
              "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            id: "c4868441c80ff7beedfd14935f87f77d16d0c268",
            name: "Rogue Kitchen & Wetbar",
            opening_hours: {
              open_now: false
            },
            photos: [
              {
                height: 1260,
                html_attributions: [
                  '<a href="https://maps.google.com/maps/contrib/112778087570031842623/photos">Rogue Kitchen &amp; Wetbar</a>'
                ],
                photo_reference:
                  "CmRaAAAA_lS0MU5murh_a8-NIeEUhExpCoME3DLQ1VLLBOqxjaWAIJ4oqBCJY_IzQ0HoT4GfcL1u9Ng742S2PXAQ4muhcRtWa9D4EcIIvMSra_d2PHm_avNFsGooPfrhPPCApm4QEhBtryYYHG3go6Q7dDf5kYTJGhTlll6riNOgv0lVpYM5GT31NAoW1g",
                width: 1890
              }
            ],
            place_id: "ChIJIft1c3hxhlQR8Nk5KKui3cM",
            plus_code: {
              compound_code: "7VPQ+5C Vancouver, British Columbia, Canada",
              global_code: "84XR7VPQ+5C"
            },
            rating: 3.8,
            reference:
              "CmRSAAAAWaaOu5sQOsXW_Ujg2y6lZ6-lmI-UsT_zq4r5JjAOvLboPaXMyiij_7nwqD6ihSk0YCf8JjZ-ycDIbTuK7iC8ThbMzJ0sarM7C2ScOyC2cWYRpMn_ZH3xciVhkVtN5xYpEhDHIpr5P_Fq61Dany0FcdVYGhSIrLZorIPiid1NSNfkZqCiB8c12A",
            scope: "GOOGLE",
            types: [
              "restaurant",
              "bar",
              "food",
              "point_of_interest",
              "establishment"
            ],
            vicinity: "601 West Cordova Street, Vancouver"
          },
          {
            geometry: {
              location: {
                lat: 49.283328,
                lng: -123.1043645
              },
              viewport: {
                northeast: {
                  lat: 49.2846347302915,
                  lng: -123.1029315697085
                },
                southwest: {
                  lat: 49.2819367697085,
                  lng: -123.1056295302915
                }
              }
            },
            icon:
              "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
            id: "5e4c6ff236d7fefb147403d70c9a24989e1cf1b4",
            name: "Six Acres",
            opening_hours: {
              open_now: false
            },
            photos: [
              {
                height: 3024,
                html_attributions: [
                  '<a href="https://maps.google.com/maps/contrib/109124500510284889906/photos">David M</a>'
                ],
                photo_reference:
                  "CmRaAAAAD4FAL_m8JYID5IcUOlpmHu7_gDFuBvqdAU1JaGss5msTOu3pJKpequjxD0pwgD_3g9VbiANYrdNV8Akgd9osTlv5oyaO93ZJ07vKo29bCterySva-lJTkdokniIztHb7EhBYIfkXAYr5HGXQ9uczdDnSGhTuRXjWcQbfT6DUt-SPFMYedqASUg",
                width: 4032
              }
            ],
            place_id: "ChIJTRHlTndxhlQRNl_jlsUsokI",
            plus_code: {
              compound_code: "7VMW+87 Vancouver, British Columbia, Canada",
              global_code: "84XR7VMW+87"
            },
            rating: 4.4,
            reference:
              "CmRRAAAA0Nn6fPhGK1Id5yv532Ww5ZmICGLDa_F8Cmjpjm91HDG6Y_01Mb0LPdsVMhqLmoygw4yQUC3FkSaqqqNG-7pNdmo-WJHdG8ib2P2WsmAltQw1Dg7pLL0r25VD6MHMV8IcEhAi2r8ljWj_VQA4j10ni3MoGhQf3b4yOznlAB0zu3yj7XrjPNUbig",
            scope: "GOOGLE",
            types: [
              "bar",
              "restaurant",
              "food",
              "point_of_interest",
              "establishment"
            ],
            vicinity: "203 Carrall Street, Vancouver"
          },
          {
            geometry: {
              location: {
                lat: 49.279067,
                lng: -123.123055
              },
              viewport: {
                northeast: {
                  lat: 49.2804730802915,
                  lng: -123.1216175697085
                },
                southwest: {
                  lat: 49.2777751197085,
                  lng: -123.1243155302915
                }
              }
            },
            icon:
              "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            id: "b437d59689387d24dc72cf1d11a179c09b902c59",
            name: "Doolin's Irish Pub",
            opening_hours: {
              open_now: true
            },
            photos: [
              {
                height: 2592,
                html_attributions: [
                  '<a href="https://maps.google.com/maps/contrib/106508646350664201126/photos">Doolin&#39;s Irish Pub</a>'
                ],
                photo_reference:
                  "CmRZAAAAj8BQ0KPwDc5rus9YyZxzrtbApupuxzCgsFrvKV6TnxhVLu4MnZDt4_NdO6ok9EX7nKeEDs1jLxzXMAtNaOpQvmObSbUjXXLKJ0b73kc2yrkc05ra9oSYTCTQbGwcRnA9EhADKp_nQhy67IcF9xkDwFtzGhRdF-RVPJDo1U-TLgJWJXuyG5og5w",
                width: 3872
              }
            ],
            place_id: "ChIJp9NSltVzhlQRSSs9KIoNUcU",
            plus_code: {
              compound_code: "7VHG+JQ Vancouver, British Columbia, Canada",
              global_code: "84XR7VHG+JQ"
            },
            price_level: 2,
            rating: 4.1,
            reference:
              "CmRSAAAAQWEyONkUzjwTXgtrVLO_igIhcfYkghjJyIjX_r7Fn5VRgbvvf3TNPYhTtBWQ-ohISG2K_Br5GEBni1UZi460GobC7gqGY6qNa-EVuJJEiM4ec2Sr_pDkRxg73qQt-m2DEhA0l6PUdACtfV8PEQ7naMTcGhSEGpOHAyvgQUeh0H8GT56ggkCiOg",
            scope: "GOOGLE",
            types: [
              "bar",
              "restaurant",
              "food",
              "point_of_interest",
              "establishment"
            ],
            vicinity: "654 Nelson Street, Vancouver"
          },
          {
            geometry: {
              location: {
                lat: 49.28191969999999,
                lng: -123.1060432
              },
              viewport: {
                northeast: {
                  lat: 49.2832117802915,
                  lng: -123.1047179697085
                },
                southwest: {
                  lat: 49.2805138197085,
                  lng: -123.1074159302915
                }
              }
            },
            icon:
              "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            id: "caa6c563096a558df42ce3bd0419dd9d440a6c27",
            name: "Save On Meats",
            opening_hours: {
              open_now: false
            },
            photos: [
              {
                height: 3155,
                html_attributions: [
                  '<a href="https://maps.google.com/maps/contrib/102611281333512364123/photos">Save On Meats</a>'
                ],
                photo_reference:
                  "CmRaAAAA2abMrrcs8nEsEK9wGT7DFFsafgrRLqo72gvLbdiwClyuGAdTn2MVoiS0GhbZDeyqAnRN3Qk2mL27RziMlwcpZX51pxqIrFChJ98K427h-7-TWVFtAuv7fSyDsku6peh_EhCCj8gKI0Jor8quvgpMeDF6GhRm3YlRimDxiTsJIZpnuzq2CLRhTQ",
                width: 5048
              }
            ],
            place_id: "ChIJWyf7G3pxhlQRlpDKtbHg20M",
            plus_code: {
              compound_code: "7VJV+QH Vancouver, British Columbia, Canada",
              global_code: "84XR7VJV+QH"
            },
            rating: 4.3,
            reference:
              "CmRRAAAAjKimhAmF7Qh2ubY5NQ3QDYRr9gdbqLBX-_M6vi3uYoBEmwvoC9dDEw9nzgXsh-Y7k4LkCJhlq5oflglTt0v7pyrErHmYow9Rln3Vqsc02627j5HT8EbgNKw97zU-rVGEEhBwDaKBg8ULfS2jGOnsQTIOGhRR5zP5dQ-30prb9BC2Od2VyaaZLQ",
            scope: "GOOGLE",
            types: ["restaurant", "food", "point_of_interest", "establishment"],
            vicinity: "43 West Hastings Street, Vancouver"
          },
          {
            geometry: {
              location: {
                lat: 49.284031,
                lng: -123.114136
              },
              viewport: {
                northeast: {
                  lat: 49.2854228802915,
                  lng: -123.1127206697085
                },
                southwest: {
                  lat: 49.2827249197085,
                  lng: -123.1154186302915
                }
              }
            },
            icon:
              "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
            id: "e28d91f17994f8e141f79f2a3ec748a62dcc67d6",
            name: "Malone's Social Lounge & Taphouse",
            opening_hours: {
              open_now: false
            },
            photos: [
              {
                height: 996,
                html_attributions: [
                  '<a href="https://maps.google.com/maps/contrib/112472576124221743864/photos">Malone&#39;s Social Lounge &amp; Taphouse</a>'
                ],
                photo_reference:
                  "CmRaAAAA7oP40VcYdF2WWX-Lq4M4H_DQhl7EVTj3GDe6bh6RNIvi4mrJBlYiS_7v5_wh5X22HfqtsXSV67NOHtNnjlgzpph7fF-Iv5Mfg4kckqRW3cr6H2Eg_jxRTiEAZCzHDo5wEhAZrnCBNHOlW9nnjAyeUkerGhTaR1RdhgFrgPtpEtBLQPRPcsQSYQ",
                width: 1500
              }
            ],
            place_id: "ChIJ78Kt7HhxhlQRC9LwX4-Fw98",
            plus_code: {
              compound_code: "7VMP+J8 Vancouver, British Columbia, Canada",
              global_code: "84XR7VMP+J8"
            },
            rating: 3.9,
            reference:
              "CmRSAAAAxWf3a_hq3zBtUmW98mQy0VwUKVnSypyJBqQQjyarHRGWLz1z4EHoSECnPZjegKGNdHUCsh_MrIkXkSpsZLALqjjYKRoC1-ag_q5y6eKiREf5bB978EMzxIFs7EO2Gtl3EhBNaOFHBQEYpmdSE4FH0R4MGhRi_7GohJeHd_TNn0LGYexXbmOOIA",
            scope: "GOOGLE",
            types: [
              "bar",
              "restaurant",
              "food",
              "point_of_interest",
              "establishment"
            ],
            vicinity: "608 West Pender Street, Vancouver"
          },
          {
            geometry: {
              location: {
                lat: 49.282569,
                lng: -123.123611
              },
              viewport: {
                northeast: {
                  lat: 49.28397208029149,
                  lng: -123.1223393197085
                },
                southwest: {
                  lat: 49.2812741197085,
                  lng: -123.1250372802915
                }
              }
            },
            icon:
              "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            id: "2e50c4129671116b5d8609febf7bbc55a047a8a1",
            name: "Italian Kitchen",
            opening_hours: {
              open_now: false
            },
            photos: [
              {
                height: 2048,
                html_attributions: [
                  '<a href="https://maps.google.com/maps/contrib/116209568477141677501/photos">Italian Kitchen</a>'
                ],
                photo_reference:
                  "CmRaAAAAhSZ2sQD4VAMqWqTqgmYcPaTdBy4RkNqmZPqvIM4-_E61QqRo-hWQGR0f5LgWFoMP8YRJFVMDCR3qYiBvkUPhRKo5ZMWru8zUUQrFU6OP8oM1qzXUtxL0Fh33mL7eYwAKEhDkl7nlnibrAfFrRoyhOCfZGhQ0_CEBDOJSNp-FpatW5KMzz6f83A",
                width: 1371
              }
            ],
            place_id: "ChIJxRdotIFxhlQRY7DFe7zRkho",
            plus_code: {
              compound_code: "7VMG+2H Vancouver, British Columbia, Canada",
              global_code: "84XR7VMG+2H"
            },
            price_level: 2,
            rating: 4,
            reference:
              "CmRRAAAAKFufJYWyr4slqY_HerSBweOato8xWohQbJS_mcIJK6SI-1OBhxA5PQpL6QuRuv9HwJo11AjWy--KoR2StBQ7L5gKxEEMZDrsMOMHhmb1_e7mc50iTO4xwEoBF64qhEdLEhAYoCfJRf_t2lv6sz5_-2iPGhRHkos0RKZHlkVMhmn93Ugj5LtZIQ",
            scope: "GOOGLE",
            types: ["restaurant", "food", "point_of_interest", "establishment"],
            vicinity: "860 Burrard Street, Vancouver"
          },
          {
            geometry: {
              location: {
                lat: 49.2857603,
                lng: -123.1154001
              },
              viewport: {
                northeast: {
                  lat: 49.28706813029149,
                  lng: -123.1139872197085
                },
                southwest: {
                  lat: 49.2843701697085,
                  lng: -123.1166851802915
                }
              }
            },
            icon:
              "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            id: "2c38a122144671ecacc254abbcee8852677e5d7d",
            name: "Scoozis Bar & Grill",
            opening_hours: {
              open_now: false
            },
            photos: [
              {
                height: 2988,
                html_attributions: [
                  '<a href="https://maps.google.com/maps/contrib/112596384379870189448/photos">Hank Wookie</a>'
                ],
                photo_reference:
                  "CmRaAAAA9QznHbirnzZv-wOyRHtj-KlQJxGGOAkKJvD-tXeulWJPCUrsU2nZyxfMy-7e-oVnis7kFczOMe62mJP2SqICjRMGEV5VMgfV1aWVP2GtI5uaTsGbGrUCmIT_hRW2LptREhCgduoB3MO9effeY5TqEJxSGhQfqb0ak444r7Azi2haONNuX3Zg_g",
                width: 5312
              }
            ],
            place_id: "ChIJlahJZYJxhlQRK8Iea94H9Yg",
            plus_code: {
              compound_code: "7VPM+8R Vancouver, British Columbia, Canada",
              global_code: "84XR7VPM+8R"
            },
            rating: 4.3,
            reference:
              "CmRSAAAAv7nyJ2Rk9E-34qi7sw7s7h7jE9hAZdTI1iXK6T594ooaD_Uh9iOWjmpVvS2QTkU____rYxztl45L7Ka6yjWIGfa65qQ4VbNB58T_nenmEDv7ofa9OptCYmyb7T0-ilaDEhCWQmmFtGI5L4XfW6lAEJtrGhSoiEww5PDHvvcaNMVR6mOZ8Bn8lg",
            scope: "GOOGLE",
            types: [
              "bar",
              "restaurant",
              "food",
              "point_of_interest",
              "establishment"
            ],
            vicinity: "445 Howe Street, Vancouver"
          },
          {
            geometry: {
              location: {
                lat: 49.2734835,
                lng: -123.1192249
              },
              viewport: {
                northeast: {
                  lat: 49.2747710302915,
                  lng: -123.1178297697085
                },
                southwest: {
                  lat: 49.2720730697085,
                  lng: -123.1205277302915
                }
              }
            },
            icon:
              "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            id: "c8943afec9a41526e96210d0ceac1f7493aa0815",
            name: "Hurricane Grill",
            opening_hours: {
              open_now: false
            },
            photos: [
              {
                height: 3888,
                html_attributions: [
                  '<a href="https://maps.google.com/maps/contrib/112410712795093701289/photos">Moore He</a>'
                ],
                photo_reference:
                  "CmRaAAAAaN48P954XYjdaCRJwmJu5fn0ark6-sPg6z1h5o0hG_dLKGzN2KyeO1YfEWTOm0OtYhfvW3lizWTJi2IGs4FoEYzi6_U8B2YLTkV-_DrJ1lb-R8oMSCS8C3hhELyI3VMKEhC0YuQx7VtxSjE-iyE_cgq6GhQ2I2ko_hhQ1YVnVy9PVVEbFAlFuw",
                width: 5152
              }
            ],
            place_id: "ChIJA8slctdzhlQRljpBjZUslOc",
            plus_code: {
              compound_code: "7VFJ+98 Vancouver, British Columbia, Canada",
              global_code: "84XR7VFJ+98"
            },
            rating: 3.8,
            reference:
              "CmRSAAAAxqEiQmN_XHR6IMrZdxxtkHCCMQ8aDcjpsuvrpAonLDnUCdlxRUd31F5YhKDd4TVEB3N2wJHUsmR16SJoPy51ejUgQXFImlMFte3uQLvRull-GoAtw-Q3-8boC66OU3ovEhA5fTwZJ6h1dLVjsnh6clzQGhQDbdb0RNtVLmHMJKsG8UqQ54GG8A",
            scope: "GOOGLE",
            types: [
              "meal_delivery",
              "bar",
              "restaurant",
              "food",
              "point_of_interest",
              "establishment"
            ],
            vicinity: "1137 Marinaside Crescent, Vancouver"
          },
          {
            geometry: {
              location: {
                lat: 49.2827427,
                lng: -123.109641
              },
              viewport: {
                northeast: {
                  lat: 49.2840502302915,
                  lng: -123.1083532197085
                },
                southwest: {
                  lat: 49.2813522697085,
                  lng: -123.1110511802915
                }
              }
            },
            icon:
              "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            id: "9c6a6a79dc648504595b7295f06a97d2f54dee2d",
            name: "Nuba in Gastown",
            opening_hours: {
              open_now: false
            },
            photos: [
              {
                height: 2048,
                html_attributions: [
                  '<a href="https://maps.google.com/maps/contrib/105914530295787179136/photos">Nuba in Gastown</a>'
                ],
                photo_reference:
                  "CmRaAAAAwxMuWgQOyTjTc9nw-BjGRZNIo4sD2Jpz__QvaWkH9OPsndPU-PZMYhT2nx8UAPbnr5LfEA9qONQquQ4W8YnzW7xlXMwtBpnmaX0NqYkL25-xgG_A4LKtpYo5EhHxMKcIEhB2Ob622NkBvWML1nFdvh9_GhTDHsovekgFPFXfncstoWhQ6TRzFg",
                width: 2048
              }
            ],
            place_id: "ChIJ9aoKpHlxhlQRAH-J_yYq6Oc",
            plus_code: {
              compound_code: "7VMR+34 Vancouver, British Columbia, Canada",
              global_code: "84XR7VMR+34"
            },
            price_level: 2,
            rating: 4.3,
            reference:
              "CmRSAAAAo2HD7CiR8zninvGEmysyCpsfOm5HJ1uKYmIep_D1okFBqcEZpJf9jngWWGwDKfl6yELRRxKaZ6h58TCXVGmzKDuzB01j_tykdDSMyZOjLhUBljLtWd25cTNkNYvBknzYEhA7ez0E5s5zOkYdx3sVhf1SGhRstuDOXs4TZpExiOJvydrJVnVc3Q",
            scope: "GOOGLE",
            types: [
              "bar",
              "restaurant",
              "food",
              "point_of_interest",
              "establishment"
            ],
            vicinity: "207 West Hastings Street, Vancouver"
          },
          {
            geometry: {
              location: {
                lat: 49.2454071,
                lng: -123.1014972
              },
              viewport: {
                northeast: {
                  lat: 49.24675353029151,
                  lng: -123.1000256197085
                },
                southwest: {
                  lat: 49.24405556970851,
                  lng: -123.1027235802915
                }
              }
            },
            icon:
              "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            id: "aaaad65634629040330b718a650433c49c1e0a0e",
            name: "East is East",
            opening_hours: {
              open_now: false
            },
            photos: [
              {
                height: 3024,
                html_attributions: [
                  '<a href="https://maps.google.com/maps/contrib/108156159964222298042/photos">hyamayuuu</a>'
                ],
                photo_reference:
                  "CmRaAAAAJoFkvE9WxEdFEPeeVKoktMOhb8_cEEtbm4S2sbbQSD7JALs_Qkt60KxqPn14EPz6W58fFNIQXO47mHICwDmP9wTxYUk5qi1WYA6KC8S4ikqMd9CqJD_OLgc3zVI2xoyMEhAWFvlbn8pml5KI0qeORBR7GhQbNHD0LX8kaxfnTWiT4JwY_2-kbg",
                width: 4032
              }
            ],
            place_id: "ChIJV1fttPdzhlQRTvWMaI4H8UQ",
            plus_code: {
              compound_code: "6VWX+5C Vancouver, British Columbia, Canada",
              global_code: "84XR6VWX+5C"
            },
            rating: 4.3,
            reference:
              "CmRRAAAABU4Ldha2HzBebyC4RXe_wYtEXB4zlOEzfrQaAvUEmweML0Be1hwdtDpJyHJxt9qC91nKog-vkP6MDaOMqr-7KK0DTSyAxdNSvKeizL-4n-GR_QihTrTTOojD7Ys1YKT2EhA4amQkgKQK0mrY3Mjf3TbQGhRQV6LFL_DkKCuj3ZXgqD2s7OVd9Q",
            scope: "GOOGLE",
            types: ["restaurant", "food", "point_of_interest", "establishment"],
            vicinity: "4433 Main Street, Vancouver"
          }
        ],
        status: "OK"
      };
    } catch (error) {
      throw new Error(error);
    }
  },
  async getNextRests(pageToken) {
    try {
      await delay(2000);
      return await postData(`${url}/next`, pageToken);
    } catch (error) {
      throw new Error(error);
    }
  },
  async getSchedule(placeId, filters) {
    try {
      return await postData(`${url}/schedule`, {
        placeId,
        filters
      });
    } catch (error) {
      throw new Error(error);
    }
  },
  async getDetail(placeId, filters) {
    try {
      return await postData(`${url}/detail`, {
        placeId,
        filters
      });
    } catch (error) {
      throw new Error(error);
    }
  },
  async getPhoto(photoId, maxWidth) {
    try {
      return await postData(`${url}/photo`, {
        photoId,
        maxWidth
      });
    } catch (error) {
      throw new Error(error);
    }
  }
};
