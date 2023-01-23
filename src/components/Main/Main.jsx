import React from "react";
import "./main.css";
import img from "../../assets/image1.jpg";
import { MdShareLocation } from "react-icons/md";

const data = [
  {
    id: 1,
    imgSrc: img,
    descTitle: "Bora Bora",
    location: "New Zealand",
    grade: "cultural relax",
    fees: "$700",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dignissimos totam eligendi quia, aut molestias non dicta odio, velit obcaecati quam deserunt esse! Voluptatibus aliquam eum consectetur, quas exercitationem libero ratione, dolores id excepturi ipsam facere corporis. Repellendus, numquam amet? Adipisci minus hic dignissimos nisi sapiente facere error in libero ipsa? Consectetur velit blanditiis id quasi cupiditate magnam sint doloremque ut vitae quos rerum, et animi, ea tenetur explicabo. Consequatur aperiam at sed quas corrupti sapiente soluta saepe nesciunt, consectetur quos a maiores hic qui iusto quae deleniti delectus vel tempora, quaerat est ad laborum. Aliquid sequi praesentium placeat natus",
  },

  // {
  //   id:2,
  //   imgSrc : img,
  //   destTitle: 'Bora Bora',
  //   location: "New Zealand",
  //   grade: "cultural relax",
  //   fees : '$700',
  //   description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dignissimos totam eligendi quia, aut molestias non dicta odio, velit obcaecati quam deserunt esse! Voluptatibus aliquam eum consectetur, quas exercitationem libero ratione, dolores id excepturi ipsam facere corporis. Repellendus, numquam amet? Adipisci minus hic dignissimos nisi sapiente facere error in libero ipsa? Consectetur velit blanditiis id quasi cupiditate magnam sint doloremque ut vitae quos rerum, et animi, ea tenetur explicabo. Consequatur aperiam at sed quas corrupti sapiente soluta saepe nesciunt, consectetur quos a maiores hic qui iusto quae deleniti delectus vel tempora, quaerat est ad laborum. Aliquid sequi praesentium placeat natus"
  // },
  // {
  //   id:3,
  //   imgSrc : img,
  //   destTitle: 'Bora Bora',
  //   location: "New Zealand",
  //   grade: "cultural relax",
  //   fees : '$700',
  //   description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dignissimos totam eligendi quia, aut molestias non dicta odio, velit obcaecati quam deserunt esse! Voluptatibus aliquam eum consectetur, quas exercitationem libero ratione, dolores id excepturi ipsam facere corporis. Repellendus, numquam amet? Adipisci minus hic dignissimos nisi sapiente facere error in libero ipsa? Consectetur velit blanditiis id quasi cupiditate magnam sint doloremque ut vitae quos rerum, et animi, ea tenetur explicabo. Consequatur aperiam at sed quas corrupti sapiente soluta saepe nesciunt, consectetur quos a maiores hic qui iusto quae deleniti delectus vel tempora, quaerat est ad laborum. Aliquid sequi praesentium placeat natus"
  // },
  // {
  //   id:4,
  //   imgSrc : img,
  //   destTitle: 'Bora Bora',
  //   location: "New Zealand",
  //   grade: "cultural relax",
  //   fees : '$700',
  //   description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dignissimos totam eligendi quia, aut molestias non dicta odio, velit obcaecati quam deserunt esse! Voluptatibus aliquam eum consectetur, quas exercitationem libero ratione, dolores id excepturi ipsam facere corporis. Repellendus, numquam amet? Adipisci minus hic dignissimos nisi sapiente facere error in libero ipsa? Consectetur velit blanditiis id quasi cupiditate magnam sint doloremque ut vitae quos rerum, et animi, ea tenetur explicabo. Consequatur aperiam at sed quas corrupti sapiente soluta saepe nesciunt, consectetur quos a maiores hic qui iusto quae deleniti delectus vel tempora, quaerat est ad laborum. Aliquid sequi praesentium placeat natus"
  // },
  // {
  //   id:5,
  //   imgSrc : img,
  //   destTitle: 'Bora Bora',
  //   location: "New Zealand",
  //   grade: "cultural relax",
  //   fees : '$700',
  //   description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dignissimos totam eligendi quia, aut molestias non dicta odio, velit obcaecati quam deserunt esse! Voluptatibus aliquam eum consectetur, quas exercitationem libero ratione, dolores id excepturi ipsam facere corporis. Repellendus, numquam amet? Adipisci minus hic dignissimos nisi sapiente facere error in libero ipsa? Consectetur velit blanditiis id quasi cupiditate magnam sint doloremque ut vitae quos rerum, et animi, ea tenetur explicabo. Consequatur aperiam at sed quas corrupti sapiente soluta saepe nesciunt, consectetur quos a maiores hic qui iusto quae deleniti delectus vel tempora, quaerat est ad laborum. Aliquid sequi praesentium placeat natus"
  // },
  // {
  //   id:6,
  //   imgSrc : img,
  //   destTitle: 'Bora Bora',
  //   location: "New Zealand",
  //   grade: "cultural relax",
  //   fees : '$700',
  //   description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dignissimos totam eligendi quia, aut molestias non dicta odio, velit obcaecati quam deserunt esse! Voluptatibus aliquam eum consectetur, quas exercitationem libero ratione, dolores id excepturi ipsam facere corporis. Repellendus, numquam amet? Adipisci minus hic dignissimos nisi sapiente facere error in libero ipsa? Consectetur velit blanditiis id quasi cupiditate magnam sint doloremque ut vitae quos rerum, et animi, ea tenetur explicabo. Consequatur aperiam at sed quas corrupti sapiente soluta saepe nesciunt, consectetur quos a maiores hic qui iusto quae deleniti delectus vel tempora, quaerat est ad laborum. Aliquid sequi praesentium placeat natus"
  // },
  // {
  //   id:7,
  //   imgSrc : img,
  //   destTitle: 'Bora Bora',
  //   location: "New Zealand",
  //   grade: "cultural relax",
  //   fees : '$700',
  //   description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dignissimos totam eligendi quia, aut molestias non dicta odio, velit obcaecati quam deserunt esse! Voluptatibus aliquam eum consectetur, quas exercitationem libero ratione, dolores id excepturi ipsam facere corporis. Repellendus, numquam amet? Adipisci minus hic dignissimos nisi sapiente facere error in libero ipsa? Consectetur velit blanditiis id quasi cupiditate magnam sint doloremque ut vitae quos rerum, et animi, ea tenetur explicabo. Consequatur aperiam at sed quas corrupti sapiente soluta saepe nesciunt, consectetur quos a maiores hic qui iusto quae deleniti delectus vel tempora, quaerat est ad laborum. Aliquid sequi praesentium placeat natus"
  // },
  // {
  //   id:8,
  //   imgSrc : img,
  //   destTitle: 'Bora Bora',
  //   location: "New Zealand",
  //   grade: "cultural relax",
  //   fees : '$700',
  //   description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dignissimos totam eligendi quia, aut molestias non dicta odio, velit obcaecati quam deserunt esse! Voluptatibus aliquam eum consectetur, quas exercitationem libero ratione, dolores id excepturi ipsam facere corporis. Repellendus, numquam amet? Adipisci minus hic dignissimos nisi sapiente facere error in libero ipsa? Consectetur velit blanditiis id quasi cupiditate magnam sint doloremque ut vitae quos rerum, et animi, ea tenetur explicabo. Consequatur aperiam at sed quas corrupti sapiente soluta saepe nesciunt, consectetur quos a maiores hic qui iusto quae deleniti delectus vel tempora, quaerat est ad laborum. Aliquid sequi praesentium placeat natus"
  // },
  // {
  //   id:9,
  //   imgSrc : img,
  //   destTitle: 'Bora Bora',
  //   location: "New Zealand",
  //   grade: "cultural relax",
  //   fees : '$700',
  //   description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dignissimos totam eligendi quia, aut molestias non dicta odio, velit obcaecati quam deserunt esse! Voluptatibus aliquam eum consectetur, quas exercitationem libero ratione, dolores id excepturi ipsam facere corporis. Repellendus, numquam amet? Adipisci minus hic dignissimos nisi sapiente facere error in libero ipsa? Consectetur velit blanditiis id quasi cupiditate magnam sint doloremque ut vitae quos rerum, et animi, ea tenetur explicabo. Consequatur aperiam at sed quas corrupti sapiente soluta saepe nesciunt, consectetur quos a maiores hic qui iusto quae deleniti delectus vel tempora, quaerat est ad laborum. Aliquid sequi praesentium placeat natus"
  // }
];

const Main = () => {
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">Most Visited Destination</h3>
      </div>

      <div className="setContent grid">
        {data.map(
          ({ id, imgSrc, descTitle, location, grade, fees, description }) => {
            return (
              <>
                <div key={id} className="singleDestination">
                  <div className="imageDiv">
                    <img src={img} alt={descTitle} />
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
                    <button className="btn flex">
                      DETAILS 
                    </button>
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
