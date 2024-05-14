describe("LoginTest", () => {
  it("LoginTest_Passes", () => {
    cy.visit("https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/");
    cy.pause();
    cy.get("#Input_UsernameVal").type("superadmin.company");
    cy.get("#Input_PasswordVal").type("123456");
    cy.get(".btn").click();
  });
});
