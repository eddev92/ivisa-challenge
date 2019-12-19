export class TranformData {

  static getTypeCard(type) {
    let result = '';

    if (type) {
      switch (type) {
        case 1: return result = 'Visa';
        case 2: return result = 'Mastercard';
        case 3: return result = 'Discover';
        case 4: return result = 'American Express';
        default: result = '';
      }
    }
    return result;
  }

  static getLogoCard(type) {
    let result = '';

    if (type) {
      switch (type) {
        case 1: return result = "images/logo-visa.png";
        case 2: return result = "images/logo-mastercard.png";
        case 3: return result = "images/logo-discover.png";
        case 4: return result = "images/logo-american.png";
        default: result = '';
      }
    }
    return result;
  }
}
