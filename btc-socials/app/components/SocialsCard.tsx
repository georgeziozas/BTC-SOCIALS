"use client";
import Image from "next/image";

type CardProps = {
  protocol: string;
  logo: string;
  title: string;
  socialMedia: Socials;
};

const socialMediaImages = {
  twitter: "../public/images/discord.png",
  telegram: "../public/images/twitter.png",
  discord: "../public/images/telegram.png",
};

type Socials = {
  [key in "twitter" | "telegram" | "discord"]: {
    link: string;
  };
};

export default async function SocialCard({
  protocol,
  logo,
  title,
  socialMedia,
}: CardProps) {
  return (
    <>
      <div className="card w-96 glass">
        <figure>
          <img src={logo} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="social-links">
            {Object.keys(socialMedia).map((platform) => {
              const { link } = socialMedia[platform as keyof Socials];
              return (
                <a key={platform} href={link}>
                  <Image
                    src={
                      socialMediaImages[
                        platform as keyof typeof socialMediaImages
                      ]
                    }
                    alt={platform}
                  />
                </a>
              );
            })}
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
}
