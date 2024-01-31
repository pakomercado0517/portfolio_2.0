import ProfileCard from "../components/ProfileCard";
import NavbarTwo from "../components/NavbarTwo";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <section className="">
      {/* profile section */}
      <div className="grid grid-cols-12 justify-between md:gap-10 lg:mt-28">
        <aside className="relative -top-4 col-span-12 h-screen sm:mb-20 md:top-0 md:mb-28 lg:top-[185px] lg:col-span-4 lg:mb-0">
          <ProfileCard />
        </aside>
        <div className="col-span-12 lg:col-span-7">
          <NavbarTwo />
          <article className="sticky top-32 lg:static">
            <Outlet />
          </article>
        </div>
      </div>
    </section>
  );
}
