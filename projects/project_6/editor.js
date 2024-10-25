
const first = document.querySelector(".first");
const iframe = document.querySelector("iframe");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  var html = first.textContent;
  iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
});


first.addEventListener('keyup',()=>{
  var html = first.textContent;
  iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
})

first.addEventListener("paste", function(e) {
        e.preventDefault();
        var text = e.clipboardData.getData("text/plain");
        document.execCommand("insertText", false, text);
    });

    var myQuestions = [
      {
        question: "What is 10/2?",
        answers: {
          a: '3',
          b: '5',
          c: '115'
        },
        correctAnswer: 'b'
      },
      {
        question: "What is 30/3?",
        answers: {
          a: '3',
          b: '5',
          c: '10'
        },
        correctAnswer: 'c'
      }
    ];
