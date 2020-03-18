export const artworks =[
    { 
        author: "Vika G", 
        title: "Fishes", 
        icon: "https://farm8.staticflickr.com/7572/29690600402_611a51a68e_m.jpg" , 
        url: "https://farm8.staticflickr.com/7572/29690600402_8a736d39d1_o.jpg",
        id: "29690600402"
    },
    {
        author:"Alex P", 
        title: "Birds", 
        icon: "https://farm9.staticflickr.com/8262/29177668113_08db9c1156_m.jpg",
        url: "https://farm9.staticflickr.com/8262/29177668113_b18eb6d5c6_o.jpg",
        id: "29177668113"
    },
    {
        author:"Sonia R", 
        title: "Fall", 
        icon: "https://farm9.staticflickr.com/8449/29690599232_b4010f31c4_m.jpg",
        url: "https://farm9.staticflickr.com/8449/29690599232_0e2e3bbd91_o.jpg",
        id:"29690599232"
    },
    {
        author: "Sofia S", 
        title: "Winter",
        icon: "https://farm9.staticflickr.com/8313/29803367685_cfda6ca216_m.jpg",
        url: "https://farm9.staticflickr.com/8313/29803367685_33099980cf_o.jpg",
        id: "29803367685"
    },
    {
        author: "Asya L",
        title:  "Winter",
        icon: "https://farm9.staticflickr.com/8414/29767706316_721863ef3f_m.jpg",
        url: "https://farm9.staticflickr.com/8414/29767706316_2fb6cc3bba_o.jpg",
        id: "29767706316"
    },
    {
        author: "Kirill",
        title:  "Winter",
        icon: "https://farm9.staticflickr.com/8082/29767705706_e90cd3e5c3_m.jpg",
        url: "https://farm9.staticflickr.com/8082/29767705706_db0426fd33_o.jpg",
        id: "29767705706"
    },
    {
        author: "Asya L",
        title:  "Winter",
        icon: "https://farm9.staticflickr.com/8377/29690826762_9567995851_m.jpg",
        url: "https://farm9.staticflickr.com/8377/29690826762_82f9b91913_o.jpg",
        id: "29690826762"
    },
    {
        author: "Alex P",
        title:  "Winter",
        icon: "https://farm9.staticflickr.com/8394/29175972754_d1f8ac72b0_m.jpg",
        url: "https://farm9.staticflickr.com/8394/29175972754_b101432e06_o.jpg",
        id: "29175972754"
    },
    {
        author: "Sonya R",
        title:  "Winter",
        icon: "https://farm9.staticflickr.com/8560/29690826482_d53bbbf827_m.jpg",
        url: "https://farm9.staticflickr.com/8560/29690826482_66fffd0792_o.jpg",
        id: "29690826482"
    }
  ]

  export const mock_artworks = artworks.map(img=>({icon: img.icon, author: img.author, title: img.title, url: img.url, id: img.id}))
    