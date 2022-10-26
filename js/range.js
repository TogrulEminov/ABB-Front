{
  const box = document.getElementById("box");
  const slider = document.getElementById("myinput")
  const min = slider.min
  const max = slider.max
  const value = slider.value

  slider.style.background = `linear-gradient(to right, #259aee 0%, #259aee ${(value - min) / (max - min) * 100}%, #DEE2E6 ${(value - min) / (max - min) * 100}%, #DEE2E6 100%)`

  slider.oninput = function () {
    this.style.background = `linear-gradient(to right, #259aee 0%, #259aee ${(this.value - this.min) / (this.max - this.min) * 100}%, #DEE2E6 ${(this.value - this.min) / (this.max - this.min) * 100}%, #DEE2E6 100%)`
    box.value = slider.value;
  };

}

{
  const box = document.getElementById("box2");
  const slider = document.getElementById("myinput-2")
  const min = slider.min
  const max = slider.max
  const value = slider.value

  slider.style.background = `linear-gradient(to right, #259aee 0%, #259aee ${(value - min) / (max - min) * 100}%, #DEE2E6 ${(value - min) / (max - min) * 100}%, #DEE2E6 100%)`

  slider.oninput = function () {
    box.value = slider.value;
    this.style.background = `linear-gradient(to right, #259aee 0%, #259aee ${(this.value - this.min) / (this.max - this.min) * 100}%, #DEE2E6 ${(this.value - this.min) / (this.max - this.min) * 100}%, #DEE2E6 100%)`
  };
}

{
  const box = document.getElementById("box3")
  const slider = document.getElementById("myinput-3")
  const min = slider.min
  const max = slider.max
  const value = slider.value

  slider.style.background = `linear-gradient(to right, #259aee 0%, #259aee ${(value - min) / (max - min) * 100}%, #DEE2E6 ${(value - min) / (max - min) * 100}%, #DEE2E6 100%)`
  slider.oninput = function () {
    box.value = slider.value;
    this.style.background = `linear-gradient(to right, #259aee 0%, #259aee ${(this.value - this.min) / (this.max - this.min) * 100}%, #DEE2E6 ${(this.value - this.min) / (this.max - this.min) * 100}%, #DEE2E6 100%)`
  };
}

{
  function getVal() {
    var money = document.getElementById('myinput').value
    var month = document.getElementById('myinput-2').value
    var percent = document.getElementById('myinput-3').value

    money = parseInt(money)
    month = parseInt(month)
    percent = parseInt(percent)
    var credit = ((money * ((percent / 100) / 12)) / (1 - Math.pow((1 + ((percent / 100) / 12)), (-1) * month))).toFixed(2);
    document.getElementById('monthlypayment').innerHTML = credit
    var total = (credit * month).toFixed(2)
    document.getElementById('totalpayment').innerHTML = total
  }
  getVal();
}