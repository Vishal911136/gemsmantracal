import React from "react";
import { Avatar, Card, Typography } from "@material-tailwind/react";


// const TABLE_HEAD = ["Gems", "Gems Name", "Finger to wear"];
 
const TABLE_ROWS = [
  {
    name: "Yellow Sapphire (पुखराज)",
    image: "https://gemsmantra.in/wp-content/plugins/plugin-astrologyCalculatorBloomx/gems/Pukhraj(Yellow%20sapphire).png",
    fingerName: `Index Finger (तर्जनी)`,
  },
  {
    name: "Cat's Eye (लहसुनिया)",
    image: "https://gemsmantra.in/wp-content/plugins/plugin-astrologyCalculatorBloomx/gems/CatEye.png",
    fingerName: "Middle Finger (मध्यमा)",
  },
  {
    name: "Blue Sapphire (नीलम)",
    image: "https://gemsmantra.in/wp-content/plugins/plugin-astrologyCalculatorBloomx/gems/Neelam.png",
    fingerName: "Middle Finger (मध्यमा)",
  },
  {
    name: "Diamond (हीरा)",
    image: "https://gemsmantra.in/wp-content/plugins/plugin-astrologyCalculatorBloomx/gems/daimond.png",
    fingerName: "Ring Finger (अनामिका)",
  },
  {
    name: "Hessonite (गोमेध)",
    image: "https://gemsmantra.in/wp-content/plugins/plugin-astrologyCalculatorBloomx/gems/Hessonite.png",
    fingerName: "Middle Finger (मध्यमा)",
  },
  {
    name: "Ruby (माणिक्य)",
    image: "https://gemsmantra.in/wp-content/plugins/plugin-astrologyCalculatorBloomx/gems/Ruby.png",
    fingerName: "Ring Finger (अनामिका)",
  },
  {
    name: "Red Coral (मूंगा)",
    image: "https://gemsmantra.in/wp-content/plugins/plugin-astrologyCalculatorBloomx/gems/Moonga.png",
    fingerName: "Ring Finger (अनामिका)",
  },
  {
    name: "Emerald (पन्ना)",
    image: "https://gemsmantra.in/wp-content/plugins/plugin-astrologyCalculatorBloomx/gems/Panna.png",
    fingerName: "Little Finger कनिष्ट (सबसे छोटी ऊँगली)",
  },
  {
    name: "Pearl (मोती)",
    image: "https://gemsmantra.in/wp-content/plugins/plugin-astrologyCalculatorBloomx/gems/Pearl.png",
    fingerName: "Little Finger कनिष्ट (सबसे छोटी ऊँगली)",
  }
  
];
export default function GemsTable() {
  return (
    <>
      <div className="mt-6 col-span-3 w-auto lg:col-span-1 sm:mt-6 mx-2 bg-white shadow-2xl text_color2 font-bold overflow-hidden">
        <h1
          className="text-[16px] text-[#813C01] font-bold text-center px-1 py-3 font-libra"
          style={{ background: "#fef8f3" }}
        >
          Which finger to wear Gemstones 
        </h1>
        <Card className=" w-full px-1">
          <table className="table-auto text-left">
            <thead>
              <tr>
                {/* {TABLE_HEAD.map((head) => (
                  <th key={head} className="min-w-20 border border-blue-gray-100 px-1 py-1">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="text-left font-semibold text-[#813C01] leading-none"
                    >
                      {head}
                    </Typography>
                  </th>
                ))} */}
                  <th className="min-w-20 border border-blue-gray-100 px-1 py-1">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="text-left font-semibold text-[#813C01] leading-none font-libra "
                    >
                      Gems
                    </Typography>
                  </th>
                  <th className="min-w-28 border border-blue-gray-100 px-1 py-1">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="text-left font-semibold text-[#813C01] leading-none font-libra"
                    >
                      Gems Name
                    </Typography>
                  </th>
                  <th className=" border border-blue-gray-100 px-1 py-1">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="text-left font-semibold text-[#813C01] leading-none font-libra"
                    >
                      Finger to wear
                    </Typography>
                  </th>
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(({ name, image, fingerName }, index) => {
                // const isLast = index === TABLE_ROWS.length - 1;
                const classes = "font-[700] p-2 border text-[#664421] border-blue-gray-50";

                return (
                  <tr key={name}>
                    <td className="px-2 text-center py-0 border border-blue-gray-50 font">
                      <Avatar
                        className="w-20 h-20"
                        src={image}
                        alt="image"
                        size="sm"
                      />
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal text_color font-libra"
                      >
                        {name}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal text_color font-libra"
                      >
                        {fingerName}
                      </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
      </div>
    </>
  );
}
