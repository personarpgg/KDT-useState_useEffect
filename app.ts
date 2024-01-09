// app.ts
function a() {
    let local = {
      a: true,
      b: function() {
        return !this.a;
      }
    };
  
    return [local.a, local.b()];
  }
  
  console.log(a());
  