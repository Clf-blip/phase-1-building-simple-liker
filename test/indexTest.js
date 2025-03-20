describe("main.js", () => {
  before(function (done) {
    if (document.readyState === "complete") {
      done(); // If already loaded, immediately continue
    } else {
      document.addEventListener("DOMContentLoaded", () => done());
    }
  });

  it("contains a hidden modal", () => {
    let modal = document.getElementById("modal");
    console.log("Modal found in test:", modal);  // Debugging
    expect(modal).not.to.equal(null);
    expect(modal.classList.contains("hidden")).to.be.true;
  });
});
