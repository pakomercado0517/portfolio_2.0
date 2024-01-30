import ProfileCard from "../components/ProfileCard";
import NavbarTwo from "../components/NavbarTwo";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <section className="">
      {/* profile section */}
      <div className="container grid grid-cols-12 md:gap-10 justify-between lg:mt-44">
        <aside className="col-span-12 lg:col-span-4 h-screen relative -top-4 md:top-0 lg:top-[185px]">
          <ProfileCard />
        </aside>
        <div className="col-span-12 lg:col-span-8">
          <NavbarTwo />
          <article className="sticky top-32 lg:static">
            <Outlet />
          </article>
        </div>
      </div>
    </section>
  );
}
