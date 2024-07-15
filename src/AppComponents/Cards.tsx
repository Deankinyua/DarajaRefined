// ? React Icons Imports
import { AiFillAudio } from "react-icons/ai";
import { DiBrackets } from "react-icons/di";
import { IoAccessibilitySharp } from "react-icons/io5";

import { Card, CardContent, CardTitle } from "../components/ui/card";

const Cards = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 px-6 py-3">
      <Card className="my-3 border-solid centerizer w-11/12">
        <CardContent>
          <IoAccessibilitySharp
            fill="#1BE4B1"
            fontSize={"4.5rem"}
            className="centerizer mt-4"
          />
          <CardTitle className="bgcolorbg2 my-4 merriweather text-center">
            Experiential Marketing
          </CardTitle>

          <p className="font-medium">
            Transforming every interaction into an unforgettable experience, we
            ensure your brand leaves an indelible mark, not just an impression.
          </p>
        </CardContent>
      </Card>

      <Card className="my-3 border-solid centerizer w-11/12">
        <CardContent>
          <DiBrackets
            fill="#1BE4B1"
            fontSize={"4.5rem"}
            className="centerizer mt-4"
          />

          <CardTitle className="bgcolorbg2 my-4 merriweather text-center">
            Creative Services
          </CardTitle>

          <p className="font-medium">
            Our imagination knows no bounds. We breathe life into ideas,
            infusing them with vibrant energy to catapult your brand into a
            league of its own.
          </p>
        </CardContent>
      </Card>

      <Card className="my-3 border-solid centerizer w-11/12">
        <CardContent>
          <AiFillAudio
            fill="#1BE4B1"
            fontSize={"4.5rem"}
            className="centerizer mt-4"
          />
          <CardTitle className="bgcolorbg2 my-4 merriweather text-center">
            Digital Marketing
          </CardTitle>

          <p className="font-medium">
            We are here to turbocharge your online presence and revolutionize
            the way you connect with your audience.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Cards;
