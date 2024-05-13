import AboutUs from "./(routes)/about/page";
import ContactUs from "./(routes)/contact/page";
import Gallery from "./(routes)/gallery/page";
import MeetTheTeam from "./(routes)/meet-the-team/page";
import WorkWithUs from "./(routes)/work-with-us/page";

export default function Home() {
  return (
    <>
      <AboutUs />
      <ContactUs />
      <Gallery />
      <MeetTheTeam />
      <WorkWithUs />
    </>
  );
}
