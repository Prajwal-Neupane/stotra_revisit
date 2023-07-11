import React from "react";

const Header = () => {
  return (
    <div className="bg-orange-200">
      <div class="nav-section">
        <header>
          <nav class="place-items-center flex">
            <div>
              <a href="d" class="flex">
                <img class="logo" src="" alt="" />
                <span class="logo-name">Stotra Ratnavali</span>
              </a>
            </div>

            <div class="nav-links text-xl">
              <ul class="">
                <li>
                  <a href="d">Shiva Stotra</a>
                </li>
                <li>
                  <a href="d">Shakti Stotra</a>
                </li>
                <li>
                  <a href="d">Vishnu Stotra</a>
                </li>
                <li>
                  <a href="d">Krishna Stotra</a>
                </li>
                <li>
                  <div class="dropdown mt-6 style=">
                    <button class="text-lg">
                      Explore More
                      <i class="fa fa-caret-down"></i>
                    </button>

                    <div class="dropdown-content">
                      <a href="a">Blogs</a>
                      <a href="a">Link 2</a>
                      <a href="a">Link 3</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Header;
