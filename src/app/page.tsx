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
  Video,
} from "@/components";

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <Countdown />
      <Timeline />
      <Album />
      {/* <Video /> */}
      <Message />
      <Gift />
      <ThankYou />
      <FloatButton />
    </main>
  );
}
