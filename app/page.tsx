import { Box } from "@chakra-ui/react";
import { Footer } from "@/components/footer";

import { Nav_bar } from "@/components/nav-bar";
import { About } from "@/components/About";
import { Offers } from "@/components/Offers";

import { Hero } from "@/components/hero";

import { Club } from "@/components/Club";
import { Accordion2 } from "@/components/Accordion";
export default function Home() {
  return (
    <Box id="root" scrollBehavior="smooth">
      <main>
        <section>
          <Box
            mb="100px"
            p="3"
            bgImage="url(./images/andrew-peluso-8GP6I7C-Ynk-unsplash.jpg)"
            bgSize="cover"
            bgPos="right"
            bgRepeat="no-repeat"
            height="600px"
            objectFit="contain"
          >
            <Nav_bar />
            <hr />
            <Hero />
          </Box>
        </section>
        <section className="about">
          <About />
        </section>
        <section>
          <Offers />
        </section>
        <section>
          <Accordion2 />
        </section>
        <section>
          <Club />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </Box>
  );
}
