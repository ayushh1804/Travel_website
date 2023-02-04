import React from "react";
import "./main.css";
import img1 from "../../assets/tajmahal.jpg";
import img2 from "../../assets/varanasi.jpg";
import img3 from "../../assets/image1.jpg";
import img4 from "../../assets/image1.jpg";
import img5 from "../../assets/image1.jpg";
import img6 from "../../assets/image1.jpg";
import { MdShareLocation } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const data = [
  {
    id: 1,
    imgSrc: img1,
    descTitle: "Taj Mahal",
    location: "Agra, IND",
    grade: "Love ",
    fees: "RS 20000",
    description:
      "Perhaps India's most recognizable building, the Taj Mahal is also the world's most famous testimony to the power of love. Named after Mumtaz Mahal, the favorite wife of Emperor Shah Jahan, this most beautiful of mausoleums was begun upon her death in 1631 and took 20,000 workmen until 1648 to complete.",
  },

  {
    id: 2,
    imgSrc: img2,
    destTitle: "Varanasi",
    location: "Varanasi, IND",
    grade: "cultural relax",
    fees: "RS 10000",
    description:
      "Dating back to the 8th century BC, Varanasi is one of the oldest still inhabited cities in the world. A major pilgrimage center for Hindus, this holy city has long been associated with the mighty Ganges River, one of the faith's most important religious symbols.",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Golden Temple",
    location: "Amritsar, IND",
    grade: "cultural relax",
    fees: "RS 15000",
    description:
      "The holiest of India's many Sikh shrines (it also attracts many Hindus and people of other faiths), the temple was built in a blend of Hindu and Islamic styles. Its lower marble section features such flourishes as ornate inlaid floral and animal motifs, while the large golden dome represents a lotus flower, a symbol of purity to Sikhs.",
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Jaisalmer",
    location: "Rajasthan, IND",
    grade: "Maharaja's place",
    fees: "RS 30000",
    description:
      "So named for the yellow sandstone used in most of its buildings, the Golden City of Jaisalmer is an oasis of splendid old architecture that rises from the sand dunes of the Thar Desert. Once a strategic outpost, today the city is filled with splendid old mansions; magnificent gateways; and the massive Jaisalmer Fort, also known as the Golden Fort, a daunting 12th-century structure that rises high above the town.",
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: "Red Fort",
    location: "New Delhi, IND",
    grade: "Monuments of past",
    fees: "RS 20000",
    description:
      "Built by Shah Jahan in 1648 as the seat of Mughal power – a role it maintained until 1857 – the magnificent crescent-shaped Red Fort in New Delhi, named after the stunning red sandstone used in its construction, covers a vast area of more than two square kilometers, all of it surrounded by a large moat.",
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: "Goa",
    location: "Goa, IND",
    grade: "Fun and Party",
    fees: "RS 35000",
    description:
      "Long known within India as the go to destination for those seeking a great beach holiday, Goa's beautiful western coastline, overlooking the Arabian Sea, has only recently been discovered by tourists from overseas. Goa's more than 60 miles of coastline is home to some of the world's loveliest beaches, each with their own particular appeal.",
  },
  {
    id: 7,
    imgSrc: img6,
    destTitle: "Ellora Caves",
    location: "Aurangabad, IND",
    grade: "cultural relax",
    fees: "RS 10000",
    description:
      "The famous monumental Ellora Caves were built between the 5th and 10th centuries by Buddhist, Jain, and Hindu monks, and make for an excellent excursion from Mumbai, some 300 kilometers to the west .Now a UNESCO World Heritage Site, this remarkable collection of 34 carved monasteries, chapels, and temples 12 of them Buddhist, 17 Hindu, and five belonging to the Jain faith were built in close proximity to each other, a reflection of the religious tolerance that existed during this period of Indian history.",
  },
  {
    id: 8,
    imgSrc: img6,
    destTitle: "Pangong Lake",
    location: "Ladakh, IND",
    grade: "Trek and Travel",
    fees: "RS 70000",
    description:
      "The famous and sparkling blue Pangong lake is situated near Leh-Ladakh in the Himalayas, approximately at the height of 4350 meters. This endorheic lake is 12 kilometres long and extends from India to Tibet, with two-thirds of it lying in the latter. Owing to its altitude, the temperature here ranges from -5°C to 10°C as a result of which the lake freezes completely during winters in spite of its salinity.",
  },
  {
    id: 9,
    imgSrc: img6,
    destTitle: "Hawa Mahal",
    location: "Jaipur, IND",
    grade: "cultural relax",
    fees: "RS 30000",
    description:
      "The massive edifice of Hawa Mahal stands at the intersection of the main road in Jaipur, Badi Chaupad. It is regarded as the signature building of the city and was built by Maharaja Sawai Pratap Singh in the year 1799. Hawa Mahal derives its name from its unique structure, which is a mesh of small windows that allowed cool wind to enter the palace and hence kept the palace comfortable during the hot summer months.",
  },
];

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most Visited Destinations
        </h3>
      </div>

      <div className="secContent grid">
        {data.map(
          ({ id, imgSrc, descTitle, location, grade, fees, description }) => {
            return (
              <>
                <div key={id} data-aos="fade-up" className="singleDestination">
                  <div className="imageDiv">
                    <img src={img1} alt={descTitle} />
                  </div>
                  <div className="cardInfo">
                    <h4 className="descTitle">{descTitle}</h4>
                    <span className="continent flex">
                      <MdShareLocation className="icon" />
                      <span className="name">{location}</span>
                    </span>
                    <div className="fees flex">
                      <div className="grade">
                        <span>
                          {grade}
                          <small>+1</small>
                        </span>
                      </div>
                      <div className="price">
                        <h5>{fees}</h5>
                      </div>
                    </div>
                    <div className="desc">
                      <p>{description}</p>
                    </div>
                    <button className="btn flex">DETAILS</button>
                  </div>
                </div>
              </>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
