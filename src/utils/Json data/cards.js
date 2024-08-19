import Nutritian from "../../assets/images/activity-images/Nutrition.svg";
import PhysicalActivity from "../../assets/images/activity-images/PhysicalActivity.svg";
import Sleep from "../../assets/images/activity-images/Sleep.svg";
import StressManagement from "../../assets/images/activity-images/Stress_Management.svg";
import SocialConnection from "../../assets/images/activity-images/SocialConnection.svg";
import SubstanceAbuse from "../../assets/images/activity-images/SubstanceAbuse.svg";

import heartRate from "../../assets/images/activity-images/HeartRate.svg";
import heartOrange from "../../assets/images/activity-images/heartOrange.svg";
import sleepIcon from "../../assets/images/activity-images/sleepIcon.svg";
import heartBlue from "../../assets/images/activity-images/heartBlue.svg";
import Timer from "../../assets/images/activity-images/Timer.svg";

export const Activities = [
  {
    img: Nutritian,
    img2: heartRate,
    activityType: "Nutrition",
    activityDescription:
      "Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness.",
    value: "121/80",
    unit: "mmHg",
  },
  {
    img: PhysicalActivity,
    img2: heartOrange,
    activityType: "Physical activity",
    activityDescription:
      "Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease.",
    value: "32",
    unit: "minutes",
  },
  {
    img: Sleep,
    img2: sleepIcon,
    activityType: "Restorative sleep",
    activityDescription:
      "Consistent, quality sleep is essential for cognitive function and physical health.",
    value: "8",
    unit: "hours",
  },
  {
    img: StressManagement,
    img2: heartBlue,
    activityType: "Stress management",
    activityDescription:
      "Effective stress management techniques are crucial for mental well-being and overall health.",
    value: "60",
    unit: "bpm",
  },
  {
    img: SocialConnection,
    img2: heartOrange,
    activityType: "Social connectiont",
    activityDescription:
      "Strong social connections are associated with a lower risk of many chronic diseases and enhanced mental health.",
    value: "Feeling",
    unit: "better",
  },
  {
    img: SubstanceAbuse,
    img2: Timer,
    activityType: "Substance abuse",
    activityDescription:
      "Avoiding tobacco, limiting alcohol use, and abstaining from harmful substances are vital for long-term health.",
    value: "62",
    unit: "days",
  },
];
