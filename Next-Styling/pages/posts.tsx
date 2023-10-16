import Image from "next/image";
import img from "../public/9.jpg";

const Posts = () => {
  // Optimize the images by reducing image size
  // served in webp format
  // lazy loading
  return (
    <>
      <Image
        src={img}
        width={980}
        height={450}
        alt='img9'
        placeholder='blur'
        blurDataURL={``}
      />
      <div>
        {["9", "10", "11", "12", "13"].map((path) => {
          return (
            <div key={path}>
              <Image src={`/${path}.jpg`} alt='img' height={450} width={980} />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Posts;
