import NavbarButton from "./navbar-button";
import NavbarSettings from "./navbar-settings";
import SearchBar from "./search-bar";
import Menu from "./menu";

export default function Header() {
  return (
    <div className="w-full max-w-[1250px] h-10vh py-8 px-6 z-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="flex items-center text-4xl bayon uppercase tracking-widest">
            Coin
            <span className="text-accent pl-2">Camp</span>
          </h1>
          <Menu />
        </div>

        <div className="flex items-center space-x-6 ">
          <div className="w-[300px] lg:w-[400px] hidden md:block">
            <SearchBar />
          </div>
          <NavbarButton />
          <div className="hidden lg:block">
            <NavbarSettings />
          </div>
        </div>
      </div>
    </div>
  );
}
