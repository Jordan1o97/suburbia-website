class Product {

    constructor(productType, price, description, image, mediumSizes, largeSizes, XLSizes, quanity) {
        this.productType = productType
        this.description = description
        this.price = price
        this.image = image
        this.mediumSizes = mediumSizes
        this.largeSizes = largeSizes
        this.XLSizes = XLSizes
        this.quanity = quanity
    }

    toString() {
        console.log("PRODUCT_TYPE: " + this.productType + ", \nDESCRIPTION: " + this.description + ", \nPRICE: " + this.price + ", \nIMAGE: " + this.image + ", \nMEDIUM_SIZES: " + this.mediumSizes + ", \nLARGE_SIZES: " + this.largeSizes + ", \nXL_SIZES: " + this.quanity + ", \nQUANITY");
    }

}