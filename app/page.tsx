import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"

const images = ["/1.jpeg", "/2.jpeg", "/3.jpeg"]

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-slate-950">
      <div className="w-full max-w-4xl text-center">
        <h1 className="text-4xl font-bold italic text-purple-400 mb-8" style={{ fontFamily: 'Brush Script MT, Brush Script Std, cursive' }}>hello ilham</h1>
        <Carousel className="relative">
          <CarouselContent>
            {images.map((src, index) => (
              <CarouselItem key={src}>
                <div className="relative h-80 md:h-[28rem] rounded-xl overflow-hidden shadow-lg">
                  <Image src={src} alt={`Slide ${index + 1}`} fill className="object-cover" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious variant="ghost" size="icon-lg" />
          <CarouselNext variant="ghost" size="icon-lg" />
        </Carousel>
      </div>
    </main>
  )
}
