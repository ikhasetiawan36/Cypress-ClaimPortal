describe("NewRequestStaff", () => {
  it("NewRequestStaff_Passes", () => {
    cy.visit("https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/");
    cy.pause();
    cy.get("#Input_UsernameVal").type("charles.estevez");
    cy.get("#Input_PasswordVal").type("123456");
    cy.get(".btn").click();
    cy.pause();
    cy.get(".menu-icon").click();
    cy.get(".margin-left-m").should("be.visible").click();
    cy.get("#Input_SearchKeyword").click();
    cy.get("#Input_SearchKeyword").type("T003");
    cy.pause();
    cy.get("a > span").click();
    cy.pause();
    cy.get(".btn").click();
  });
});
