function AppClock() {
  let date = new Date();
  // let currentDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

  let currentTime = date.toLocaleString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
  let newformat = currentTime.hours >= 12 ? 'PM' : 'AM';

  return (
    <h3 className="lead">
      This is the current time : {date.toLocaleDateString()} - {currentTime} {newformat}
    </h3>
  );
}
export default AppClock;
