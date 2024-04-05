import Image from "next/image";

const DUMMY_IMAGES = [
  {
    image: "/Banner.png",
    alt: "zT6}516t",
  },
  {
    image: "https://dummyimage.com/521x325.png/dddddd/000000",
    alt: "hA3)cHp2pG",
  },
  {
    image: "/Banner.png",
    alt: "zT6}516t",
  },
  {
    image: "https://dummyimage.com/521x325.png/dddddd/000000",
    alt: "hA3)cHp2pG",
  },
  {
    image: "/Banner.png",
    alt: "zT6}516t",
  },
  {
    image: "https://dummyimage.com/521x325.png/dddddd/000000",
    alt: "hA3)cHp2pG",
  },
  {
    image: "/Banner.png",
    alt: "zT6}516t",
  },

  {
    image: "https://dummyimage.com/521x325.png/dddddd/000000",
    alt: "hA3)cHp2pG",
  },
  {
    image: "/Banner.png",
    alt: "zT6}516t",
  },
];

const BannerSlider = () => {
  return (
    <section className="mb-5">
      <div className="flex flex-sb w-full overflow-x-scroll scrollbar-hide ">
        {DUMMY_IMAGES.map((item, index) => (
          <Image
            className="first:ml-2 mr-2 rounded-[20px]"
            key={index}
            src={item.image}
            alt={item.alt}
            width={521}
            height={263}
          />
        ))}
      </div>
    </section>
  );
};

export default BannerSlider;
