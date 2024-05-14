describe("NewRequestStaff", () => {
  it("NewRequestStaff_Passes", () => {
    cy.visit("https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/");
    cy.pause();
    cy.get("#Input_UsernameVal").type("angela.garcia");
    cy.get("#Input_PasswordVal").type("123456");
    cy.get(".btn").click();
    cy.pause();
    cy.get(".menu-icon").click();
    cy.get(".margin-left-m").should("be.visible").click();
    cy.get("#ListInvoicesPhone_FiltersButton > .btn").click();
    cy.get(".dropdown-display-content").click();
    cy.get(".scrollable-list > :nth-child(3) > span").click();
    cy.get("#ListInvoices_ApplyButton").click();
    cy.get(':nth-child(2) > [data-header="Invoice"] > a > span').click();
    cy.pause();
    cy.get(".btn").click({ multiple: true });
    cy.get("#Input_HolderName").type("Abdul Kodir");
    cy.get("#Input_CardNumber").type("31235066");
    cy.get("#Input_ExpMonth > .dropdown-display").click();
    cy.get(".scrollable-list > :nth-child(6)").click();
    cy.get("#Input_ExpYear > .dropdown-display").click();
    cy.get(".scrollable-list > :nth-child(2)").click();
    cy.get("#Input_CVV").type("0905");
    cy.get("#CreditCardForm_Btn").click();
  });
});
