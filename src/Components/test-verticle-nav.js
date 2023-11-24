export default function TestVerticleNav({
  selectedCategory,
  onCategoryChange,
}) {
  return (
    <>
      <div className="ver-nav">
        <div
          class="nav flex-column nav-pills"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <a
            id="v-pills-home-tab"
            data-toggle="pill"
            href="#v-pills-home"
            role="tab"
            aria-controls="v-pills-home"
            aria-selected="true"
            className={`nav-link ${selectedCategory == "all" ? "active" : ""}`}
            onClick={() => onCategoryChange("all")}
          >
            All
          </a>
          <a
            id="v-pills-profile-tab"
            data-toggle="pill"
            href="#v-pills-profile"
            role="tab"
            aria-controls="v-pills-profile"
            aria-selected="false"
            className={`nav-link ${selectedCategory == "game" ? "active" : ""}`}
            onClick={() => onCategoryChange("game")}
          >
            Game
          </a>
          <a
            className={`nav-link ${
              selectedCategory == "movie" ? "active" : ""
            }`}
            onClick={() => onCategoryChange("movie")}
            id="v-pills-messages-tab"
            data-toggle="pill"
            href="#v-pills-messages"
            role="tab"
            aria-controls="v-pills-messages"
            aria-selected="false"
          >
            Movies
          </a>
        </div>
      </div>
    </>
  );
}
