{
  const currencyOne = document.getElementById("currency1");
  const amountOne = document.getElementById("amount-1");
  const currencyTwo = document.getElementById("currency2");
  const amountTwo = document.getElementById("amount-2");


  function calculat() {
    const currency3 = currencyOne.value;
    const currency4 = currencyTwo.value;
    
    
    function convert(curr1,curr2, amntOne, amntTwo){
        fetch(`https://api.exchangerate-api.com/v4/latest/${curr1}`)
      .then((res) => res.json())
        .then((data) => {
        const currentRate = data.rates[curr2];
        amntTwo.value = (amntOne.value * currentRate).toFixed(2);
        });
    }

    if(document.getElementById('amount-1') === document.activeElement){
      convert(currency3,currency4,amountOne,amountTwo)
    }
    if(document.getElementById('amount-2') === document.activeElement){
      convert(currency4,currency3,amountTwo,amountOne)
    }
  }

  currencyOne.addEventListener("change", calculate);
  amountOne.addEventListener("input", calculate);
  currencyTwo.addEventListener("change", calculate);
  amountTwo.addEventListener("input", calculate);
  calculat();

}

// mobile
{
  {
    const currency1 = document.getElementById("currency-1");
    const amount1 = document.getElementById("amount1");
    const currency2 = document.getElementById("currency-2");
    const amount2 = document.getElementById("amount2");
  
  
    function calculate() {
      const currency4 = currency1.value;
      const currency5 = currency2.value;
      
      
      function convert(curr4,curr5, amnt1, amnt2){
          fetch(`https://api.exchangerate-api.com/v4/latest/${curr4}`)
        .then((res) => res.json())
          .then((data) => {
          const currentRate = data.rates[curr5];
          amnt2.value = (amnt1.value * currentRate).toFixed(2);
          });
      }
  
      if(document.getElementById('amount1') === document.activeElement){
        convert(currency4,currency5,amount1,amount2)
      }
      if(document.getElementById('amount2') === document.activeElement){
        convert(currency5,currency4,amount2,amount1)
      }
    }
  
    currency1.addEventListener("change", calculate);
    amount1.addEventListener("input", calculate);
    currency2.addEventListener("change", calculate);
    amount2.addEventListener("input", calculate);
    calculate();
  
  }
}