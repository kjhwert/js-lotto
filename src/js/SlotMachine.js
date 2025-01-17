import { MESSAGES } from "./constants.js";
import Game from "./Game.js";

class SlotMachine {
  #game;

  constructor() {
    this.$purchaseForm = document.getElementById("purchase-form");
    this.$purchaseAmountInput = document.getElementById(
      "purchase-amount-input"
    );

    this.#game = new Game();
    this.#initEvents();
  }

  #initEvents() {
    this.$purchaseForm.addEventListener("submit", this.#onPurchase.bind(this));
  }

  #onPurchase(event) {
    event.preventDefault();

    const purchasePrice = this.$purchaseAmountInput.value;
    if (this.isUnavailablePurchasePrice(+purchasePrice)) {
      window.alert(MESSAGES.WRONG_PURCHASE_PRICE);
      return;
    }

    const purchaseAmount = this.calculateAmountPer(purchasePrice);
    this.#game.makeGames(purchaseAmount);
  }

  calculateAmountPer(purchasePrice) {
    return purchasePrice / 1000;
  }

  isUnavailablePurchasePrice(purchasePrice) {
    return purchasePrice === 0 || purchasePrice % 1000 !== 0;
  }
}

export default SlotMachine;
