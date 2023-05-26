import Directory from "../../components/directory/directory.component"
import { Outlet } from "react-router-dom";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
      image:
        "https://media.gq.com/photos/5a04f9a398002d2e253679f5/master/pass/fall-hats-gq-style-0816-01-1.jpg",
    },
    {
      id: 2,
      title: "Jackets",
      image:
        "https://media.gq.com/photos/63cefbfa3db94fbdf3cce1f5/4:3/w_1499,h_1124,c_limit/liner-jackets-art.jpg",
    },
    {
      id: 3,
      title: "Sneakers",
      image:
        "https://sothebys-com.brightspotcdn.com/3a/3d/1f286f6841e2bf0d90402eb9bbc1/063022-mfm-sneakers-084.jpg",
    },
    {
      id: 4,
      title: "Women",
      image: "https://aranacouture.com/uploads/Online-Shopping.jpg",
    },
    {
      id: 5,
      title: "Men",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/index-onlinestores-1669916593.jpg",
    },
  ];

  return (
    <div>
      <Outlet />
      <Directory categories={categories} />;
    </div>
  );
};

export default Home;
