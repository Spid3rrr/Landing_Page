import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  AdjustmentsIcon,
  LightningBoltIcon,
  DeviceMobileIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Taking your business to the next level",
  desc: "Our innovative technology solutions are designed to give you a competitive edge in today's fast-paced digital landscape.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Understand Your Customers",
      desc: "Easily analyze your customer needs to adapt to the market and provide your customers with personalized experiences that meet their unique needs.",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Make Data-Driven Decisions",
      desc: "Get real-time insights and predictive analytics that help you make informed decisions. Our platform uses powerful algorithms to turn data into actionable intelligence.",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "Stay Ahead of the Curve",
      desc: "Keep up with the latest technological advancements and stay ahead of the competition. Our team of experts is constantly innovating to bring you the best solutions on the market",
      icon: <CursorClickIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Welcome to a world of limitless possibilities",
  desc: "At 4A4B, we believe that technology should empower you to achieve your goals, not hold you back. That's why we've created a suite of cutting-edge products and services that bring together the latest advancements in AI, machine learning, and data analytics.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Boost Your Productivity",
      desc: "Say goodbye to manual processes and hello to lightning-fast results. Our technology automates repetitive tasks, freeing up your time to focus on what really matters.",
      icon: <LightningBoltIcon />,
    },
    {
      title: "Customize to Your Needs",
      desc: "Our technology is designed to be flexible and adaptable to your unique requirements. Whether you need a customized dashboard or specific integrations, we'll work with you to create a solution that fits your needs.",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "Always Connected",
      desc: "Stay connected and in control no matter where you are. Our technology enables you to access your data, insights, and tools from anywhere, at any time. Whether you're in the office, on the go, or working remotely, you'll have everything you need to get the job done. With 4A4B, you're always in the loop and always in control.",
      icon: <DeviceMobileIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
