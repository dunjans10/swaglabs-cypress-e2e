class Select {

  private select_product_sort_container:string = 'select.product_sort_container';
  private inventory_item:string = '.inventory_item'


  select(optionVal:string, title:string){
    cy.get(this.select_product_sort_container).as('value').select(optionVal)
    cy.get('@value').should('have.value', optionVal)
    cy.get(this.inventory_item).eq(0).should('contain', title)
  }

}

export const SelectPage = new Select()