import { CMS_NAME, CMS_URL } from '@/lib/constants'

export default function Intro() {
  return (
    <section className="flex flex-col items-start my-4 ">
      <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-8xl md:pr-8 logo">
        Ty Fiero
      </h1>
      <h4 className="mt-5 text-lg text-center md:text-left md:pl-8">
        Developer. Musician. Creator.
      </h4>
    </section>
  )
}
