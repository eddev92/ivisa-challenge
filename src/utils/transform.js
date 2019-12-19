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

  static generateMonths() {
    let result = [];

    for (let i = 1; i < 13; i++ ) {
      result.push({month: `${i < 10 ? `0${i}` : i }`});
    }

    return result;
  }

  static generateYears() {
    let aux1 = [];
    let aux2 = [];
    let result = [];
    const currentYear = Number(new Date().getFullYear());
  
    for (let i = currentYear-5; i < currentYear; i++ ) {
      aux1.push({yearNum: i});
    }

    for (let i = currentYear; i < currentYear + 15; i++ ) {
      aux2.push({yearNum: i});
    }

    result =  aux1.concat(aux2);
    return result;
  }

}
