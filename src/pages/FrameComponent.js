 import styles from "./FrameComponent.module.css";
const FrameComponent = () => {
  return (
    <div className={styles.bgParent}>
      <img className={styles.bgIcon} alt="" src="/bg.svg" />
      <div className={styles.benefits}>
        <div className={styles.advantage1}>
          <div className={styles.icon}>
            <div className={styles.rectangle} />
            <div className={styles.shippingFast}></div>
          </div>
          <b className={styles.trustSafety}>{`Trust & Safety`}</b>
          <div className={styles.velitEuismodPellen}>
            Velit euismod pellentes
          </div>
        </div>
        <div className={styles.advantage2}>
          <div className={styles.icon}>
            <div className={styles.rectangle} />
            <div className={styles.shippingFast}></div>
          </div>
          <b className={styles.trustSafety}>Support</b>
          <div
            className={styles.velitEuismodPellen}
          >{`Egestas quis ipsum velit `}</div>
        </div>
        <div className={styles.advantage3}>
          <div className={styles.icon}>
            <div className={styles.rectangle} />
            <div className={styles.shippingFast}></div>
          </div>
          <b className={styles.trustSafety}>{`Discounts `}</b>
          <div
            className={styles.velitEuismodPellen}
          >{`Bibendum ut tristique `}</div>
        </div>
        <div className={styles.advantage4}>
          <div className={styles.icon}>
            <div className={styles.rectangle} />
            <div className={styles.shippingFast}></div>
          </div>
          <b className={styles.trustSafety}>Guarantee</b>
          <div
            className={styles.velitEuismodPellen}
          >{`Convallis tellus id interdum `}</div>
        </div>
      </div>
      <div className={styles.txt}>
        <div className={styles.weHelpYou}>
          We Help You Care for Animals with Nutrition
        </div>
        <div className={styles.allOffersAre}>
          All offers are subject to availability. Ut tortor pretium viverra
          suspendisse potenti nullam ac tortor vitae. Consectetur a erat nam at.
          Potenti nullam ac tortor vitae purus faucibus ornare.
        </div>
        <b className={styles.weCareFor}>{`We care for your pets `}</b>
      </div>
      <img className={styles.shadowIcon} alt="" src="/shadow@2x.png" />
      <img className={styles.ovalsIcon} alt="" src="/ovals.svg" />
      <img className={styles.ovals2Icon} alt="" src="/ovals2.svg" />
      <img className={styles.dog11Icon} alt="" src="/dog1-1@2x.png" />
      <div className={styles.header}>
        <div className={styles.menu}>
          <div className={styles.activeHome}>
            <b className={styles.home}>Home</b>
            <div className={styles.activeDot} />
          </div>
          <div className={styles.services}>
            <b className={styles.services1}>Services</b>
            <div className={styles.angleDown}></div>
          </div>
          <div className={styles.shop}>
            <b className={styles.services1}>Shop</b>
            <div className={styles.angleDown1}></div>
          </div>
          <div className={styles.blog}>
            <b className={styles.services1}>Blog</b>
            <div className={styles.angleDown2}></div>
          </div>
          <div className={styles.pages}>
            <b className={styles.services1}>Pages</b>
            <div className={styles.angleDown3}></div>
          </div>
        </div>
        <div className={styles.button}>
          <div className={styles.bg} />
          <b className={styles.item}>(1 item)</b>
          <div className={styles.shoppingCart}></div>
        </div>
        <div className={styles.logo}>
          <img className={styles.groupIcon} alt="" src="/group.svg" />
          <div className={styles.petopia}>Petopia</div>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.bg1} />
        <div className={styles.mail}>
          <div className={styles.envelope}><img src="/envelope-solid.svg" className={styles.wa} /></div>
          <b className={styles.infoexamplecom}>info@example.com</b>
        </div>
        <div className={styles.phone}>
          <div className={styles.phoneAlt}><img src="/phone-solid.svg" className={styles.wa} /></div>
          <b className={styles.b}>0000 - 123456789</b>
        </div>
        <div className={styles.icons}>
          <div className={styles.iconWhatsapp}><img src="/whatsapp.svg" className={styles.wa} /></div>
          <div className={styles.iconFb}><img src="/facebook.svg" className={styles.wa} /></div>
          <div className={styles.iconInsta}><img src="/instagram.svg" className={styles.wa} /></div>
          <div className={styles.iconTwitter}><img src="/twitter.svg" className={styles.wa} /></div>
        </div>
      </div>
      <div className={styles.logo1}>
        <img className={styles.groupIcon} alt="" src="/group1.svg" />
        <div className={styles.petopia1}>Petopia</div>
      </div>
      <div className={styles.numbers}>
        <img className={styles.bgIcon1} alt="" src="/bg1.svg" />
        <div className={styles.number1}>
          <div className={styles.number}>
            <div className={styles.div}>120+</div>
            <div className={styles.sutisfideCliens}>Sutisfide Cliens</div>
          </div>
          <img className={styles.petsIcon} alt="" src="/pets.svg" />
        </div>
        <div className={styles.number2}>
          <div className={styles.number}>
            <div className={styles.div}>200+</div>
            <div className={styles.sutisfideCliens}>Products for pets</div>
          </div>
          <img
            className={styles.shoppingBagIcon}
            alt=""
            src="/shoppingbag.svg"
          />
        </div>
        <div className={styles.number3}>
          <div className={styles.number}>
            <div className={styles.div}>20+</div>
            <div className={styles.sutisfideCliens}>Years Experience</div>
          </div>
          <img className={styles.petsIcon} alt="" src="/pet.svg" />
        </div>
        <div className={styles.number41}>
          <div className={styles.number22}>
            <div className={styles.div}>70+</div>
            <div className={styles.sutisfideCliens}>Brands Available</div>
          </div>
          <img className={styles.cannedFoodIcon} alt="" src="/cannedfood.svg" />
        </div>
        <img className={styles.ovalsIcon1} alt="" src="/ovals1.svg" />
      </div>
      <div className={styles.allPetCareServiceParent}>
        <div className={styles.allPetCare}>All Pet Care Services</div>
        <div className={styles.buttonWithArrow}>
          <div className={styles.getService}>Get Service</div>
          <div className={styles.arrowRight}></div>
        </div>
        <img className={styles.service1Icon} alt="" src="/service1.svg" />
        <b className={styles.from15}>From $22 / trip</b>
        <div className={styles.utTortorPretium}>
          Maecenas ultricies mi eget mauris pharetra et ultrices consectetur
          adipiscing elit
        </div>
        <div className={styles.healthWellness}>Pet Taxi</div>
        <div className={styles.bg2}>
          <img className={styles.bgIcon2} alt="" src="/bg2.svg" />
          <div className={styles.bg3} />
          <div className={styles.bg4} />
          <div className={styles.cardServiceActive}>
            <div className={styles.bg5} />
            <img className={styles.pawsIcon} alt="" src="/paws.svg" />
            <div className={styles.buttonWithArrow1}>
              <img className={styles.pathIcon} alt="" src="/path.svg" />
              <div className={styles.getService1}>Get Service</div>
              <div className={styles.arrowRight1}></div>
            </div>
            <b className={styles.from151}>From $15 / hour</b>
            <div className={styles.walkingSitting}>{`Walking & Sitting`}</div>
            <div
              className={styles.utTortorPretium1}
            >{`Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae eget dolor morbi `}</div>
            <img className={styles.service1Icon1} alt="" src="/service11.svg" />
          </div>
        </div>
        <div className={styles.cardService3}>
          <img className={styles.bgIcon3} alt="" src="/bg3.svg" />
          <div className={styles.healthWellness1}>Pet Training</div>
          <div
            className={styles.utTortorPretium2}
          >{`Aliquam ut porttitor leo a diam sollicitudin tempor  sit amet est placerat `}</div>
          <b className={styles.from152}>From $27 / hour</b>
          <img className={styles.service1Icon2} alt="" src="/service1.svg" />
          <div className={styles.buttonWithArrow2}>
            <div className={styles.getService}>Get Service</div>
            <div className={styles.arrowRight}></div>
          </div>
        </div>
        <div className={styles.buttonWithArrow3}>
          <div className={styles.getService}>Get Service</div>
          <div className={styles.arrowRight}></div>
        </div>
        <img className={styles.service1Icon3} alt="" src="/service1.svg" />
        <b className={styles.from153}>From $15 / night</b>
        <div className={styles.utTortorPretium3}>
          Turpis massa sed elementum tempus egestas sed sed risus aliquam urna
          cursus eget n
        </div>
        <div className={styles.healthWellness2}>Pet Hotel</div>
        <div className={styles.bg6}>
          <img className={styles.bgIcon4} alt="" src="/bg2.svg" />
          <div className={styles.bg7} />
          <div className={styles.cardService2}>
            <img className={styles.bgIcon3} alt="" src="/bg3.svg" />
            <div className={styles.healthWellness1}>Pet Grooming</div>
            <div
              className={styles.utTortorPretium2}
            >{`Et odio pellentesque diam volutpat commodo sed egestas egestas  pellentesque nec nam `}</div>
            <b className={styles.from152}>From $39 / complex</b>
            <img className={styles.service1Icon2} alt="" src="/service12.svg" />
            <div className={styles.buttonWithArrow2}>
              <div className={styles.getService}>Get Service</div>
              <div className={styles.arrowRight}></div>
            </div>
          </div>
        </div>
        <div className={styles.cardServiceActive1}>
          <div className={styles.bg5} />
          <img className={styles.pawsIcon} alt="" src="/paws1.svg" />
          <div className={styles.buttonWithArrow1}>
            <img className={styles.pathIcon} alt="" src="/path1.svg" />
            <div className={styles.getService1}>Get Service</div>
            <div className={styles.arrowRight1}></div>
          </div>
          <b className={styles.from151}>From $15 / hour</b>
          <div className={styles.walkingSitting}>{`Walking & Sitting`}</div>
          <div
            className={styles.utTortorPretium1}
          >{`Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae eget dolor morbi `}</div>
          <img className={styles.service1Icon1} alt="" src="/service13.svg" />
        </div>
        <div className={styles.cardService21}>
          <img className={styles.bgIcon3} alt="" src="/bg3.svg" />
          <div className={styles.healthWellness1}>Pet Grooming</div>
          <div
            className={styles.utTortorPretium2}
          >{`Et odio pellentesque diam volutpat commodo sed egestas egestas  pellentesque nec nam `}</div>
          <b className={styles.from152}>From $39 / complex</b>
          <img className={styles.service1Icon2} alt="" src="/service1.svg" />
          <div className={styles.buttonWithArrow2}>
            <div className={styles.getService}>Get Service</div>
            <div className={styles.arrowRight}></div>
          </div>
        </div>
        <div className={styles.buttonWithArrow7}>
          <div className={styles.getService}>Get Service</div>
          <div className={styles.arrowRight}></div>
        </div>
        <img className={styles.service1Icon7} alt="" src="/service1.svg" />
        <b className={styles.from157}>From $39/ visit</b>
        <div className={styles.utTortorPretium7}>
          Amet porttitor eget dolor morbi non arcu risus quis varius blandit
          aliquam etiam
        </div>
        <div className={styles.healthWellness5}>{`Health & Wellness`}</div>
        <div className={styles.bg9}>
          <img className={styles.bgIcon7} alt="" src="/bg2.svg" />
          <div className={styles.bg10} />
          <div className={styles.cardService2}>
            <img className={styles.bgIcon3} alt="" src="/bg3.svg" />
            <div className={styles.healthWellness1}>Pet Grooming</div>
            <div
              className={styles.utTortorPretium2}
            >{`Et odio pellentesque diam volutpat commodo sed egestas egestas  pellentesque nec nam `}</div>
            <b className={styles.from152}>From $39 / complex</b>
            <img className={styles.service1Icon2} alt="" src="/service12.svg" />
            <div className={styles.buttonWithArrow2}>
              <div className={styles.getService}>Get Service</div>
              <div className={styles.arrowRight}></div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
      <div className={styles.div4}>
        <img
          className={styles.petAccessoriesStillLifeConIcon}
          alt=""
          src="/petaccessoriesstilllifeconceptwithchewball@2x.png"
        />
        <div className={styles.buttonWithArrow9}>
          <div className={styles.getService}>Shop Now</div>
          <div className={styles.arrowRight9}><img src="/arrow-right-solid.svg" className={styles.wa} /></div>
        </div>
        <div
          className={styles.massaPlaceratDuis}
        >{`Massa placerat duis ultricies lacus. Aliquet bibendum enim facilisis gravida neque convallis `}</div>
        <div className={styles.heckOutOur}>Сheck Out Our Specials</div>
        <div className={styles.sale}>
          <div className={styles.bg11} />
          <div className={styles.upTo40}>Up to 40% Off</div>
        </div>
      </div>
      <div className={styles.bg12} />
      <div className={styles.buttonWithArrow10}>
        <div className={styles.getService}>Shop Now</div>
        <div className={styles.arrowRight9}><img src="/arrow-right-solid.svg" className={styles.wa} /></div>
      </div>
      <div className={styles.mask} />
      <img
        className={styles.petDressedNecktie20210827Icon}
        alt=""
        src="/petdressednecktie20210827221847utc-1@2x.png"
      />
      <div className={styles.luxuryFashionColle}>Luxury Fashion Collection</div>
      <div className={styles.div5}>
        <div className={styles.bg13} />
        <div className={styles.buttonWithArrow11}>
          <div className={styles.getService}>Shop Now</div>
          <div className={styles.arrowRight9}><img src="/arrow-right-solid.svg" className={styles.wa} /></div>
        </div>
        <img
          className={styles.petDressedNecktie20210827Icon1}
          alt=""
          src="/petdressednecktie20210827221847utc-1-copy.svg"
        />
        <div className={styles.shopWhatsTrending}>Shop What’s Trending</div>
      </div>
      <img
        className={styles.charlesDeluvioMv9hjneuhr4UnIcon}
        alt=""
        src="/charlesdeluviomv9hjneuhr4unsplash-1@2x.png"
      />
      <div className={styles.featuredProductsParent}>
        <div className={styles.featuredProducts}>Featured Products</div>
        <div className={styles.onSaleProducts}>On Sale Products</div>
        <div className={styles.topRatedProducts}>Top Rated Products</div>
        <div className={styles.product1}>
          <img
            className={styles.pinkPetBowlIsolatedOnWhitIcon}
            alt=""
            src="/pinkpetbowlisolatedonwhitebackground20210903054042utc@2x.png"
          />
          <div className={styles.furkidzCatScratche}>
            Detachable Gravity Bowl Food Feeder
          </div>
          <div className={styles.div6}>$30.12</div>
          <div className={styles.rating}>
            <div className={styles.iconFb}></div>
            <div className={styles.iconStar1}></div>
            <div className={styles.iconStar2}></div>
            <div className={styles.iconStar3}></div>
            <div className={styles.iconStar4}></div>
          </div>
        </div>
        <div className={styles.product2}>
          <img
            className={styles.pinkPetBowlIsolatedOnWhitIcon}
            alt=""
            src="/pinkpetbowlisolatedonwhitebackground20210903054042utc1@2x.png"
          />
          <div className={styles.furkidzCatScratche}>
            Dog Collar for Small, Medium, Large Dogs
          </div>
          <div className={styles.div6}>$16.88</div>
          <div className={styles.rating}>
            <div className={styles.iconFb}></div>
            <div className={styles.iconStar1}></div>
            <div className={styles.iconStar2}></div>
            <div className={styles.iconStar3}></div>
            <div className={styles.iconStar4}></div>
          </div>
        </div>
        <div className={styles.rating2}>
          <div className={styles.iconFb}></div>
          <div className={styles.iconStar1}></div>
          <div className={styles.iconStar2}></div>
          <div className={styles.iconStar3}></div>
          <div className={styles.iconStar4}></div>
        </div>
        <div className={styles.div8}>$32.99</div>
        <div className={styles.furkidzCatScratche2}>
          Duck Jerky Strips Dog Treats
        </div>
        <img
          className={styles.pinkPetBowlIsolatedOnWhitIcon2}
          alt=""
          src="/pinkpetbowlisolatedonwhitebackground20210903054042utc2@2x.png"
        />
        <div className={styles.product4}>
          <img
            className={styles.pinkPetBowlIsolatedOnWhitIcon}
            alt=""
            src="/pinkpetbowlisolatedonwhitebackground20210903054042utc3@2x.png"
          />
          <div className={styles.furkidzCatScratche}>
            Black Leather Spike Dog Collar, Small
          </div>
          <div className={styles.div6}>$23.55</div>
          <div className={styles.rating}>
            <div className={styles.iconFb}></div>
            <div className={styles.iconStar1}></div>
            <div className={styles.iconStar2}></div>
            <div className={styles.iconStar3}></div>
            <div className={styles.iconStar4}></div>
          </div>
        </div>
        <div className={styles.rating4}>
          <div className={styles.iconFb}></div>
          <div className={styles.iconStar1}></div>
          <div className={styles.iconStar2}></div>
          <div className={styles.iconStar3}></div>
          <div className={styles.iconStar4}></div>
        </div>
        <div className={styles.div10}>$35.66</div>
        <div className={styles.furkidzCatScratcheContainer}>
          <p className={styles.rhinestone}>{`Rhinestone `}</p>
          <p className={styles.rhinestone}>Pet Collar</p>
        </div>
        <img
          className={styles.pinkPetBowlIsolatedOnWhitIcon4}
          alt=""
          src="/pinkpetbowlisolatedonwhitebackground20210903054042utc4@2x.png"
        />
        <div className={styles.rating5}>
          <div className={styles.iconFb}></div>
          <div className={styles.iconStar1}></div>
          <div className={styles.iconStar2}></div>
          <div className={styles.iconStar3}></div>
          <div className={styles.iconStar4}></div>
        </div>
        <div className={styles.div11}>$34.98</div>
        <div className={styles.furkidzCatScratcheContainer1}>
          <p className={styles.rhinestone}>{`Pink Embossed `}</p>
          <p className={styles.rhinestone}>Spiked Collar</p>
        </div>
        <img
          className={styles.pinkPetBowlIsolatedOnWhitIcon5}
          alt=""
          src="/pinkpetbowlisolatedonwhitebackground20210903054042utc5@2x.png"
        />
        <div className={styles.rating6}>
          <div className={styles.iconFb}></div>
          <div className={styles.iconStar1}></div>
          <div className={styles.iconStar2}></div>
          <div className={styles.iconStar3}></div>
          <div className={styles.iconStar4}></div>
        </div>
        <div className={styles.div12}>$12.98</div>
        <div className={styles.furkidzCatScratcheContainer2}>
          <p className={styles.rhinestone}>{`Teeth Cleaning Toy `}</p>
          <p className={styles.rhinestone}>for Dogs</p>
        </div>
        <img
          className={styles.pinkPetBowlIsolatedOnWhitIcon6}
          alt=""
          src="/pinkpetbowlisolatedonwhitebackground20210903054042utc4@2x.png"
        />
        <div className={styles.product5}>
          <img
            className={styles.pinkPetBowlIsolatedOnWhitIcon}
            alt=""
            src="/pinkpetbowlisolatedonwhitebackground20210903054042utc6@2x.png"
          />
          <div className={styles.furkidzCatScratche}>
            Dog Chew Toys for Chewers
          </div>
          <div className={styles.div6}>$8.99</div>
          <div className={styles.rating}>
            <div className={styles.iconFb}></div>
            <div className={styles.iconStar1}></div>
            <div className={styles.iconStar2}></div>
            <div className={styles.iconStar3}></div>
            <div className={styles.iconStar4}></div>
          </div>
        </div>
        <div className={styles.rating8}>
          <div className={styles.iconFb}></div>
          <div className={styles.iconStar1}></div>
          <div className={styles.iconStar2}></div>
          <div className={styles.iconStar3}></div>
          <div className={styles.iconStar4}></div>
        </div>
        <div className={styles.div14}>$70.43</div>
        <div className={styles.furkidzCatScratche5}>
          Carrying Bag for Cats Weighing up to 6 kg
        </div>
        <img
          className={styles.pinkPetBowlIsolatedOnWhitIcon8}
          alt=""
          src="/pinkpetbowlisolatedonwhitebackground20210903054042utc4@2x.png"
        />
        <img className={styles.groupChild} alt="" src="/line-1.svg" />
        <img className={styles.lineIcon} alt="" src="/line.svg" />
        <img className={styles.groupItem} alt="" src="/line-2.svg" />
        <img className={styles.lineIcon1} alt="" src="/line1.svg" />
        <img className={styles.groupInner} alt="" src="/line-3.svg" />
        <img className={styles.groupChild1} alt="" src="/line2.svg" />
      </div>
      <div className={styles.ametPorttitorEget}>
        Vel eros donec ac odio tempor orci dapibus ultrices. Arcu felis bibendum
        ut tristique et egestas quis
      </div>
      <img className={styles.imgIcon} alt="" src="/img@2x.png" />
      <div className={styles.date}>
        <b className={styles.b1}>02.01.2022</b>
        <div className={styles.calendarDay}></div>
      </div>
      <div className={styles.author}>
        <b className={styles.byCorabelleDurrad}>by Corabelle Durrad</b>
        <div className={styles.user}></div>
      </div>
      <b className={styles.aPellentesqueSit}>
        Top Cat Foods to Consider If You Are a First Time Owner
      </b>
      <div
        className={styles.ametPorttitorEget1}
      >{`Amet porttitor eget dolor morbi non arcu risus quis varius  sodales ut etiam sit amet `}</div>
      <img className={styles.imgIcon1} alt="" src="/img1@2x.png" />
      <div className={styles.date1}>
        <b className={styles.b1}>02.01.2022</b>
        <div className={styles.calendarDay}></div>
      </div>
      <div className={styles.author1}>
        <b className={styles.byCorabelleDurrad}>by Corabelle Durrad</b>
        <div className={styles.user}></div>
      </div>
      <b className={styles.aPellentesqueSitContainer}>
        <p className={styles.rhinestone}>Your Dog Desperately Needs</p>
        <p className={styles.rhinestone}>From You</p>
      </b>
      <div className={styles.ametPorttitorEget2}>
        Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis
        feugiat vivamus.
      </div>
      <img className={styles.imgIcon2} alt="" src="/img2@2x.png" />
      <div className={styles.date2}>
        <b className={styles.b1}>02.01.2022</b>
        <div className={styles.calendarDay}></div>
      </div>
      <div className={styles.author2}>
        <b className={styles.byCorabelleDurrad}>by Corabelle Durrad</b>
        <div className={styles.user}></div>
      </div>
      <b className={styles.aPellentesqueSit1}>
        5 Crazy Things Dogs Do When Left Alone At Home
      </b>
      <div className={styles.latestPost}>Latest Post</div>
      <b className={styles.ourBlog}>OUR BLOG</b>
      <div className={styles.sapienNecSagittis}>
        Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum.
        Ligula ullamcorper malesuada proin libero nunc consequat interdum varius
        sit.
      </div>
      <div
        className={styles.get20Off}
      >{`Get 20% Off Your First Purchase When You Use Petco Credit Card `}</div>
      <div className={styles.form}>
        <div className={styles.button1}>
          <div className={styles.bg14} />
          <div className={styles.subscribe}>Subscribe</div>
        </div>
        <div className={styles.input}>
          <div className={styles.input1} />
          <div className={styles.typeYourEmail}>Type your Email</div>
        </div>
      </div>
      <img className={styles.ovalsIcon2} alt="" src="/ovals3.svg" />
      <img className={styles.pathIcon2} alt="" src="/path2.svg" />
      <div className={styles.mask1} />
      <div className={styles.frameChild} />
      <div className={styles.frameItem} />
      <img className={styles.layer1Icon} alt="" src="/layer-1.svg" />
      <img className={styles.bgIcon9} alt="" src="/bg4.svg" />
      <img className={styles.layer1Icon1} alt="" src="/layer-11.svg" />
      <div className={styles.category}>
        <div className={styles.categoryWrapper}>
          <b className={styles.category1}>TRAINING</b>
        </div>
      </div>
      <div className={styles.category2}>
        <div className={styles.categoryWrapper}>
          <b className={styles.category1}> PET HEALTH</b>
        </div>
      </div>
      <b className={styles.category4}>PET FOOD</b>
      <div className={styles.group}>
        <div className={styles.mask2} />
      </div>
      <div className={styles.massaEnimNec}>
        Massa enim nec dui nunc mattis enim ut tellus
      </div>
      <div className={styles.contact1Active}>
        <div className={styles.bg15} />
        <div className={styles.div15}>
          <p className={styles.rhinestone}>(913) 756-3126</p>
          <p className={styles.rhinestone}>(921) 557-1203</p>
        </div>
        <b className={styles.location}>Phone</b>
        <div className={styles.icon4}>
          <div className={styles.bg16} />
          <div className={styles.phoneAlt1}></div>
        </div>
      </div>
      <div className={styles.contact3}>
        <div className={styles.bg17} />
        <div className={styles.div15}>
          <p className={styles.rhinestone}>17 Parkman Place, 2122</p>
          <p className={styles.rhinestone}>{`United States `}</p>
        </div>
        <b className={styles.location}>Address</b>
        <div className={styles.icon5}>
          <div className={styles.bg18} />
          <div className={styles.phoneAlt2}>map-marker-alt</div>
        </div>
      </div>
      <div className={styles.contact4}>
        <div className={styles.bg17} />
        <div className={styles.div15}>
          <p className={styles.rhinestone}>Mon - Fri: 7am - 6pm</p>
          <p className={styles.rhinestone}>Saturday: 9am - 4pm</p>
        </div>
        <b className={styles.location}>Open Hours</b>
        <div className={styles.icon5}>
          <div className={styles.bg18} />
          <div className={styles.phoneAlt1}></div>
        </div>
      </div>
      <div className={styles.contact2}>
        <div className={styles.bg17} />
        <div className={styles.div15}>
          <p className={styles.rhinestone}>petopia@example.com</p>
          <p className={styles.rhinestone}>petopia@email.com</p>
        </div>
        <b className={styles.location}>Email</b>
        <div className={styles.icon5}>
          <div className={styles.bg18} />
          <div className={styles.phoneAlt1}>envelope</div>
        </div>
      </div>
      <div className={styles.contacts}>Contacts</div>
      <b className={styles.ourReviews}>OUR CONTACTS</b>
      <div className={styles.frameInner} />
      <div className={styles.footer}>
        <div
          className={styles.merkulovePetopia}
        >{`sherazdeveloper ©  All rights reserved Copyrights 2023    `}</div>
        <img className={styles.footerChild} alt="" src="/line3.svg" />
        <div className={styles.group1}>
          <div className={styles.newslatter}>
            <div className={styles.socialIcon}>
              <div className={styles.iconWhatsapp1}></div>
              <div className={styles.iconInsta1}></div>
              <div className={styles.iconFb1}></div>
              <div className={styles.iconTwitter1}></div>
            </div>
            <div className={styles.input2} />
            <div className={styles.beFirstIn}>
              Be first in the queue! Get our latest news straight to your inbox.
            </div>
            <div className={styles.newsletter}>Newsletter</div>
            <div className={styles.email}>Email</div>
            <div className={styles.button2}>
              <div className={styles.bg11} />
              <div className={styles.arrowRight12}></div>
            </div>
          </div>
          <div className={styles.links}>
            <div className={styles.about}>About</div>
            <div className={styles.home1}>Home</div>
            <div className={styles.services2}>Services</div>
            <div className={styles.shop2}>Shop</div>
            <div className={styles.gallery}>Gallery</div>
            <div className={styles.faq}>FAQ</div>
            <div className={styles.delivery}>Delivery</div>
            <div className={styles.sales}>Sales</div>
            <div className={styles.usefulLinks}>Useful Links</div>
            <div className={styles.activeDot1} />
            <div className={styles.activeDot2} />
            <div className={styles.activeDot3} />
            <div className={styles.activeDot4} />
            <div className={styles.activeDot5} />
            <div className={styles.activeDot6} />
            <div className={styles.activeDot7} />
            <div className={styles.activeDot8} />
          </div>
          <div className={styles.info1}>
            <div className={styles.gotQuestionsCall}>
              Got Questions? Call us 24/7
            </div>
            <div className={styles.tristiqueNullaAliq}>
              Tristique nulla aliquet enim tortor at auctor urna nunc. Massa
              enim nec dui nunc mattis enim ut tellus. Sed ut perspiciatis unde
              ...
            </div>
            <div className={styles.div19}>(913) 756-3126</div>
            <div className={styles.phone1}></div>
            <div className={styles.logo2}>
              <img className={styles.groupIcon2} alt="" src="/group2.svg" />
              <div className={styles.petopia2}>Petopia</div>
            </div>
          </div>
          <div className={styles.workingHours}>
            <div className={styles.workingHours1}>Working Hours</div>
            <div className={styles.workingHours2}>
              <div className={styles.bg24} />
              <b className={styles.am6pm}>7am – 6pm</b>
              <b className={styles.am4pm}>9am – 4pm</b>
              <b className={styles.closed}>Closed</b>
              <div className={styles.monFri1}>Mon - Fri:</div>
              <div className={styles.saturday}>Saturday:</div>
              <div className={styles.sunday}>Sunday:</div>
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.isolationModeIcon}
        alt=""
        src="/isolation-mode.svg"
      />
      <div className={styles.sapienNecSagittis1}>
        Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum.
        Ligula ullamcorper malesuada proin libero nunc consequat interdum varius
        sit.
      </div>
      <div
        className={styles.get20Off1}
      >{`Get 20% Off Your First Purchase When You Use Petco Credit Card `}</div>
      <div className={styles.typeYourEmail1}>Type your Email</div>
      <div className={styles.input3} />
      <div className={styles.subscribe1}>Subscribe</div>
    </div>
  );
};

export default FrameComponent;
