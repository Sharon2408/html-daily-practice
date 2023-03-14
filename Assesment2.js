class Product {
    constructor(ProductCode, ProductName, Stock, Price) {
        this.ProductCode = ProductCode;
        this.ProductName = ProductName;
        this.Stock = Stock;
        this.Price = Price;

    }

    Display() {
        console.log("Before Sales");
        console.log("ProductCode : " + this.ProductCode);
        console.log("ProductName : " + this.ProductName);
        console.log("Stock Available : " + this.Stock);
        console.log("Price Per Quantity : " + this.Price);
    }
}


class Activity extends Product {
    constructor(ProductCode, ProductName, Stock, Price, CustomerName, QuantitySold) {
        super(ProductCode, ProductName, Stock, Price);
        this.CustomerName = CustomerName;
        this.QuantitySold = QuantitySold;
    }
    Print() {
        console.log("After Sales");
        console.log("ProductCode : " + this.ProductCode);
        console.log("ProductName : " + this.ProductName);
        console.log("Stock Available : " + this.Stock);
        console.log("Price Per Quantity : " + this.Price);
        console.log("CustomerName : " + this.CustomerName);
        console.log("Requested Quantity : " + this.QuantitySold);


    }
    Sales() {
        if (this.Stock == 0) {
            console.log("Product is Out Of Stock Sale Closed");
            console.log("Sorry For the Trouble");
        }
        else if (this.QuantitySold <= this.Stock) {
            var Remaining_Stock = this.Stock - this.QuantitySold;
            this.Stock = Remaining_Stock;
            var Total_Amount = this.QuantitySold * this.Price;
            console.log("The required quantity is : " + this.QuantitySold)
            console.log("The Total Amount for the required quantity is : " + Total_Amount)
            console.log("ThankYou Visit Again");
        }
        else if ( this.QuantitySold > this.Stock ) {
            console.log("The Available Last Stock in the store is" + this.Stock);
            var total_Amount = this.Price * this.Stock;
            console.log("The Total Amount for the Stock : " + total_Amount);
            this.Stock = 0;
            console.log("ThankYou Visit Again");
        }
        else {
console.log("ThankYou Visit Again");
        }


    }
}
var a = new Activity(101, "Pencil", 60, 10, "Sharon", 0);
a.Display();
a.Sales();
a.Print();