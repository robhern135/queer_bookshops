//https://www.dazeddigital.com/life-culture/article/60090/1/lgbt-lgbtq-queer-bookshops-uk-britain-guide-2023-pride

const data = [
  {
    id: 1,
    name: "Gay's the Word",
    address: "66 Marchmont St, London, WC1N 1AB",
    position: [51.5255679896987, -0.1253388595151501],
    image:
      "https://lh5.googleusercontent.com/p/AF1QipNj4TtXjZRCAdrbN2pLK8-sJvqi4fzKNmkBQ3yG=w408-h271-k-no",
    website: "https://www.gaystheword.co.uk/",
  },
  {
    id: 2,
    name: "The Common Press",
    address: "118 Bethnal Green Road, London, E2 6DG",
    position: [51.52487530205831, -0.07183290318840814],
    image:
      "https://lh5.googleusercontent.com/p/AF1QipNCw8hzONNoLy4NwRtIgrX8iU3iwhpTG6LbFUA=w408-h544-k-no",
    website: "http://www.commonpress.co.uk/",
  },
  {
    id: 3,
    name: "Housmans",
    address: "5 Caledonian Rd, London, N1 9DX",
    position: [51.53139916809904, -0.12107262028439834],
    image:
      "https://lh5.googleusercontent.com/p/AF1QipMcVVFDh8AZfVP_WrwvGfofUYir38t054heiuns=w408-h541-k-no",
    website: "https://housmans.com/",
  },
  {
    id: 4,
    name: "The Queery",
    address: "46 George St, Brighton, Brighton and Hove, BN21RJ",
    position: [50.82173082767974, -0.1344277032318744],
    image:
      "https://lh5.googleusercontent.com/p/AF1QipN569odFYE-BzzjVRCfNmZRRQlDrs59dblLjlV0=w408-h544-k-no",
    website: "https://thequeery.co.uk/",
  },
  {
    id: 5,
    name: "The Feminist Bookshop",
    address: "48 Upper N St, Brighton, Brighton and Hove, Brighton, BN1 3FH",
    position: [50.8254840108865, -0.14833052208958936],
    image:
      "https://lh5.googleusercontent.com/p/AF1QipOwdKNu7RPlq19wBUUj3X0tb02ahFhmL7KrFF4K=w408-h408-k-no",
    website: "https://thefeministbookshop.com/",
  },
  {
    id: 6,
    name: "The Old Queeriosity Shop",
    address: "2es, 13-14 Portsmouth St, London WC2A 2ES",
    position: [51.51516200143029, -0.11722127435316435],
    image:
      "https://lh5.googleusercontent.com/p/AF1QipOsPd8vgBSY7f52lTZkg59b_QbSZ4H18iWM-ev8=w408-h253-k-no",
    website: "http://www.the-old-curiosity-shop.com/",
  },
  {
    id: 7,
    name: "Gay Pride Shop/The LGBTQ+ Bookshop",
    address: "Second Floor, Afflecks 52 Church St, Manchester M4 1PW",
    position: [53.6115193248128, -2.2488010281503015],
    image:
      "https://lh5.googleusercontent.com/p/AF1QipOpHE8sGW1mxfKg3u7qy2pQrFTOzmAdWJLvcSq8=w408-h306-k-no",
    website: "https://www.queerbookshop.co.uk/",
  },
  {
    id: 8,
    name: "Queer Lit",
    address: "39 Tib St, Manchester M4 1LX",
    position: [53.48415364560768, -2.2343912858706223],
    image:
      "https://lh5.googleusercontent.com/p/AF1QipMvz9vR428bC0MgeykHtdZwOi3kkbFXMn9qS5kQ=w408-h306-k-no",
    website: "https://www.queerlit.co.uk/",
  },
  {
    id: 9,
    name: "News from Nowhere",
    address: "96 Bold St, Liverpool L1 4HY",
    position: [53.402730696790925, -2.9773994435474855],
    image:
      "https://lh5.googleusercontent.com/p/AF1QipOo8Q35tFkwrubDp9QuZep9VtWgZOGbwhjSY4Ta=w408-h447-k-no",
    website: "http://www.newsfromnowhere.org.uk/",
  },
  {
    id: 10,
    name: "The Bookish Type",
    address: "58, Merrion Shopping Centre, upstairs, Leeds, LS2 8NG",
    position: [53.801793165649094, -1.5438334202387392],
    image:
      "https://lh5.googleusercontent.com/p/AF1QipP3AOXqQDWy5VHA4k9eWGB9uMP0FaoGgxzp2eBy=w408-h306-k-no",
    website: "https://thebookishtype.co.uk/",
  },
  {
    id: 11,
    name: "The Portal Bookshop",
    address: "5 Patrick Pool, York, YO1 8BB",
    position: [53.959959543769045, -1.0807937183776144],
    image:
      "https://lh5.googleusercontent.com/p/AF1QipPWaNuQIH2sQRlP0l3JYcDGeC-jcptFcusRzibf=w408-h544-k-no",
    website: "https://the-portal-bookshop.square.site/",
  },
  {
    id: 12,
    name: "Juno Books",
    address: "24 Chapel Walk, Sheffield City Centre, Sheffield, S1 2PD",
    position: [53.38213816228459, -1.4678873742355172],
    image:
      "https://lh5.googleusercontent.com/p/AF1QipPnVHcH4mzxeIoykpsZpkO-9i72By92-TNXbJu0=w408-h544-k-no",
    website: "http://www.junobooks.co.uk/",
  },
  {
    id: 13,
    name: "Bookwyrm",
    address: "Unit 12, Market Hall, Durham, DH1 3NJ",
    position: [54.77746368262212, -1.5757085318171407],
    image:
      "https://lh5.googleusercontent.com/p/AF1QipO00C_Jd7dAu_zacAQ34JGBNOSf8eaERF4vKWYg=w408-h408-k-no",
    website: "https://bookwyrm.co.uk/",
  },
  {
    id: 14,
    name: "Lighthouse Books",
    address: "43-45 W Nicolson St, Newington, Edinburgh, EH8 9DB",
    position: [55.944783275010565, -3.185413558725482],
    image:
      "https://lh5.googleusercontent.com/p/AF1QipM_2oWbeoX9EALv0BrJt_n9wBuubsuevTvhdJyP=w408-h544-k-no",
    website: "https://lighthousebookshop.com/",
  },
  {
    id: 15,
    name: "Lavender Menace Queer Books Archive",
    address: "Palette, Room G25c, 151 London Rd, Edinburgh, EH7 6AE",
    position: [55.95582504299424, -3.1523952067462466],
    image:
      "https://lh5.googleusercontent.com/p/AF1QipPb24IRbo285URWobwmjX7jlQjv-Z0RBUzUAdgF=w426-h240-k-no",
    website: "https://lavendermenace.org.uk/",
  },
  {
    id: 16,
    name: "Category Is Books",
    address: "34 Allison St, Glasgow, G42 8NN",
    position: [55.83698659279206, -4.268389604762627],
    image:
      "https://lh5.googleusercontent.com/p/AF1QipOZGUNnnMSE_fHpL7FAMcycmtbBhh6QzgEORzQF=w408-h306-k-no",
    website: "https://www.categoryisbooks.com/",
  },
  {
    id: 17,
    name: "Paned o Gê",
    address: "2-4 Royal Arcade, Cardiff, CF10 1AE",
    position: [51.47949, -3.17793],
    image:
      "https://i0.wp.com/paned-o-ge.wales/wp-content/uploads/2021/08/E5H8orJWUAAtx-Z-1.jpg?resize=1000%2C1615&ssl=1",
    website: "https://paned-o-ge.wales/",
  },
  {
    id: 18,
    name: "Shelf Life Books and Zines",
    address: "The Corp Market, 188 Cowbridge Rd E, Cardiff, CF5 1GW",
    position: [51.48203982016208, -3.202349287957436],
    image:
      "https://lh5.googleusercontent.com/p/AF1QipP7EFp_3kuPU71yL0iqLXXaq7xFPm0Xzf6V_vJl=w408-h408-k-no",
    website: "https://www.shelflifebookshop.com/",
  },
  {
    id: 19,
    name: "Paperxclips Books",
    address: "Blackstaff Mill, 81 Springfield Rd, Belfast, BT12 7AE",
    position: [54.59842762362929, -5.957562233780387],
    image:
      "https://lh5.googleusercontent.com/p/AF1QipM7q5rTZxNGTekTsQUS0b0k5-WROZUMskyACTa6=w408-h307-k-no",
    website: "https://www.paperxclips.com/",
  },
]
export default data
