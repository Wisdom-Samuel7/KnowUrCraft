"use client";

import Lottie from "lottie-react";

export default function LottieIcon({ animation }: { animation: any }) {
  return <Lottie animationData={animation} loop autoplay />;
}
