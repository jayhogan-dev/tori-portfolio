import Image from "next/image"

const Hero = () => {
  return (
    <section className="flex w-full h-[800px] bg-blue-400">
        <div className="flex relative w-[300px] h-[400px]">

        <Image src="/hero.png" alt="personal trainer" fill /> 
        </div>
    </section>
  )
}

export default Hero