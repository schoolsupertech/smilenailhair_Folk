"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export default function Newsletter() {
  return (
    <div className="relative">
      <div
        className="mt-48 rounded-lg"
        style={{ backgroundColor: "d7c1a7" }}
      >
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-12 xl:gap-x-8">
          {/* COLUMN-1 */}
          <div className="col-span-7">
            <div className="m-10 lg:ml-32 lg:mt-20 lg:mb-20">
              <Fade
                direction={"up"}
                delay={400}
                cascade
                damping={1e-1}
                triggerOnce={true}
              >
                <h3 className="text-lg font-normal mb-3 ls-51">
                  {" "}
                  NEWSLETTER{" "}
                </h3>
              </Fade>
              <Fade
                direction={"up"}
                delay={800}
                cascade
                damping={1e-1}
                triggerOnce={true}
              >
                <h3 className="text-3xl md:text-5xl font-semibold mb-8">
                  Subscribe our <br /> newsletter.
                </h3>
              </Fade>

              <div>
                <Fade
                  direction={"up"}
                  delay={1200}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <div className="relative  focus-within:text-black flex flex-row-reverse shadow-fi rounded-full">
                    <input
                      type="Email address"
                      name="q"
                      className="py-6 sm:py-8 text-sm w-full text-black bg-gray-900 rounded-full pl-4 par-87 focus:outline-none focus:text-black"
                      placeholder="@ enter your email-address"
                      autoComplete="off"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                      <button
                        type="submit"
                        className="p-1 focus:outline-none focus:shadow-outline"
                      >
                        <Image
                          src="/assets/Newsletter/arrow.svg"
                          alt="inputicon"
                          width={57}
                          height={71}
                        />
                      </button>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>

          {/* COLUMN-2 */}
          <div className="col-span-5 relative hidden md:block">
            <div>
              <Image
                src="/assets/Newsletter/gallary7.jpg"
                alt="soup-image"
                width={626}
                height={602}
                className="-mt-24"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
