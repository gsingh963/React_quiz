function Progress({ index, numQuestion, points, totalPoints, answer }) {
  return (
    <header className="progress">
      <progress
        max={numQuestion}
        value={index + Number(answer !== null)}
      ></progress>
      <p>
        Question <strong>{index + 1}</strong>/{numQuestion}
      </p>
      <p>
        <strong>
          {points}/{totalPoints}{" "}
        </strong>
      </p>
    </header>
  );
}

export default Progress;
