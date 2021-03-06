export default {
  stats: {
    survival: {
      title: 'Surival',
      style: 'state-btn',
      description: 'Limit: ',
      children: [
        {
          name: '',
          amount: 2,
          max: 3,
          min: 0,
        },
      ],
    },
    bleeding: {
      title: 'Surival',
      style: 'bleeding',
      description: '',
      children: [
        {
          name: '',
          amount: 0,
          max: 5,
          min: 0,
          milestones: [
            5,
          ],
        },
      ],
    },
    xp: {
      title: 'XP',
      children: [
        {
          name: 'Hunt',
          amount: 2,
          max: 16,
          min: 0,
          milestones: [
            2,
            6,
            10,
            15,
            16,
          ],
        },
        {
          name: 'Courage',
          amount: 0,
          max: 9,
          min: 0,
          milestones: [
            4,
            9,
          ],
        },
        {
          name: 'Understanding',
          amount: 0,
          max: 9,
          min: 0,
          milestones: [
            4,
            9,
          ],
        },
        {
          name: 'Weapon',
          amount: 0,
          max: 8,
          min: 0,
          milestones: [
            3,
            8,
          ],
        },
      ],
    },
    // xp: [
    //   hunt,
    //   courage,
    //   understanding,
    //   weapon,
    // ],
    // primaryStats: [
    //   movement,
    //   accuracy,
    //   strength,
    //   evasion,
    //   luck,
    //   speed,
    // ],
    armor: {
      title: 'Armor',
      description: 'Rawhide Armor Set',
      style: 'stat',
      children: [
        {
          name: 'Brain',
          amount: 3,
          milestone: {
            visible: true,
            name: 'Insane',
          },
        },
        {
          name: 'Head',
          amount: -1,
        },
        { name: 'Arms' },
        { name: 'Body' },
        { name: 'Waist' },
        { name: 'Feet' },
      ]
    },
    fightingArts: {
      title: 'Fighting Arts',
      style: 'list',
      max: 3,
      children: [
        {
          name: 'Purpose',
          desc: 'Your comrades make you strong...',
        },
        {
          name: 'Propulsion Drive',
          desc: 'At the <strong>start</strong> of...',
        },
      ]
    },
    disorders: [
      1,
      2,
      3,
    ],
    abilities: [
      'none',
    ],
    impairments: [
      'none',
    ],
    notes: [
      'none',
    ],
  },
  page: {
    "title": "Campaigns"
  },
  nav: [
    {
      "title": "Dashboard",
      "icon": "logo-mark",
      "isActive": true,
      "children": [
        {
          "title": "Campaigns",
          "link": "#",
          "children": [
            {
              "title": "Active",
              "link": "#"
            },
            {
              "title": "Inactive",
              "link": "#"
            }
          ]
        },
        {
          "title": "World Stats",
          "link": "#"
        },
        {
          "title": "User Preferences",
          "link": "#"
        }
      ]
    },
    {
      "title": "Settlements",
      "icon": "settlement"
    },
    {
      "title": "Survivors",
      "icon": "survivors"
    },
    {
      "title": "Storage",
      "icon": "storage"
    },
    {
      "title": "Campaign Log",
      "icon": "log"
    },
    {
      "title": "Glossary/FAQ",
      "icon": "faq"
    }
  ],
  campaign: [
    {
      "id": 1,
      "name": "Campaign Name",
      "founder": "Username",
      "last_played": "2016-10-10T18:41:31-05:00",
      "lantern_year": "0",
      "population": "0",
      "players": "0"
    },
    {
      "id": 2,
      "name": "The Watcher",
      "founder": "loganogden",
      "last_played": "2016-10-10T18:41:31-05:00",
      "lantern_year": "14",
      "population": "4",
      "players": "4"
    },
    {
      "id": 5,
      "name": "The Phoenix",
      "founder:": true,
      "last_played": "2016-10-10T18:41:31-05:00",
      "lantern_year": "14",
      "population": "4",
      "players": "4"
    },
    {
      "id": 3,
      "name": "Testing testing",
      "founder": "somegirl69",
      "last_played": "2016-10-10T18:41:31-05:00",
      "lantern_year": "4",
      "population": "69",
      "players": "4"
    },
    {
      "id": 4,
      "name": "Darkness Rising",
      "founder": "Strider",
      "last_played": "2016-10-10T18:41:31-05:00",
      "lantern_year": "15",
      "population": "25",
      "players": "2",
      "retired": true
    }
  ],
  world: {
    "live_survivors": {
      "comment": "worldwide count of all living survivors",
      "max_age": 5,
      "handle": "live_survivors",
      "name": "Live survivors",
      "value": 4341,
      "created_on": {
        "$date": 1476568698177
      },
      "_id": {
        "$oid": "5802a67a8740d90f532c9171"
      }
    },
    "new_settlements_last_30": {
      "comment": "total of all settlements with a 'created_on' date within the last 30 days",
      "handle": "new_settlements_last_30",
      "name": "Total settlements created in the last 30 days",
      "value": 102,
      "created_on": {
        "$date": 1476568698186
      },
      "_id": {
        "$oid": "5802a67a8740d90f532c9175"
      }
    },
    "abandoned_settlements": {
      "comment": "worldwide count of all abandoned and removed settlements",
      "handle": "abandoned_settlements",
      "name": "Abandoned settlements",
      "value": 57,
      "created_on": {
        "$date": 1476568698163
      },
      "_id": {
        "$oid": "5802a67a8740d90f532c916f"
      }
    },
    "total_survivors": {
      "comment": "worldwide count of all survivors, living and dead",
      "handle": "total_survivors",
      "name": "Total survivors",
      "value": 5662,
      "created_on": {
        "$date": 1476568698188
      },
      "_id": {
        "$oid": "5802a67a8740d90f532c9176"
      }
    },
    "total_users": {
      "comment": "total of all registered users",
      "handle": "total_users",
      "name": "Total users",
      "value": 1195,
      "created_on": {
        "$date": 1476568698183
      },
      "_id": {
        "$oid": "5802a67a8740d90f532c9174"
      }
    },
    "total_users_last_30": {
      "comment": "total of all users who have signed in during the last 30 days",
      "max_age": 60,
      "handle": "total_users_last_30",
      "name": "Total users in the last 30 days",
      "value": 141,
      "created_on": {
        "$date": 1476568698179
      },
      "_id": {
        "$oid": "5802a67a8740d90f532c9172"
      }
    },
    "dead_survivors": {
      "comment": "worldwide count of all dead survivors",
      "max_age": 5,
      "handle": "dead_survivors",
      "name": "Dead survivors",
      "value": 2803,
      "created_on": {
        "$date": 1476568698181
      },
      "_id": {
        "$oid": "5802a67a8740d90f532c9173"
      }
    },
    "recent_sessions": {
      "comment": "total of all sessions within the 'recent_session' horizon",
      "max_age": 30,
      "handle": "recent_sessions",
      "name": "Recent sessions",
      "value": 4,
      "created_on": {
        "$date": 1476568698169
      },
      "_id": {
        "$oid": "5802a67a8740d90f532c9170"
      }
    },
    "active_settlements": {
      "comment": "worldwide count of all settlements that have not been abandoned or removed",
      "handle": "active_settlements",
      "name": "Active settlements",
      "value": 973,
      "created_on": {
        "$date": 1476568698192
      },
      "_id": {
        "$oid": "5802a67a8740d90f532c9177"
      }
    }
  },
  users:
    [
      {
        "record_status": "rejected",
        "status": "active",
        "avatar": "https://randomuser.me/api/portraits/men/17.jpg",
        "current_username": "allegiancesinger",
        "platform": "twitter",
        "inNetwork": true,
        "elite": false,
        "followers": 12000,
        "offer_price": 13000,
        "account_category": "celeb",
        "agency": "speakr",
        "campaign": "Just Do It",
        "active": false,
        "brand": "Nike",
        "initiative": "awesome initiative",
        "content_type": "photo",
        "product": "brand in hand",
        "xcpe": 1.57,
        "xe": 30000,
        "xoe": 31.24,
        "updated_at": "2015-07-15 9:00 PM",
        "scheduled_time": "2015-07-16 4:00 PM",
        "content": "Dreamlike. Semi-sensical. Sort of terrifying. The site is less a Twitter toy than a disturbing peer into my subconscious."
      },
      {
        "record_status": "scheduled",
        "status": "active",
        "avatar": "https://randomuser.me/api/portraits/women/17.jpg",
        "current_username": "rosemillwright",
        "platform": "twitter",
        "inNetwork": true,
        "elite": false,
        "followers": 11000,
        "offer_price": 12000,
        "account_category": "real",
        "agency": "speakr",
        "campaign": "Samba",
        "active": false,
        "brand": "Adidas",
        "initiative": "awesome initiative",
        "content_type": "photo",
        "product": "brand in hand",
        "xcpe": 1.34,
        "xe": 40000,
        "xoe": 11.24,
        "updated_at": "2015-06-12 9:00 PM",
        "scheduled_time": "2015-07-16 4:00 PM",
        "content": "While some of the autogenerated tweets seem plausible enough (…), other autogenerated strings are nothing short of hilarious"
      },
      {
        "record_status": "accepted",
        "status": "active",
        "avatar": "https://randomuser.me/api/portraits/men/11.jpg",
        "current_username": "hoofship",
        "platform": "twitter",
        "inNetwork": true,
        "elite": false,
        "followers": 12000,
        "offer_price": 8000,
        "account_category": "real",
        "agency": "speakr",
        "campaign": "Pills",
        "active": false,
        "brand": "Beats By Dre",
        "initiative": "awesome initiative",
        "content_type": "photo",
        "product": "brand in hand",
        "xcpe": 1.27,
        "xe": 20000,
        "xoe": 19.20,
        "updated_at": "2016-01-02 9:00 PM",
        "scheduled_time": "2015-07-16 4:00 PM",
        "content": "A bizarrely addictive little time-waster (…) sounding something like a mashup of Yoda, a freshman philosophy major and Caine from Kung Fu."
      },
      {
        "record_status": "scheduled",
        "status": "inactive",
        "avatar": "https://randomuser.me/api/portraits/women/11.jpg",
        "current_username": "bamboobung",
        "platform": "twitter",
        "inNetwork": true,
        "elite": false,
        "followers": 9000,
        "offer_price": 9000,
        "account_category": "real",
        "agency": "speakr",
        "campaign": "Galaxy S7",
        "active": false,
        "brand": "Samsung",
        "initiative": "awesome initiative",
        "content_type": "photo",
        "product": "brand in hand",
        "xcpe": 1.19,
        "xe": 30000,
        "xoe": 81.11,
        "updated_at": "2015-02-22 9:00 PM",
        "scheduled_time": "2015-07-16 4:00 PM",
        "content": "The results are, predictably, hilarious. I couldn't have said it better myself."
      },
      {
        "record_status": "scheduled",
        "status": "inactive",
        "avatar": "https://randomuser.me/api/portraits/women/1.jpg",
        "current_username": "assetdebate",
        "platform": "twitter",
        "inNetwork": true,
        "elite": false,
        "followers": 8000,
        "offer_price": 7000,
        "account_category": "celeb",
        "agency": "speakr",
        "campaign": "Iphone 6S",
        "active": false,
        "brand": "Apple",
        "initiative": "awesome initiative",
        "content_type": "photo",
        "product": "brand in hand",
        "xcpe": 0.57,
        "xe": 40000,
        "xoe": 22.24,
        "updated_at": "2015-04-10 9:00 PM",
        "scheduled_time": "2015-07-16 4:00 PM",
        "content": "Add this to the pile of brilliant Twitter-related time-wasters"
      },
      {
        "record_status": "published",
        "status": "inactive",
        "avatar": "https://randomuser.me/api/portraits/men/1.jpg",
        "current_username": "shirtslow",
        "platform": "twitter",
        "inNetwork": true,
        "elite": false,
        "followers": 12000,
        "offer_price": 10000,
        "account_category": "parody",
        "agency": "speakr",
        "campaign": "Prius",
        "active": false,
        "brand": "Toyota",
        "initiative": "awesome initiative",
        "content_type": "photo",
        "product": "brand in hand",
        "xcpe": 1.27,
        "xe": 60000,
        "xoe": 36.33,
        "updated_at": "2015-10-12 9:00 PM",
        "scheduled_time": "2015-07-16 4:00 PM",
        "content": "Are we really so predictable that everything that we Tweet can be broken down by a machine to figure out what we’ll say next?"
      },
      {
        "record_status": "rejected",
        "status": "active",
        "avatar": "https://randomuser.me/api/portraits/men/5.jpg",
        "current_username": "molarityarcherfish",
        "platform": "twitter",
        "inNetwork": true,
        "elite": false,
        "followers": 15000,
        "offer_price": 10200,
        "account_category": "real",
        "agency": "speakr",
        "campaign": "Xulu",
        "active": false,
        "brand": "Honda",
        "initiative": "awesome initiative",
        "content_type": "photo",
        "product": "brand in hand",
        "xcpe": 1.23,
        "xe": 40000,
        "xoe": 54.82,
        "updated_at": "2016-04-22 9:00 PM",
        "scheduled_time": "2015-07-16 4:00 PM",
        "content": "This site is providing some good laughs this morning here at the Twitter office."
      },
      {
        "record_status": "rejected",
        "status": "active",
        "avatar": "https://randomuser.me/api/portraits/women/5.jpg",
        "current_username": "sleevelesscalcite",
        "platform": "twitter",
        "inNetwork": true,
        "elite": false,
        "followers": 6000,
        "offer_price": 2000,
        "account_category": "parody",
        "agency": "speakr",
        "campaign": "Turn It Up",
        "active": false,
        "brand": "Bose",
        "initiative": "awesome initiative",
        "content_type": "photo",
        "product": "brand in hand",
        "xcpe": 1.11,
        "xe": 60000,
        "xoe": 73.18,
        "updated_at": "2015-11-12 9:00 PM",
        "scheduled_time": "2015-07-16 4:00 PM",
        "content": "You can image what something like this might look like five, ten or twenty years from now, as our technical capabilities improve."
      },
      {
        "record_status": "accepted",
        "status": "inactive",
        "avatar": "https://randomuser.me/api/portraits/men/14.jpg",
        "current_username": "rhodiumreckless",
        "platform": "twitter",
        "inNetwork": true,
        "elite": false,
        "followers": 16000,
        "offer_price": 10000,
        "account_category": "celeb",
        "agency": "speakr",
        "campaign": "Boosts",
        "active": false,
        "brand": "Sketchers",
        "initiative": "awesome initiative",
        "content_type": "photo",
        "product": "brand in hand",
        "xcpe": 1.22,
        "xe": 50000,
        "xoe": 72.11,
        "updated_at": "2015-06-21 9:00 PM",
        "scheduled_time": "2015-07-16 4:00 PM",
        "content": "My theory is that this generator captures the subliminal. This sounds a bit like how I’d like to spend a Sunday in an alternate universe."
      },
      {
        "record_status": "published",
        "status": "active",
        "avatar": "https://randomuser.me/api/portraits/women/14.jpg",
        "current_username": "urinarypare",
        "platform": "twitter",
        "inNetwork": true,
        "elite": false,
        "followers": 12000,
        "offer_price": 11003,
        "account_category": "real",
        "agency": "speakr",
        "campaign": "PS Vita",
        "active": false,
        "brand": "Sony",
        "initiative": "awesome initiative",
        "content_type": "photo",
        "product": "brand in hand",
        "xcpe": 1.65,
        "xe": 70000,
        "xoe": 12.11,
        "updated_at": "2015-06-23 9:00 PM",
        "scheduled_time": "2015-07-16 4:00 PM",
        "content": "This site is providing some good laughs this morning here at the Twitter office."
      }
    ]
}
