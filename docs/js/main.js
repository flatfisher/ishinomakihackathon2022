let point = 0;

const quizAnswer1 = () => {
  const quizForm = document.getElementById("quiz1");
  const row = document.getElementById("rightOrWrong1");
  if (quizForm.answer1.value === "b") {
    row.insertAdjacentText("beforeend", "⭕️");
    point++;
  } else {
    row.insertAdjacentText("beforeend", "❌（石ノ森萬画館）");
  }

  Array.from(quizForm.answer1).forEach((value) => {
    value.disabled = true;
  });
  quizForm.submit.disabled = true;
};

const quizAnswer2 = () => {
  const quizForm = document.getElementById("quiz2");
  const row = document.getElementById("rightOrWrong2");
  if (quizForm.answer2.value === "2文字") {
    row.insertAdjacentText("beforeend", "⭕️");
    point++;
  } else if (quizForm.answer2.value === "２文字") {
    row.insertAdjacentText("beforeend", "⭕️");
    point++;
  } else if (quizForm.answer2.value === "二文字") {
    row.insertAdjacentText("beforeend", "⭕️");
    point++;
  } else if (quizForm.answer2.value === "2もじ") {
    row.insertAdjacentText("beforeend", "⭕️");
    point++;
  } else if (quizForm.answer2.value === "２もじ") {
    row.insertAdjacentText("beforeend", "⭕️");
    point++;
  } else if (quizForm.answer2.value === "二もじ") {
    row.insertAdjacentText("beforeend", "⭕️");
    point++;
  } else if (quizForm.answer2.value === "にもじ") {
    row.insertAdjacentText("beforeend", "⭕️");
    point++;
  } else {
    row.insertAdjacentText("beforeend", "❌（「いま」は「2文字」）");
  }

  quizForm.answer2.disabled = true;
  quizForm.submit.disabled = true;
};

const quizAnswer3 = () => {
  const quizForm = document.getElementById("quiz3");
  const row = document.getElementById("rightOrWrong3");

  if (quizForm.answer3.value === "c") {
    row.insertAdjacentText("beforeend", "⭕️");
    point++;
  } else {
    row.insertAdjacentText("beforeend", "❌（真珠の耳飾りの少女）");
  }

  Array.from(quizForm.answer3).forEach((value) => {
    value.disabled = true;
  });
  quizForm.submit.disabled = true;
};

const quizAnswer4 = () => {
  const quizForm = document.getElementById("quiz4");
  const row = document.getElementById("rightOrWrong4");

  if (quizForm.answer4.value === "3") {
    row.insertAdjacentText("beforeend", "⭕️");
    point++;
  } else if (quizForm.answer4.value === "4") {
    row.insertAdjacentText("beforeend", "⭕️");
    point++;
  } else {
    row.insertAdjacentText("beforeend", "❌（3または4万円）");
  }

  Array.from(quizForm.answer4).forEach((value) => {
    value.disabled = true;
  });
  quizForm.submit.disabled = true;
};

const quizAnswer5 = () => {
  const quizForm = document.getElementById("quiz5");
  const row = document.getElementById("rightOrWrong5");

  if (quizForm.answer5.value === "b") {
    row.insertAdjacentText("beforeend", "⭕️");
    point++;
  } else {
    row.insertAdjacentText("beforeend", "❌（ファミリーマート）");
  }

  Array.from(quizForm.answer5).forEach((value) => {
    value.disabled = true;
  });
  quizForm.submit.disabled = true;
};

const quizAnswer6 = () => {
  const quizForm = document.getElementById("quiz6");
  const row = document.getElementById("rightOrWrong6");

  if (quizForm.answer6.value === "石巻野球場") {
    row.insertAdjacentText("beforeend", "⭕️");
    point++;
  } else if (quizForm.answer6.value === "水押球場") {
    row.insertAdjacentText("beforeend", "⭕️");
    point++;
  } else {
    row.insertAdjacentText("beforeend", "❌（石巻野球場 または 水押球場）");
  }

  quizForm.answer6.disabled = true;
  quizForm.submit.disabled = true;
};

const quizAnswer7 = () => {
  const quizForm = document.getElementById("quiz7");
  const row = document.getElementById("rightOrWrong7");

  if (quizForm.answer7.value === "ばくはつ") {
    row.insertAdjacentText("beforeend", "⭕️");
    point++;
  } else {
    row.insertAdjacentText("beforeend", "❌（ばくはつ）");
  }

  if (point === 0) {
    row.insertAdjacentHTML(
      "beforeend",
      `<br /><br />全問不正解… もういちどやる？`
    );
  } else if (point === 7) {
    row.insertAdjacentHTML("beforeend", `<br /><br />全問正解！！！`);
  } else if (point >= 1) {
    row.insertAdjacentHTML(
      "beforeend",
      `<br /><br />${point}問正解　まだいける！！！`
    );
  }
};
