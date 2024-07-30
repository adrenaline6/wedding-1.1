import {
  About,
  Album,
  Countdown,
  FloatButton,
  Gift,
  Header,
  Message,
  MusicPlayer,
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
      <MusicPlayer />
    </main>
  );
}
