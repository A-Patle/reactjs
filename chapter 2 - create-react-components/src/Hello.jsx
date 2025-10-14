function Hello() {
  // let myName = 'Akash';
  let fullName = function () {
    return 'Akash Patle';
  }

  return <h1>Hello from Hello component and my name is {fullName()}</h1>;
}

export default Hello;
