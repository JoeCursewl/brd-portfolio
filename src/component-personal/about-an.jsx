import { motion } from "framer-motion";
import { useState } from "react";

export function ABout() {
  const [copy2, setCopy2] = useState(false);
  const copyToClipboard2 = (text) => {
    navigator.clipboard.writeText(text);
    setCopy2(true);

    setTimeout(() => {
      setCopy2(false);
    }, 1000);
  };

  return (
    <motion.section
      animate={{ opacity: 1 }}
      initial={{ opacity: -100 }}
      transition={{ duration: 0.5 }}
      className="w-full flex justify-center items-center min-h-[100vh]"
    >
      <div className="w-[85%] flex justify-center items-center sm:w-[75%]">
        <div className="my-2 flex justify-start items-start flex-col w-full">
          <div className="flex justify-start items-center gap-2 w-full my-4 border-b py-2 border-solid border-b-[#ffc5c515]">
            <img
              className="w-6 rounded-[100%]"
              src="/cursewl_img.jpg"
              alt="Cursewl File Image"
            />
            <h3 className="text-[1.1rem] text-[#fff7f7]">About me</h3>
          </div>

          <div className="grid gap-4">
            <p>
              Hi there! 👋. As I said I'm{" "}
              <span className="spn-dvp">Anthony Zerpa</span>, a highly motivated{" "}
              <span className="spn-ant">Frontend & Backend</span> developer with
              a passion for developing new stuff. I bring 2 years of experience
              to the table, and I'm always eager to learn and grow. I'm
              particularly interested in Web development. In my free time, you
              might find me producing music and probably designing. Let's
              connect and discuss how I can contribute to your team!
            </p>
            <p>
              I reside in <span className="spn-dvp">Táchira, Venezuela</span>,
              and I'm 20 years old. I'm currently studying the college to become
              in a system engineer. My goal is being able to improve myself in
              this aspect everyday if I can, and{" "}
              <span className="spn-ant">try to do my best</span> as much as I
              can.
            </p>

            <p>
              In my <span className="spn-ant">free time</span>, I like to make
              beats and design everything that comes up to me in that moment. I
              enjoy creating new things and getting better everyday. I'm willing
              to <span className="spn-ant">keep learning</span> any technology
              if needed, that's my goal to keep{" "}
              <span className="spn-dvp">being useful.</span>
            </p>

            <div className="border-t border-solid border-[#ffc5c513] pt-4">
              <p className="text-[#ffa5a5] text-[1.1rem]">
                Contact information 👇🏻
              </p>
            </div>

            <div className="flex justify-start items-start gap-3 flex-col sm:flex-row sm:items-center">
              <div
                className={`${
                  copy2 === true ? "border-[#4eac5e]" : "border-[#4242427e]"
                } w-[200px] overflow-hidden text-ellipsis whitespace-nowrap bg-[#050505a2] px-4 py-2 rounded-[8px] flex justify-start items-center gap-2 border-solid border-[0.5px] transition-colors cursor-pointer stuff-ellipsis`}
                onClick={() => copyToClipboard2("zerpaanthony.wx@gmail.com")}
              >
                <p className="w-[200px] overflow-hidden text-ellipsis whitespace-nowrap">
                  {copy2 === true
                    ? "Text copied!"
                    : "zerpaanthony.wx@gmail.com"}
                </p>
                <img className="w-5" src="/svg-projects/arrow-img.svg" alt="" />
              </div>
              <a
                download={true}
                href={
                  "/files/Anthony Zerpa - Resume - Frontend & Backend Developer.pdf"
                }
                className="flex justify-center items-center card-info-ant px-2 py-1 text-[14px] text-[#dcadfc] rounded-[12px] border-solid border-[0.5px] border-[#dcadfc28] transition-colors hover:bg-[#1e1320]"
              >
                Download CV
              </a>

              <div className="flex justify-center items-center gap-2 md:flex-row">
                <a
                  href={"https://github.com/JoeCursewl"}
                  target={"_target"}
                  className="flex justify-center items-center card-info-ant px-2 py-1 text-[14px] text-[#dcadfc] rounded-[12px] border-solid border-[0.5px] border-[#dcadfc28] transition-colors hover:bg-[#1e1320]"
                >
                  <img
                    className="w-5 py-1"
                    src="/technologies/github-img.svg"
                    alt="Github SVG File"
                  />
                </a>

                <a
                  href={"https://www.linkedin.com/in/anthonycursewl/"}
                  target={"_target"}
                  className="flex justify-center items-center card-info-ant px-2 py-1 text-[14px] text-[#dcadfc] rounded-[12px] border-solid border-[0.5px] border-[#dcadfc28] transition-colors hover:bg-[#1e1320]"
                >
                  <img
                    className="w-5 py-1"
                    src="/technologies/linkedin-img.svg"
                    alt="Github SVG File"
                  />
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
