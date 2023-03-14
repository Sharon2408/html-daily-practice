class Product {
    constructor(ProductCode, ProductName, Stock, Price) {
        this.ProductCode = ProductCode;
        this.ProductName = ProductName;
        this.Stock = Stock;
        this.Price = Price;
    }
    

     display1() {
        console.log("BEFORE SALES")
        console.log("Product Code :" + this.ProductCode);
        console.log("Product Name :" + this.ProductName);
        console.log("Available Stock :" + this.Stock);
        console.log("Price :" + this.Price);

    }
    
}


class Activity extends Product {
    constructor(ProductName, Stock, Price, CustomerName, ProductCode, QuantitySold) {
        super(ProductCode, ProductName, Stock, Price);
        this.CustomerName = CustomerName;
        this.QuantitySold = QuantitySold;
    }

 display() {
      super.display1();
      console.log(" CustomerName :" +this.CustomerName );
      console.log(" QuantitySold :" + this.QuantitySold );
    }
    sales() {
        
        if (this.Stock == 0) {
            console.log("sorry we dont have the required");
        }
        else {
            var AvailableStock = this.Stock - this.QuantitySold;
            console.log("The Available Stock is "+AvailableStock);
            if (AvailableStock >= 0) {
                console.log("Required Quantity is" + this.QuantitySold + "Available");
                this.Stock = AvailableStock;
                var totalAmt = this.QuantitySold *  this.Price;
                console.log("The total Amount for the required Quantity   is :"+totalAmt);
            } else {
                console.log("There is no such quantity Available, available quantity is:"+this.Stock );
                var totalprice = this.Stock *  this.Price;
                console.log("The total price is :"+totalprice);
                this.Stock = 0;
            }
        }

    }
}
var a = new Activity('pen',100,10,'Lohith',101,40);
a.sales()
a.display()