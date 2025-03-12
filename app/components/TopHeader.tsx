"use client"
import Image from 'next/image';
import Link from 'next/link';

export const TopHeader = () => {
  return (
    <section className="w-screen bg-custom-blue py-[7px] h-auto">
      <div className="px-6 flex items-center justify-end max-w-[110rem] mx-auto">

        <div className="p-0 m-0">
          <Link href="/" className="p-0 m-0">
            {/* <Image
            src="/images/logo-header-abdi.png"
            alt="Logo ABDI"
            width={45}
            height={45}
          /> */}
          </Link>
        </div>

        <div className="flex justify-between items-center">
          <Link className="p-0 pr-[.7rem] m-0 hover:opacity-10" aria-current="page" href="https://www.instagram.com/abdi.digital/"
            title="instagram" target="_blank">
            <Image
              src="/images/top-instagram.svg"
              alt="instagram"
              width={15}
              height={15}
            />
          </Link>

          <Link className="p-0 px-[.7rem] m-0 hover:opacity-10" aria-current="page" href="https://www.facebook.com/abdi.digital/"
            title="facebook" target="_blank">
            <Image
              src="/images/top-facebook.svg"
              alt="facebook"
              width={16}
              height={16}
            />
          </Link>

          <Link className="p-0 px-[.7rem] m-0 hover:opacity-10" aria-current="page" href="https://www.linkedin.com/company/abdi.digital/?originalSubdomain=pt"
            title="linkedin" target="_blank">
            <Image
              src="/images/top-linkedin.svg"
              alt="linkedin"
              width={14}
              height={14}
            />
          </Link>

          <Link className="p-0 px-[.7rem] m-0 hover:opacity-10" aria-current="page" href="https://twitter.com/abdi_digital"
            title="twitter" target="_blank">
            <Image
              src="/images/top-x.svg"
              alt="x"
              width={13}
              height={13}
              className="w-[.9rem] h-[.9rem]"
            />
          </Link>

          <Link className="p-0 px-[.7rem] m-0 hover:opacity-10" aria-current="page" href="https://www.youtube.com/channel/UCRARQA0HFgoFk5uujUzJEoQ"
            title="youtube" target="_blank">
            <Image
              src="/images/top-youtube.svg"
              alt="youtube"
              width={15}
              height={15}
            />
          </Link>

          <Link className="p-0 px-[.7rem] m-0 hover:opacity-10" aria-current="page" href="https://www.flickr.com/photos/abdidigital/albums/"
            title="flickr" target="_blank">
            <Image
              src="/images/top-flickr.svg"
              alt="flickr"
              width={12}
              height={12}
            />
          </Link>

          <Link className="p-0 px-[.7rem] m-0 hover:opacity-10" aria-current="page" href="https://open.spotify.com/show/3ZDsvXQgcUwbnAPUYo0Obw?si=Mcqm1qPjR7m7pEdOQwZFow&nd=1"
            title="spotify" target="_blank">
            <Image
              src="/images/top-spotify.svg"
              alt="spotify"
              width={13}
              height={13}
            />
          </Link>

          <Link className="p-0 pl-[.7rem] m-0 hover:opacity-10" aria-current="page" href="https://www.tiktok.com/@abdi.digital"
            title="TikTok" target="_blank">
            <Image
              src="/images/top-tiktok.svg"
              alt="TikTok"
              width={11}
              height={11}
            />
          </Link>
        </div>
      </div>
    </section>
  )
}