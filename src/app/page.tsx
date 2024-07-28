import {
  About,
  Countdown,
  Gift,
  Header,
  ThankYou,
  Timeline,
} from "@/components";

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <Countdown />
      <Timeline />
      <Gift />
      <ThankYou />
    </main>
  );
}
