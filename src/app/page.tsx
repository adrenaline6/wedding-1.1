import {
  About,
  Album,
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
      <Album />
      <Message />
      <Gift />
      <ThankYou />
      <FloatButton />
    </main>
  );
}
