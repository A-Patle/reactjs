function Random() {
  let randomNum = Math.floor(Math.random() * 100);
  return (
    <h1 style={{ backgroundColor: '#776691' }}>Random Number is {randomNum}</h1>
  );
}

export default Random;
