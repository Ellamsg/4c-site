import Image from "next/image";

const Hero = ({ eyebrow, title, description, primaryLink, secondaryLink }) => {
  return (
    <section className="container">
      <div className="items-center grid md:grid-cols-3 lg:grid-cols-2 gap-12">
        <div className="col-span-2 lg:col-span-1">
          <p className="text-2xl font-bold tracking-wide text-gray-600 uppercase">
            {eyebrow}
          </p>

          <h1 className="mt-2 text-5xl font-extrabold tracking-tight text-gray-900 md:text-6xl">
            {title}
          </h1>

          <div className="my-8 text-gray-500 prose-lg">{description}</div>

          <div className="flex flex-wrap justify-start my-8 md:justify-start gap-4">
            {primaryLink}
            {secondaryLink}
          </div>
        </div>
        <div className="hidden mt-12 lg:block transform lg:scale-100 md:translate-x-24">
          {/* <Image src="/g10.png" alt="" width={1200} height={1369} /> */}
          <iframe
            width="350"
            height="500"
            frameBorder="0"
            allowtransparency="true"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            src="https://discord.com/widget?id=784142072763383858&theme=dark"
          ></iframe>
        </div>
        {/* <div className="flex justify-start py-2">
          <iframe
            width="350"
            height="500"
            frameBorder="0"
            allowtransparency="true"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            src="https://discord.com/widget?id=784142072763383858&theme=dark"
          ></iframe>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
