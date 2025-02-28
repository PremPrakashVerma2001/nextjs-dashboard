//module next/font optimizes fonts rendering.

import { Inter } from "next/font/google";
import { Lusitana } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

// export const lusitana = Lusitana({ weight: "400" });

export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});
