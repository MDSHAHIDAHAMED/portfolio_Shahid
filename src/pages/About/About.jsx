import HeroImg from "@/assets/images/Shahid.jpg";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Designer, Creator, Innovator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="Md Shahid Ahamed"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                I'm Md Shahid Ahamed—a JavaScript developer who loves building
                clean, fast web apps and intuitive UIs. I focus on writing
                maintainable code and creating interfaces that are both
                responsive and a pleasure to use.
              </p>
              <p className="text-white">
                I care about making web development approachable and efficient.
                Right now I'm deepening my backend and full-stack skills so I can
                design and deliver end-to-end applications that are both
                reliable and a pleasure to use.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I believe in learning in public and building tools that
                    solve real problems. I'm always exploring modern JavaScript
                    and web technologies—and sharing what I learn with the
                    community.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Md Shahid Ahamed, Web Developer
                    </cite>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
