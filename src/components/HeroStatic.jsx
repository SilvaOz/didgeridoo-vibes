// components/HeroStatic.jsx
export default function HeroStatic({ image, title }) {
  return (
    <div className="relative w-full h-[80vh] md:h-screen overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover object-center absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="relative z-20 flex items-center justify-center h-full">
        <h1 className="text-white text-4xl md:text-6xl font-serif tracking-tight text-center">
          {title}
        </h1>
      </div>
    </div>
  )
}
