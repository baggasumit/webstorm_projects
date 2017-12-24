/**
 * Created by sumit_bagga on 8/21/17.
 */
debugger;
function func1() {
  var var1 = 11;
  function func2() {
    var var2 = 22;
    console.log(var1, var2);
    function func3() {
      var var3 = 33;
      console.log(var1, var2, var3);
    }

    this.func3 = func3;
  }
  this.func2 = func2;
  console.log('insdie func', this.target);
}

console.log('win: ', this.target);
func1();
func2();
func3();