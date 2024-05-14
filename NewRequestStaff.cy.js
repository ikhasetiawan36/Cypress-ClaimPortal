describe("NewRequestStaff", () => {
  it("NewRequestStaff_Passes", () => {
    cy.visit("https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/");
    cy.pause();
    cy.get("#Input_UsernameVal").type("nancy.martin");
    cy.get("#Input_PasswordVal").type("123456");
    cy.get(".btn").click();
    cy.pause();
    cy.get(".menu-icon").click();
    cy.get(".margin-left-m").should("be.visible").click();
    cy.get("#ListInvoices_NewInvoice > .btn").click();
    cy.get("#Input_InvoiceNumber").type("T004");
    cy.get("#Input_PeriodStartDate").type("2024-02-14T10:30");
    cy.get("#Input_PeriodEndDate").type("2024-06-15T08:45");
    cy.get("#Input_Amount").type("9.000");
    cy.get(".btn").click();
  });
});
