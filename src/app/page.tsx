import {
  About,
  Countdown,
  FloatButton,
  Gift,
  Header,
  Message,
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
      <Message />
      <Gift />
      <ThankYou />
      <FloatButton />
    </main>
  );
}
