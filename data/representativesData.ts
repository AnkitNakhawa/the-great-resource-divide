export interface Representative {
  name: string;
  position: string;
  party: string;
  phone?: string;
  email?: string;
  website: string;
}

export interface StateRepresentatives {
  state: string;
  senators: Representative[];
  representatives: Representative[];
}

// Sample data structure - In a real application, this would be populated via API
export const stateRepresentatives: StateRepresentatives[] = [
  {
    state: "Alabama",
    senators: [
      {
        name: "Katie Britt",
        position: "U.S. Senator",
        party: "Republican",
        phone: "(202) 224-4124",
        website: "https://www.britt.senate.gov"
      },
      {
        name: "Tommy Tuberville",
        position: "U.S. Senator",
        party: "Republican",
        phone: "(202) 224-4124",
        website: "https://www.tuberville.senate.gov"
      }
    ],
    representatives: [
      {
        name: "Contact your local representative",
        position: "U.S. Representative",
        party: "Varies by district",
        website: "https://www.house.gov/representatives/find-your-representative"
      }
    ]
  },
  {
    state: "Alaska",
    senators: [
      {
        name: "Lisa Murkowski",
        position: "U.S. Senator",
        party: "Republican",
        phone: "(202) 224-6665",
        website: "https://www.murkowski.senate.gov"
      },
      {
        name: "Dan Sullivan",
        position: "U.S. Senator",
        party: "Republican",
        phone: "(202) 224-3004",
        website: "https://www.sullivan.senate.gov"
      }
    ],
    representatives: [
      {
        name: "Mary Peltola",
        position: "U.S. Representative",
        party: "Democratic",
        phone: "(202) 225-5765",
        website: "https://peltola.house.gov"
      }
    ]
  },
  {
    state: "Arizona",
    senators: [
      {
        name: "Mark Kelly",
        position: "U.S. Senator",
        party: "Democratic",
        phone: "(202) 224-2235",
        website: "https://www.kelly.senate.gov"
      },
      {
        name: "Ruben Gallego",
        position: "U.S. Senator",
        party: "Democratic",
        phone: "(202) 224-4521",
        website: "https://www.gallego.senate.gov"
      }
    ],
    representatives: [
      {
        name: "Contact your local representative",
        position: "U.S. Representative",
        party: "Varies by district",
        website: "https://www.house.gov/representatives/find-your-representative"
      }
    ]
  },
  {
    state: "Arkansas",
    senators: [
      {
        name: "John Boozman",
        position: "U.S. Senator",
        party: "Republican",
        phone: "(202) 224-4843",
        website: "https://www.boozman.senate.gov"
      },
      {
        name: "Tom Cotton",
        position: "U.S. Senator",
        party: "Republican",
        phone: "(202) 224-2353",
        website: "https://www.cotton.senate.gov"
      }
    ],
    representatives: [
      {
        name: "Contact your local representative",
        position: "U.S. Representative",
        party: "Varies by district",
        website: "https://www.house.gov/representatives/find-your-representative"
      }
    ]
  },
  {
    state: "California",
    senators: [
      {
        name: "Alex Padilla",
        position: "U.S. Senator",
        party: "Democratic",
        phone: "(202) 224-3553",
        website: "https://www.padilla.senate.gov"
      },
      {
        name: "Adam Schiff",
        position: "U.S. Senator",
        party: "Democratic",
        phone: "(202) 224-3121",
        website: "https://www.schiff.senate.gov"
      }
    ],
    representatives: [
      {
        name: "Contact your local representative",
        position: "U.S. Representative",
        party: "Varies by district",
        website: "https://www.house.gov/representatives/find-your-representative"
      }
    ]
  },
  {
    state: "Colorado",
    senators: [
      {
        name: "Michael Bennet",
        position: "U.S. Senator",
        party: "Democratic",
        phone: "(202) 224-5852",
        website: "https://www.bennet.senate.gov"
      },
      {
        name: "John Hickenlooper",
        position: "U.S. Senator",
        party: "Democratic",
        phone: "(202) 224-5941",
        website: "https://www.hickenlooper.senate.gov"
      }
    ],
    representatives: [
      {
        name: "Contact your local representative",
        position: "U.S. Representative",
        party: "Varies by district",
        website: "https://www.house.gov/representatives/find-your-representative"
      }
    ]
  },
  {
    state: "Connecticut",
    senators: [
      {
        name: "Richard Blumenthal",
        position: "U.S. Senator",
        party: "Democratic",
        phone: "(202) 224-2823",
        website: "https://www.blumenthal.senate.gov"
      },
      {
        name: "Chris Murphy",
        position: "U.S. Senator",
        party: "Democratic",
        phone: "(202) 224-4041",
        website: "https://www.murphy.senate.gov"
      }
    ],
    representatives: [
      {
        name: "Contact your local representative",
        position: "U.S. Representative",
        party: "Varies by district",
        website: "https://www.house.gov/representatives/find-your-representative"
      }
    ]
  },
  {
    state: "Delaware",
    senators: [
      {
        name: "Tom Carper",
        position: "U.S. Senator",
        party: "Democratic",
        phone: "(202) 224-2441",
        website: "https://www.carper.senate.gov"
      },
      {
        name: "Chris Coons",
        position: "U.S. Senator",
        party: "Democratic",
        phone: "(202) 224-5042",
        website: "https://www.coons.senate.gov"
      }
    ],
    representatives: [
      {
        name: "Lisa Blunt Rochester",
        position: "U.S. Representative",
        party: "Democratic",
        phone: "(202) 225-4165",
        website: "https://bluntrochester.house.gov"
      }
    ]
  },
  {
    state: "Florida",
    senators: [
      {
        name: "Marco Rubio",
        position: "U.S. Senator",
        party: "Republican",
        phone: "(202) 224-3041",
        website: "https://www.rubio.senate.gov"
      },
      {
        name: "Rick Scott",
        position: "U.S. Senator",
        party: "Republican",
        phone: "(202) 224-5274",
        website: "https://www.rickscott.senate.gov"
      }
    ],
    representatives: [
      {
        name: "Contact your local representative",
        position: "U.S. Representative",
        party: "Varies by district",
        website: "https://www.house.gov/representatives/find-your-representative"
      }
    ]
  },
  {
    state: "Georgia",
    senators: [
      {
        name: "Jon Ossoff",
        position: "U.S. Senator",
        party: "Democratic",
        phone: "(202) 224-3521",
        website: "https://www.ossoff.senate.gov"
      },
      {
        name: "Raphael Warnock",
        position: "U.S. Senator",
        party: "Democratic",
        phone: "(202) 224-3643",
        website: "https://www.warnock.senate.gov"
      }
    ],
    representatives: [
      {
        name: "Contact your local representative",
        position: "U.S. Representative",
        party: "Varies by district",
        website: "https://www.house.gov/representatives/find-your-representative"
      }
    ]
  },
  // Adding all 50 states
  {
    state: "Hawaii",
    senators: [
      {
        name: "Mazie Hirono",
        position: "U.S. Senator",
        party: "Democratic",
        phone: "(202) 224-6361",
        website: "https://www.hirono.senate.gov"
      },
      {
        name: "Brian Schatz",
        position: "U.S. Senator",
        party: "Democratic",
        phone: "(202) 224-3934",
        website: "https://www.schatz.senate.gov"
      }
    ],
    representatives: [
      {
        name: "Contact your local representative",
        position: "U.S. Representative",
        party: "Varies by district",
        website: "https://www.house.gov/representatives/find-your-representative"
      }
    ]
  },
  {
    state: "Idaho",
    senators: [
      {
        name: "Mike Crapo",
        position: "U.S. Senator",
        party: "Republican",
        phone: "(202) 224-6142",
        website: "https://www.crapo.senate.gov"
      },
      {
        name: "Jim Risch",
        position: "U.S. Senator",
        party: "Republican",
        phone: "(202) 224-2752",
        website: "https://www.risch.senate.gov"
      }
    ],
    representatives: [
      {
        name: "Contact your local representative",
        position: "U.S. Representative",
        party: "Varies by district",
        website: "https://www.house.gov/representatives/find-your-representative"
      }
    ]
  },
  {
    state: "Illinois",
    senators: [
      {
        name: "Dick Durbin",
        position: "U.S. Senator",
        party: "Democratic",
        phone: "(202) 224-2152",
        website: "https://www.durbin.senate.gov"
      },
      {
        name: "Tammy Duckworth",
        position: "U.S. Senator",
        party: "Democratic",
        phone: "(202) 224-2854",
        website: "https://www.duckworth.senate.gov"
      }
    ],
    representatives: [
      {
        name: "Contact your local representative",
        position: "U.S. Representative",
        party: "Varies by district",
        website: "https://www.house.gov/representatives/find-your-representative"
      }
    ]
  },
  {
    state: "Indiana",
    senators: [
      {
        name: "Mike Braun",
        position: "U.S. Senator",
        party: "Republican",
        phone: "(202) 224-4814",
        website: "https://www.braun.senate.gov"
      },
      {
        name: "Todd Young",
        position: "U.S. Senator",
        party: "Republican",
        phone: "(202) 224-5623",
        website: "https://www.young.senate.gov"
      }
    ],
    representatives: [
      {
        name: "Contact your local representative",
        position: "U.S. Representative",
        party: "Varies by district",
        website: "https://www.house.gov/representatives/find-your-representative"
      }
    ]
  },
  {
    state: "Iowa",
    senators: [
      {
        name: "Chuck Grassley",
        position: "U.S. Senator",
        party: "Republican",
        phone: "(202) 224-3744",
        website: "https://www.grassley.senate.gov"
      },
      {
        name: "Joni Ernst",
        position: "U.S. Senator",
        party: "Republican",
        phone: "(202) 224-3254",
        website: "https://www.ernst.senate.gov"
      }
    ],
    representatives: [
      {
        name: "Contact your local representative",
        position: "U.S. Representative",
        party: "Varies by district",
        website: "https://www.house.gov/representatives/find-your-representative"
      }
    ]
  },
  {
    state: "Kansas",
    senators: [
      {
        name: "Jerry Moran",
        position: "U.S. Senator",
        party: "Republican",
        phone: "(202) 224-6521",
        website: "https://www.moran.senate.gov"
      },
      {
        name: "Roger Marshall",
        position: "U.S. Senator",
        party: "Republican",
        phone: "(202) 224-4774",
        website: "https://www.marshall.senate.gov"
      }
    ],
    representatives: [
      {
        name: "Contact your local representative",
        position: "U.S. Representative",
        party: "Varies by district",
        website: "https://www.house.gov/representatives/find-your-representative"
      }
    ]
  },
  {
    state: "Kentucky",
    senators: [
      {
        name: "Mitch McConnell",
        position: "U.S. Senator",
        party: "Republican",
        phone: "(202) 224-2541",
        website: "https://www.mcconnell.senate.gov"
      },
      {
        name: "Rand Paul",
        position: "U.S. Senator",
        party: "Republican",
        phone: "(202) 224-4343",
        website: "https://www.paul.senate.gov"
      }
    ],
    representatives: [
      {
        name: "Contact your local representative",
        position: "U.S. Representative",
        party: "Varies by district",
        website: "https://www.house.gov/representatives/find-your-representative"
      }
    ]
  },
  {
    state: "Louisiana",
    senators: [
      {
        name: "Bill Cassidy",
        position: "U.S. Senator",
        party: "Republican",
        phone: "(202) 224-5824",
        website: "https://www.cassidy.senate.gov"
      },
      {
        name: "John Kennedy",
        position: "U.S. Senator",
        party: "Republican",
        phone: "(202) 224-4623",
        website: "https://www.kennedy.senate.gov"
      }
    ],
    representatives: [
      {
        name: "Contact your local representative",
        position: "U.S. Representative",
        party: "Varies by district",
        website: "https://www.house.gov/representatives/find-your-representative"
      }
    ]
  },
  {
    state: "Maine",
    senators: [
      {
        name: "Susan Collins",
        position: "U.S. Senator",
        party: "Republican",
        phone: "(202) 224-2523",
        website: "https://www.collins.senate.gov"
      },
      {
        name: "Angus King",
        position: "U.S. Senator",
        party: "Independent",
        phone: "(202) 224-5344",
        website: "https://www.king.senate.gov"
      }
    ],
    representatives: [
      {
        name: "Contact your local representative",
        position: "U.S. Representative",
        party: "Varies by district",
        website: "https://www.house.gov/representatives/find-your-representative"
      }
    ]
  },
  {
    state: "Maryland",
    senators: [
      {
        name: "Ben Cardin",
        position: "U.S. Senator",
        party: "Democratic",
        phone: "(202) 224-4524",
        website: "https://www.cardin.senate.gov"
      },
      {
        name: "Chris Van Hollen",
        position: "U.S. Senator",
        party: "Democratic",
        phone: "(202) 224-4654",
        website: "https://www.vanhollen.senate.gov"
      }
    ],
    representatives: [
      {
        name: "Contact your local representative",
        position: "U.S. Representative",
        party: "Varies by district",
        website: "https://www.house.gov/representatives/find-your-representative"
      }
    ]
  },
  {
    state: "Massachusetts",
    senators: [
      {
        name: "Ed Markey",
        position: "U.S. Senator",
        party: "Democratic",
        phone: "(202) 224-2742",
        website: "https://www.markey.senate.gov"
      },
      {
        name: "Elizabeth Warren",
        position: "U.S. Senator",
        party: "Democratic",
        phone: "(202) 224-4543",
        website: "https://www.warren.senate.gov"
      }
    ],
    representatives: [
      {
        name: "Contact your local representative",
        position: "U.S. Representative",
        party: "Varies by district",
        website: "https://www.house.gov/representatives/find-your-representative"
      }
    ]
  },
  {
    state: "Michigan",
    senators: [
      {
        name: "Gary Peters",
        position: "U.S. Senator",
        party: "Democratic",
        phone: "(202) 224-6221",
        website: "https://www.peters.senate.gov"
      },
      {
        name: "Elissa Slotkin",
        position: "U.S. Senator",
        party: "Democratic",
        phone: "(202) 224-4822",
        website: "https://www.slotkin.senate.gov"
      }
    ],
    representatives: [
      {
        name: "Contact your local representative",
        position: "U.S. Representative",
        party: "Varies by district",
        website: "https://www.house.gov/representatives/find-your-representative"
      }
    ]
  },
  {
    state: "Minnesota",
    senators: [
      {
        name: "Amy Klobuchar",
        position: "U.S. Senator",
        party: "Democratic",
        phone: "(202) 224-3244",
        website: "https://www.klobuchar.senate.gov"
      },
      {
        name: "Tina Smith",
        position: "U.S. Senator",
        party: "Democratic",
        phone: "(202) 224-5641",
        website: "https://www.smith.senate.gov"
      }
    ],
    representatives: [
      {
        name: "Contact your local representative",
        position: "U.S. Representative",
        party: "Varies by district",
        website: "https://www.house.gov/representatives/find-your-representative"
      }
    ]
  },
  {
    state: "Mississippi",
    senators: [
      {
        name: "Cindy Hyde-Smith",
        position: "U.S. Senator",
        party: "Republican",
        phone: "(202) 224-5054",
        website: "https://www.hydesmith.senate.gov"
      },
      {
        name: "Roger Wicker",
        position: "U.S. Senator",
        party: "Republican",
        phone: "(202) 224-6253",
        website: "https://www.wicker.senate.gov"
      }
    ],
    representatives: [
      {
        name: "Contact your local representative",
        position: "U.S. Representative",
        party: "Varies by district",
        website: "https://www.house.gov/representatives/find-your-representative"
      }
    ]
  },
  {
    state: "Missouri",
    senators: [
      {
        name: "Josh Hawley",
        position: "U.S. Senator",
        party: "Republican",
        phone: "(202) 224-6154",
        website: "https://www.hawley.senate.gov"
      },
      {
        name: "Eric Schmitt",
        position: "U.S. Senator",
        party: "Republican",
        phone: "(202) 224-5721",
        website: "https://www.schmitt.senate.gov"
      }
    ],
    representatives: [
      {
        name: "Contact your local representative",
        position: "U.S. Representative",
        party: "Varies by district",
        website: "https://www.house.gov/representatives/find-your-representative"
      }
    ]
  },
  {
    state: "Montana",
    senators: [
      {
        name: "Steve Daines",
        position: "U.S. Senator",
        party: "Republican",
        phone: "(202) 224-2651",
        website: "https://www.daines.senate.gov"
      },
      {
        name: "Jon Tester",
        position: "U.S. Senator",
        party: "Democratic",
        phone: "(202) 224-2644",
        website: "https://www.tester.senate.gov"
      }
    ],
    representatives: [
      {
        name: "Contact your local representative",
        position: "U.S. Representative",
        party: "Varies by district",
        website: "https://www.house.gov/representatives/find-your-representative"
      }
    ]
  },
  {
    state: "Nebraska",
    senators: [
      {
        name: "Deb Fischer",
        position: "U.S. Senator",
        party: "Republican",
        phone: "(202) 224-6551",
        website: "https://www.fischer.senate.gov"
      },
      {
        name: "Pete Ricketts",
        position: "U.S. Senator",
        party: "Republican",
        phone: "(202) 224-4224",
        website: "https://www.ricketts.senate.gov"
      }
    ],
    representatives: [
      {
        name: "Contact your local representative",
        position: "U.S. Representative",
        party: "Varies by district",
        website: "https://www.house.gov/representatives/find-your-representative"
      }
    ]
  },
  {
    state: "Nevada",
    senators: [
      {
        name: "Catherine Cortez Masto",
        position: "U.S. Senator",
        party: "Democratic",
        phone: "(202) 224-3542",
        website: "https://www.cortezmasto.senate.gov"
      },
      {
        name: "Jacky Rosen",
        position: "U.S. Senator",
        party: "Democratic",
        phone: "(202) 224-6244",
        website: "https://www.rosen.senate.gov"
      }
    ],
    representatives: [
      {
        name: "Contact your local representative",
        position: "U.S. Representative",
        party: "Varies by district",
        website: "https://www.house.gov/representatives/find-your-representative"
      }
    ]
  },
  {
    state: "New Hampshire",
    senators: [
      {
        name: "Maggie Hassan",
        position: "U.S. Senator",
        party: "Democratic",
        phone: "(202) 224-3324",
        website: "https://www.hassan.senate.gov"
      },
      {
        name: "Jeanne Shaheen",
        position: "U.S. Senator",
        party: "Democratic",
        phone: "(202) 224-2841",
        website: "https://www.shaheen.senate.gov"
      }
    ],
    representatives: [
      {
        name: "Contact your local representative",
        position: "U.S. Representative",
        party: "Varies by district",
        website: "https://www.house.gov/representatives/find-your-representative"
      }
    ]
  },
  {
    state: "New Jersey",
    senators: [
      {
        name: "Cory Booker",
        position: "U.S. Senator",
        party: "Democratic",
        phone: "(202) 224-3224",
        website: "https://www.booker.senate.gov"
      },
      {
        name: "Andy Kim",
        position: "U.S. Senator",
        party: "Democratic",
        phone: "(202) 224-4744",
        website: "https://www.kim.senate.gov"
      }
    ],
    representatives: [
      {
        name: "Contact your local representative",
        position: "U.S. Representative",
        party: "Varies by district",
        website: "https://www.house.gov/representatives/find-your-representative"
      }
    ]
  },
  {
    state: "New Mexico",
    senators: [
      {
        name: "Martin Heinrich",
        position: "U.S. Senator",
        party: "Democratic",
        phone: "(202) 224-5521",
        website: "https://www.heinrich.senate.gov"
      },
      {
        name: "Ben Ray Luján",
        position: "U.S. Senator",
        party: "Democratic",
        phone: "(202) 224-6621",
        website: "https://www.lujan.senate.gov"
      }
    ],
    representatives: [
      {
        name: "Contact your local representative",
        position: "U.S. Representative",
        party: "Varies by district",
        website: "https://www.house.gov/representatives/find-your-representative"
      }
    ]
  },
  {
    state: "New York",
    senators: [
      {
        name: "Kirsten Gillibrand",
        position: "U.S. Senator",
        party: "Democratic",
        phone: "(202) 224-4451",
        website: "https://www.gillibrand.senate.gov"
      },
      {
        name: "Chuck Schumer",
        position: "U.S. Senator",
        party: "Democratic",
        phone: "(202) 224-6542",
        website: "https://www.schumer.senate.gov"
      }
    ],
    representatives: [
      {
        name: "Contact your local representative",
        position: "U.S. Representative",
        party: "Varies by district",
        website: "https://www.house.gov/representatives/find-your-representative"
      }
    ]
  },
  {
    state: "North Carolina",
    senators: [
      {
        name: "Ted Budd",
        position: "U.S. Senator",
        party: "Republican",
        phone: "(202) 224-3154",
        website: "https://www.budd.senate.gov"
      },
      {
        name: "Thom Tillis",
        position: "U.S. Senator",
        party: "Republican",
        phone: "(202) 224-6342",
        website: "https://www.tillis.senate.gov"
      }
    ],
    representatives: [
      {
        name: "Contact your local representative",
        position: "U.S. Representative",
        party: "Varies by district",
        website: "https://www.house.gov/representatives/find-your-representative"
      }
    ]
  },
  {
    state: "North Dakota",
    senators: [
      {
        name: "Kevin Cramer",
        position: "U.S. Senator",
        party: "Republican",
        phone: "(202) 224-2043",
        website: "https://www.cramer.senate.gov"
      },
      {
        name: "John Hoeven",
        position: "U.S. Senator",
        party: "Republican",
        phone: "(202) 224-2551",
        website: "https://www.hoeven.senate.gov"
      }
    ],
    representatives: [
      {
        name: "Kelly Armstrong",
        position: "U.S. Representative",
        party: "Republican",
        phone: "(202) 225-2611",
        website: "https://armstrong.house.gov"
      }
    ]
  },
  {
    state: "Ohio",
    senators: [
      {
        name: "Sherrod Brown",
        position: "U.S. Senator",
        party: "Democratic",
        phone: "(202) 224-2315",
        website: "https://www.brown.senate.gov"
      },
      {
        name: "J.D. Vance",
        position: "U.S. Senator",
        party: "Republican",
        phone: "(202) 224-3353",
        website: "https://www.vance.senate.gov"
      }
    ],
    representatives: [
      {
        name: "Contact your local representative",
        position: "U.S. Representative",
        party: "Varies by district",
        website: "https://www.house.gov/representatives/find-your-representative"
      }
    ]
  },
  {
    state: "Oklahoma",
    senators: [
      {
        name: "James Lankford",
        position: "U.S. Senator",
        party: "Republican",
        phone: "(202) 224-5754",
        website: "https://www.lankford.senate.gov"
      },
      {
        name: "Markwayne Mullin",
        position: "U.S. Senator",
        party: "Republican",
        phone: "(202) 224-4721",
        website: "https://www.mullin.senate.gov"
      }
    ],
    representatives: [
      {
        name: "Contact your local representative",
        position: "U.S. Representative",
        party: "Varies by district",
        website: "https://www.house.gov/representatives/find-your-representative"
      }
    ]
  },
  {
    state: "Oregon",
    senators: [
      {
        name: "Jeff Merkley",
        position: "U.S. Senator",
        party: "Democratic",
        phone: "(202) 224-3753",
        website: "https://www.merkley.senate.gov"
      },
      {
        name: "Ron Wyden",
        position: "U.S. Senator",
        party: "Democratic",
        phone: "(202) 224-5244",
        website: "https://www.wyden.senate.gov"
      }
    ],
    representatives: [
      {
        name: "Contact your local representative",
        position: "U.S. Representative",
        party: "Varies by district",
        website: "https://www.house.gov/representatives/find-your-representative"
      }
    ]
  },
  {
    state: "Pennsylvania",
    senators: [
      {
        name: "Bob Casey",
        position: "U.S. Senator",
        party: "Democratic",
        phone: "(202) 224-6324",
        website: "https://www.casey.senate.gov"
      },
      {
        name: "John Fetterman",
        position: "U.S. Senator",
        party: "Democratic",
        phone: "(202) 224-4254",
        website: "https://www.fetterman.senate.gov"
      }
    ],
    representatives: [
      {
        name: "Contact your local representative",
        position: "U.S. Representative",
        party: "Varies by district",
        website: "https://www.house.gov/representatives/find-your-representative"
      }
    ]
  },
  {
    state: "Rhode Island",
    senators: [
      {
        name: "Jack Reed",
        position: "U.S. Senator",
        party: "Democratic",
        phone: "(202) 224-4642",
        website: "https://www.reed.senate.gov"
      },
      {
        name: "Sheldon Whitehouse",
        position: "U.S. Senator",
        party: "Democratic",
        phone: "(202) 224-2921",
        website: "https://www.whitehouse.senate.gov"
      }
    ],
    representatives: [
      {
        name: "Contact your local representative",
        position: "U.S. Representative",
        party: "Varies by district",
        website: "https://www.house.gov/representatives/find-your-representative"
      }
    ]
  },
  {
    state: "South Carolina",
    senators: [
      {
        name: "Lindsey Graham",
        position: "U.S. Senator",
        party: "Republican",
        phone: "(202) 224-5972",
        website: "https://www.lgraham.senate.gov"
      },
      {
        name: "Tim Scott",
        position: "U.S. Senator",
        party: "Republican",
        phone: "(202) 224-6121",
        website: "https://www.scott.senate.gov"
      }
    ],
    representatives: [
      {
        name: "Contact your local representative",
        position: "U.S. Representative",
        party: "Varies by district",
        website: "https://www.house.gov/representatives/find-your-representative"
      }
    ]
  },
  {
    state: "South Dakota",
    senators: [
      {
        name: "Mike Rounds",
        position: "U.S. Senator",
        party: "Republican",
        phone: "(202) 224-5842",
        website: "https://www.rounds.senate.gov"
      },
      {
        name: "John Thune",
        position: "U.S. Senator",
        party: "Republican",
        phone: "(202) 224-2321",
        website: "https://www.thune.senate.gov"
      }
    ],
    representatives: [
      {
        name: "Dusty Johnson",
        position: "U.S. Representative",
        party: "Republican",
        phone: "(202) 225-2801",
        website: "https://dustyjohnson.house.gov"
      }
    ]
  },
  {
    state: "Tennessee",
    senators: [
      {
        name: "Marsha Blackburn",
        position: "U.S. Senator",
        party: "Republican",
        phone: "(202) 224-3344",
        website: "https://www.blackburn.senate.gov"
      },
      {
        name: "Bill Hagerty",
        position: "U.S. Senator",
        party: "Republican",
        phone: "(202) 224-4944",
        website: "https://www.hagerty.senate.gov"
      }
    ],
    representatives: [
      {
        name: "Contact your local representative",
        position: "U.S. Representative",
        party: "Varies by district",
        website: "https://www.house.gov/representatives/find-your-representative"
      }
    ]
  },
  {
    state: "Texas",
    senators: [
      {
        name: "John Cornyn",
        position: "U.S. Senator",
        party: "Republican",
        phone: "(202) 224-2934",
        website: "https://www.cornyn.senate.gov"
      },
      {
        name: "Ted Cruz",
        position: "U.S. Senator",
        party: "Republican",
        phone: "(202) 224-5922",
        website: "https://www.cruz.senate.gov"
      }
    ],
    representatives: [
      {
        name: "Contact your local representative",
        position: "U.S. Representative",
        party: "Varies by district",
        website: "https://www.house.gov/representatives/find-your-representative"
      }
    ]
  },
  {
    state: "Utah",
    senators: [
      {
        name: "Mike Lee",
        position: "U.S. Senator",
        party: "Republican",
        phone: "(202) 224-5444",
        website: "https://www.lee.senate.gov"
      },
      {
        name: "Mitt Romney",
        position: "U.S. Senator",
        party: "Republican",
        phone: "(202) 224-5251",
        website: "https://www.romney.senate.gov"
      }
    ],
    representatives: [
      {
        name: "Contact your local representative",
        position: "U.S. Representative",
        party: "Varies by district",
        website: "https://www.house.gov/representatives/find-your-representative"
      }
    ]
  },
  {
    state: "Vermont",
    senators: [
      {
        name: "Peter Welch",
        position: "U.S. Senator",
        party: "Democratic",
        phone: "(202) 224-4242",
        website: "https://www.welch.senate.gov"
      },
      {
        name: "Bernie Sanders",
        position: "U.S. Senator",
        party: "Independent",
        phone: "(202) 224-5141",
        website: "https://www.sanders.senate.gov"
      }
    ],
    representatives: [
      {
        name: "Becca Balint",
        position: "U.S. Representative",
        party: "Democratic",
        phone: "(202) 225-4115",
        website: "https://balint.house.gov"
      }
    ]
  },
  {
    state: "Virginia",
    senators: [
      {
        name: "Tim Kaine",
        position: "U.S. Senator",
        party: "Democratic",
        phone: "(202) 224-4024",
        website: "https://www.kaine.senate.gov"
      },
      {
        name: "Mark Warner",
        position: "U.S. Senator",
        party: "Democratic",
        phone: "(202) 224-2023",
        website: "https://www.warner.senate.gov"
      }
    ],
    representatives: [
      {
        name: "Contact your local representative",
        position: "U.S. Representative",
        party: "Varies by district",
        website: "https://www.house.gov/representatives/find-your-representative"
      }
    ]
  },
  {
    state: "Washington",
    senators: [
      {
        name: "Maria Cantwell",
        position: "U.S. Senator",
        party: "Democratic",
        phone: "(202) 224-3441",
        website: "https://www.cantwell.senate.gov"
      },
      {
        name: "Patty Murray",
        position: "U.S. Senator",
        party: "Democratic",
        phone: "(202) 224-2621",
        website: "https://www.murray.senate.gov"
      }
    ],
    representatives: [
      {
        name: "Contact your local representative",
        position: "U.S. Representative",
        party: "Varies by district",
        website: "https://www.house.gov/representatives/find-your-representative"
      }
    ]
  },
  {
    state: "West Virginia",
    senators: [
      {
        name: "Shelley Moore Capito",
        position: "U.S. Senator",
        party: "Republican",
        phone: "(202) 224-6472",
        website: "https://www.capito.senate.gov"
      },
      {
        name: "Joe Manchin",
        position: "U.S. Senator",
        party: "Independent",
        phone: "(202) 224-3954",
        website: "https://www.manchin.senate.gov"
      }
    ],
    representatives: [
      {
        name: "Contact your local representative",
        position: "U.S. Representative",
        party: "Varies by district",
        website: "https://www.house.gov/representatives/find-your-representative"
      }
    ]
  },
  {
    state: "Wisconsin",
    senators: [
      {
        name: "Ron Johnson",
        position: "U.S. Senator",
        party: "Republican",
        phone: "(202) 224-5323",
        website: "https://www.ronjohnson.senate.gov"
      },
      {
        name: "Tammy Baldwin",
        position: "U.S. Senator",
        party: "Democratic",
        phone: "(202) 224-5653",
        website: "https://www.baldwin.senate.gov"
      }
    ],
    representatives: [
      {
        name: "Contact your local representative",
        position: "U.S. Representative",
        party: "Varies by district",
        website: "https://www.house.gov/representatives/find-your-representative"
      }
    ]
  },
  {
    state: "Wyoming",
    senators: [
      {
        name: "John Barrasso",
        position: "U.S. Senator",
        party: "Republican",
        phone: "(202) 224-6441",
        website: "https://www.barrasso.senate.gov"
      },
      {
        name: "Cynthia Lummis",
        position: "U.S. Senator",
        party: "Republican",
        phone: "(202) 224-3424",
        website: "https://www.lummis.senate.gov"
      }
    ],
    representatives: [
      {
        name: "Harriet Hageman",
        position: "U.S. Representative",
        party: "Republican",
        phone: "(202) 225-2311",
        website: "https://hageman.house.gov"
      }
    ]
  }
];

export const statesList = stateRepresentatives.map(sr => sr.state).sort();
